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
    },
    {
      id: "unit2",
      title: "Unit 2 \u2013 The Sunshine State",
      icon: "\u2600\uFE0F",
      subsections: [
        {
          id: "unit2-checkin",
          title: "Check-in",
          pages: [203],
          entries: [
            { english: "sunshine", german: "Sonnenschein", page: 203 },
            { english: "state", german: "Staat, Bundesstaat", page: 203 },
            { english: "beach", german: "Strand", page: 203 },
            { english: "palm tree", german: "Palme", page: 203 },
            { english: "theme park", german: "Freizeitpark, Themenpark", page: 203 },
            { english: "alligator", german: "Alligator", page: 203 },
            { english: "dolphin", german: "Delfin", page: 203 },
            { english: "manatee", german: "Seekuh, Manati", page: 203 },
            { english: "swamp", german: "Sumpf", page: 203 },
            { english: "ocean", german: "Ozean, Meer", page: 203 },
            { english: "surfing", german: "Surfen", page: 203 },
            { english: "kayaking", german: "Kajakfahren", page: 203 }
          ]
        },
        {
          id: "unit2-topic-a",
          title: "A \u2013 Travel & Airport",
          pages: [204],
          entries: [
            { english: "airport", german: "Flughafen", page: 204 },
            { english: "flight", german: "Flug", page: 204 },
            { english: "passenger", german: "Passagier, Fluggast", page: 204 },
            { english: "suitcase", german: "Koffer", page: 204 },
            { english: "to pack", german: "packen", page: 204 },
            { english: "boarding pass", german: "Bordkarte", page: 204 },
            { english: "gate", german: "Gate, Flugsteig", page: 204 },
            { english: "to take off", german: "abheben, starten", page: 204 },
            { english: "to land", german: "landen", page: 204 },
            { english: "luggage", german: "Gep\u00e4ck", page: 204 },
            { english: "postcard", german: "Postkarte", page: 204 },
            { english: "holiday", german: "Urlaub, Ferien", page: 204 },
            { english: "trip", german: "Reise, Ausflug", page: 204 },
            { english: "to save (up)", german: "sparen", page: 204 },
            { english: "pocket money", german: "Taschengeld", page: 204 },
            { english: "already", german: "schon, bereits", page: 204 },
            { english: "excitement", german: "Aufregung, Begeisterung", page: 204 }
          ]
        },
        {
          id: "unit2-topic-b",
          title: "B \u2013 History & Exploration",
          pages: [205, 206, 207, 208],
          entries: [
            { english: "settler", german: "Siedler", page: 205 },
            { english: "explorer", german: "Entdecker, Forscher", page: 205 },
            { english: "to conquer", german: "erobern", page: 205 },
            { english: "colony", german: "Kolonie", page: 205 },
            { english: "century", german: "Jahrhundert", page: 205 },
            { english: "population", german: "Bev\u00f6lkerung", page: 205 },
            { english: "Native American", german: "Ureinwohner Amerikas", page: 205 },
            { english: "to arrive", german: "ankommen", page: 206 },
            { english: "journey", german: "Reise", page: 206 },
            { english: "dangerous", german: "gef\u00e4hrlich", page: 206 },
            { english: "gold", german: "Gold", page: 206 },
            { english: "silver", german: "Silber", page: 206 },
            { english: "map", german: "Karte, Landkarte", page: 206 },
            { english: "sailor", german: "Seemann, Matrose", page: 206 },
            { english: "port", german: "Hafen", page: 206 },
            { english: "route", german: "Route, Weg", page: 206 },
            { english: "to trade", german: "handeln", page: 206 },
            { english: "to exist", german: "existieren, bestehen", page: 208 },
            { english: "to cook", german: "kochen", page: 208 },
            { english: "class (pl. classes)", german: "Klasse(n)", page: 208 },
            { english: "history", german: "Geschichte", page: 208 },
            { english: "family", german: "Familie", page: 208 }
          ]
        },
        {
          id: "unit2-skills",
          title: "Skills \u2013 How to Give a Good Presentation",
          pages: [208],
          entries: [
            { english: "audience", german: "Publikum, Zuh\u00f6rer", page: 208 },
            { english: "note", german: "Notiz", page: 208 },
            { english: "eye contact", german: "Blickkontakt", page: 208 },
            { english: "step", german: "Schritt", page: 208 },
            { english: "to keep", german: "behalten, aufbewahren", page: 208 },
            { english: "to sound", german: "klingen", page: 208 },
            { english: "personal", german: "pers\u00f6nlich", page: 208 },
            { english: "on time", german: "p\u00fcnktlich", page: 208 },
            { english: "to take a look at", german: "sich ansehen", page: 208 },
            { english: "to be connected (with)", german: "verbunden sein (mit)", page: 208 },
            { english: "point", german: "Punkt", page: 208 },
            { english: "to communicate", german: "kommunizieren", page: 208 },
            { english: "fantastic", german: "fantastisch, gro\u00dfartig", page: 208 },
            { english: "present", german: "Geschenk", page: 208 }
          ]
        },
        {
          id: "unit2-story",
          title: "Story \u2013 A Perfect Day for Treasure Hunting",
          pages: [209],
          entries: [
            { english: "treasure", german: "Schatz", page: 209 },
            { english: "hunting", german: "Jagen, Jagd", page: 209 },
            { english: "Europe", german: "Europa", page: 209 },
            { english: "American", german: "amerikanisch", page: 209 },
            { english: "to discover", german: "entdecken", page: 209 },
            { english: "historical", german: "historisch", page: 209 },
            { english: "to belong (to)", german: "geh\u00f6ren (zu)", page: 209 },
            { english: "object", german: "Gegenstand, Objekt", page: 209 },
            { english: "heavy", german: "schwer", page: 209 },
            { english: "museum", german: "Museum", page: 209 },
            { english: "to sail", german: "segeln", page: 209 },
            { english: "metal", german: "Metall", page: 209 },
            { english: "detector", german: "Detektor", page: 209 },
            { english: "slowly", german: "langsam", page: 209 },
            { english: "to dig", german: "graben", page: 209 },
            { english: "cloud", german: "Wolke", page: 209 },
            { english: "usual", german: "\u00fcblich, gew\u00f6hnlich", page: 209 },
            { english: "usually", german: "gew\u00f6hnlich, normalerweise", page: 209 },
            { english: "season", german: "Jahreszeit, Saison", page: 209 },
            { english: "shovel", german: "Schaufel", page: 209 },
            { english: "carefully", german: "vorsichtig, sorgf\u00e4ltig", page: 209 },
            { english: "meal", german: "Mahlzeit, Essen", page: 209 }
          ]
        },
        {
          id: "unit2-unittask",
          title: "Unit Task \u2013 Join Our Club!",
          pages: [209],
          entries: [
            { english: "talk", german: "Vortrag", page: 209 },
            { english: "foreign language", german: "Fremdsprache", page: 209 },
            { english: "jogging", german: "Joggen", page: 209 }
          ]
        }
      ]
    },
    {
      id: "focus1",
      title: "Focus 1 \u2013 Regions of the US",
      icon: "\uD83C\uDDFA\uD83C\uDDF8",
      subsections: [
        {
          id: "focus1-history",
          title: "US History & Settlers",
          pages: [210, 211],
          entries: [
            { english: "region", german: "Region, Gebiet", page: 210 },
            { english: "Pilgrim", german: "Pilger", page: 210 },
            { english: "the Mayflower", german: "die Mayflower", page: 210 },
            { english: "to settle", german: "sich niederlassen, besiedeln", page: 210 },
            { english: "settlement", german: "Siedlung", page: 210 },
            { english: "shore", german: "Ufer, K\u00fcste", page: 210 },
            { english: "Thanksgiving", german: "Erntedankfest", page: 210 },
            { english: "corn", german: "Mais", page: 210 },
            { english: "turkey", german: "Truthahn", page: 210 },
            { english: "cotton", german: "Baumwolle", page: 211 },
            { english: "plantation", german: "Plantage", page: 211 },
            { english: "slave", german: "Sklave", page: 211 },
            { english: "slavery", german: "Sklaverei", page: 211 },
            { english: "civil war", german: "B\u00fcrgerkrieg", page: 211 },
            { english: "prairie", german: "Pr\u00e4rie", page: 211 },
            { english: "wheat", german: "Weizen", page: 211 },
            { english: "cattle", german: "Rinder, Vieh", page: 211 },
            { english: "Gold Rush", german: "Goldrausch", page: 211 },
            { english: "Native American", german: "Ureinwohner Amerikas", page: 211 },
            { english: "tribe", german: "Stamm", page: 211 },
            { english: "reservation", german: "Reservat", page: 211 },
            { english: "buffalo", german: "B\u00fcffel", page: 211 }
          ]
        },
        {
          id: "focus1-geography",
          title: "US Geography & Culture",
          pages: [212, 213],
          entries: [
            { english: "coast", german: "K\u00fcste", page: 212 },
            { english: "mountain", german: "Berg, Gebirge", page: 212 },
            { english: "desert", german: "W\u00fcste", page: 212 },
            { english: "national park", german: "Nationalpark", page: 212 },
            { english: "island", german: "Insel", page: 212 },
            { english: "climate", german: "Klima", page: 212 },
            { english: "flag", german: "Flagge, Fahne", page: 213 },
            { english: "Independence Day", german: "Unabh\u00e4ngigkeitstag", page: 213 },
            { english: "fireworks", german: "Feuerwerk", page: 213 },
            { english: "president", german: "Pr\u00e4sident", page: 213 }
          ]
        }
      ]
    },
    {
      id: "ac1",
      title: "Across Cultures 1 \u2013 American Stories & Traditions",
      icon: "\uD83E\uDDD1\u200D\uD83C\uDF3E",
      subsections: [
        {
          id: "ac1-check-out",
          title: "Check-out",
          pages: [210],
          entries: [
            { english: "worth", german: "wert", page: 210 },
            { english: "opinion", german: "Meinung", page: 210 },
            { english: "summary", german: "Zusammenfassung", page: 210 }
          ]
        },
        {
          id: "ac1-stories",
          title: "Stories & Traditions",
          pages: [210, 211],
          entries: [
            { english: "pumpkin", german: "K\u00fcrbis", page: 210 },
            { english: "pie", german: "Kuchen, Pastete", page: 210 },
            { english: "feast", german: "Festmahl, Fest", page: 210 },
            { english: "harvest", german: "Ernte", page: 210 },
            { english: "thankful", german: "dankbar", page: 210 },
            { english: "to celebrate", german: "feiern", page: 210 },
            { english: "parade", german: "Umzug, Parade", page: 210 },
            { english: "tale", german: "Erz\u00e4hlung, Geschichte", page: 211 },
            { english: "tall tale", german: "L\u00fcgengeschichte", page: 211 },
            { english: "hero", german: "Held", page: 211 },
            { english: "brave", german: "mutig, tapfer", page: 211 },
            { english: "lumberjack", german: "Holzf\u00e4ller", page: 211 },
            { english: "ox (pl. oxen)", german: "Ochse(n)", page: 211 },
            { english: "log cabin", german: "Blockh\u00fctte", page: 211 },
            { english: "rodeo", german: "Rodeo", page: 211 },
            { english: "cowboy", german: "Cowboy", page: 211 }
          ]
        }
      ]
    },
    {
      id: "unit3",
      title: "Unit 3 \u2013 Off to the Rockies!",
      icon: "\uD83C\uDFD4\uFE0F",
      subsections: [
        {
          id: "unit3-checkin",
          title: "Check-in",
          pages: [214],
          entries: [
            { english: "scenery", german: "Landschaft, Kulisse", page: 214 },
            { english: "breathtaking", german: "atemberaubend", page: 214 },
            { english: "at least", german: "mindestens, wenigstens", page: 214 },
            { english: "rock", german: "Felsen, Stein", page: 214 },
            { english: "cave", german: "H\u00f6hle", page: 214 },
            { english: "national park", german: "Nationalpark", page: 214 },
            { english: "bison", german: "Bison", page: 214 },
            { english: "grizzly bear", german: "Grizzlyb\u00e4r", page: 214 },
            { english: "rattlesnake", german: "Klapperschlange", page: 214 },
            { english: "elk", german: "Wapiti", page: 214 },
            { english: "distance", german: "Entfernung, Strecke", page: 214 },
            { english: "nature", german: "Natur", page: 214 }
          ]
        },
        {
          id: "unit3-topic-a",
          title: "A \u2013 Outdoor Activities",
          pages: [215],
          entries: [
            { english: "to hike", german: "wandern", page: 215 },
            { english: "hiking", german: "Wandern", page: 215 },
            { english: "trail", german: "Wanderweg, Pfad", page: 215 },
            { english: "to camp", german: "zelten, campen", page: 215 },
            { english: "tent", german: "Zelt", page: 215 },
            { english: "campfire", german: "Lagerfeuer", page: 215 },
            { english: "sleeping bag", german: "Schlafsack", page: 215 },
            { english: "backpack", german: "Rucksack", page: 215 },
            { english: "campsite", german: "Campingplatz", page: 215 },
            { english: "ranger", german: "Ranger, Aufseher", page: 215 },
            { english: "compass", german: "Kompass", page: 215 }
          ]
        },
        {
          id: "unit3-topic-b",
          title: "B \u2013 Nature & Environment",
          pages: [216],
          entries: [
            { english: "to climb", german: "klettern", page: 216 },
            { english: "steep", german: "steil", page: 216 },
            { english: "summit", german: "Gipfel", page: 216 },
            { english: "view", german: "Aussicht, Blick", page: 216 },
            { english: "landscape", german: "Landschaft", page: 216 },
            { english: "to protect", german: "sch\u00fctzen", page: 216 },
            { english: "environment", german: "Umwelt", page: 216 },
            { english: "endangered", german: "gef\u00e4hrdet, bedroht", page: 216 },
            { english: "species", german: "Art, Spezies", page: 216 },
            { english: "to survive", german: "\u00fcberleben", page: 216 }
          ]
        },
        {
          id: "unit3-story",
          title: "Story \u2013 The Blackfoot and the Buffalo",
          pages: [217],
          entries: [
            { english: "Blackfoot", german: "Schwarzfu\u00df (Indianerstamm)", page: 217 },
            { english: "to hunt", german: "jagen", page: 217 },
            { english: "arrow", german: "Pfeil", page: 217 },
            { english: "bow", german: "Bogen", page: 217 },
            { english: "chief", german: "H\u00e4uptling", page: 217 },
            { english: "warrior", german: "Krieger", page: 217 },
            { english: "plain", german: "Ebene, Pr\u00e4rie", page: 217 },
            { english: "brave", german: "mutig, tapfer", page: 217 },
            { english: "to rescue", german: "retten", page: 217 },
            { english: "terrified", german: "ver\u00e4ngstigt, erschrocken", page: 217 }
          ]
        },
        {
          id: "unit3-station",
          title: "Station 3 \u2013 First Nations",
          pages: [218, 219],
          entries: [
            { english: "First Nations", german: "First Nations (Ureinwohner Kanadas)", page: 218 },
            { english: "Inuit", german: "Inuit", page: 218 },
            { english: "totem pole", german: "Totempfahl", page: 218 },
            { english: "canoe", german: "Kanu", page: 218 },
            { english: "igloo", german: "Iglu", page: 219 },
            { english: "ethnic group", german: "ethnische Gruppe", page: 219 }
          ]
        },
        {
          id: "unit3-skills",
          title: "Skills \u2013 How to Find Information on the Internet",
          pages: [220],
          entries: [
            { english: "information", german: "Information", page: 220 },
            { english: "search engine", german: "Suchmaschine", page: 220 },
            { english: "website", german: "Webseite", page: 220 },
            { english: "reliable", german: "zuverl\u00e4ssig, verl\u00e4sslich", page: 220 },
            { english: "source", german: "Quelle", page: 220 },
            { english: "result", german: "Ergebnis", page: 220 }
          ]
        },
        {
          id: "unit3-unittask",
          title: "Unit Task \u2013 Our Travel Project",
          pages: [220],
          entries: [
            { english: "destination", german: "Reiseziel", page: 220 },
            { english: "accommodation", german: "Unterkunft, \u00dcbernachtung", page: 220 },
            { english: "brochure", german: "Brosch\u00fcre, Prospekt", page: 220 }
          ]
        }
      ]
    },
    {
      id: "ac2",
      title: "Across Cultures 2 \u2013 Living Together",
      icon: "\uD83E\uDD1D",
      subsections: [
        {
          id: "ac2-australia",
          title: "Australia & Aboriginal Culture",
          pages: [222, 223],
          entries: [
            { english: "Aboriginal", german: "Aborigine, Ureinwohner Australiens", page: 222 },
            { english: "multicultural", german: "multikulturell", page: 222 },
            { english: "community", german: "Gemeinschaft", page: 222 },
            { english: "ceremony", german: "Zeremonie", page: 222 },
            { english: "sacred", german: "heilig", page: 222 },
            { english: "respect", german: "Respekt", page: 222 },
            { english: "proud", german: "stolz", page: 223 },
            { english: "culture", german: "Kultur", page: 223 },
            { english: "tradition", german: "Tradition", page: 223 },
            { english: "boomerang", german: "Bumerang", page: 223 },
            { english: "didgeridoo", german: "Didgeridoo", page: 223 },
            { english: "outback", german: "Outback", page: 223 }
          ]
        }
      ]
    },
    {
      id: "unit4",
      title: "Unit 4 \u2013 Sport Is Good for You!",
      icon: "\u26BD",
      subsections: [
        {
          id: "unit4-checkin",
          title: "Check-in",
          pages: [224],
          entries: [
            { english: "sport", german: "Sport", page: 224 },
            { english: "sporty", german: "sportlich", page: 224 },
            { english: "match", german: "Spiel, Wettkampf", page: 224 },
            { english: "team", german: "Mannschaft, Team", page: 224 },
            { english: "player", german: "Spieler/in", page: 224 },
            { english: "fan", german: "Fan", page: 224 },
            { english: "to cheer", german: "anfeuern, jubeln", page: 224 },
            { english: "training", german: "Training", page: 224 },
            { english: "to be/keep fit", german: "fit sein/bleiben", page: 224 },
            { english: "healthy", german: "gesund", page: 224 },
            { english: "gym", german: "Turnhalle, Fitnessstudio", page: 224 },
            { english: "to practise", german: "\u00fcben, trainieren", page: 224 },
            { english: "to beat", german: "schlagen, besiegen", page: 224 },
            { english: "to score", german: "Punkte erzielen, ein Tor schie\u00dfen", page: 224 },
            { english: "goal", german: "Tor, Ziel", page: 224 },
            { english: "referee", german: "Schiedsrichter/in", page: 224 },
            { english: "coach", german: "Trainer/in", page: 224 }
          ]
        },
        {
          id: "unit4-topic-a",
          title: "A \u2013 Sports & Equipment",
          pages: [225],
          entries: [
            { english: "racket", german: "Schl\u00e4ger (Tennis/Badminton)", page: 225 },
            { english: "bat", german: "Schl\u00e4ger (Cricket/Baseball)", page: 225 },
            { english: "court", german: "Spielfeld, Platz (Tennis)", page: 225 },
            { english: "pitch", german: "Spielfeld (Fu\u00dfball)", page: 225 },
            { english: "net", german: "Netz", page: 225 },
            { english: "to throw", german: "werfen", page: 225 },
            { english: "to catch", german: "fangen", page: 225 },
            { english: "to kick", german: "treten, kicken", page: 225 },
            { english: "cricket", german: "Cricket", page: 225 },
            { english: "rugby", german: "Rugby", page: 225 },
            { english: "athletics", german: "Leichtathletik", page: 225 }
          ]
        },
        {
          id: "unit4-topic-b",
          title: "B \u2013 Fitness & Training",
          pages: [226],
          entries: [
            { english: "to exercise", german: "trainieren, Sport treiben", page: 226 },
            { english: "push-up", german: "Liegest\u00fctz", page: 226 },
            { english: "sit-up", german: "Sit-up", page: 226 },
            { english: "to warm up", german: "sich aufw\u00e4rmen", page: 226 },
            { english: "to stretch", german: "dehnen, strecken", page: 226 },
            { english: "muscle", german: "Muskel", page: 226 },
            { english: "competition", german: "Wettbewerb", page: 226 },
            { english: "tournament", german: "Turnier", page: 226 },
            { english: "championship", german: "Meisterschaft", page: 226 }
          ]
        },
        {
          id: "unit4-station",
          title: "Station 4",
          pages: [227],
          entries: [
            { english: "record", german: "Rekord", page: 227 },
            { english: "to break a record", german: "einen Rekord brechen", page: 227 },
            { english: "medal", german: "Medaille", page: 227 },
            { english: "trophy", german: "Pokal, Troph\u00e4e", page: 227 },
            { english: "champion", german: "Meister/in, Champion", page: 227 }
          ]
        },
        {
          id: "unit4-story",
          title: "Story \u2013 Don\u0027t Call Me Ugly!",
          pages: [228],
          entries: [
            { english: "ugly", german: "h\u00e4sslich", page: 228 },
            { english: "determined", german: "entschlossen", page: 228 },
            { english: "challenge", german: "Herausforderung", page: 228 },
            { english: "to believe (in)", german: "glauben (an)", page: 228 },
            { english: "strength", german: "St\u00e4rke, Kraft", page: 228 },
            { english: "weakness", german: "Schw\u00e4che", page: 228 },
            { english: "proud", german: "stolz", page: 228 }
          ]
        },
        {
          id: "unit4-unittask",
          title: "Unit Task \u2013 Sports Day",
          pages: [228],
          entries: [
            { english: "sports day", german: "Sporttag", page: 228 },
            { english: "to compete", german: "wettkampfen, teilnehmen", page: 228 },
            { english: "to organize", german: "organisieren", page: 228 }
          ]
        },
        {
          id: "unit4-checkout",
          title: "Check-out",
          pages: [229],
          entries: [
            { english: "to improve", german: "verbessern", page: 229 },
            { english: "to keep going", german: "weitermachen", page: 229 },
            { english: "performance", german: "Leistung", page: 229 }
          ]
        }
      ]
    },
    {
      id: "focus2",
      title: "Focus 2 \u2013 Getting Around",
      icon: "\uD83D\uDE8C",
      subsections: [
        {
          id: "focus2-transport",
          title: "Transportation",
          pages: [230, 231, 232],
          entries: [
            { english: "bus", german: "Bus", page: 230 },
            { english: "train", german: "Zug", page: 230 },
            { english: "plane", german: "Flugzeug", page: 230 },
            { english: "car", german: "Auto", page: 230 },
            { english: "bike", german: "Fahrrad", page: 230 },
            { english: "on foot", german: "zu Fu\u00df", page: 230 },
            { english: "traffic", german: "Verkehr", page: 230 },
            { english: "road", german: "Stra\u00dfe", page: 230 },
            { english: "public transport", german: "\u00f6ffentliche Verkehrsmittel", page: 231 },
            { english: "tram", german: "Stra\u00dfenbahn", page: 231 },
            { english: "underground", german: "U-Bahn", page: 231 },
            { english: "ferry", german: "F\u00e4hre", page: 231 },
            { english: "timetable", german: "Fahrplan", page: 231 },
            { english: "ticket", german: "Fahrkarte", page: 232 },
            { english: "platform", german: "Bahnsteig", page: 232 },
            { english: "single (ticket)", german: "einfache Fahrkarte", page: 232 },
            { english: "return (ticket)", german: "R\u00fcckfahrkarte", page: 232 },
            { english: "to get on", german: "einsteigen", page: 232 },
            { english: "to get off", german: "aussteigen", page: 232 },
            { english: "delay", german: "Versp\u00e4tung", page: 232 }
          ]
        }
      ]
    },
    {
      id: "unit5",
      title: "Unit 5 \u2013 Stay in Touch",
      icon: "\uD83D\uDCF1",
      subsections: [
        {
          id: "unit5-checkin",
          title: "Check-in",
          pages: [233],
          entries: [
            { english: "to stay in touch", german: "in Kontakt bleiben", page: 233 },
            { english: "message", german: "Nachricht", page: 233 },
            { english: "to phone", german: "anrufen, telefonieren", page: 233 },
            { english: "mobile phone", german: "Handy, Mobiltelefon", page: 233 },
            { english: "email", german: "E-Mail", page: 233 },
            { english: "to send", german: "senden, schicken", page: 233 },
            { english: "to receive", german: "empfangen, erhalten", page: 233 },
            { english: "to reply", german: "antworten", page: 233 },
            { english: "letter", german: "Brief", page: 233 },
            { english: "stamp", german: "Briefmarke", page: 233 },
            { english: "address", german: "Adresse", page: 233 },
            { english: "postcard", german: "Postkarte", page: 233 },
            { english: "parcel", german: "Paket", page: 233 },
            { english: "video call", german: "Videoanruf", page: 233 }
          ]
        },
        {
          id: "unit5-topic-a",
          title: "A \u2013 Online Communication",
          pages: [234],
          entries: [
            { english: "to sign up", german: "sich anmelden", page: 234 },
            { english: "password", german: "Passwort", page: 234 },
            { english: "account", german: "Konto, Account", page: 234 },
            { english: "to log in", german: "sich einloggen", page: 234 },
            { english: "to log out", german: "sich ausloggen", page: 234 },
            { english: "to upload", german: "hochladen", page: 234 },
            { english: "to download", german: "herunterladen", page: 234 },
            { english: "to attach", german: "anh\u00e4ngen", page: 234 },
            { english: "attachment", german: "Anhang", page: 234 },
            { english: "subject", german: "Betreff", page: 234 },
            { english: "to forward", german: "weiterleiten", page: 234 }
          ]
        },
        {
          id: "unit5-topic-b",
          title: "B \u2013 Social Media & Safety",
          pages: [235],
          entries: [
            { english: "social network", german: "soziales Netzwerk", page: 235 },
            { english: "to comment", german: "kommentieren", page: 235 },
            { english: "to like", german: "liken, gef\u00e4llt mir", page: 235 },
            { english: "privacy", german: "Privatsph\u00e4re", page: 235 },
            { english: "private", german: "privat", page: 235 },
            { english: "safe", german: "sicher", page: 235 },
            { english: "cyberbullying", german: "Cybermobbing", page: 235 },
            { english: "stranger", german: "Fremde/r", page: 235 },
            { english: "to block", german: "blockieren, sperren", page: 235 },
            { english: "to report", german: "melden", page: 235 }
          ]
        },
        {
          id: "unit5-skills",
          title: "Skills \u2013 How to Write an Email",
          pages: [236],
          entries: [
            { english: "formal", german: "formell", page: 236 },
            { english: "informal", german: "informell", page: 236 },
            { english: "greeting", german: "Gru\u00df, Begr\u00fc\u00dfung", page: 236 },
            { english: "Dear ...", german: "Liebe/r ...", page: 236 },
            { english: "yours", german: "Dein/e, Ihr/e", page: 236 },
            { english: "to sign off", german: "sich verabschieden (schriftlich)", page: 236 }
          ]
        },
        {
          id: "unit5-story",
          title: "Story \u2013 The Gift of the Magi",
          pages: [237],
          entries: [
            { english: "gift", german: "Geschenk", page: 237 },
            { english: "poor", german: "arm", page: 237 },
            { english: "rich", german: "reich", page: 237 },
            { english: "to sacrifice", german: "opfern", page: 237 },
            { english: "wise", german: "weise, klug", page: 237 },
            { english: "precious", german: "wertvoll, kostbar", page: 237 },
            { english: "chain", german: "Kette", page: 237 },
            { english: "comb", german: "Kamm", page: 237 }
          ]
        },
        {
          id: "unit5-station",
          title: "Station 5 \u2013 Email Pen Pals",
          pages: [235, 236],
          entries: [
            { english: "pen pal", german: "Brieffreund/in", page: 235 },
            { english: "to introduce yourself", german: "sich vorstellen", page: 235 },
            { english: "hobby", german: "Hobby", page: 236 },
            { english: "to look forward to", german: "sich freuen auf", page: 236 },
            { english: "regards", german: "Gr\u00fc\u00dfe", page: 236 }
          ]
        },
        {
          id: "unit5-unittask",
          title: "Unit Task \u2013 Design an App",
          pages: [237],
          entries: [
            { english: "to design", german: "entwerfen, gestalten", page: 237 },
            { english: "app", german: "App", page: 237 },
            { english: "feature", german: "Funktion, Merkmal", page: 237 }
          ]
        }
      ]
    },
    {
      id: "focus3",
      title: "Focus 3 \u2013 The Celts and the Romans in Britain",
      icon: "\uD83C\uDFDB\uFE0F",
      subsections: [
        {
          id: "focus3-celts",
          title: "Celts & Romans",
          pages: [238, 239],
          entries: [
            { english: "Celt", german: "Kelte", page: 238 },
            { english: "Roman", german: "R\u00f6mer", page: 238 },
            { english: "to invade", german: "einfallen, eindringen", page: 238 },
            { english: "invasion", german: "Invasion, Einfall", page: 238 },
            { english: "empire", german: "Reich, Imperium", page: 238 },
            { english: "emperor", german: "Kaiser", page: 238 },
            { english: "soldier", german: "Soldat", page: 238 },
            { english: "army", german: "Armee, Heer", page: 238 },
            { english: "weapon", german: "Waffe", page: 238 },
            { english: "shield", german: "Schild", page: 239 },
            { english: "sword", german: "Schwert", page: 239 },
            { english: "fort", german: "Festung, Fort", page: 239 },
            { english: "wall", german: "Mauer, Wall", page: 239 },
            { english: "to build", german: "bauen", page: 239 },
            { english: "to defeat", german: "besiegen", page: 239 },
            { english: "battle", german: "Schlacht", page: 239 },
            { english: "to conquer", german: "erobern", page: 239 },
            { english: "tribe", german: "Stamm", page: 239 }
          ]
        }
      ]
    },
    {
      id: "unit6",
      title: "Unit 6 \u2013 Goodbye Greenwich",
      icon: "\uD83C\uDF09",
      subsections: [
        {
          id: "unit6-checkin",
          title: "Check-in",
          pages: [240],
          entries: [
            { english: "goodbye", german: "Auf Wiedersehen, Tsch\u00fcss", page: 240 },
            { english: "to miss", german: "vermissen", page: 240 },
            { english: "memory", german: "Erinnerung", page: 240 },
            { english: "to remember", german: "sich erinnern", page: 240 },
            { english: "to forget", german: "vergessen", page: 240 },
            { english: "experience", german: "Erfahrung, Erlebnis", page: 240 },
            { english: "to look back", german: "zur\u00fcckblicken", page: 240 },
            { english: "favourite", german: "Lieblings-", page: 240 },
            { english: "highlight", german: "H\u00f6hepunkt", page: 240 },
            { english: "term", german: "Halbjahr, Schulhalbjahr", page: 240 },
            { english: "to say goodbye", german: "sich verabschieden", page: 240 }
          ]
        },
        {
          id: "unit6-topic-a",
          title: "A \u2013 Memories & Experiences",
          pages: [241],
          entries: [
            { english: "diary", german: "Tagebuch", page: 241 },
            { english: "to grow up", german: "aufwachsen", page: 241 },
            { english: "childhood", german: "Kindheit", page: 241 },
            { english: "to change", german: "\u00e4ndern, ver\u00e4ndern", page: 241 },
            { english: "future", german: "Zukunft", page: 241 },
            { english: "past", german: "Vergangenheit", page: 241 },
            { english: "present", german: "Gegenwart", page: 241 },
            { english: "to promise", german: "versprechen", page: 241 },
            { english: "wish", german: "Wunsch", page: 241 },
            { english: "dream", german: "Traum", page: 241 }
          ]
        },
        {
          id: "unit6-station",
          title: "Station 6 \u2013 History of London",
          pages: [242],
          entries: [
            { english: "century", german: "Jahrhundert", page: 242 },
            { english: "medieval", german: "mittelalterlich", page: 242 },
            { english: "tower", german: "Turm", page: 242 },
            { english: "cathedral", german: "Kathedrale, Dom", page: 242 },
            { english: "bridge", german: "Br\u00fccke", page: 242 },
            { english: "palace", german: "Palast, Schloss", page: 242 },
            { english: "to restore", german: "restaurieren, wiederherstellen", page: 242 },
            { english: "landmark", german: "Wahrzeichen, Sehensw\u00fcrdigkeit", page: 242 }
          ]
        },
        {
          id: "unit6-skills",
          title: "Skills \u2013 Giving Information",
          pages: [243],
          entries: [
            { english: "leaflet", german: "Flyer, Prospekt", page: 243 },
            { english: "guided tour", german: "F\u00fchrung", page: 243 },
            { english: "opening hours", german: "\u00d6ffnungszeiten", page: 243 },
            { english: "admission", german: "Eintritt", page: 243 },
            { english: "entrance", german: "Eingang", page: 243 },
            { english: "exit", german: "Ausgang", page: 243 }
          ]
        }
      ]
    },
    {
      id: "ac3",
      title: "Across Cultures 3 \u2013 British Stories and Legends",
      icon: "\uD83D\uDC09",
      subsections: [
        {
          id: "ac3-prepositions",
          title: "Difficult Prepositions (at/in/on)",
          pages: [240],
          entries: [
            { english: "at 6 o'clock", german: "um 6 Uhr", page: 240 },
            { english: "at night", german: "in der Nacht", page: 240 },
            { english: "at the weekend", german: "am Wochenende", page: 240 },
            { english: "at school", german: "in der Schule", page: 240 },
            { english: "at work", german: "bei der Arbeit", page: 240 },
            { english: "at the doctor's", german: "beim Arzt", page: 240 },
            { english: "at home", german: "zu Hause", page: 240 },
            { english: "on Sunday", german: "am Sonntag, sonntags", page: 240 },
            { english: "on 7th July", german: "am 7. Juli", page: 240 },
            { english: "on the phone", german: "am Telefon", page: 240 },
            { english: "on holiday", german: "im Urlaub", page: 240 },
            { english: "on the road", german: "auf der Stra\u00dfe", page: 240 },
            { english: "in the street", german: "auf der Stra\u00dfe, in der Stra\u00dfe", page: 240 },
            { english: "in the world", german: "auf der Welt", page: 240 },
            { english: "in the photo", german: "auf dem Foto", page: 240 },
            { english: "in the afternoon", german: "am Nachmittag", page: 240 },
            { english: "in 2015", german: "im Jahr 2015", page: 240 },
            { english: "in April", german: "im April", page: 240 },
            { english: "in the end", german: "am Ende", page: 240 }
          ]
        },
        {
          id: "ac3-vocab",
          title: "Stories & Legends Vocabulary",
          pages: [240],
          entries: [
            { english: "to turn to", german: "sich verwandeln in, sich hinwenden zu", page: 240 },
            { english: "creative", german: "kreativ", page: 240 },
            { english: "diary entry", german: "Tagebucheintrag", page: 240 },
            { english: "sailboat", german: "Segelboot", page: 240 },
            { english: "villain", german: "B\u00f6sewicht, Schurke", page: 240 },
            { english: "magical", german: "magisch, Zauber-", page: 240 },
            { english: "wizard", german: "Zauberer", page: 240 },
            { english: "writer", german: "Autor/in, Schriftsteller/in, Verfasser/in", page: 240 },
            { english: "completely", german: "komplett, v\u00f6llig", page: 240 },
            { english: "ingredient", german: "Zutat", page: 240 }
          ]
        },
        {
          id: "ac3-legends",
          title: "Crime & Legends",
          pages: [241],
          entries: [
            { english: "knight", german: "Ritter", page: 241 },
            { english: "criminal", german: "Kriminelle/r, Verbrecher/in", page: 241 },
            { english: "power", german: "Kraft, Macht, St\u00e4rke", page: 241 },
            { english: "private detective", german: "Privatdetektiv/in", page: 241 },
            { english: "mysterious", german: "mysteri\u00f6s, geheimnisvoll", page: 241 },
            { english: "crime", german: "Verbrechen, Kriminalit\u00e4t", page: 241 },
            { english: "outlaw", german: "Gesetzlose/r, Geächtete/r", page: 241 },
            { english: "robber", german: "R\u00e4uber/in", page: 241 },
            { english: "the Round Table", german: "die Tafelrunde", page: 241 },
            { english: "to hide", german: "sich verstecken", page: 241 },
            { english: "the rich", german: "die Reichen", page: 241 },
            { english: "the poor", german: "die Armen", page: 241 },
            { english: "prop", german: "Requisite", page: 241 },
            { english: "crime story", german: "Krimi, Kriminalgeschichte", page: 241 },
            { english: "set", german: "Filmset, B\u00fchnenbild, Kulisse", page: 241 }
          ]
        }
      ]
    }
  ]
};
