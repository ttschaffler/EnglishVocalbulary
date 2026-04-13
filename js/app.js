// ===== Vocab Champion - Quiz Engine =====

(function () {
  'use strict';

  // --- State ---
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

  // Verb form quiz elements
  const answerAreaSingle = $('answer-area-single');
  const answerAreaVerb = $('answer-area-verb');
  const verbInput1 = $('verb-input-1');
  const verbInput2 = $('verb-input-2');
  const verbLabel1 = $('verb-label-1');
  const verbLabel2 = $('verb-label-2');
  const btnCheckVerb = $('btn-check-verb');

  // Encouraging messages
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
    renderSectionTree();
    bindEvents();
    updateVocabCount();
  }

  // Render a full tree: every section header + every subsection as a checkbox row
  function renderSectionTree() {
    sectionSelector.innerHTML = '';

    VOCABULARY_DATA.sections.forEach((section) => {
      const totalEntries = section.subsections.reduce((sum, sub) => sum + sub.entries.length, 0);

      // --- Section header (acts as select-all toggle) ---
      const header = document.createElement('div');
      header.className = 'section-header';
      header.dataset.sectionId = section.id;
      header.innerHTML =
        '<span class="section-icon">' + section.icon + '</span>' +
        '<div class="section-info">' +
          '<div class="section-name">' + section.title + '</div>' +
          '<div class="section-count">' + totalEntries + ' words total</div>' +
        '</div>' +
        '<button class="btn-select-all" data-section="' + section.id + '">Select all</button>';
      sectionSelector.appendChild(header);

      // Click the "Select all" button
      header.querySelector('.btn-select-all').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWholeSection(section);
      });

      // --- Subsection rows ---
      const subList = document.createElement('div');
      subList.className = 'subsection-list';

      section.subsections.forEach((sub) => {
        const row = document.createElement('label');
        row.className = 'subsection-row';
        row.innerHTML =
          '<input type="checkbox" class="sub-checkbox" data-sub-id="' + sub.id + '">' +
          '<span class="sub-name">' + sub.title + '</span>' +
          '<span class="sub-count">' + sub.entries.length + ' words</span>' +
          '<span class="sub-pages">p. ' + uniquePages(sub.entries).join('\u2013') + '</span>';

        row.querySelector('input').addEventListener('change', (e) => {
          if (e.target.checked) {
            selectedSubsections.add(sub.id);
          } else {
            selectedSubsections.delete(sub.id);
          }
          syncSelectAllButtons();
          updateVocabCount();
        });

        subList.appendChild(row);
      });

      sectionSelector.appendChild(subList);
    });
  }

  function uniquePages(entries) {
    const pages = [...new Set(entries.map((e) => e.page))].sort((a, b) => a - b);
    if (pages.length <= 2) return pages;
    return [pages[0], pages[pages.length - 1]];
  }

  function toggleWholeSection(section) {
    const subIds = section.subsections.map((s) => s.id);
    const allSelected = subIds.every((id) => selectedSubsections.has(id));

    if (allSelected) {
      subIds.forEach((id) => selectedSubsections.delete(id));
    } else {
      subIds.forEach((id) => selectedSubsections.add(id));
    }

    syncCheckboxes();
    syncSelectAllButtons();
    updateVocabCount();
  }

  function syncCheckboxes() {
    document.querySelectorAll('.sub-checkbox').forEach((cb) => {
      cb.checked = selectedSubsections.has(cb.dataset.subId);
    });
  }

  function syncSelectAllButtons() {
    VOCABULARY_DATA.sections.forEach((section) => {
      const subIds = section.subsections.map((s) => s.id);
      const allSelected = subIds.every((id) => selectedSubsections.has(id));
      const btn = document.querySelector('.btn-select-all[data-section="' + section.id + '"]');
      if (btn) {
        btn.textContent = allSelected ? 'Deselect all' : 'Select all';
        btn.classList.toggle('active', allSelected);
      }
    });
  }

  function bindEvents() {
    btnApplyPages.addEventListener('click', applyPageFilter);
    btnStart.addEventListener('click', startQuiz);
    btnCheck.addEventListener('click', checkAnswer);
    btnNext.addEventListener('click', nextQuestion);
    btnRetry.addEventListener('click', retryQuiz);
    btnHome.addEventListener('click', goHome);
    btnCheckVerb.addEventListener('click', checkAnswer);

    answerInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (answered) nextQuestion();
        else checkAnswer();
      }
    });
    verbInput1.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (answered) nextQuestion();
        else if (verbInput1.value.trim() && !verbInput2.value.trim()) verbInput2.focus();
        else checkAnswer();
      }
    });
    verbInput2.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (answered) nextQuestion();
        else checkAnswer();
      }
    });
  }

  // ===== PAGE FILTER =====
  function applyPageFilter() {
    const from = parseInt(pageFrom.value) || 0;
    const to = parseInt(pageTo.value) || 9999;

    selectedSubsections.clear();

    VOCABULARY_DATA.sections.forEach((section) => {
      section.subsections.forEach((sub) => {
        const hasPages = sub.entries.some((e) => e.page >= from && e.page <= to);
        if (hasPages) {
          selectedSubsections.add(sub.id);
        }
      });
    });

    syncCheckboxes();
    syncSelectAllButtons();
    updateVocabCount();
  }

  function getFilteredEntries() {
    const entries = [];
    const from = parseInt(pageFrom.value) || 0;
    const to = parseInt(pageTo.value) || 9999;
    const hasPageFilter = pageFrom.value || pageTo.value;

    VOCABULARY_DATA.sections.forEach((section) => {
      section.subsections
        .filter((sub) => selectedSubsections.has(sub.id))
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
      vocabCount.textContent = 'Select topics above to start!';
      btnStart.disabled = true;
    } else {
      vocabCount.textContent = count + ' words ready to practice';
      btnStart.disabled = false;
    }
  }

  // ===== QUIZ LOGIC =====
  function startQuiz() {
    filteredEntries = getFilteredEntries();
    if (filteredEntries.length === 0) return;

    const mode = quizModeSelect.value;
    var countStr = questionCountSelect.value;
    var count = countStr === 'all' ? filteredEntries.length : parseInt(countStr);
    count = Math.min(count, filteredEntries.length);

    var shuffled = shuffleArray([...filteredEntries]);
    var selected = shuffled.slice(0, count);

    quizQuestions = selected.map(function (entry) { return buildQuestion(entry, mode); });
    quizQuestions = shuffleArray(quizQuestions);

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
    // --- Verb forms mode: show one form, ask for the other two ---
    if (mode === 'verb-forms' && entry.simplePast) {
      // Randomly pick which form to SHOW: infinitive, simple past, or past participle
      var givenForms = ['infinitive', 'simple-past', 'past-participle'];
      var givenForm = givenForms[Math.floor(Math.random() * givenForms.length)];

      var givenWord, ask1Label, ask1Answers, ask2Label, ask2Answers;
      if (givenForm === 'infinitive') {
        givenWord = entry.english;
        ask1Label = 'Simple Past';
        ask1Answers = splitAlternatives(entry.simplePast);
        ask2Label = 'Past Participle';
        ask2Answers = splitAlternatives(entry.pastParticiple);
      } else if (givenForm === 'simple-past') {
        givenWord = entry.simplePast.split('/')[0].trim();
        ask1Label = 'Infinitive';
        ask1Answers = splitAlternatives(entry.english);
        ask2Label = 'Past Participle';
        ask2Answers = splitAlternatives(entry.pastParticiple);
      } else {
        givenWord = entry.pastParticiple.split('/')[0].trim();
        ask1Label = 'Infinitive';
        ask1Answers = splitAlternatives(entry.english);
        ask2Label = 'Simple Past';
        ask2Answers = splitAlternatives(entry.simplePast);
      }

      return {
        entry: entry,
        type: 'verb-form-dual',
        givenForm: givenForm,
        question: givenWord,
        ask1Label: ask1Label,
        ask1Answers: ask1Answers,
        ask2Label: ask2Label,
        ask2Answers: ask2Answers,
        direction: 'verb-form',
        isGermanAnswer: false
      };
    }

    // --- Mix mode: include verb forms for irregular verbs ---
    var direction;
    if (mode === 'en-to-de') {
      direction = 'en-to-de';
    } else if (mode === 'de-to-en') {
      direction = 'de-to-en';
    } else {
      if (entry.simplePast && Math.random() < 0.3) {
        return buildQuestion(entry, 'verb-forms');
      }
      direction = Math.random() < 0.5 ? 'en-to-de' : 'de-to-en';
    }

    if (direction === 'en-to-de') {
      return {
        entry: entry,
        type: 'translate',
        question: entry.english,
        correctAnswers: splitAlternatives(entry.german),
        direction: 'en-to-de',
        isGermanAnswer: true
      };
    } else {
      var germanAlts = splitAlternatives(entry.german);
      var questionGerman = germanAlts[Math.floor(Math.random() * germanAlts.length)];
      return {
        entry: entry,
        type: 'translate',
        question: questionGerman,
        correctAnswers: splitAlternatives(entry.english),
        direction: 'de-to-en',
        isGermanAnswer: false
      };
    }
  }

  function showQuestion() {
    var q = quizQuestions[currentIndex];
    answered = false;

    var pct = ((currentIndex) / quizQuestions.length) * 100;
    progressBar.style.width = pct + '%';
    progressText.textContent = (currentIndex + 1) + ' / ' + quizQuestions.length;

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

    questionWord.textContent = q.question;
    feedback.innerHTML = '';
    btnNext.classList.add('hidden');

    // --- Dual-input verb form mode ---
    if (q.type === 'verb-form-dual') {
      var formNames = { 'infinitive': 'Infinitive', 'simple-past': 'Simple Past', 'past-participle': 'Past Participle' };
      verbFormHint.textContent = 'Given: ' + formNames[q.givenForm] + ' \u2014 fill in the other two forms';

      // Show verb inputs, hide single input
      answerAreaSingle.classList.add('hidden');
      answerAreaVerb.classList.remove('hidden');
      verbLabel1.textContent = q.ask1Label;
      verbLabel2.textContent = q.ask2Label;
      verbInput1.value = '';
      verbInput2.value = '';
      verbInput1.className = 'answer-input';
      verbInput2.className = 'answer-input';
      verbInput1.disabled = false;
      verbInput2.disabled = false;
      btnCheckVerb.classList.remove('hidden');
      verbInput1.focus();
    } else {
      // --- Standard single-input mode ---
      verbFormHint.textContent = '';
      answerAreaSingle.classList.remove('hidden');
      answerAreaVerb.classList.add('hidden');
      answerInput.value = '';
      answerInput.className = 'answer-input';
      answerInput.disabled = false;
      btnCheck.classList.remove('hidden');
      answerInput.focus();
    }
  }

  function checkAnswer() {
    if (answered) return;
    var q = quizQuestions[currentIndex];

    // --- Dual verb form check ---
    if (q.type === 'verb-form-dual') {
      var ans1 = verbInput1.value.trim();
      var ans2 = verbInput2.value.trim();
      if (!ans1 || !ans2) {
        if (!ans1) verbInput1.focus();
        else verbInput2.focus();
        return;
      }

      answered = true;
      verbInput1.disabled = true;
      verbInput2.disabled = true;
      btnCheckVerb.classList.add('hidden');
      btnNext.classList.remove('hidden');

      var res1 = evaluateAnswer(ans1, q.ask1Answers, false);
      var res2 = evaluateAnswer(ans2, q.ask2Answers, false);

      var ok1 = (res1 === 'correct');
      var ok2 = (res2 === 'correct');

      verbInput1.className = 'answer-input ' + (ok1 ? 'correct' : 'wrong');
      verbInput2.className = 'answer-input ' + (ok2 ? 'correct' : 'wrong');

      if (ok1 && ok2) {
        handleCorrect(q);
      } else {
        wrongCount++;
        streak = 0;
        quizCard.classList.add('shake');
        setTimeout(function () { quizCard.classList.remove('shake'); }, 400);

        var parts = [];
        if (!ok1) parts.push(q.ask1Label + ': <strong>' + q.ask1Answers[0] + '</strong>');
        if (!ok2) parts.push(q.ask2Label + ': <strong>' + q.ask2Answers[0] + '</strong>');
        feedback.innerHTML =
          '<div class="feedback-wrong">' + randomItem(WRONG_MESSAGES) + '</div>' +
          '<div class="feedback-answer">Correct: ' + parts.join(' | ') + '</div>';

        mistakes.push({
          question: q.question,
          direction: q.direction,
          formType: q.givenForm,
          userAnswer: ans1 + ' / ' + ans2,
          correctAnswer: q.ask1Answers[0] + ' / ' + q.ask2Answers[0]
        });
      }

      correctCountEl.textContent = correctCount;
      streakCountEl.textContent = streak;
      wrongCountEl.textContent = wrongCount;
      return;
    }

    // --- Standard single-input check ---
    var userAnswer = answerInput.value.trim();
    if (!userAnswer) {
      answerInput.focus();
      return;
    }

    answered = true;
    answerInput.disabled = true;
    btnCheck.classList.add('hidden');
    btnNext.classList.remove('hidden');

    var result = evaluateAnswer(userAnswer, q.correctAnswers, q.isGermanAnswer);

    if (result === 'correct') {
      handleCorrect(q);
    } else if (result === 'close') {
      handleClose(q, userAnswer);
    } else {
      handleWrong(q, userAnswer);
    }

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
    setTimeout(function () { quizCard.classList.remove('bounce'); }, 300);

    feedback.innerHTML = '<div class="feedback-correct">' + randomItem(CORRECT_MESSAGES) + '</div>';
  }

  function handleClose(q, userAnswer) {
    correctCount++;
    streak++;
    bestStreak = Math.max(bestStreak, streak);

    answerInput.className = 'answer-input close';

    feedback.innerHTML =
      '<div class="feedback-close">' + randomItem(CLOSE_MESSAGES) + '</div>' +
      '<div class="feedback-answer">Correct spelling: <strong>' + q.correctAnswers[0] + '</strong></div>';
  }

  function handleWrong(q, userAnswer) {
    wrongCount++;
    streak = 0;

    answerInput.className = 'answer-input wrong';
    quizCard.classList.add('shake');
    setTimeout(function () { quizCard.classList.remove('shake'); }, 400);

    var correctStr = q.correctAnswers.join(' / ');
    feedback.innerHTML =
      '<div class="feedback-wrong">' + randomItem(WRONG_MESSAGES) + '</div>' +
      '<div class="feedback-answer">Correct answer: <strong>' + correctStr + '</strong></div>';

    mistakes.push({
      question: q.question,
      direction: q.direction,
      formType: q.formType || null,
      userAnswer: userAnswer,
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
    var normalizedUser = normalize(userAnswer);

    for (var i = 0; i < correctAnswers.length; i++) {
      if (normalizedUser === normalize(correctAnswers[i])) return 'correct';
    }

    // German: allow 1-char Levenshtein distance
    if (isGermanAnswer) {
      for (var j = 0; j < correctAnswers.length; j++) {
        var dist = levenshteinDistance(normalizedUser, normalize(correctAnswers[j]));
        if (dist <= 1 && normalizedUser.length >= 2) return 'close';
      }
    }

    // Umlaut expansion: ue->ü, ae->ä, oe->ö, ss->ß
    if (isGermanAnswer) {
      var expandedUser = expandUmlauts(normalizedUser);
      for (var k = 0; k < correctAnswers.length; k++) {
        var nc = normalize(correctAnswers[k]);
        if (expandedUser === nc) return 'correct';
        var ec = expandUmlauts(nc);
        if (normalizedUser === ec) return 'correct';
        if (expandedUser === ec) return 'correct';
      }
    }

    return 'wrong';
  }

  function normalize(str) {
    return str.toLowerCase().replace(/\s+/g, ' ').replace(/[()]/g, '').trim();
  }

  function expandUmlauts(str) {
    return str.replace(/\u00e4/g, 'ae').replace(/\u00f6/g, 'oe')
              .replace(/\u00fc/g, 'ue').replace(/\u00df/g, 'ss');
  }

  function splitAlternatives(str) {
    var results = [];
    var commaParts = str.split(',').map(function (s) { return s.trim(); }).filter(Boolean);

    commaParts.forEach(function (part) {
      results.push(part);
      if (part.indexOf('/') !== -1) {
        part.split('/').forEach(function (sub) {
          var trimmed = sub.trim();
          if (trimmed) results.push(trimmed);
        });
      }
    });

    // Deduplicate
    var seen = {};
    return results.filter(function (item) {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }

  function levenshteinDistance(a, b) {
    var matrix = [];
    for (var i = 0; i <= b.length; i++) matrix[i] = [i];
    for (var j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (var i2 = 1; i2 <= b.length; i2++) {
      for (var j2 = 1; j2 <= a.length; j2++) {
        if (b.charAt(i2 - 1) === a.charAt(j2 - 1)) {
          matrix[i2][j2] = matrix[i2 - 1][j2 - 1];
        } else {
          matrix[i2][j2] = Math.min(
            matrix[i2 - 1][j2 - 1] + 1,
            matrix[i2][j2 - 1] + 1,
            matrix[i2 - 1][j2] + 1
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }

  // ===== RESULTS =====
  function showResults() {
    showScreen('results');

    var total = quizQuestions.length;
    var pct = Math.round((correctCount / total) * 100);

    var titlePool;
    if (pct === 100) titlePool = RESULT_TITLES.perfect;
    else if (pct >= 80) titlePool = RESULT_TITLES.great;
    else if (pct >= 60) titlePool = RESULT_TITLES.good;
    else if (pct >= 40) titlePool = RESULT_TITLES.ok;
    else titlePool = RESULT_TITLES.low;
    resultsTitle.textContent = randomItem(titlePool);

    var starCount = Math.ceil(pct / 20);
    resultsStars.textContent = '\u2B50'.repeat(starCount) + '\u2606'.repeat(5 - starCount);

    animateNumber(scoreNumber, 0, pct, 800);

    resultsCorrect.textContent = correctCount + ' / ' + total;
    resultsWrong.textContent = wrongCount + ' / ' + total;
    resultsStreak.textContent = bestStreak;

    if (mistakes.length > 0) {
      mistakesSection.classList.remove('hidden');
      mistakesList.innerHTML = '';
      mistakes.forEach(function (m) {
        var dir = m.direction === 'en-to-de' ? 'EN\u2192DE'
          : m.direction === 'de-to-en' ? 'DE\u2192EN' : 'Verb Form';
        var formInfo = m.formType
          ? ' (' + (m.formType === 'simple-past' ? 'Simple Past' : 'Past Participle') + ')'
          : '';
        var item = document.createElement('div');
        item.className = 'mistake-item';
        item.innerHTML =
          '<div class="mistake-question">' + dir + formInfo + ': ' + m.question + '</div>' +
          '<div class="mistake-your-answer">Your answer: ' + m.userAnswer + '</div>' +
          '<div class="mistake-correct-answer">Correct: ' + m.correctAnswer + '</div>';
        mistakesList.appendChild(item);
      });
    } else {
      mistakesSection.classList.add('hidden');
    }
  }

  function retryQuiz() {
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
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function animateNumber(el, from, to, duration) {
    var start = performance.now();
    function step(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var value = Math.round(from + (to - from) * easeOut(progress));
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
