// Vocabulary data extracted from textbook photos
// Structure: sections > subsections > entries
// Each entry: { english, german, page }
// Irregular verbs also have: simplePast, pastParticiple

const VOCABULARY_DATA = {
  sections: [
    {
      id: "irregular-verbs",
      title: "Irregular Verbs",
      icon: "\uD83D\uDD24",
      subsections: [
        {
          id: "irregular-verbs-a-h",
          title: "Irregular Verbs (A\u2013H)",
          pages: [295],
          entries: [
            { english: "be", german: "sein", simplePast: "was/were", pastParticiple: "been", page: 295 },
            { english: "become", german: "werden", simplePast: "became", pastParticiple: "become", page: 295 },
            { english: "begin", german: "beginnen, anfangen", simplePast: "began", pastParticiple: "begun", page: 295 },
            { english: "bet", german: "wetten", simplePast: "bet", pastParticiple: "bet", page: 295 },
            { english: "bite", german: "bei\u00dfen", simplePast: "bit", pastParticiple: "bitten", page: 295 },
            { english: "blow", german: "blasen, pusten", simplePast: "blew", pastParticiple: "blown", page: 295 },
            { english: "break", german: "zerbrechen, kaputt machen", simplePast: "broke", pastParticiple: "broken", page: 295 },
            { english: "bring", german: "bringen", simplePast: "brought", pastParticiple: "brought", page: 295 },
            { english: "build", german: "bauen", simplePast: "built", pastParticiple: "built", page: 295 },
            { english: "burn", german: "brennen", simplePast: "burnt/burned", pastParticiple: "burnt/burned", page: 295 },
            { english: "buy", german: "kaufen", simplePast: "bought", pastParticiple: "bought", page: 295 },
            { english: "can", german: "k\u00f6nnen", simplePast: "could", pastParticiple: "-", page: 295 },
            { english: "choose", german: "ausw\u00e4hlen", simplePast: "chose", pastParticiple: "chosen", page: 295 },
            { english: "come", german: "kommen", simplePast: "came", pastParticiple: "come", page: 295 },
            { english: "cost", german: "kosten", simplePast: "cost", pastParticiple: "cost", page: 295 },
            { english: "cut", german: "schneiden", simplePast: "cut", pastParticiple: "cut", page: 295 },
            { english: "dig", german: "graben", simplePast: "dug", pastParticiple: "dug", page: 295 },
            { english: "do", german: "machen, tun", simplePast: "did", pastParticiple: "done", page: 295 },
            { english: "draw", german: "zeichnen", simplePast: "drew", pastParticiple: "drawn", page: 295 },
            { english: "drink", german: "trinken", simplePast: "drank", pastParticiple: "drunk", page: 295 },
            { english: "drive", german: "fahren", simplePast: "drove", pastParticiple: "driven", page: 295 },
            { english: "eat", german: "essen", simplePast: "ate", pastParticiple: "eaten", page: 295 },
            { english: "fall", german: "fallen", simplePast: "fell", pastParticiple: "fallen", page: 295 },
            { english: "feed", german: "f\u00fcttern, ern\u00e4hren", simplePast: "fed", pastParticiple: "fed", page: 295 },
            { english: "feel", german: "f\u00fchlen", simplePast: "felt", pastParticiple: "felt", page: 295 },
            { english: "fight", german: "k\u00e4mpfen, sich streiten", simplePast: "fought", pastParticiple: "fought", page: 295 },
            { english: "find", german: "finden", simplePast: "found", pastParticiple: "found", page: 295 },
            { english: "fly", german: "fliegen", simplePast: "flew", pastParticiple: "flown", page: 295 },
            { english: "forget", german: "vergessen", simplePast: "forgot", pastParticiple: "forgotten", page: 295 },
            { english: "forgive", german: "vergeben, verzeihen", simplePast: "forgave", pastParticiple: "forgiven", page: 295 },
            { english: "get", german: "bekommen", simplePast: "got", pastParticiple: "got/gotten", page: 295 },
            { english: "give", german: "geben", simplePast: "gave", pastParticiple: "given", page: 295 },
            { english: "go", german: "gehen", simplePast: "went", pastParticiple: "gone", page: 295 },
            { english: "grow", german: "wachsen, anbauen, z\u00fcchten", simplePast: "grew", pastParticiple: "grown", page: 295 },
            { english: "hang", german: "h\u00e4ngen", simplePast: "hung", pastParticiple: "hung", page: 295 },
            { english: "have", german: "haben", simplePast: "had", pastParticiple: "had", page: 295 },
            { english: "hide", german: "verstecken", simplePast: "hid", pastParticiple: "hidden", page: 295 },
            { english: "hit", german: "schlagen, treffen", simplePast: "hit", pastParticiple: "hit", page: 295 },
            { english: "hold", german: "halten", simplePast: "held", pastParticiple: "held", page: 295 },
            { english: "hurt", german: "verletzen, sich weh tun", simplePast: "hurt", pastParticiple: "hurt", page: 295 }
          ]
        },
        {
          id: "irregular-verbs-k-z",
          title: "Irregular Verbs (K\u2013Z)",
          pages: [296],
          entries: [
            { english: "know", german: "kennen, wissen", simplePast: "knew", pastParticiple: "known", page: 296 },
            { english: "learn", german: "lernen", simplePast: "learnt/learned", pastParticiple: "learnt/learned", page: 296 },
            { english: "leave", german: "verlassen", simplePast: "left", pastParticiple: "left", page: 296 },
            { english: "let", german: "lassen", simplePast: "let", pastParticiple: "let", page: 296 },
            { english: "lie", german: "liegen", simplePast: "lay", pastParticiple: "lain", page: 296 },
            { english: "lose", german: "verlieren", simplePast: "lost", pastParticiple: "lost", page: 296 },
            { english: "make", german: "machen, tun", simplePast: "made", pastParticiple: "made", page: 296 },
            { english: "mean", german: "meinen", simplePast: "meant", pastParticiple: "meant", page: 296 },
            { english: "meet", german: "treffen", simplePast: "met", pastParticiple: "met", page: 296 },
            { english: "pay", german: "bezahlen", simplePast: "paid", pastParticiple: "paid", page: 296 },
            { english: "put", german: "legen, setzen, stellen", simplePast: "put", pastParticiple: "put", page: 296 },
            { english: "read", german: "lesen", simplePast: "read", pastParticiple: "read", page: 296 },
            { english: "ride", german: "reiten", simplePast: "rode", pastParticiple: "ridden", page: 296 },
            { english: "ring", german: "klingeln, l\u00e4uten", simplePast: "rang", pastParticiple: "rung", page: 296 },
            { english: "run", german: "laufen, rennen", simplePast: "ran", pastParticiple: "run", page: 296 },
            { english: "say", german: "sagen", simplePast: "said", pastParticiple: "said", page: 296 },
            { english: "see", german: "sehen", simplePast: "saw", pastParticiple: "seen", page: 296 },
            { english: "sell", german: "verkaufen", simplePast: "sold", pastParticiple: "sold", page: 296 },
            { english: "send", german: "senden, verschicken", simplePast: "sent", pastParticiple: "sent", page: 296 },
            { english: "set", german: "setzen, einrichten", simplePast: "set", pastParticiple: "set", page: 296 },
            { english: "sew", german: "n\u00e4hen", simplePast: "sewed", pastParticiple: "sewn/sewed", page: 296 },
            { english: "shake", german: "sch\u00fctteln", simplePast: "shook", pastParticiple: "shaken", page: 296 },
            { english: "show", german: "zeigen", simplePast: "showed", pastParticiple: "shown", page: 296 },
            { english: "shut", german: "schlie\u00dfen", simplePast: "shut", pastParticiple: "shut", page: 296 },
            { english: "sing", german: "singen", simplePast: "sang", pastParticiple: "sung", page: 296 },
            { english: "sit", german: "sitzen", simplePast: "sat", pastParticiple: "sat", page: 296 },
            { english: "sleep", german: "schlafen", simplePast: "slept", pastParticiple: "slept", page: 296 },
            { english: "smell", german: "riechen, duften", simplePast: "smelt/smelled", pastParticiple: "smelt/smelled", page: 296 },
            { english: "speak", german: "sprechen", simplePast: "spoke", pastParticiple: "spoken", page: 296 },
            { english: "spell", german: "buchstabieren", simplePast: "spelt/spelled", pastParticiple: "spelt/spelled", page: 296 },
            { english: "spend", german: "ausgeben, verbringen", simplePast: "spent", pastParticiple: "spent", page: 296 },
            { english: "stand", german: "stehen", simplePast: "stood", pastParticiple: "stood", page: 296 },
            { english: "steal", german: "stehlen", simplePast: "stole", pastParticiple: "stolen", page: 296 },
            { english: "swim", german: "schwimmen", simplePast: "swam", pastParticiple: "swum", page: 296 },
            { english: "take", german: "nehmen", simplePast: "took", pastParticiple: "taken", page: 296 },
            { english: "teach", german: "unterrichten, lehren, beibringen", simplePast: "taught", pastParticiple: "taught", page: 296 },
            { english: "tell", german: "erz\u00e4hlen, sagen", simplePast: "told", pastParticiple: "told", page: 296 },
            { english: "think", german: "nachdenken, glauben", simplePast: "thought", pastParticiple: "thought", page: 296 },
            { english: "throw", german: "werfen", simplePast: "threw", pastParticiple: "thrown", page: 296 },
            { english: "understand", german: "verstehen", simplePast: "understood", pastParticiple: "understood", page: 296 },
            { english: "wake", german: "wecken, aufwachen", simplePast: "woke", pastParticiple: "woken", page: 296 },
            { english: "wear", german: "anhaben, tragen", simplePast: "wore", pastParticiple: "worn", page: 296 },
            { english: "win", german: "gewinnen", simplePast: "won", pastParticiple: "won", page: 296 },
            { english: "write", german: "schreiben", simplePast: "wrote", pastParticiple: "written", page: 296 }
          ]
        }
      ]
    },
    {
      id: "unit1",
      title: "Unit 1 \u2013 My Friends and I",
      icon: "\uD83D\uDC6B",
      subsections: [
        {
          id: "unit1-checkin",
          title: "Check-in",
          pages: [195],
          entries: [
            { english: "embarrassing", german: "peinlich", page: 195 },
            { english: "to end up", german: "enden, landen", page: 195 },
            { english: "yearbook", german: "Jahrbuch", page: 195 },
            { english: "LOL (laughing out loud)", german: "LOL", page: 195 },
            { english: "real", german: "echt, richtig, wirklich", page: 195 },
            { english: "show-off", german: "Angeber/in", page: 195 },
            { english: "art", german: "Kunst", page: 195 },
            { english: "what a ...", german: "was f\u00fcr ein/e", page: 195 },
            { english: "home town", german: "Heimatstadt", page: 195 },
            { english: "likes and dislikes", german: "Vorlieben und Abneigungen", page: 195 },
            { english: "huge", german: "riesig, riesengro\u00df, gewaltig", page: 195 },
            { english: "field", german: "Feld, Wiese, Weide, Acker", page: 195 },
            { english: "hill", german: "Berg, H\u00fcgel", page: 195 },
            { english: "outdoors", german: "drau\u00dfen, im Freien", page: 195 },
            { english: "indoors", german: "drinnen, im Haus", page: 195 },
            { english: "to hang out (with)", german: "rumh\u00e4ngen, sich herumtreffen", page: 195 },
            { english: "mall", german: "Einkaufszentrum", page: 195 },
            { english: "eagle", german: "Adler", page: 195 },
            { english: "feeling", german: "Gef\u00fchl", page: 195 },
            { english: "embarrassed", german: "verlegen", page: 195 },
            { english: "nervous", german: "nerv\u00f6s, aufgeregt", page: 195 },
            { english: "proud (of)", german: "stolz (auf)", page: 195 },
            { english: "report", german: "Bericht, Meldung", page: 195 },
            { english: "during", german: "w\u00e4hrend", page: 195 }
          ]
        },
        {
          id: "unit1-topic-a",
          title: "A \u2013 Where I Live",
          pages: [196],
          entries: [
            { english: "to text", german: "eine SMS schreiben", page: 196 },
            { english: "to blog", german: "bloggen", page: 196 },
            { english: "to chat", german: "chatten", page: 196 },
            { english: "to post", german: "posten, ver\u00f6ffentlichen", page: 196 },
            { english: "social media", german: "soziale Medien", page: 196 },
            { english: "profile", german: "Profil", page: 196 },
            { english: "nickname", german: "Spitzname", page: 196 },
            { english: "username", german: "Benutzername", page: 196 },
            { english: "farm", german: "Bauernhof", page: 196 },
            { english: "village", german: "Dorf", page: 196 },
            { english: "river", german: "Fluss", page: 196 },
            { english: "path", german: "Weg, Pfad", page: 196 },
            { english: "wood", german: "Wald, W\u00e4ldchen", page: 196 },
            { english: "lake", german: "See", page: 196 }
          ]
        },
        {
          id: "unit1-skills",
          title: "Skills \u2013 How to Use a Dictionary",
          pages: [196, 197],
          entries: [
            { english: "headword", german: "Stichwort", page: 196 },
            { english: "entry", german: "Eintrag", page: 196 },
            { english: "abbreviation", german: "Abk\u00fcrzung", page: 196 },
            { english: "noun", german: "Nomen, Substantiv", page: 196 },
            { english: "countable", german: "z\u00e4hlbar", page: 196 },
            { english: "uncountable", german: "nicht z\u00e4hlbar", page: 196 },
            { english: "meaning", german: "Bedeutung", page: 197 },
            { english: "pronunciation", german: "Aussprache", page: 197 },
            { english: "example", german: "Beispiel", page: 197 }
          ]
        },
        {
          id: "unit1-story",
          title: "Story \u2013 What a Wonderful World",
          pages: [197],
          entries: [
            { english: "wonderful", german: "wunderbar, wundersch\u00f6n", page: 197 },
            { english: "world", german: "Welt", page: 197 },
            { english: "colourful", german: "bunt, farbenfroh", page: 197 },
            { english: "sky", german: "Himmel", page: 197 },
            { english: "rainbow", german: "Regenbogen", page: 197 },
            { english: "amazing", german: "erstaunlich, fantastisch", page: 197 },
            { english: "butterfly", german: "Schmetterling", page: 197 },
            { english: "nature", german: "Natur", page: 197 },
            { english: "beautiful", german: "sch\u00f6n, wundersch\u00f6n", page: 197 },
            { english: "scenery", german: "Landschaft", page: 197 },
            { english: "forest", german: "Wald", page: 197 },
            { english: "valley", german: "Tal", page: 197 },
            { english: "cloud", german: "Wolke", page: 197 },
            { english: "tree", german: "Baum", page: 197 }
          ]
        },
        {
          id: "unit1-topic-b",
          title: "B \u2013 Reading & Books",
          pages: [198],
          entries: [
            { english: "bookshop", german: "Buchhandlung, Buchladen", page: 198 },
            { english: "especially", german: "besonders", page: 198 },
            { english: "adventure", german: "Abenteuer", page: 198 },
            { english: "scary", german: "gruselig, unheimlich", page: 198 },
            { english: "series", german: "Serie, Reihe", page: 198 },
            { english: "recommendation", german: "Empfehlung", page: 198 },
            { english: "brilliant", german: "brillant, gro\u00dfartig", page: 198 },
            { english: "author", german: "Autor, Autorin", page: 198 },
            { english: "to imagine", german: "sich vorstellen", page: 198 },
            { english: "character", german: "Figur, Charakter", page: 198 },
            { english: "exciting", german: "aufregend, spannend", page: 198 },
            { english: "boring", german: "langweilig", page: 198 },
            { english: "funny", german: "lustig, witzig", page: 198 },
            { english: "interesting", german: "interessant", page: 198 },
            { english: "to recommend", german: "empfehlen", page: 198 },
            { english: "bookworm", german: "B\u00fccherw\u00fcrm", page: 198 }
          ]
        },
        {
          id: "unit1-station",
          title: "Station 1",
          pages: [198, 199],
          entries: [
            { english: "to agree", german: "zustimmen", page: 198 },
            { english: "to disagree", german: "nicht zustimmen", page: 198 },
            { english: "reason", german: "Grund", page: 198 },
            { english: "to share", german: "teilen", page: 198 },
            { english: "to add", german: "hinzuf\u00fcgen", page: 199 },
            { english: "decision", german: "Entscheidung", page: 199 },
            { english: "to argue", german: "streiten", page: 199 },
            { english: "to prepare", german: "vorbereiten", page: 199 },
            { english: "recipe", german: "Rezept", page: 199 },
            { english: "ingredient", german: "Zutat", page: 199 },
            { english: "to bake", german: "backen", page: 199 },
            { english: "delicious", german: "lecker, k\u00f6stlich", page: 199 }
          ]
        }
      ]
    }
  ]
};
