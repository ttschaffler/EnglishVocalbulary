// ===== Vocab Champion - Quiz Engine =====

(function () {
  'use strict';

  // --- State ---
  let selectedSections = new Set();
  let selectedSubsections = new Set();
  let filteredEntries = [];
  let quizQuestions = [];
  let currentIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let streak = 0;
  let bestStreak = 0;
  let mistakes = [];
  let answered = false;

  // --- DOM refs ---
  const $ = (id) => document.getElementById(id);

  const screenStart = $('screen-start');
  const screenQuiz = $('screen-quiz');
  const screenResults = $('screen-results');

  const sectionSelector = $('section-selector');
  const subsectionArea = $('subsection-area');
  const subsectionChips = $('subsection-chips');
  const pageFilterArea = $('page-filter-area');
  const pageFrom = $('page-from');
  const pageTo = $('page-to');
  const btnApplyPages = $('btn-apply-pages');
  const questionCountSelect = $('question-count');
  const quizModeSelect = $('quiz-mode');
  const vocabCount = $('vocab-count');
  const btnStart = $('btn-start');

  const progressBar = $('progress-bar');
  const progressText = $('progress-text');
  const correctCountEl = $('correct-count');
  const streakCountEl = $('streak-count');
  const wrongCountEl = $('wrong-count');
  const quizCard = $('quiz-card');
  const directionBadge = $('direction-badge');
  const questionWord = $('question-word');
  const verbFormHint = $('verb-form-hint');
  const answerInput = $('answer-input');
  const btnCheck = $('btn-check');
  const feedback = $('feedback');
  const btnNext = $('btn-next');

  const resultsTitle = $('results-title');
  const resultsStars = $('results-stars');
  const scoreNumber = $('score-number');
  const resultsCorrect = $('results-correct');
  const resultsWrong = $('results-wrong');
  const resultsStreak = $('results-streak');
  const mistakesSection = $('mistakes-section');
  const mistakesList = $('mistakes-list');
  const btnRetry = $('btn-retry');
  const btnHome = $('btn-home');

  // Encouraging messages for correct answers
  const CORRECT_MESSAGES = [
    "Awesome!", "Nailed it!", "Perfect!", "You rock!",
    "Brilliant!", "Super!", "Fantastic!", "Well done!",
    "Great job!", "Amazing!", "Spot on!", "Yes!"
  ];

  const CLOSE_MESSAGES = [
    "Almost! Close enough for German spelling!",
    "Tiny typo, but we'll count it for German!",
    "Nearly perfect! Good enough!",
    "So close! That counts!"
  ];

  const WRONG_MESSAGES = [
    "Not quite!", "Oops!", "Keep trying!",
    "Don't worry, you'll get it next time!",
    "That's a tricky one!"
  ];

  const RESULT_TITLES = {
    perfect: ["PERFECT SCORE!", "You're a Vocab Master!", "Flawless Victory!"],
    great: ["Awesome job!", "Super impressive!", "Nearly perfect!"],
    good: ["Well done!", "Good work!", "Nice effort!"],
    ok: ["Not bad!", "Keep practicing!", "You're getting there!"],
    low: ["Don't give up!", "Practice makes perfect!", "Try again, you can do it!"]
  };

  // ===== INITIALIZATION =====
  function init() {
    renderSections();
    bindEvents();
  }

  function renderSections() {
    sectionSelector.innerHTML = '';
    VOCABULARY_DATA.sections.forEach((section) => {
      const totalEntries = section.subsections.reduce((sum, sub) => sum + sub.entries.length, 0);
      const card = document.createElement('div');
      card.className = 'section-card';
      card.dataset.sectionId = section.id;
      card.innerHTML = `
        <span class="section-icon">${section.icon}</span>
        <div class="section-info">
          <div class="section-name">${section.title}</div>
          <div class="section-count">${totalEntries} words</div>
        </div>
        <div class="section-check"></div>
      `;
      card.addEventListener('click', () => toggleSection(section.id));
      sectionSelector.appendChild(card);
    });
  }

  function bindEvents() {
    btnApplyPages.addEventListener('click', applyPageFilter);
    btnStart.addEventListener('click', startQuiz);
    btnCheck.addEventListener('click', checkAnswer);
    btnNext.addEventListener('click', nextQuestion);
    btnRetry.addEventListener('click', retryQuiz);
    btnHome.addEventListener('click', goHome);

    answerInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (answered) {
          nextQuestion();
        } else {
          checkAnswer();
        }
      }
    });
  }

  // ===== SECTION / SUBSECTION SELECTION =====
  function toggleSection(sectionId) {
    if (selectedSections.has(sectionId)) {
      selectedSections.delete(sectionId);
    } else {
      selectedSections.add(sectionId);
    }

    // Update visual
    document.querySelectorAll('.section-card').forEach((card) => {
      if (selectedSections.has(card.dataset.sectionId)) {
        card.classList.add('selected');
        card.querySelector('.section-check').textContent = '\u2713';
      } else {
        card.classList.remove('selected');
        card.querySelector('.section-check').textContent = '';
      }
    });

    // Reset subsection selection
    selectedSubsections.clear();
    renderSubsections();
    updateVocabCount();
  }

  function renderSubsections() {
    if (selectedSections.size === 0) {
      subsectionArea.classList.add('hidden');
      pageFilterArea.classList.add('hidden');
      return;
    }

    subsectionArea.classList.remove('hidden');
    pageFilterArea.classList.remove('hidden');
    subsectionChips.innerHTML = '';

    // Select-all chip
    const allChip = document.createElement('span');
    allChip.className = 'chip selected';
    allChip.textContent = 'All';
    allChip.addEventListener('click', () => {
      selectedSubsections.clear();
      renderSubsections();
      updateVocabCount();
    });
    subsectionChips.appendChild(allChip);

    VOCABULARY_DATA.sections
      .filter((s) => selectedSections.has(s.id))
      .forEach((section) => {
        section.subsections.forEach((sub) => {
          const chip = document.createElement('span');
          chip.className = 'chip' + (selectedSubsections.has(sub.id) ? ' selected' : '');
          chip.innerHTML = `${sub.title} <span class="chip-count">(${sub.entries.length})</span>`;
          chip.addEventListener('click', () => {
            if (selectedSubsections.has(sub.id)) {
              selectedSubsections.delete(sub.id);
            } else {
              selectedSubsections.add(sub.id);
            }
            renderSubsections();
            updateVocabCount();
          });
          subsectionChips.appendChild(chip);
        });
      });

    // Update "All" chip visual: unselected if specific subsections chosen
    if (selectedSubsections.size > 0) {
      allChip.classList.remove('selected');
    }
  }

  function applyPageFilter() {
    const from = parseInt(pageFrom.value) || 0;
    const to = parseInt(pageTo.value) || 9999;

    // Select all sections that have pages in range
    selectedSections.clear();
    selectedSubsections.clear();

    VOCABULARY_DATA.sections.forEach((section) => {
      section.subsections.forEach((sub) => {
        const hasPages = sub.entries.some((e) => e.page >= from && e.page <= to);
        if (hasPages) {
          selectedSections.add(section.id);
          selectedSubsections.add(sub.id);
        }
      });
    });

    // Update visuals
    document.querySelectorAll('.section-card').forEach((card) => {
      if (selectedSections.has(card.dataset.sectionId)) {
        card.classList.add('selected');
        card.querySelector('.section-check').textContent = '\u2713';
      } else {
        card.classList.remove('selected');
        card.querySelector('.section-check').textContent = '';
      }
    });

    renderSubsections();
    updateVocabCount();
  }

  function getFilteredEntries() {
    const entries = [];
    const from = parseInt(pageFrom.value) || 0;
    const to = parseInt(pageTo.value) || 9999;
    const hasPageFilter = pageFrom.value || pageTo.value;

    VOCABULARY_DATA.sections
      .filter((s) => selectedSections.has(s.id))
      .forEach((section) => {
        section.subsections
          .filter((sub) => selectedSubsections.size === 0 || selectedSubsections.has(sub.id))
          .forEach((sub) => {
            sub.entries.forEach((entry) => {
              if (!hasPageFilter || (entry.page >= from && entry.page <= to)) {
                entries.push({ ...entry, sectionId: section.id, subsectionId: sub.id });
              }
            });
          });
      });

    return entries;
  }

  function updateVocabCount() {
    filteredEntries = getFilteredEntries();
    const count = filteredEntries.length;

    if (count === 0) {
      vocabCount.textContent = 'Select a section to start!';
      btnStart.disabled = true;
    } else {
      vocabCount.textContent = `${count} words ready to practice`;
      btnStart.disabled = false;
    }
  }

  // ===== QUIZ LOGIC =====
  function startQuiz() {
    filteredEntries = getFilteredEntries();
    if (filteredEntries.length === 0) return;

    const mode = quizModeSelect.value;
    let countStr = questionCountSelect.value;
    let count = countStr === 'all' ? filteredEntries.length : parseInt(countStr);
    count = Math.min(count, filteredEntries.length);

    // Shuffle entries
    const shuffled = shuffleArray([...filteredEntries]);
    const selected = shuffled.slice(0, count);

    // Build questions
    quizQuestions = selected.map((entry) => buildQuestion(entry, mode));

    // Shuffle questions again
    quizQuestions = shuffleArray(quizQuestions);

    // Reset state
    currentIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    streak = 0;
    bestStreak = 0;
    mistakes = [];
    answered = false;

    showScreen('quiz');
    showQuestion();
  }

  function buildQuestion(entry, mode) {
    // For verb-forms mode, only works with irregular verbs
    if (mode === 'verb-forms' && entry.simplePast) {
      const formTypes = ['simple-past', 'past-participle'];
      const formType = formTypes[Math.floor(Math.random() * formTypes.length)];
      return {
        entry,
        type: 'verb-form',
        formType,
        question: entry.english,
        correctAnswers: formType === 'simple-past'
          ? splitAlternatives(entry.simplePast)
          : splitAlternatives(entry.pastParticiple),
        direction: 'verb-form',
        isGermanAnswer: false
      };
    }

    // Determine direction
    let direction;
    if (mode === 'en-to-de') {
      direction = 'en-to-de';
    } else if (mode === 'de-to-en') {
      direction = 'de-to-en';
    } else {
      // Mix: random direction, with some verb form questions mixed in
      if (entry.simplePast && Math.random() < 0.3) {
        const formTypes = ['simple-past', 'past-participle'];
        const formType = formTypes[Math.floor(Math.random() * formTypes.length)];
        return {
          entry,
          type: 'verb-form',
          formType,
          question: entry.english,
          correctAnswers: formType === 'simple-past'
            ? splitAlternatives(entry.simplePast)
            : splitAlternatives(entry.pastParticiple),
          direction: 'verb-form',
          isGermanAnswer: false
        };
      }
      direction = Math.random() < 0.5 ? 'en-to-de' : 'de-to-en';
    }

    if (direction === 'en-to-de') {
      return {
        entry,
        type: 'translate',
        question: entry.english,
        correctAnswers: splitAlternatives(entry.german),
        direction: 'en-to-de',
        isGermanAnswer: true
      };
    } else {
      // Pick one of the German alternatives as the question
      const germanAlts = splitAlternatives(entry.german);
      const questionGerman = germanAlts[Math.floor(Math.random() * germanAlts.length)];
      return {
        entry,
        type: 'translate',
        question: questionGerman,
        correctAnswers: splitAlternatives(entry.english),
        direction: 'de-to-en',
        isGermanAnswer: false
      };
    }
  }

  function showQuestion() {
    const q = quizQuestions[currentIndex];
    answered = false;

    // Update progress
    const pct = ((currentIndex) / quizQuestions.length) * 100;
    progressBar.style.width = pct + '%';
    progressText.textContent = `${currentIndex + 1} / ${quizQuestions.length}`;

    // Update stats
    correctCountEl.textContent = correctCount;
    streakCountEl.textContent = streak;
    wrongCountEl.textContent = wrongCount;

    // Direction badge
    if (q.direction === 'en-to-de') {
      directionBadge.innerHTML = 'EN &rarr; DE';
      directionBadge.style.background = '#F5F3FF';
      directionBadge.style.color = '#6C5CE7';
    } else if (q.direction === 'de-to-en') {
      directionBadge.innerHTML = 'DE &rarr; EN';
      directionBadge.style.background = '#E8FFF9';
      directionBadge.style.color = '#00B894';
    } else {
      directionBadge.innerHTML = 'Verb Forms';
      directionBadge.style.background = '#FFF3E0';
      directionBadge.style.color = '#E17055';
    }

    // Question
    questionWord.textContent = q.question;

    // Verb form hint
    if (q.type === 'verb-form') {
      verbFormHint.textContent = q.formType === 'simple-past'
        ? 'What is the simple past?'
        : 'What is the past participle?';
    } else {
      verbFormHint.textContent = '';
    }

    // Reset input & feedback
    answerInput.value = '';
    answerInput.className = 'answer-input';
    answerInput.disabled = false;
    feedback.innerHTML = '';
    btnCheck.classList.remove('hidden');
    btnNext.classList.add('hidden');

    answerInput.focus();
  }

  function checkAnswer() {
    if (answered) return;

    const q = quizQuestions[currentIndex];
    const userAnswer = answerInput.value.trim();

    if (!userAnswer) {
      answerInput.focus();
      return;
    }

    answered = true;
    answerInput.disabled = true;
    btnCheck.classList.add('hidden');
    btnNext.classList.remove('hidden');

    const result = evaluateAnswer(userAnswer, q.correctAnswers, q.isGermanAnswer);

    if (result === 'correct') {
      handleCorrect(q);
    } else if (result === 'close') {
      handleClose(q, userAnswer);
    } else {
      handleWrong(q, userAnswer);
    }

    // Update stats display
    correctCountEl.textContent = correctCount;
    streakCountEl.textContent = streak;
    wrongCountEl.textContent = wrongCount;
  }

  function handleCorrect(q) {
    correctCount++;
    streak++;
    bestStreak = Math.max(bestStreak, streak);

    answerInput.className = 'answer-input correct';
    quizCard.classList.add('bounce');
    setTimeout(() => quizCard.classList.remove('bounce'), 300);

    const msg = randomItem(CORRECT_MESSAGES);
    feedback.innerHTML = `<div class="feedback-correct">${msg}</div>`;
  }

  function handleClose(q, userAnswer) {
    // Close enough for German: count as correct
    correctCount++;
    streak++;
    bestStreak = Math.max(bestStreak, streak);

    answerInput.className = 'answer-input close';

    const msg = randomItem(CLOSE_MESSAGES);
    const correctStr = q.correctAnswers[0];
    feedback.innerHTML = `
      <div class="feedback-close">${msg}</div>
      <div class="feedback-answer">Correct spelling: <strong>${correctStr}</strong></div>
    `;
  }

  function handleWrong(q, userAnswer) {
    wrongCount++;
    streak = 0;

    answerInput.className = 'answer-input wrong';
    quizCard.classList.add('shake');
    setTimeout(() => quizCard.classList.remove('shake'), 400);

    const msg = randomItem(WRONG_MESSAGES);
    const correctStr = q.correctAnswers.join(' / ');
    feedback.innerHTML = `
      <div class="feedback-wrong">${msg}</div>
      <div class="feedback-answer">Correct answer: <strong>${correctStr}</strong></div>
    `;

    mistakes.push({
      question: q.question,
      direction: q.direction,
      formType: q.formType || null,
      userAnswer,
      correctAnswer: correctStr
    });
  }

  function nextQuestion() {
    currentIndex++;
    if (currentIndex >= quizQuestions.length) {
      showResults();
    } else {
      showQuestion();
    }
  }

  // ===== ANSWER EVALUATION =====
  function evaluateAnswer(userAnswer, correctAnswers, isGermanAnswer) {
    const normalizedUser = normalize(userAnswer);

    for (const correct of correctAnswers) {
      const normalizedCorrect = normalize(correct);

      // Exact match
      if (normalizedUser === normalizedCorrect) return 'correct';
    }

    // For German answers: allow 1 character difference (Levenshtein distance <= 1)
    if (isGermanAnswer) {
      for (const correct of correctAnswers) {
        const normalizedCorrect = normalize(correct);
        const dist = levenshteinDistance(normalizedUser, normalizedCorrect);
        if (dist <= 1 && normalizedUser.length >= 2) return 'close';
      }
    }

    // For English answers: still allow exact match only (stricter)
    // But allow common ue->ü, ae->ä, oe->ö, ss->ß in German input
    if (isGermanAnswer) {
      const expandedUser = expandUmlauts(normalizedUser);
      for (const correct of correctAnswers) {
        const normalizedCorrect = normalize(correct);
        if (expandedUser === normalizedCorrect) return 'correct';
        const expandedCorrect = expandUmlauts(normalizedCorrect);
        if (normalizedUser === expandedCorrect) return 'correct';
        if (expandedUser === expandedCorrect) return 'correct';
      }
    }

    return 'wrong';
  }

  function normalize(str) {
    return str
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[()]/g, '')
      .trim();
  }

  function expandUmlauts(str) {
    return str
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss');
  }

  function splitAlternatives(str) {
    // Split on commas, but not within parentheses
    // "zerbrechen, kaputt machen" -> ["zerbrechen", "kaputt machen"]
    // "burnt/burned" -> ["burnt", "burned", "burnt/burned"]
    const results = [];

    // First split by comma
    const commaParts = str.split(',').map((s) => s.trim()).filter(Boolean);

    commaParts.forEach((part) => {
      results.push(part);
      // Also split by "/" for alternative forms
      if (part.includes('/')) {
        part.split('/').forEach((sub) => {
          const trimmed = sub.trim();
          if (trimmed) results.push(trimmed);
        });
      }
    });

    return [...new Set(results)];
  }

  function levenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }

    return matrix[b.length][a.length];
  }

  // ===== RESULTS =====
  function showResults() {
    showScreen('results');

    const total = quizQuestions.length;
    const pct = Math.round((correctCount / total) * 100);

    // Title
    let titlePool;
    if (pct === 100) titlePool = RESULT_TITLES.perfect;
    else if (pct >= 80) titlePool = RESULT_TITLES.great;
    else if (pct >= 60) titlePool = RESULT_TITLES.good;
    else if (pct >= 40) titlePool = RESULT_TITLES.ok;
    else titlePool = RESULT_TITLES.low;
    resultsTitle.textContent = randomItem(titlePool);

    // Stars (out of 5)
    const starCount = Math.ceil(pct / 20);
    resultsStars.textContent = '\u2B50'.repeat(starCount) + '\u2606'.repeat(5 - starCount);

    // Animate score
    animateNumber(scoreNumber, 0, pct, 800);

    resultsCorrect.textContent = correctCount + ' / ' + total;
    resultsWrong.textContent = wrongCount + ' / ' + total;
    resultsStreak.textContent = bestStreak;

    // Mistakes
    if (mistakes.length > 0) {
      mistakesSection.classList.remove('hidden');
      mistakesList.innerHTML = '';
      mistakes.forEach((m) => {
        const dir = m.direction === 'en-to-de' ? 'EN\u2192DE'
          : m.direction === 'de-to-en' ? 'DE\u2192EN' : 'Verb Form';
        const formInfo = m.formType
          ? ` (${m.formType === 'simple-past' ? 'Simple Past' : 'Past Participle'})`
          : '';
        const item = document.createElement('div');
        item.className = 'mistake-item';
        item.innerHTML = `
          <div class="mistake-question">${dir}${formInfo}: ${m.question}</div>
          <div class="mistake-your-answer">Your answer: ${m.userAnswer}</div>
          <div class="mistake-correct-answer">Correct: ${m.correctAnswer}</div>
        `;
        mistakesList.appendChild(item);
      });
    } else {
      mistakesSection.classList.add('hidden');
    }
  }

  function retryQuiz() {
    // Retry with same settings, just reshuffle
    currentIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    streak = 0;
    bestStreak = 0;
    mistakes = [];
    answered = false;

    quizQuestions = shuffleArray(quizQuestions);

    showScreen('quiz');
    showQuestion();
  }

  function goHome() {
    showScreen('start');
  }

  // ===== UTILITIES =====
  function showScreen(name) {
    screenStart.classList.remove('active');
    screenQuiz.classList.remove('active');
    screenResults.classList.remove('active');

    if (name === 'start') screenStart.classList.add('active');
    else if (name === 'quiz') screenQuiz.classList.add('active');
    else if (name === 'results') screenResults.classList.add('active');
  }

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function animateNumber(el, from, to, duration) {
    const start = performance.now();
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(from + (to - from) * easeOut(progress));
      el.textContent = value;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  // --- Boot ---
  init();
})();
