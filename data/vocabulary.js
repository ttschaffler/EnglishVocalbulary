// Vocabulary data extracted from textbook (Green Line Bayern 2017 Band 2)
// Structure: sections > subsections > entries
// Each entry: { english, german, page }
// Irregular verbs also have: simplePast, pastParticiple

const VOCABULARY_DATA = {
  "sections": [
    {
      "id": "irregular-verbs",
      "title": "Irregular Verbs",
      "icon": "🔤",
      "subsections": [
        {
          "id": "irregular-verbs-a-h",
          "title": "Irregular Verbs (A–H)",
          "pages": [
            295
          ],
          "entries": [
            {
              "english": "be",
              "german": "sein",
              "simplePast": "was/were",
              "pastParticiple": "been",
              "page": 295
            },
            {
              "english": "become",
              "german": "werden",
              "simplePast": "became",
              "pastParticiple": "become",
              "page": 295
            },
            {
              "english": "begin",
              "german": "beginnen, anfangen",
              "simplePast": "began",
              "pastParticiple": "begun",
              "page": 295
            },
            {
              "english": "bet",
              "german": "wetten",
              "simplePast": "bet",
              "pastParticiple": "bet",
              "page": 295
            },
            {
              "english": "bite",
              "german": "beißen",
              "simplePast": "bit",
              "pastParticiple": "bitten",
              "page": 295
            },
            {
              "english": "blow",
              "german": "blasen, pusten",
              "simplePast": "blew",
              "pastParticiple": "blown",
              "page": 295
            },
            {
              "english": "break",
              "german": "zerbrechen, kaputt machen",
              "simplePast": "broke",
              "pastParticiple": "broken",
              "page": 295
            },
            {
              "english": "bring",
              "german": "bringen",
              "simplePast": "brought",
              "pastParticiple": "brought",
              "page": 295
            },
            {
              "english": "build",
              "german": "bauen",
              "simplePast": "built",
              "pastParticiple": "built",
              "page": 295
            },
            {
              "english": "burn",
              "german": "brennen",
              "simplePast": "burnt/burned",
              "pastParticiple": "burnt/burned",
              "page": 295
            },
            {
              "english": "buy",
              "german": "kaufen",
              "simplePast": "bought",
              "pastParticiple": "bought",
              "page": 295
            },
            {
              "english": "can",
              "german": "können",
              "simplePast": "could",
              "pastParticiple": "-",
              "page": 295
            },
            {
              "english": "choose",
              "german": "auswählen",
              "simplePast": "chose",
              "pastParticiple": "chosen",
              "page": 295
            },
            {
              "english": "come",
              "german": "kommen",
              "simplePast": "came",
              "pastParticiple": "come",
              "page": 295
            },
            {
              "english": "cost",
              "german": "kosten",
              "simplePast": "cost",
              "pastParticiple": "cost",
              "page": 295
            },
            {
              "english": "cut",
              "german": "schneiden",
              "simplePast": "cut",
              "pastParticiple": "cut",
              "page": 295
            },
            {
              "english": "dig",
              "german": "graben",
              "simplePast": "dug",
              "pastParticiple": "dug",
              "page": 295
            },
            {
              "english": "do",
              "german": "machen, tun",
              "simplePast": "did",
              "pastParticiple": "done",
              "page": 295
            },
            {
              "english": "draw",
              "german": "zeichnen",
              "simplePast": "drew",
              "pastParticiple": "drawn",
              "page": 295
            },
            {
              "english": "drink",
              "german": "trinken",
              "simplePast": "drank",
              "pastParticiple": "drunk",
              "page": 295
            },
            {
              "english": "drive",
              "german": "fahren",
              "simplePast": "drove",
              "pastParticiple": "driven",
              "page": 295
            },
            {
              "english": "eat",
              "german": "essen",
              "simplePast": "ate",
              "pastParticiple": "eaten",
              "page": 295
            },
            {
              "english": "fall",
              "german": "fallen",
              "simplePast": "fell",
              "pastParticiple": "fallen",
              "page": 295
            },
            {
              "english": "feed",
              "german": "füttern, ernähren",
              "simplePast": "fed",
              "pastParticiple": "fed",
              "page": 295
            },
            {
              "english": "feel",
              "german": "fühlen",
              "simplePast": "felt",
              "pastParticiple": "felt",
              "page": 295
            },
            {
              "english": "fight",
              "german": "kämpfen, sich streiten",
              "simplePast": "fought",
              "pastParticiple": "fought",
              "page": 295
            },
            {
              "english": "find",
              "german": "finden",
              "simplePast": "found",
              "pastParticiple": "found",
              "page": 295
            },
            {
              "english": "fly",
              "german": "fliegen",
              "simplePast": "flew",
              "pastParticiple": "flown",
              "page": 295
            },
            {
              "english": "forget",
              "german": "vergessen",
              "simplePast": "forgot",
              "pastParticiple": "forgotten",
              "page": 295
            },
            {
              "english": "forgive",
              "german": "vergeben, verzeihen",
              "simplePast": "forgave",
              "pastParticiple": "forgiven",
              "page": 295
            },
            {
              "english": "get",
              "german": "bekommen",
              "simplePast": "got",
              "pastParticiple": "got/gotten",
              "page": 295
            },
            {
              "english": "give",
              "german": "geben",
              "simplePast": "gave",
              "pastParticiple": "given",
              "page": 295
            },
            {
              "english": "go",
              "german": "gehen",
              "simplePast": "went",
              "pastParticiple": "gone",
              "page": 295
            },
            {
              "english": "grow",
              "german": "wachsen, anbauen, züchten",
              "simplePast": "grew",
              "pastParticiple": "grown",
              "page": 295
            },
            {
              "english": "hang",
              "german": "hängen",
              "simplePast": "hung",
              "pastParticiple": "hung",
              "page": 295
            },
            {
              "english": "have",
              "german": "haben",
              "simplePast": "had",
              "pastParticiple": "had",
              "page": 295
            },
            {
              "english": "hide",
              "german": "verstecken",
              "simplePast": "hid",
              "pastParticiple": "hidden",
              "page": 295
            },
            {
              "english": "hit",
              "german": "schlagen, treffen",
              "simplePast": "hit",
              "pastParticiple": "hit",
              "page": 295
            },
            {
              "english": "hold",
              "german": "halten",
              "simplePast": "held",
              "pastParticiple": "held",
              "page": 295
            },
            {
              "english": "hurt",
              "german": "verletzen, sich weh tun",
              "simplePast": "hurt",
              "pastParticiple": "hurt",
              "page": 295
            }
          ]
        },
        {
          "id": "irregular-verbs-k-z",
          "title": "Irregular Verbs (K–Z)",
          "pages": [
            296
          ],
          "entries": [
            {
              "english": "know",
              "german": "kennen, wissen",
              "simplePast": "knew",
              "pastParticiple": "known",
              "page": 296
            },
            {
              "english": "learn",
              "german": "lernen",
              "simplePast": "learnt/learned",
              "pastParticiple": "learnt/learned",
              "page": 296
            },
            {
              "english": "leave",
              "german": "verlassen",
              "simplePast": "left",
              "pastParticiple": "left",
              "page": 296
            },
            {
              "english": "let",
              "german": "lassen",
              "simplePast": "let",
              "pastParticiple": "let",
              "page": 296
            },
            {
              "english": "lie",
              "german": "liegen",
              "simplePast": "lay",
              "pastParticiple": "lain",
              "page": 296
            },
            {
              "english": "lose",
              "german": "verlieren",
              "simplePast": "lost",
              "pastParticiple": "lost",
              "page": 296
            },
            {
              "english": "make",
              "german": "machen, tun",
              "simplePast": "made",
              "pastParticiple": "made",
              "page": 296
            },
            {
              "english": "mean",
              "german": "meinen",
              "simplePast": "meant",
              "pastParticiple": "meant",
              "page": 296
            },
            {
              "english": "meet",
              "german": "treffen",
              "simplePast": "met",
              "pastParticiple": "met",
              "page": 296
            },
            {
              "english": "pay",
              "german": "bezahlen",
              "simplePast": "paid",
              "pastParticiple": "paid",
              "page": 296
            },
            {
              "english": "put",
              "german": "legen, setzen, stellen",
              "simplePast": "put",
              "pastParticiple": "put",
              "page": 296
            },
            {
              "english": "read",
              "german": "lesen",
              "simplePast": "read",
              "pastParticiple": "read",
              "page": 296
            },
            {
              "english": "ride",
              "german": "reiten",
              "simplePast": "rode",
              "pastParticiple": "ridden",
              "page": 296
            },
            {
              "english": "ring",
              "german": "klingeln, läuten",
              "simplePast": "rang",
              "pastParticiple": "rung",
              "page": 296
            },
            {
              "english": "run",
              "german": "laufen, rennen",
              "simplePast": "ran",
              "pastParticiple": "run",
              "page": 296
            },
            {
              "english": "say",
              "german": "sagen",
              "simplePast": "said",
              "pastParticiple": "said",
              "page": 296
            },
            {
              "english": "see",
              "german": "sehen",
              "simplePast": "saw",
              "pastParticiple": "seen",
              "page": 296
            },
            {
              "english": "sell",
              "german": "verkaufen",
              "simplePast": "sold",
              "pastParticiple": "sold",
              "page": 296
            },
            {
              "english": "send",
              "german": "senden, verschicken",
              "simplePast": "sent",
              "pastParticiple": "sent",
              "page": 296
            },
            {
              "english": "set",
              "german": "setzen, einrichten",
              "simplePast": "set",
              "pastParticiple": "set",
              "page": 296
            },
            {
              "english": "sew",
              "german": "nähen",
              "simplePast": "sewed",
              "pastParticiple": "sewn/sewed",
              "page": 296
            },
            {
              "english": "shake",
              "german": "schütteln",
              "simplePast": "shook",
              "pastParticiple": "shaken",
              "page": 296
            },
            {
              "english": "show",
              "german": "zeigen",
              "simplePast": "showed",
              "pastParticiple": "shown",
              "page": 296
            },
            {
              "english": "shut",
              "german": "schließen",
              "simplePast": "shut",
              "pastParticiple": "shut",
              "page": 296
            },
            {
              "english": "sing",
              "german": "singen",
              "simplePast": "sang",
              "pastParticiple": "sung",
              "page": 296
            },
            {
              "english": "sit",
              "german": "sitzen",
              "simplePast": "sat",
              "pastParticiple": "sat",
              "page": 296
            },
            {
              "english": "sleep",
              "german": "schlafen",
              "simplePast": "slept",
              "pastParticiple": "slept",
              "page": 296
            },
            {
              "english": "smell",
              "german": "riechen, duften",
              "simplePast": "smelt/smelled",
              "pastParticiple": "smelt/smelled",
              "page": 296
            },
            {
              "english": "speak",
              "german": "sprechen",
              "simplePast": "spoke",
              "pastParticiple": "spoken",
              "page": 296
            },
            {
              "english": "spell",
              "german": "buchstabieren",
              "simplePast": "spelt/spelled",
              "pastParticiple": "spelt/spelled",
              "page": 296
            },
            {
              "english": "spend",
              "german": "ausgeben, verbringen",
              "simplePast": "spent",
              "pastParticiple": "spent",
              "page": 296
            },
            {
              "english": "stand",
              "german": "stehen",
              "simplePast": "stood",
              "pastParticiple": "stood",
              "page": 296
            },
            {
              "english": "steal",
              "german": "stehlen",
              "simplePast": "stole",
              "pastParticiple": "stolen",
              "page": 296
            },
            {
              "english": "swim",
              "german": "schwimmen",
              "simplePast": "swam",
              "pastParticiple": "swum",
              "page": 296
            },
            {
              "english": "take",
              "german": "nehmen",
              "simplePast": "took",
              "pastParticiple": "taken",
              "page": 296
            },
            {
              "english": "teach",
              "german": "unterrichten, lehren, beibringen",
              "simplePast": "taught",
              "pastParticiple": "taught",
              "page": 296
            },
            {
              "english": "tell",
              "german": "erzählen, sagen",
              "simplePast": "told",
              "pastParticiple": "told",
              "page": 296
            },
            {
              "english": "think",
              "german": "nachdenken, glauben",
              "simplePast": "thought",
              "pastParticiple": "thought",
              "page": 296
            },
            {
              "english": "throw",
              "german": "werfen",
              "simplePast": "threw",
              "pastParticiple": "thrown",
              "page": 296
            },
            {
              "english": "understand",
              "german": "verstehen",
              "simplePast": "understood",
              "pastParticiple": "understood",
              "page": 296
            },
            {
              "english": "wake",
              "german": "wecken, aufwachen",
              "simplePast": "woke",
              "pastParticiple": "woken",
              "page": 296
            },
            {
              "english": "wear",
              "german": "anhaben, tragen",
              "simplePast": "wore",
              "pastParticiple": "worn",
              "page": 296
            },
            {
              "english": "win",
              "german": "gewinnen",
              "simplePast": "won",
              "pastParticiple": "won",
              "page": 296
            },
            {
              "english": "write",
              "german": "schreiben",
              "simplePast": "wrote",
              "pastParticiple": "written",
              "page": 296
            }
          ]
        }
      ]
    },
    {
      "id": "unit1",
      "title": "Unit 1 – My Friends and I",
      "icon": "👫",
      "subsections": [
        {
          "id": "unit1-checkin",
          "title": "Check-in",
          "pages": [
            195
          ],
          "entries": [
            {
              "english": "embarrassing",
              "german": "peinlich",
              "page": 195
            },
            {
              "english": "to end up",
              "german": "enden, landen",
              "page": 195
            },
            {
              "english": "yearbook",
              "german": "Jahrbuch",
              "page": 195
            },
            {
              "english": "LOL (laughing out loud)",
              "german": "LOL",
              "page": 195
            },
            {
              "english": "real",
              "german": "echt, richtig, wirklich",
              "page": 195
            },
            {
              "english": "show-off",
              "german": "Angeber/in",
              "page": 195
            },
            {
              "english": "art",
              "german": "Kunst",
              "page": 195
            },
            {
              "english": "what a ...",
              "german": "was für ein/e",
              "page": 195
            },
            {
              "english": "home town",
              "german": "Heimatstadt",
              "page": 195
            },
            {
              "english": "likes and dislikes",
              "german": "Vorlieben und Abneigungen",
              "page": 195
            },
            {
              "english": "huge",
              "german": "riesig, riesengroß, gewaltig",
              "page": 195
            },
            {
              "english": "field",
              "german": "Feld, Wiese, Weide, Acker",
              "page": 195
            },
            {
              "english": "hill",
              "german": "Berg, Hügel",
              "page": 195
            },
            {
              "english": "outdoors",
              "german": "draußen, im Freien",
              "page": 195
            },
            {
              "english": "indoors",
              "german": "drinnen, im Haus",
              "page": 195
            },
            {
              "english": "to hang out (with)",
              "german": "rumhängen, sich herumtreffen",
              "page": 195
            },
            {
              "english": "mall",
              "german": "Einkaufszentrum",
              "page": 195
            },
            {
              "english": "eagle",
              "german": "Adler",
              "page": 195
            },
            {
              "english": "feeling",
              "german": "Gefühl",
              "page": 195
            },
            {
              "english": "embarrassed",
              "german": "verlegen",
              "page": 195
            },
            {
              "english": "nervous",
              "german": "nervös, aufgeregt",
              "page": 195
            },
            {
              "english": "proud (of)",
              "german": "stolz (auf)",
              "page": 195
            },
            {
              "english": "report",
              "german": "Bericht, Meldung",
              "page": 195
            },
            {
              "english": "during",
              "german": "während",
              "page": 195
            },
            {
              "english": "LOL (= laughing out loud)",
              "german": "LOL",
              "page": 195
            },
            {
              "english": "what a …",
              "german": "was für ein/-e …; welch ein/-e …",
              "page": 195
            },
            {
              "english": "to hang out (with) (infml)",
              "german": "rumhängen (mit); sich herumtreiben (mit); sich treffen (mit)",
              "page": 195
            },
            {
              "english": "during (+ noun)",
              "german": "während (+ Nomen)",
              "page": 195
            }
          ]
        },
        {
          "id": "unit1-topic-a",
          "title": "A – Where I Live",
          "pages": [
            196
          ],
          "entries": [
            {
              "english": "to text",
              "german": "eine SMS schreiben",
              "page": 196
            },
            {
              "english": "to blog",
              "german": "bloggen",
              "page": 196
            },
            {
              "english": "to chat",
              "german": "chatten",
              "page": 196
            },
            {
              "english": "to post",
              "german": "posten, veröffentlichen",
              "page": 196
            },
            {
              "english": "social media",
              "german": "soziale Medien",
              "page": 196
            },
            {
              "english": "profile",
              "german": "Profil",
              "page": 196
            },
            {
              "english": "nickname",
              "german": "Spitzname",
              "page": 196
            },
            {
              "english": "username",
              "german": "Benutzername",
              "page": 196
            },
            {
              "english": "farm",
              "german": "Bauernhof",
              "page": 196
            },
            {
              "english": "village",
              "german": "Dorf",
              "page": 196
            },
            {
              "english": "river",
              "german": "Fluss",
              "page": 196
            },
            {
              "english": "path",
              "german": "Weg, Pfad",
              "page": 196
            },
            {
              "english": "wood",
              "german": "Wald, Wäldchen",
              "page": 196
            },
            {
              "english": "lake",
              "german": "See",
              "page": 196
            }
          ]
        },
        {
          "id": "unit1-skills",
          "title": "Skills – How to Use a Dictionary",
          "pages": [
            196,
            197
          ],
          "entries": [
            {
              "english": "headword",
              "german": "Stichwort",
              "page": 196
            },
            {
              "english": "entry",
              "german": "Eintrag",
              "page": 196
            },
            {
              "english": "abbreviation",
              "german": "Abkürzung",
              "page": 196
            },
            {
              "english": "noun",
              "german": "Nomen, Substantiv",
              "page": 196
            },
            {
              "english": "countable",
              "german": "zählbar",
              "page": 196
            },
            {
              "english": "uncountable",
              "german": "nicht zählbar",
              "page": 196
            },
            {
              "english": "meaning",
              "german": "Bedeutung",
              "page": 197
            },
            {
              "english": "pronunciation",
              "german": "Aussprache",
              "page": 197
            },
            {
              "english": "example",
              "german": "Beispiel",
              "page": 197
            },
            {
              "english": "electronic",
              "german": "elektronisch",
              "page": 196
            },
            {
              "english": "search",
              "german": "die Suche; Such-",
              "page": 196
            },
            {
              "english": "to look up",
              "german": "nachschlagen; nachschauen",
              "page": 196
            },
            {
              "english": "time",
              "german": "Mal",
              "page": 196
            }
          ]
        },
        {
          "id": "unit1-story",
          "title": "Story – What a Wonderful World",
          "pages": [
            197
          ],
          "entries": [
            {
              "english": "wonderful",
              "german": "wunderbar, wunderschön",
              "page": 197
            },
            {
              "english": "world",
              "german": "Welt",
              "page": 197
            },
            {
              "english": "colourful",
              "german": "bunt, farbenfroh",
              "page": 197
            },
            {
              "english": "sky",
              "german": "Himmel",
              "page": 197
            },
            {
              "english": "rainbow",
              "german": "Regenbogen",
              "page": 197
            },
            {
              "english": "amazing",
              "german": "erstaunlich, fantastisch",
              "page": 197
            },
            {
              "english": "butterfly",
              "german": "Schmetterling",
              "page": 197
            },
            {
              "english": "nature",
              "german": "Natur",
              "page": 197
            },
            {
              "english": "beautiful",
              "german": "schön, wunderschön",
              "page": 197
            },
            {
              "english": "scenery",
              "german": "Landschaft",
              "page": 197
            },
            {
              "english": "forest",
              "german": "Wald",
              "page": 197
            },
            {
              "english": "valley",
              "german": "Tal",
              "page": 197
            },
            {
              "english": "cloud",
              "german": "Wolke",
              "page": 197
            },
            {
              "english": "tree",
              "german": "Baum",
              "page": 197
            },
            {
              "english": "news (sg)",
              "german": "die Nachricht(en); die Neuigkeit(en)",
              "page": 197
            },
            {
              "english": "title",
              "german": "der Titel; die Überschrift",
              "page": 197
            },
            {
              "english": "to feel",
              "german": "sich anfühlen",
              "page": 197
            },
            {
              "english": "to enter",
              "german": "hineingehen; betreten; eintreten; hier: mitmachen",
              "page": 197
            },
            {
              "english": "to be surprised",
              "german": "überrascht sein",
              "page": 197
            },
            {
              "english": "himself",
              "german": "er/sich (selbst); selber",
              "page": 197
            },
            {
              "english": "dirty",
              "german": "dreckig; schmutzig",
              "page": 197
            },
            {
              "english": "flower",
              "german": "die Blume",
              "page": 197
            },
            {
              "english": "to notice",
              "german": "bemerken; wahrnehmen",
              "page": 197
            },
            {
              "english": "drawing",
              "german": "die Zeichnung",
              "page": 197
            },
            {
              "english": "could",
              "german": "konnte/-n; könnte/-n",
              "page": 197
            },
            {
              "english": "confident",
              "german": "selbstsicher; selbstbewusst",
              "page": 197
            },
            {
              "english": "moment",
              "german": "der Moment; der Augenblick",
              "page": 197
            },
            {
              "english": "to leave",
              "german": "lassen; verlassen; abfahren; losgehen",
              "page": 197
            },
            {
              "english": "eye",
              "german": "das Auge",
              "page": 197
            },
            {
              "english": "quickly",
              "german": "schnell",
              "page": 197
            },
            {
              "english": "bee",
              "german": "die Biene",
              "page": 197
            },
            {
              "english": "clever",
              "german": "schlau; klug",
              "page": 197
            },
            {
              "english": "finished",
              "german": "fertig",
              "page": 197
            },
            {
              "english": "shocked",
              "german": "schockiert; geschockt",
              "page": 197
            },
            {
              "english": "to steal",
              "german": "stehlen",
              "page": 197
            },
            {
              "english": "to calm down",
              "german": "sich beruhigen",
              "page": 197
            },
            {
              "english": "to push",
              "german": "stoßen; schieben; schubsen",
              "page": 197
            },
            {
              "english": "to turn (a)round",
              "german": "(sich) umdrehen; wenden",
              "page": 197
            },
            {
              "english": "upset",
              "german": "aufgebracht; bestürzt",
              "page": 197
            },
            {
              "english": "idiot",
              "german": "der Idiot / die Idiotin",
              "page": 197
            },
            {
              "english": "should",
              "german": "sollte; solltest; sollten; solltet",
              "page": 197
            },
            {
              "english": "each other",
              "german": "einander; sich; sich gegenseitig",
              "page": 197
            },
            {
              "english": "to take out",
              "german": "herausnehmen",
              "page": 197
            },
            {
              "english": "paper",
              "german": "das Papier",
              "page": 197
            },
            {
              "english": "ready",
              "german": "fertig; bereit",
              "page": 197
            },
            {
              "english": "beginning",
              "german": "der Anfang; der Beginn",
              "page": 197
            },
            {
              "english": "related",
              "german": "verwandt; bezogen",
              "page": 197
            },
            {
              "english": "strong",
              "german": "stark",
              "page": 197
            },
            {
              "english": "drama",
              "german": "das Theater; das Drama",
              "page": 197
            },
            {
              "english": "to hate",
              "german": "hassen; nicht mögen",
              "page": 197
            }
          ]
        },
        {
          "id": "unit1-topic-b",
          "title": "B – Reading & Books",
          "pages": [
            198
          ],
          "entries": [
            {
              "english": "bookshop",
              "german": "Buchhandlung, Buchladen",
              "page": 198
            },
            {
              "english": "especially",
              "german": "besonders",
              "page": 198
            },
            {
              "english": "adventure",
              "german": "Abenteuer",
              "page": 198
            },
            {
              "english": "scary",
              "german": "gruselig, unheimlich",
              "page": 198
            },
            {
              "english": "series",
              "german": "Serie, Reihe",
              "page": 198
            },
            {
              "english": "recommendation",
              "german": "Empfehlung",
              "page": 198
            },
            {
              "english": "brilliant",
              "german": "brillant, großartig",
              "page": 198
            },
            {
              "english": "author",
              "german": "Autor, Autorin",
              "page": 198
            },
            {
              "english": "to imagine",
              "german": "sich vorstellen",
              "page": 198
            },
            {
              "english": "character",
              "german": "Figur, Charakter",
              "page": 198
            },
            {
              "english": "exciting",
              "german": "aufregend, spannend",
              "page": 198
            },
            {
              "english": "boring",
              "german": "langweilig",
              "page": 198
            },
            {
              "english": "funny",
              "german": "lustig, witzig",
              "page": 198
            },
            {
              "english": "interesting",
              "german": "interessant",
              "page": 198
            },
            {
              "english": "to recommend",
              "german": "empfehlen",
              "page": 198
            },
            {
              "english": "bookworm",
              "german": "Bücherwürm",
              "page": 198
            }
          ]
        },
        {
          "id": "unit1-station",
          "title": "Station 1",
          "pages": [
            198,
            199
          ],
          "entries": [
            {
              "english": "to agree",
              "german": "zustimmen",
              "page": 198
            },
            {
              "english": "to disagree",
              "german": "nicht zustimmen",
              "page": 198
            },
            {
              "english": "reason",
              "german": "Grund",
              "page": 198
            },
            {
              "english": "to share",
              "german": "teilen",
              "page": 198
            },
            {
              "english": "to add",
              "german": "hinzufügen",
              "page": 199
            },
            {
              "english": "decision",
              "german": "Entscheidung",
              "page": 199
            },
            {
              "english": "to argue",
              "german": "streiten",
              "page": 199
            },
            {
              "english": "to prepare",
              "german": "vorbereiten",
              "page": 199
            },
            {
              "english": "recipe",
              "german": "Rezept",
              "page": 199
            },
            {
              "english": "ingredient",
              "german": "Zutat",
              "page": 199
            },
            {
              "english": "to bake",
              "german": "backen",
              "page": 199
            },
            {
              "english": "delicious",
              "german": "lecker, köstlich",
              "page": 199
            },
            {
              "english": "fishing",
              "german": "das Angeln; das Fischen; die Fischerei",
              "page": 198
            }
          ]
        },
        {
          "id": "unit1-s1",
          "title": "S1 – Story Part 1",
          "pages": [
            196
          ],
          "entries": [
            {
              "english": "actually",
              "german": "tatsächlich; wirklich; eigentlich",
              "page": 196
            },
            {
              "english": "barrel",
              "german": "das Fass; die Tonne",
              "page": 196
            },
            {
              "english": "race",
              "german": "der Wettlauf; das Rennen",
              "page": 196
            },
            {
              "english": "daughter",
              "german": "die Tochter",
              "page": 196
            },
            {
              "english": "wheelchair",
              "german": "der Rollstuhl",
              "page": 196
            },
            {
              "english": "to teach",
              "german": "unterrichten; lehren; beibringen",
              "page": 196
            },
            {
              "english": "to tease sb",
              "german": "jmdn. aufziehen; jmdn. hänseln; jmdn. ärgern",
              "page": 196
            },
            {
              "english": "latest",
              "german": "neueste/-r/-s",
              "page": 196
            },
            {
              "english": "movie",
              "german": "der Film",
              "page": 196
            },
            {
              "english": "movie theater (AE)",
              "german": "das Kino (amerik.)",
              "page": 196
            },
            {
              "english": "",
              "german": "There's nothing more exciting than …   Es gibt nichts Spannenderes als …",
              "page": 196
            },
            {
              "english": "bird",
              "german": "der Vogel",
              "page": 196
            },
            {
              "english": "air",
              "german": "die Luft",
              "page": 196
            },
            {
              "english": "a bit",
              "german": "ein bisschen; ein wenig",
              "page": 196
            },
            {
              "english": "worried",
              "german": "beunruhigt; besorgt",
              "page": 196
            },
            {
              "english": "to move (house)",
              "german": "umziehen",
              "page": 196
            },
            {
              "english": "to worry",
              "german": "sich Sorgen machen",
              "page": 196
            },
            {
              "english": "plan",
              "german": "der Plan; der Entwurf",
              "page": 196
            },
            {
              "english": "life, lives (pl)",
              "german": "das Leben",
              "page": 196
            },
            {
              "english": "to have to",
              "german": "müssen",
              "page": 196
            },
            {
              "english": "to tell",
              "german": "erkennen; wissen",
              "page": 196
            },
            {
              "english": "to point",
              "german": "zeigen",
              "page": 196
            },
            {
              "english": "bench",
              "german": "die Bank; die Sitzbank",
              "page": 196
            }
          ]
        },
        {
          "id": "unit1-s2",
          "title": "S2 – Story Part 2",
          "pages": [
            197
          ],
          "entries": [
            {
              "english": "youth",
              "german": "die Jugend",
              "page": 197
            },
            {
              "english": "close",
              "german": "nahe",
              "page": 197
            },
            {
              "english": "almost",
              "german": "fast; beinahe",
              "page": 197
            },
            {
              "english": "judge",
              "german": "der Juror / die Jurorin; der Richter / die Richterin",
              "page": 197
            },
            {
              "english": "second",
              "german": "die Sekunde",
              "page": 197
            },
            {
              "english": "turn",
              "german": "die Wendung; die Drehung",
              "page": 197
            },
            {
              "english": "to get",
              "german": "werden",
              "page": 197
            },
            {
              "english": "to fall off",
              "german": "herunterfallen; hinunterfallen",
              "page": 197
            },
            {
              "english": "mad",
              "german": "verrückt; wütend",
              "page": 197
            },
            {
              "english": "What a shame!",
              "german": "Wie schade!",
              "page": 197
            },
            {
              "english": "to train",
              "german": "trainieren",
              "page": 197
            },
            {
              "english": "to fix",
              "german": "reparieren; befestigen",
              "page": 197
            },
            {
              "english": "positive",
              "german": "positiv",
              "page": 197
            },
            {
              "english": "negative",
              "german": "negativ; verneint",
              "page": 197
            },
            {
              "english": "up",
              "german": "hinauf; (nach) oben",
              "page": 197
            },
            {
              "english": "watch",
              "german": "die Armbanduhr",
              "page": 197
            },
            {
              "english": "to be interested (in)",
              "german": "interessiert sein (an); sich interessieren (für)",
              "page": 197
            },
            {
              "english": "I see.",
              "german": "Ich verstehe.; Aha; Ach so!",
              "page": 197
            },
            {
              "english": "I mean",
              "german": "ich meine",
              "page": 197
            },
            {
              "english": "both",
              "german": "beide",
              "page": 197
            }
          ]
        }
      ]
    },
    {
      "id": "unit2",
      "title": "Unit 2 – The Sunshine State",
      "icon": "☀️",
      "subsections": [
        {
          "id": "unit2-checkin",
          "title": "Check-in",
          "pages": [
            203
          ],
          "entries": [
            {
              "english": "sunshine",
              "german": "Sonnenschein",
              "page": 203
            },
            {
              "english": "state",
              "german": "Staat, Bundesstaat",
              "page": 203
            },
            {
              "english": "beach",
              "german": "Strand",
              "page": 203
            },
            {
              "english": "palm tree",
              "german": "Palme",
              "page": 203
            },
            {
              "english": "theme park",
              "german": "Freizeitpark, Themenpark",
              "page": 203
            },
            {
              "english": "alligator",
              "german": "Alligator",
              "page": 203
            },
            {
              "english": "dolphin",
              "german": "Delfin",
              "page": 203
            },
            {
              "english": "manatee",
              "german": "Seekuh, Manati",
              "page": 203
            },
            {
              "english": "swamp",
              "german": "Sumpf",
              "page": 203
            },
            {
              "english": "ocean",
              "german": "Ozean, Meer",
              "page": 203
            },
            {
              "english": "surfing",
              "german": "Surfen",
              "page": 203
            },
            {
              "english": "kayaking",
              "german": "Kajakfahren",
              "page": 203
            },
            {
              "english": "grandpa (AE)",
              "german": "der Opa",
              "page": 203
            },
            {
              "english": "Latin",
              "german": "lateinamerikanisch; lateinamerikanisch",
              "page": 203
            },
            {
              "english": "roller coaster",
              "german": "die Achterbahn",
              "page": 203
            },
            {
              "english": "to bet",
              "german": "wetten",
              "page": 203
            },
            {
              "english": "take-off",
              "german": "der Start; das Abheben",
              "page": 203
            },
            {
              "english": "perfect",
              "german": "perfekt; vollkommen",
              "page": 203
            },
            {
              "english": "Cuban",
              "german": "der Kubaner / die Kubanerin; kubanisch",
              "page": 203
            },
            {
              "english": "musician",
              "german": "der Musiker / die Musikerin",
              "page": 203
            },
            {
              "english": "to kill",
              "german": "töten; umbringen",
              "page": 203
            },
            {
              "english": "blossom",
              "german": "die Blüte",
              "page": 203
            },
            {
              "english": "panther",
              "german": "der Panther; der Puma",
              "page": 203
            },
            {
              "english": "to take it easy",
              "german": "immer ruhig bleiben; auf der faulen Haut liegen",
              "page": 203
            },
            {
              "english": "five-hour",
              "german": "fünfstündig",
              "page": 203
            },
            {
              "english": "overnight",
              "german": "über Nacht",
              "page": 203
            },
            {
              "english": "That's fine with me.",
              "german": "Das ist in Ordnung für mich.",
              "page": 203
            },
            {
              "english": "somewhere",
              "german": "irgendwo; irgendwohin",
              "page": 203
            },
            {
              "english": "I gotta (infml)",
              "german": "ich muss",
              "page": 203
            }
          ]
        },
        {
          "id": "unit2-topic-a",
          "title": "A – Travel & Airport",
          "pages": [
            204
          ],
          "entries": [
            {
              "english": "airport",
              "german": "Flughafen",
              "page": 204
            },
            {
              "english": "flight",
              "german": "Flug",
              "page": 204
            },
            {
              "english": "passenger",
              "german": "Passagier, Fluggast",
              "page": 204
            },
            {
              "english": "suitcase",
              "german": "Koffer",
              "page": 204
            },
            {
              "english": "to pack",
              "german": "packen",
              "page": 204
            },
            {
              "english": "boarding pass",
              "german": "Bordkarte",
              "page": 204
            },
            {
              "english": "gate",
              "german": "Gate, Flugsteig",
              "page": 204
            },
            {
              "english": "to take off",
              "german": "abheben, starten",
              "page": 204
            },
            {
              "english": "to land",
              "german": "landen",
              "page": 204
            },
            {
              "english": "luggage",
              "german": "Gepäck",
              "page": 204
            },
            {
              "english": "postcard",
              "german": "Postkarte",
              "page": 204
            },
            {
              "english": "holiday",
              "german": "Urlaub, Ferien",
              "page": 204
            },
            {
              "english": "trip",
              "german": "Reise, Ausflug",
              "page": 204
            },
            {
              "english": "to save (up)",
              "german": "sparen",
              "page": 204
            },
            {
              "english": "pocket money",
              "german": "Taschengeld",
              "page": 204
            },
            {
              "english": "already",
              "german": "schon, bereits",
              "page": 204
            },
            {
              "english": "excitement",
              "german": "Aufregung, Begeisterung",
              "page": 204
            }
          ]
        },
        {
          "id": "unit2-topic-b",
          "title": "B – History & Exploration",
          "pages": [
            205,
            206,
            207,
            208
          ],
          "entries": [
            {
              "english": "settler",
              "german": "Siedler",
              "page": 205
            },
            {
              "english": "explorer",
              "german": "Entdecker, Forscher",
              "page": 205
            },
            {
              "english": "to conquer",
              "german": "erobern",
              "page": 205
            },
            {
              "english": "colony",
              "german": "Kolonie",
              "page": 205
            },
            {
              "english": "century",
              "german": "Jahrhundert",
              "page": 205
            },
            {
              "english": "population",
              "german": "Bevölkerung",
              "page": 205
            },
            {
              "english": "Native American",
              "german": "Ureinwohner Amerikas",
              "page": 205
            },
            {
              "english": "to arrive",
              "german": "ankommen",
              "page": 206
            },
            {
              "english": "journey",
              "german": "Reise",
              "page": 206
            },
            {
              "english": "dangerous",
              "german": "gefährlich",
              "page": 206
            },
            {
              "english": "gold",
              "german": "Gold",
              "page": 206
            },
            {
              "english": "silver",
              "german": "Silber",
              "page": 206
            },
            {
              "english": "map",
              "german": "Karte, Landkarte",
              "page": 206
            },
            {
              "english": "sailor",
              "german": "Seemann, Matrose",
              "page": 206
            },
            {
              "english": "port",
              "german": "Hafen",
              "page": 206
            },
            {
              "english": "route",
              "german": "Route, Weg",
              "page": 206
            },
            {
              "english": "to trade",
              "german": "handeln",
              "page": 206
            },
            {
              "english": "to exist",
              "german": "existieren, bestehen",
              "page": 208
            },
            {
              "english": "to cook",
              "german": "kochen",
              "page": 208
            },
            {
              "english": "class (pl. classes)",
              "german": "Klasse(n)",
              "page": 208
            },
            {
              "english": "history",
              "german": "Geschichte",
              "page": 208
            },
            {
              "english": "family",
              "german": "Familie",
              "page": 208
            },
            {
              "english": "to mention",
              "german": "erwähnen",
              "page": 205
            },
            {
              "english": "to colonize (AE)",
              "german": "kolonisieren; besiedeln",
              "page": 205
            },
            {
              "english": "foam",
              "german": "der Schaum; die Gischt",
              "page": 205
            },
            {
              "english": "sun",
              "german": "die Sonne",
              "page": 205
            },
            {
              "english": "to melt",
              "german": "schmelzen",
              "page": 205
            },
            {
              "english": "rule",
              "german": "die Herrschaft",
              "page": 205
            },
            {
              "english": "not … until",
              "german": "nicht bevor; erst wenn",
              "page": 205
            },
            {
              "english": "runaway",
              "german": "der Ausreißer / die Ausreißerin; der/die Entlaufene; ein Entlaufener / eine Entlaufene",
              "page": 205
            },
            {
              "english": "to found",
              "german": "gründen",
              "page": 205
            },
            {
              "english": "to be born",
              "german": "geboren werden",
              "page": 205
            },
            {
              "english": "immigrant",
              "german": "der Immigrant / die Immigrantin; der Einwanderer / die Einwanderin",
              "page": 205
            },
            {
              "english": "to immigrate",
              "german": "einwandern",
              "page": 205
            },
            {
              "english": "attractive",
              "german": "attraktiv",
              "page": 205
            },
            {
              "english": "sense",
              "german": "der Sinn",
              "page": 205
            },
            {
              "english": "hearing",
              "german": "das Hören",
              "page": 205
            },
            {
              "english": "taste",
              "german": "der Geschmack",
              "page": 205
            },
            {
              "english": "specialty (AE)",
              "german": "die Spezialität; die Besonderheit",
              "page": 205
            },
            {
              "english": "chili, chilies (pl)",
              "german": "der Chili; die Chilischote",
              "page": 205
            },
            {
              "english": "class",
              "german": "der Unterricht",
              "page": 205
            },
            {
              "english": "finally",
              "german": "schließlich; endlich; zum Schluss; letztlich",
              "page": 205
            },
            {
              "english": "to keep away from",
              "german": "(sich) fernhalten von; meiden",
              "page": 205
            }
          ]
        },
        {
          "id": "unit2-skills",
          "title": "Skills – How to Give a Good Presentation",
          "pages": [
            208
          ],
          "entries": [
            {
              "english": "audience",
              "german": "Publikum, Zuhörer",
              "page": 208
            },
            {
              "english": "note",
              "german": "Notiz",
              "page": 208
            },
            {
              "english": "eye contact",
              "german": "Blickkontakt",
              "page": 208
            },
            {
              "english": "step",
              "german": "Schritt",
              "page": 208
            },
            {
              "english": "to keep",
              "german": "behalten, aufbewahren",
              "page": 208
            },
            {
              "english": "to sound",
              "german": "klingen",
              "page": 208
            },
            {
              "english": "personal",
              "german": "persönlich",
              "page": 208
            },
            {
              "english": "on time",
              "german": "pünktlich",
              "page": 208
            },
            {
              "english": "to take a look at",
              "german": "sich ansehen",
              "page": 208
            },
            {
              "english": "to be connected (with)",
              "german": "verbunden sein (mit)",
              "page": 208
            },
            {
              "english": "point",
              "german": "Punkt",
              "page": 208
            },
            {
              "english": "to communicate",
              "german": "kommunizieren",
              "page": 208
            },
            {
              "english": "fantastic",
              "german": "fantastisch, großartig",
              "page": 208
            },
            {
              "english": "present",
              "german": "Geschenk",
              "page": 208
            },
            {
              "english": "contact",
              "german": "der Kontakt",
              "page": 208
            },
            {
              "english": "several",
              "german": "einige; mehrere; verschiedene",
              "page": 208
            },
            {
              "english": "topic",
              "german": "das Thema",
              "page": 208
            }
          ]
        },
        {
          "id": "unit2-story",
          "title": "Story – A Perfect Day for Treasure Hunting",
          "pages": [
            209
          ],
          "entries": [
            {
              "english": "treasure",
              "german": "Schatz",
              "page": 209
            },
            {
              "english": "hunting",
              "german": "Jagen, Jagd",
              "page": 209
            },
            {
              "english": "Europe",
              "german": "Europa",
              "page": 209
            },
            {
              "english": "American",
              "german": "amerikanisch",
              "page": 209
            },
            {
              "english": "to discover",
              "german": "entdecken",
              "page": 209
            },
            {
              "english": "historical",
              "german": "historisch",
              "page": 209
            },
            {
              "english": "to belong (to)",
              "german": "gehören (zu)",
              "page": 209
            },
            {
              "english": "object",
              "german": "Gegenstand, Objekt",
              "page": 209
            },
            {
              "english": "heavy",
              "german": "schwer",
              "page": 209
            },
            {
              "english": "museum",
              "german": "Museum",
              "page": 209
            },
            {
              "english": "to sail",
              "german": "segeln",
              "page": 209
            },
            {
              "english": "metal",
              "german": "Metall",
              "page": 209
            },
            {
              "english": "detector",
              "german": "Detektor",
              "page": 209
            },
            {
              "english": "slowly",
              "german": "langsam",
              "page": 209
            },
            {
              "english": "to dig",
              "german": "graben",
              "page": 209
            },
            {
              "english": "cloud",
              "german": "Wolke",
              "page": 209
            },
            {
              "english": "usual",
              "german": "üblich, gewöhnlich",
              "page": 209
            },
            {
              "english": "usually",
              "german": "gewöhnlich, normalerweise",
              "page": 209
            },
            {
              "english": "season",
              "german": "Jahreszeit, Saison",
              "page": 209
            },
            {
              "english": "shovel",
              "german": "Schaufel",
              "page": 209
            },
            {
              "english": "carefully",
              "german": "vorsichtig, sorgfältig",
              "page": 209
            },
            {
              "english": "meal",
              "german": "Mahlzeit, Essen",
              "page": 209
            },
            {
              "english": "to uncover",
              "german": "aufdecken; frei legen",
              "page": 209
            },
            {
              "english": "hole",
              "german": "das Loch",
              "page": 209
            },
            {
              "english": "to save",
              "german": "sparen; aufheben",
              "page": 209
            },
            {
              "english": "cabin",
              "german": "die Kabine; die Kajüte",
              "page": 209
            },
            {
              "english": "that's why",
              "german": "deshalb",
              "page": 209
            },
            {
              "english": "to be called",
              "german": "heißen; genannt werden",
              "page": 209
            },
            {
              "english": "to lie",
              "german": "liegen",
              "page": 209
            },
            {
              "english": "to lie down",
              "german": "sich hinlegen",
              "page": 209
            },
            {
              "english": "nap",
              "german": "das Nickerchen",
              "page": 209
            },
            {
              "english": "to tie (to)",
              "german": "binden (an); fesseln (an)",
              "page": 209
            },
            {
              "english": "dark",
              "german": "dunkel",
              "page": 209
            },
            {
              "english": "to crash",
              "german": "aufschlagen; gegen etwas krachen",
              "page": 209
            },
            {
              "english": "leg",
              "german": "das Bein",
              "page": 209
            },
            {
              "english": "to fall asleep",
              "german": "einschlafen",
              "page": 209
            },
            {
              "english": "secret",
              "german": "geheim",
              "page": 209
            },
            {
              "english": "soon",
              "german": "bald",
              "page": 209
            },
            {
              "english": "to turn on",
              "german": "einschalten",
              "page": 209
            },
            {
              "english": "to pray",
              "german": "beten",
              "page": 209
            },
            {
              "english": "horrible",
              "german": "schrecklich; furchtbar",
              "page": 209
            },
            {
              "english": "to be afraid (of)",
              "german": "(sich) fürchten; Angst haben (vor)",
              "page": 209
            },
            {
              "english": "to scoop",
              "german": "schöpfen; schaufeln",
              "page": 209
            },
            {
              "english": "to wake up",
              "german": "aufwachen; aufwecken",
              "page": 209
            },
            {
              "english": "to smash",
              "german": "schlagen; zerschmettern",
              "page": 209
            },
            {
              "english": "to die",
              "german": "sterben",
              "page": 209
            },
            {
              "english": "similar",
              "german": "ähnlich",
              "page": 209
            },
            {
              "english": "to travel",
              "german": "fahren; reisen",
              "page": 209
            }
          ]
        },
        {
          "id": "unit2-unittask",
          "title": "Unit Task – Join Our Club!",
          "pages": [
            209
          ],
          "entries": [
            {
              "english": "talk",
              "german": "Vortrag",
              "page": 209
            },
            {
              "english": "foreign language",
              "german": "Fremdsprache",
              "page": 209
            },
            {
              "english": "jogging",
              "german": "Joggen",
              "page": 209
            },
            {
              "english": "juggling",
              "german": "das Jonglieren",
              "page": 209
            }
          ]
        },
        {
          "id": "unit2-s1",
          "title": "S1 – Music & Culture",
          "pages": [
            204
          ],
          "entries": [
            {
              "english": "drum",
              "german": "die Trommel",
              "page": 204
            },
            {
              "english": "singer",
              "german": "der Sänger / die Sängerin",
              "page": 204
            },
            {
              "english": "instrument",
              "german": "das Instrument",
              "page": 204
            },
            {
              "english": "cajón",
              "german": "die Cajón",
              "page": 204
            },
            {
              "english": "wooden",
              "german": "hölzern; aus Holz",
              "page": 204
            },
            {
              "english": "less",
              "german": "weniger",
              "page": 204
            },
            {
              "english": "one, ones (pl)",
              "german": "eine/-r/-s",
              "page": 204
            },
            {
              "english": "member",
              "german": "das Mitglied",
              "page": 204
            },
            {
              "english": "few",
              "german": "wenige",
              "page": 204
            },
            {
              "english": "would",
              "german": "würde/-st/-n/-t",
              "page": 204
            },
            {
              "english": "at first",
              "german": "zuerst; zunächst",
              "page": 204
            },
            {
              "english": "maracas",
              "german": "die Rumba-Rasseln",
              "page": 204
            },
            {
              "english": "to join",
              "german": "beitreten; sich anschließen; verbinden",
              "page": 204
            },
            {
              "english": "origin",
              "german": "der Ursprung; die Herkunft; die Abstammung",
              "page": 204
            },
            {
              "english": "Cuban-American",
              "german": "der Amerikaner / die Amerikaner; kubanischer Abstammung",
              "page": 204
            },
            {
              "english": "Spanish",
              "german": "spanisch; Spanisch; der Spanier / die Spanierin",
              "page": 204
            },
            {
              "english": "common",
              "german": "üblich; gewöhnlich; (weit) verbreitet; gebräuchlich",
              "page": 204
            },
            {
              "english": "missing",
              "german": "fehlend; verschwunden",
              "page": 204
            },
            {
              "english": "basic",
              "german": "grundlegend; Grund-",
              "page": 204
            },
            {
              "english": "biology",
              "german": "die Biologie",
              "page": 204
            },
            {
              "english": "rainy",
              "german": "regnerisch",
              "page": 204
            },
            {
              "english": "hair",
              "german": "das Haar; die Haare",
              "page": 204
            },
            {
              "english": "to welcome",
              "german": "willkommen heißen",
              "page": 204
            },
            {
              "english": "high school",
              "german": "die High School (weiterführende Schule in den USA, Oberstufe)",
              "page": 204
            },
            {
              "english": "style",
              "german": "der Stil",
              "page": 204
            },
            {
              "english": "stage",
              "german": "die Bühne",
              "page": 204
            }
          ]
        },
        {
          "id": "unit2-co",
          "title": "Check-out",
          "pages": [
            209
          ],
          "entries": [
            {
              "english": "plant",
              "german": "die Pflanze",
              "page": 209
            },
            {
              "english": "warm",
              "german": "warm",
              "page": 209
            },
            {
              "english": "etc. (= et cetera)",
              "german": "usw. (= und so weiter)",
              "page": 209
            }
          ]
        }
      ]
    },
    {
      "id": "focus1",
      "title": "Focus 1 – Regions of the US",
      "icon": "🇺🇸",
      "subsections": [
        {
          "id": "focus1-history",
          "title": "US History & Settlers",
          "pages": [
            210,
            211
          ],
          "entries": [
            {
              "english": "region",
              "german": "Region, Gebiet",
              "page": 210
            },
            {
              "english": "Pilgrim",
              "german": "Pilger",
              "page": 210
            },
            {
              "english": "the Mayflower",
              "german": "die Mayflower",
              "page": 210
            },
            {
              "english": "to settle",
              "german": "sich niederlassen, besiedeln",
              "page": 210
            },
            {
              "english": "settlement",
              "german": "Siedlung",
              "page": 210
            },
            {
              "english": "shore",
              "german": "Ufer, Küste",
              "page": 210
            },
            {
              "english": "Thanksgiving",
              "german": "Erntedankfest",
              "page": 210
            },
            {
              "english": "corn",
              "german": "Mais",
              "page": 210
            },
            {
              "english": "turkey",
              "german": "Truthahn",
              "page": 210
            },
            {
              "english": "cotton",
              "german": "Baumwolle",
              "page": 211
            },
            {
              "english": "plantation",
              "german": "Plantage",
              "page": 211
            },
            {
              "english": "slave",
              "german": "Sklave",
              "page": 211
            },
            {
              "english": "slavery",
              "german": "Sklaverei",
              "page": 211
            },
            {
              "english": "civil war",
              "german": "Bürgerkrieg",
              "page": 211
            },
            {
              "english": "prairie",
              "german": "Prärie",
              "page": 211
            },
            {
              "english": "wheat",
              "german": "Weizen",
              "page": 211
            },
            {
              "english": "cattle",
              "german": "Rinder, Vieh",
              "page": 211
            },
            {
              "english": "Gold Rush",
              "german": "Goldrausch",
              "page": 211
            },
            {
              "english": "Native American",
              "german": "Ureinwohner Amerikas",
              "page": 211
            },
            {
              "english": "tribe",
              "german": "Stamm",
              "page": 211
            },
            {
              "english": "reservation",
              "german": "Reservat",
              "page": 211
            },
            {
              "english": "buffalo",
              "german": "Büffel",
              "page": 211
            },
            {
              "english": "to begin",
              "german": "beginnen; anfangen",
              "page": 210
            },
            {
              "english": "hurricane",
              "german": "der Hurrikan; der Orkan; der Wirbelsturm",
              "page": 210
            },
            {
              "english": "largest",
              "german": "größte/-r/-s; am größten",
              "page": 210
            },
            {
              "english": "until",
              "german": "bis",
              "page": 210
            },
            {
              "english": "to end",
              "german": "enden; beenden",
              "page": 210
            },
            {
              "english": "illegal",
              "german": "illegal; unrechtmäßig; rechtswidrig",
              "page": 210
            },
            {
              "english": "African-American",
              "german": "der Afroamerikaner / die Afroamerikanerin; afroamerikanisch",
              "page": 210
            },
            {
              "english": "sunny",
              "german": "sonnig",
              "page": 210
            },
            {
              "english": "because of",
              "german": "wegen",
              "page": 210
            },
            {
              "english": "retired",
              "german": "pensioniert; im Ruhestand",
              "page": 210
            },
            {
              "english": "to rain",
              "german": "regnen",
              "page": 210
            },
            {
              "english": "humid",
              "german": "feucht",
              "page": 210
            },
            {
              "english": "dry",
              "german": "trocken",
              "page": 210
            },
            {
              "english": "cattle (pl only)",
              "german": "das Vieh; das Rindvieh",
              "page": 210
            },
            {
              "english": "to fly",
              "german": "fliegen",
              "page": 210
            },
            {
              "english": "out of",
              "german": "aus … heraus",
              "page": 210
            },
            {
              "english": "hour",
              "german": "die Stunde",
              "page": 210
            },
            {
              "english": "temperature",
              "german": "die Temperatur",
              "page": 210
            },
            {
              "english": "degree Celsius (°C)",
              "german": "Grad Celsius",
              "page": 210
            },
            {
              "english": "snow",
              "german": "der Schnee",
              "page": 210
            },
            {
              "english": "than",
              "german": "als (bei Vergleichen)",
              "page": 210
            },
            {
              "english": "once",
              "german": "einmal; einst",
              "page": 210
            },
            {
              "english": "meter (AE)",
              "german": "der Meter",
              "page": 210
            },
            {
              "english": "farmland",
              "german": "das Ackerland",
              "page": 210
            },
            {
              "english": "European",
              "german": "der Europäer / die Europäerin; europäisch; aus Europa",
              "page": 210
            },
            {
              "english": "industrial",
              "german": "industriell; Industrie-",
              "page": 210
            },
            {
              "english": "by the way",
              "german": "übrigens",
              "page": 210
            },
            {
              "english": "to take",
              "german": "dauern; (Zeit) brauchen",
              "page": 210
            },
            {
              "english": "camp",
              "german": "das Camp; das Lager",
              "page": 210
            },
            {
              "english": "to introduce",
              "german": "vorstellen; einführen; einleiten",
              "page": 210
            },
            {
              "english": "French",
              "german": "französisch; Französisch",
              "page": 210
            },
            {
              "english": "industry",
              "german": "die Industrie; die Branche; das Gewerbe",
              "page": 210
            }
          ]
        },
        {
          "id": "focus1-geography",
          "title": "US Geography & Culture",
          "pages": [
            212,
            213
          ],
          "entries": [
            {
              "english": "coast",
              "german": "Küste",
              "page": 212
            },
            {
              "english": "mountain",
              "german": "Berg, Gebirge",
              "page": 212
            },
            {
              "english": "desert",
              "german": "Wüste",
              "page": 212
            },
            {
              "english": "national park",
              "german": "Nationalpark",
              "page": 212
            },
            {
              "english": "island",
              "german": "Insel",
              "page": 212
            },
            {
              "english": "climate",
              "german": "Klima",
              "page": 212
            },
            {
              "english": "flag",
              "german": "Flagge, Fahne",
              "page": 213
            },
            {
              "english": "Independence Day",
              "german": "Unabhängigkeitstag",
              "page": 213
            },
            {
              "english": "fireworks",
              "german": "Feuerwerk",
              "page": 213
            },
            {
              "english": "president",
              "german": "Präsident",
              "page": 213
            }
          ]
        }
      ]
    },
    {
      "id": "ac1",
      "title": "Across Cultures 1 – American Stories & Traditions",
      "icon": "🧑‍🌾",
      "subsections": [
        {
          "id": "ac1-check-out",
          "title": "Check-out",
          "pages": [
            210
          ],
          "entries": [
            {
              "english": "worth",
              "german": "wert",
              "page": 210
            },
            {
              "english": "opinion",
              "german": "Meinung",
              "page": 210
            },
            {
              "english": "summary",
              "german": "Zusammenfassung",
              "page": 210
            }
          ]
        },
        {
          "id": "ac1-stories",
          "title": "Stories & Traditions",
          "pages": [
            210,
            211
          ],
          "entries": [
            {
              "english": "pumpkin",
              "german": "Kürbis",
              "page": 210
            },
            {
              "english": "pie",
              "german": "Kuchen, Pastete",
              "page": 210
            },
            {
              "english": "feast",
              "german": "Festmahl, Fest",
              "page": 210
            },
            {
              "english": "harvest",
              "german": "Ernte",
              "page": 210
            },
            {
              "english": "thankful",
              "german": "dankbar",
              "page": 210
            },
            {
              "english": "to celebrate",
              "german": "feiern",
              "page": 210
            },
            {
              "english": "parade",
              "german": "Umzug, Parade",
              "page": 210
            },
            {
              "english": "tale",
              "german": "Erzählung, Geschichte",
              "page": 211
            },
            {
              "english": "tall tale",
              "german": "Lügengeschichte",
              "page": 211
            },
            {
              "english": "hero",
              "german": "Held",
              "page": 211
            },
            {
              "english": "brave",
              "german": "mutig, tapfer",
              "page": 211
            },
            {
              "english": "lumberjack",
              "german": "Holzfäller",
              "page": 211
            },
            {
              "english": "ox (pl. oxen)",
              "german": "Ochse(n)",
              "page": 211
            },
            {
              "english": "log cabin",
              "german": "Blockhütte",
              "page": 211
            },
            {
              "english": "rodeo",
              "german": "Rodeo",
              "page": 211
            },
            {
              "english": "cowboy",
              "german": "Cowboy",
              "page": 211
            },
            {
              "english": "true",
              "german": "wahr",
              "page": 210
            },
            {
              "english": "light",
              "german": "das Licht; die Lampe",
              "page": 210
            },
            {
              "english": "jack-o’-lantern",
              "german": "die Kürbislaterne",
              "page": 210
            },
            {
              "english": "Irish",
              "german": "irisch; Irisch",
              "page": 210
            },
            {
              "english": "devil",
              "german": "der Teufel",
              "page": 210
            },
            {
              "english": "soul",
              "german": "die Seele",
              "page": 210
            },
            {
              "english": "hell",
              "german": "die Hölle",
              "page": 210
            },
            {
              "english": "heaven",
              "german": "der Himmel",
              "page": 210
            },
            {
              "english": "promise",
              "german": "das Versprechen",
              "page": 210
            },
            {
              "english": "fire",
              "german": "das Feuer; der Kamin; der Ofen",
              "page": 210
            },
            {
              "english": "ghost",
              "german": "der Geist",
              "page": 210
            },
            {
              "english": "lantern",
              "german": "die Laterne",
              "page": 210
            },
            {
              "english": "long ago",
              "german": "vor langer Zeit",
              "page": 210
            },
            {
              "english": "dead",
              "german": "tot",
              "page": 210
            },
            {
              "english": "to put on",
              "german": "anziehen; auftragen",
              "page": 210
            },
            {
              "english": "trick-or-treating",
              "german": "Süßes oder Saures (Spiel zu Halloween, bei dem Kinder von Tür zu Tür gehen und um Süßigkeiten bitten)",
              "page": 210
            },
            {
              "english": "souling",
              "german": "Souling (mittelalterlicher Brauch, bei dem man durch Gabe von Broten seine Seele zu retten hoffte)",
              "page": 210
            },
            {
              "english": "treat",
              "german": "die besondere Freude; die Belohnung",
              "page": 210
            },
            {
              "english": "legend",
              "german": "die Legende; die Sage",
              "page": 210
            },
            {
              "english": "to cut",
              "german": "schneiden; fällen",
              "page": 210
            },
            {
              "english": "axe",
              "german": "die Axt",
              "page": 210
            },
            {
              "english": "to cry",
              "german": "weinen; schreien; rufen",
              "page": 210
            },
            {
              "english": "tear",
              "german": "die Träne",
              "page": 210
            },
            {
              "english": "straight",
              "german": "gerade; direkt; geradewegs",
              "page": 210
            },
            {
              "english": "introduction",
              "german": "die Einführung; die Einleitung; die Vorstellung",
              "page": 210
            },
            {
              "english": "invented",
              "german": "erfunden",
              "page": 210
            },
            {
              "english": "feather",
              "german": "die Feder",
              "page": 210
            },
            {
              "english": "hunter",
              "german": "der Jäger / die Jägerin",
              "page": 210
            },
            {
              "english": "earth",
              "german": "die Erde; Erde; der Erdboden",
              "page": 210
            },
            {
              "english": "leader",
              "german": "der Führer / die Führerin; der Anführer / die Anführerin",
              "page": 210
            },
            {
              "english": "to fight",
              "german": "kämpfen; (sich) streiten",
              "page": 210
            },
            {
              "english": "husband",
              "german": "der Ehemann",
              "page": 210
            },
            {
              "english": "exaggerated",
              "german": "übertrieben",
              "page": 210
            },
            {
              "english": "hero, heroes (pl)",
              "german": "der Held",
              "page": 210
            },
            {
              "english": "heroine",
              "german": "die Heldin",
              "page": 210
            },
            {
              "english": "magic",
              "german": "die Magie; die Zauberei",
              "page": 210
            },
            {
              "english": "honest",
              "german": "ehrlich",
              "page": 210
            },
            {
              "english": "to invent",
              "german": "erfinden",
              "page": 210
            }
          ]
        }
      ]
    },
    {
      "id": "unit3",
      "title": "Unit 3 – Off to the Rockies!",
      "icon": "🏔️",
      "subsections": [
        {
          "id": "unit3-checkin",
          "title": "Check-in",
          "pages": [
            214
          ],
          "entries": [
            {
              "english": "scenery",
              "german": "Landschaft, Kulisse",
              "page": 214
            },
            {
              "english": "breathtaking",
              "german": "atemberaubend",
              "page": 214
            },
            {
              "english": "at least",
              "german": "mindestens, wenigstens",
              "page": 214
            },
            {
              "english": "rock",
              "german": "Felsen, Stein",
              "page": 214
            },
            {
              "english": "cave",
              "german": "Höhle",
              "page": 214
            },
            {
              "english": "national park",
              "german": "Nationalpark",
              "page": 214
            },
            {
              "english": "bison",
              "german": "Bison",
              "page": 214
            },
            {
              "english": "grizzly bear",
              "german": "Grizzlybär",
              "page": 214
            },
            {
              "english": "rattlesnake",
              "german": "Klapperschlange",
              "page": 214
            },
            {
              "english": "elk",
              "german": "Wapiti",
              "page": 214
            },
            {
              "english": "distance",
              "german": "Entfernung, Strecke",
              "page": 214
            },
            {
              "english": "nature",
              "german": "Natur",
              "page": 214
            },
            {
              "english": "off to",
              "german": "auf nach",
              "page": 214
            },
            {
              "english": "moose, moose (pl)",
              "german": "der Elch",
              "page": 214
            },
            {
              "english": "mountain range",
              "german": "die Bergkette",
              "page": 214
            },
            {
              "english": "kilometer (km) (AE)",
              "german": "der Kilometer",
              "page": 214
            },
            {
              "english": "peak",
              "german": "der Gipfel; die Spitze",
              "page": 214
            },
            {
              "english": "wilderness",
              "german": "die Wildnis",
              "page": 214
            },
            {
              "english": "anyone else",
              "german": "jemand anderes",
              "page": 214
            },
            {
              "english": "wild",
              "german": "wild",
              "page": 214
            },
            {
              "english": "bighorn sheep",
              "german": "das Dickhornschaf",
              "page": 214
            },
            {
              "english": "luck",
              "german": "das Glück",
              "page": 214
            },
            {
              "english": "cougar",
              "german": "der Puma; der Berglöwe",
              "page": 214
            },
            {
              "english": "the great outdoors",
              "german": "die freie Natur",
              "page": 214
            },
            {
              "english": "climbing",
              "german": "das Klettern; das Bergsteigen",
              "page": 214
            },
            {
              "english": "teen",
              "german": "der Teenager; der/die Jugendliche; ein Jugendlicher / eine Jugendliche",
              "page": 214
            },
            {
              "english": "backpacking",
              "german": "das Wandern; das Rucksackreisen",
              "page": 214
            },
            {
              "english": "to look out for",
              "german": "Ausschau halten nach; sich in Acht nehmen vor; aufpassen auf",
              "page": 214
            },
            {
              "english": "nearly",
              "german": "fast; annähernd",
              "page": 214
            },
            {
              "english": "mountainboarding",
              "german": "das Mountainboardfahren",
              "page": 214
            },
            {
              "english": "zipline",
              "german": "die Seilrutsche",
              "page": 214
            },
            {
              "english": "traditional",
              "german": "traditionell",
              "page": 214
            },
            {
              "english": "kid",
              "german": "der/die Jugendliche; ein Jugendlicher / eine Jugendliche; das Kind",
              "page": 214
            },
            {
              "english": "cell phone (AE)",
              "german": "das Mobiltelefon; das Handy",
              "page": 214
            }
          ]
        },
        {
          "id": "unit3-topic-a",
          "title": "A – Outdoor Activities",
          "pages": [
            215
          ],
          "entries": [
            {
              "english": "to hike",
              "german": "wandern",
              "page": 215
            },
            {
              "english": "hiking",
              "german": "Wandern",
              "page": 215
            },
            {
              "english": "trail",
              "german": "Wanderweg, Pfad",
              "page": 215
            },
            {
              "english": "to camp",
              "german": "zelten, campen",
              "page": 215
            },
            {
              "english": "tent",
              "german": "Zelt",
              "page": 215
            },
            {
              "english": "campfire",
              "german": "Lagerfeuer",
              "page": 215
            },
            {
              "english": "sleeping bag",
              "german": "Schlafsack",
              "page": 215
            },
            {
              "english": "backpack",
              "german": "Rucksack",
              "page": 215
            },
            {
              "english": "campsite",
              "german": "Campingplatz",
              "page": 215
            },
            {
              "english": "ranger",
              "german": "Ranger, Aufseher",
              "page": 215
            },
            {
              "english": "compass",
              "german": "Kompass",
              "page": 215
            },
            {
              "english": "to hang on",
              "german": "(einen Augenblick) warten",
              "page": 215
            },
            {
              "english": "It took ages.",
              "german": "Es dauerte ewig.",
              "page": 215
            },
            {
              "english": "age",
              "german": "das Alter; das Zeitalter",
              "page": 215
            },
            {
              "english": "to go on",
              "german": "geschehen",
              "page": 215
            },
            {
              "english": "trampoline",
              "german": "das Trampolin",
              "page": 215
            },
            {
              "english": "to grin",
              "german": "grinsen",
              "page": 215
            },
            {
              "english": "to turn",
              "german": "drehen; (sich) umdrehen",
              "page": 215
            },
            {
              "english": "to turn over",
              "german": "umdrehen; umkippen",
              "page": 215
            },
            {
              "english": "wet",
              "german": "nass",
              "page": 215
            },
            {
              "english": "difficult",
              "german": "schwierig",
              "page": 215
            },
            {
              "english": "porcupine",
              "german": "die Baumstachler",
              "page": 215
            },
            {
              "english": "noise",
              "german": "der Lärm; das Geräusch",
              "page": 215
            },
            {
              "english": "else",
              "german": "andere/-r/-s; sonst noch",
              "page": 215
            },
            {
              "english": "directly",
              "german": "direkt; ohne Umwege",
              "page": 215
            },
            {
              "english": "to zipline",
              "german": "mit der Seilrutsche fahren",
              "page": 215
            },
            {
              "english": "corner",
              "german": "die Ecke",
              "page": 215
            },
            {
              "english": "travel",
              "german": "(das) Reisen; die Reise",
              "page": 215
            },
            {
              "english": "to spend",
              "german": "verbringen (Zeit)",
              "page": 215
            },
            {
              "english": "hike",
              "german": "die Wanderung",
              "page": 215
            },
            {
              "english": "to shine",
              "german": "scheinen; glänzen",
              "page": 215
            },
            {
              "english": "shhh",
              "german": "psst",
              "page": 215
            },
            {
              "english": "side",
              "german": "die Seite",
              "page": 215
            },
            {
              "english": "canyon",
              "german": "die Schlucht; der Canyon",
              "page": 215
            },
            {
              "english": "golden",
              "german": "golden; Gold-",
              "page": 215
            },
            {
              "english": "to hold your breath",
              "german": "den Atem anhalten",
              "page": 215
            },
            {
              "english": "along",
              "german": "entlang",
              "page": 215
            },
            {
              "english": "coyote",
              "german": "der Kojote; der Präriewolf",
              "page": 215
            },
            {
              "english": "so (that)",
              "german": "damit; sodass",
              "page": 215
            },
            {
              "english": "everybody",
              "german": "jeder; alle",
              "page": 215
            },
            {
              "english": "to include",
              "german": "einschließen; beinhalten",
              "page": 215
            }
          ]
        },
        {
          "id": "unit3-topic-b",
          "title": "B – Nature & Environment",
          "pages": [
            216
          ],
          "entries": [
            {
              "english": "to climb",
              "german": "klettern",
              "page": 216
            },
            {
              "english": "steep",
              "german": "steil",
              "page": 216
            },
            {
              "english": "summit",
              "german": "Gipfel",
              "page": 216
            },
            {
              "english": "view",
              "german": "Aussicht, Blick",
              "page": 216
            },
            {
              "english": "landscape",
              "german": "Landschaft",
              "page": 216
            },
            {
              "english": "to protect",
              "german": "schützen",
              "page": 216
            },
            {
              "english": "environment",
              "german": "Umwelt",
              "page": 216
            },
            {
              "english": "endangered",
              "german": "gefährdet, bedroht",
              "page": 216
            },
            {
              "english": "species",
              "german": "Art, Spezies",
              "page": 216
            },
            {
              "english": "to survive",
              "german": "überleben",
              "page": 216
            },
            {
              "english": "boot",
              "german": "der Stiefel",
              "page": 216
            },
            {
              "english": "pants (pl) (AE)",
              "german": "die Hosen",
              "page": 216
            },
            {
              "english": "sleeve",
              "german": "der Ärmel",
              "page": 216
            },
            {
              "english": "insect",
              "german": "das Insekt",
              "page": 216
            },
            {
              "english": "to bite",
              "german": "beißen; stechen",
              "page": 216
            },
            {
              "english": "to carry",
              "german": "tragen",
              "page": 216
            },
            {
              "english": "sunscreen",
              "german": "die Sonnencreme",
              "page": 216
            },
            {
              "english": "rain",
              "german": "der Regen",
              "page": 216
            },
            {
              "english": "jacket",
              "german": "die Jacke",
              "page": 216
            },
            {
              "english": "hiker",
              "german": "der Wanderer / die Wanderin",
              "page": 216
            },
            {
              "english": "to pick up",
              "german": "aufheben; abholen",
              "page": 216
            },
            {
              "english": "trash (AE)",
              "german": "der Abfall; der Müll",
              "page": 216
            },
            {
              "english": "ground",
              "german": "der Boden; der Erdboden",
              "page": 216
            },
            {
              "english": "to smell",
              "german": "riechen; duften",
              "page": 216
            },
            {
              "english": "to touch",
              "german": "berühren; antippen",
              "page": 216
            },
            {
              "english": "opposite",
              "german": "das Gegenteil",
              "page": 216
            },
            {
              "english": "to replay",
              "german": "erneut spielen; erneut abspielen",
              "page": 216
            },
            {
              "english": "tidy",
              "german": "sauber; ordentlich",
              "page": 216
            },
            {
              "english": "to try on",
              "german": "anprobieren",
              "page": 216
            },
            {
              "english": "fitting room",
              "german": "die Umkleidekabine",
              "page": 216
            },
            {
              "english": "to fit",
              "german": "passen",
              "page": 216
            },
            {
              "english": "perfectly",
              "german": "perfekt",
              "page": 216
            },
            {
              "english": "sock",
              "german": "die Socke",
              "page": 216
            },
            {
              "english": "assistant",
              "german": "der Assistent / die Assistentin; der Verkäufer / die Verkäuferin",
              "page": 216
            }
          ]
        },
        {
          "id": "unit3-story",
          "title": "Story – The Blackfoot and the Buffalo",
          "pages": [
            217
          ],
          "entries": [
            {
              "english": "Blackfoot",
              "german": "Schwarzfuß (Indianerstamm)",
              "page": 217
            },
            {
              "english": "to hunt",
              "german": "jagen",
              "page": 217
            },
            {
              "english": "arrow",
              "german": "Pfeil",
              "page": 217
            },
            {
              "english": "bow",
              "german": "Bogen",
              "page": 217
            },
            {
              "english": "chief",
              "german": "Häuptling",
              "page": 217
            },
            {
              "english": "warrior",
              "german": "Krieger",
              "page": 217
            },
            {
              "english": "plain",
              "german": "Ebene, Prärie",
              "page": 217
            },
            {
              "english": "brave",
              "german": "mutig, tapfer",
              "page": 217
            },
            {
              "english": "to rescue",
              "german": "retten",
              "page": 217
            },
            {
              "english": "terrified",
              "german": "verängstigt, erschrocken",
              "page": 217
            },
            {
              "english": "countryside",
              "german": "das Land; die Landschaft",
              "page": 217
            },
            {
              "english": "track",
              "german": "die Spur; die Fährte; der Pfad; die Bahn",
              "page": 217
            },
            {
              "english": "to yawn",
              "german": "gähnen",
              "page": 217
            },
            {
              "english": "to tell sb to do sth",
              "german": "jmdm. sagen, was er tun soll",
              "page": 217
            },
            {
              "english": "to go for a walk",
              "german": "spazieren gehen",
              "page": 217
            },
            {
              "english": "against",
              "german": "gegen",
              "page": 217
            },
            {
              "english": "to grab",
              "german": "greifen; ergreifen; schnappen",
              "page": 217
            },
            {
              "english": "flashlight (AE)",
              "german": "die Taschenlampe",
              "page": 217
            },
            {
              "english": "pretty",
              "german": "ziemlich; ganz schön",
              "page": 217
            },
            {
              "english": "to tiptoe",
              "german": "auf Zehenspitzen gehen",
              "page": 217
            },
            {
              "english": "towards",
              "german": "in Richtung",
              "page": 217
            },
            {
              "english": "much",
              "german": "sehr",
              "page": 217
            },
            {
              "english": "to pretend",
              "german": "vorgeben; vortäuschen; so tun, als ob …",
              "page": 217
            },
            {
              "english": "to grunt",
              "german": "grunzen",
              "page": 217
            },
            {
              "english": "wide",
              "german": "weit; breit; ausgedehnt",
              "page": 217
            },
            {
              "english": "calm",
              "german": "ruhig; friedlich",
              "page": 217
            },
            {
              "english": "to splash",
              "german": "spritzen; platschen; planschen",
              "page": 217
            },
            {
              "english": "backwards",
              "german": "rückwärts",
              "page": 217
            },
            {
              "english": "to attack",
              "german": "angreifen",
              "page": 217
            },
            {
              "english": "statue",
              "german": "die Statue; das Standbild",
              "page": 217
            },
            {
              "english": "to lift",
              "german": "heben; anheben; sich heben",
              "page": 217
            },
            {
              "english": "stone",
              "german": "der Stein",
              "page": 217
            },
            {
              "english": "no wonder",
              "german": "kein Wunder",
              "page": 217
            },
            {
              "english": "to make sb do sth",
              "german": "jmdn. veranlassen etw. zu tun",
              "page": 217
            },
            {
              "english": "terrible",
              "german": "schrecklich; schlimm; furchtbar",
              "page": 217
            },
            {
              "english": "realistic",
              "german": "realistisch",
              "page": 217
            }
          ]
        },
        {
          "id": "unit3-station",
          "title": "Station 3 – First Nations",
          "pages": [
            218,
            219
          ],
          "entries": [
            {
              "english": "First Nations",
              "german": "First Nations (Ureinwohner Kanadas)",
              "page": 218
            },
            {
              "english": "Inuit",
              "german": "Inuit",
              "page": 218
            },
            {
              "english": "totem pole",
              "german": "Totempfahl",
              "page": 218
            },
            {
              "english": "canoe",
              "german": "Kanu",
              "page": 218
            },
            {
              "english": "igloo",
              "german": "Iglu",
              "page": 219
            },
            {
              "english": "ethnic group",
              "german": "ethnische Gruppe",
              "page": 219
            }
          ]
        },
        {
          "id": "unit3-skills",
          "title": "Skills – How to Find Information on the Internet",
          "pages": [
            220
          ],
          "entries": [
            {
              "english": "information",
              "german": "Information",
              "page": 220
            },
            {
              "english": "search engine",
              "german": "Suchmaschine",
              "page": 220
            },
            {
              "english": "website",
              "german": "Webseite",
              "page": 220
            },
            {
              "english": "reliable",
              "german": "zuverlässig, verlässlich",
              "page": 220
            },
            {
              "english": "source",
              "german": "Quelle",
              "page": 220
            },
            {
              "english": "result",
              "german": "Ergebnis",
              "page": 220
            },
            {
              "english": "attraction",
              "german": "die Attraktion; die Sehenswürdigkeit",
              "page": 220
            },
            {
              "english": "display",
              "german": "die Vorführung; die Ausstellung; der Schaukasten; die Anzeige",
              "page": 220
            }
          ]
        },
        {
          "id": "unit3-unittask",
          "title": "Unit Task – Our Travel Project",
          "pages": [
            220
          ],
          "entries": [
            {
              "english": "destination",
              "german": "Reiseziel",
              "page": 220
            },
            {
              "english": "accommodation",
              "german": "Unterkunft, Übernachtung",
              "page": 220
            },
            {
              "english": "brochure",
              "german": "Broschüre, Prospekt",
              "page": 220
            },
            {
              "english": "to paddle",
              "german": "paddeln",
              "page": 220
            },
            {
              "english": "current",
              "german": "die Strömung",
              "page": 220
            },
            {
              "english": "to capsize",
              "german": "kentern",
              "page": 220
            },
            {
              "english": "planet",
              "german": "der Planet",
              "page": 220
            },
            {
              "english": "spaceship",
              "german": "das Raumschiff",
              "page": 220
            },
            {
              "english": "to go sightseeing",
              "german": "eine Besichtigungstour machen",
              "page": 220
            },
            {
              "english": "youth hostel",
              "german": "die Jugendherberge",
              "page": 220
            },
            {
              "english": "key",
              "german": "besonders wichtig",
              "page": 220
            }
          ]
        }
      ]
    },
    {
      "id": "ac2",
      "title": "Across Cultures 2 – Living Together",
      "icon": "🤝",
      "subsections": [
        {
          "id": "ac2-australia",
          "title": "Australia & Aboriginal Culture",
          "pages": [
            222,
            223
          ],
          "entries": [
            {
              "english": "Aboriginal",
              "german": "Aborigine, Ureinwohner Australiens",
              "page": 222
            },
            {
              "english": "multicultural",
              "german": "multikulturell",
              "page": 222
            },
            {
              "english": "community",
              "german": "Gemeinschaft",
              "page": 222
            },
            {
              "english": "ceremony",
              "german": "Zeremonie",
              "page": 222
            },
            {
              "english": "sacred",
              "german": "heilig",
              "page": 222
            },
            {
              "english": "respect",
              "german": "Respekt",
              "page": 222
            },
            {
              "english": "proud",
              "german": "stolz",
              "page": 223
            },
            {
              "english": "culture",
              "german": "Kultur",
              "page": 223
            },
            {
              "english": "tradition",
              "german": "Tradition",
              "page": 223
            },
            {
              "english": "boomerang",
              "german": "Bumerang",
              "page": 223
            },
            {
              "english": "didgeridoo",
              "german": "Didgeridoo",
              "page": 223
            },
            {
              "english": "outback",
              "german": "Outback",
              "page": 223
            },
            {
              "english": "ability",
              "german": "die Fähigkeit; die Begabung",
              "page": 222
            },
            {
              "english": "well",
              "german": "gut",
              "page": 222
            },
            {
              "english": "statement",
              "german": "die Aussage; die Behauptung; die Erklärung",
              "page": 222
            },
            {
              "english": "advice",
              "german": "der Rat; der Ratschlag",
              "page": 222
            },
            {
              "english": "disability",
              "german": "die Behinderung; die Unfähigkeit",
              "page": 222
            },
            {
              "english": "physical",
              "german": "physisch; körperlich",
              "page": 222
            },
            {
              "english": "intellectual",
              "german": "intellektuell; geistig",
              "page": 222
            },
            {
              "english": "sign",
              "german": "das Zeichen; das Schild",
              "page": 222
            },
            {
              "english": "guide dog",
              "german": "der Blindenhund",
              "page": 222
            },
            {
              "english": "inclusion",
              "german": "die Inklusion; die Einbeziehung",
              "page": 222
            },
            {
              "english": "inclusive",
              "german": "inklusiv; einschließlich; umfassend",
              "page": 222
            },
            {
              "english": "schooling",
              "german": "die Schulbildung",
              "page": 222
            },
            {
              "english": "system",
              "german": "das System",
              "page": 222
            },
            {
              "english": "to sign",
              "german": "unterzeichnen; unterschreiben",
              "page": 222
            },
            {
              "english": "right",
              "german": "das Recht",
              "page": 222
            },
            {
              "english": "article",
              "german": "der Artikel; der Bericht (in einer Zeitschrift, Zeitung)",
              "page": 222
            },
            {
              "english": "cactus, cacti (pl)",
              "german": "der Kaktus",
              "page": 222
            },
            {
              "english": "organisation",
              "german": "die Organisation",
              "page": 222
            },
            {
              "english": "need",
              "german": "das Bedürfnis",
              "page": 222
            },
            {
              "english": "partially sighted",
              "german": "sehbehindert; teilsichtig",
              "page": 222
            },
            {
              "english": "deaf",
              "german": "gehörlos; taub; schwerhörig",
              "page": 222
            },
            {
              "english": "to concentrate",
              "german": "(sich) konzentrieren",
              "page": 222
            },
            {
              "english": "hearing aid",
              "german": "das Hörgerät",
              "page": 222
            },
            {
              "english": "glasses (pl)",
              "german": "die Brille",
              "page": 222
            }
          ]
        }
      ]
    },
    {
      "id": "unit4",
      "title": "Unit 4 – Sport Is Good for You!",
      "icon": "⚽",
      "subsections": [
        {
          "id": "unit4-checkin",
          "title": "Check-in",
          "pages": [
            224
          ],
          "entries": [
            {
              "english": "sport",
              "german": "Sport",
              "page": 224
            },
            {
              "english": "sporty",
              "german": "sportlich",
              "page": 224
            },
            {
              "english": "match",
              "german": "Spiel, Wettkampf",
              "page": 224
            },
            {
              "english": "team",
              "german": "Mannschaft, Team",
              "page": 224
            },
            {
              "english": "player",
              "german": "Spieler/in",
              "page": 224
            },
            {
              "english": "fan",
              "german": "Fan",
              "page": 224
            },
            {
              "english": "to cheer",
              "german": "anfeuern, jubeln",
              "page": 224
            },
            {
              "english": "training",
              "german": "Training",
              "page": 224
            },
            {
              "english": "to be/keep fit",
              "german": "fit sein/bleiben",
              "page": 224
            },
            {
              "english": "healthy",
              "german": "gesund",
              "page": 224
            },
            {
              "english": "gym",
              "german": "Turnhalle, Fitnessstudio",
              "page": 224
            },
            {
              "english": "to practise",
              "german": "üben, trainieren",
              "page": 224
            },
            {
              "english": "to beat",
              "german": "schlagen, besiegen",
              "page": 224
            },
            {
              "english": "to score",
              "german": "Punkte erzielen, ein Tor schießen",
              "page": 224
            },
            {
              "english": "goal",
              "german": "Tor, Ziel",
              "page": 224
            },
            {
              "english": "referee",
              "german": "Schiedsrichter/in",
              "page": 224
            },
            {
              "english": "coach",
              "german": "Trainer/in",
              "page": 224
            },
            {
              "english": "camel racing",
              "german": "das Kamelrennen",
              "page": 224
            },
            {
              "english": "marathon",
              "german": "der Marathon",
              "page": 224
            },
            {
              "english": "accident",
              "german": "der Unfall",
              "page": 224
            },
            {
              "english": "radio",
              "german": "das Radio",
              "page": 224
            },
            {
              "english": "health",
              "german": "die Gesundheit",
              "page": 224
            },
            {
              "english": "programme",
              "german": "das Programm; die Sendung",
              "page": 224
            },
            {
              "english": "runner",
              "german": "der Läufer / die Läuferin",
              "page": 224
            },
            {
              "english": "racquet",
              "german": "der Schläger",
              "page": 224
            },
            {
              "english": "score",
              "german": "der Punktestand; der Spielstand",
              "page": 224
            },
            {
              "english": "to lose",
              "german": "verlieren",
              "page": 224
            },
            {
              "english": "to pass",
              "german": "zupassen; zuspielen",
              "page": 224
            },
            {
              "english": "the … the … + comparative form",
              "german": "je … desto … + Komparativ",
              "page": 224
            },
            {
              "english": "equipment",
              "german": "die Ausrüstung; die Ausstattung",
              "page": 224
            },
            {
              "english": "individual",
              "german": "individuell; einzeln",
              "page": 224
            }
          ]
        },
        {
          "id": "unit4-topic-a",
          "title": "A – Sports & Equipment",
          "pages": [
            225
          ],
          "entries": [
            {
              "english": "racket",
              "german": "Schläger (Tennis/Badminton)",
              "page": 225
            },
            {
              "english": "bat",
              "german": "Schläger (Cricket/Baseball)",
              "page": 225
            },
            {
              "english": "court",
              "german": "Spielfeld, Platz (Tennis)",
              "page": 225
            },
            {
              "english": "pitch",
              "german": "Spielfeld (Fußball)",
              "page": 225
            },
            {
              "english": "net",
              "german": "Netz",
              "page": 225
            },
            {
              "english": "to throw",
              "german": "werfen",
              "page": 225
            },
            {
              "english": "to catch",
              "german": "fangen",
              "page": 225
            },
            {
              "english": "to kick",
              "german": "treten, kicken",
              "page": 225
            },
            {
              "english": "cricket",
              "german": "Cricket",
              "page": 225
            },
            {
              "english": "rugby",
              "german": "Rugby",
              "page": 225
            },
            {
              "english": "athletics",
              "german": "Leichtathletik",
              "page": 225
            },
            {
              "english": "ever",
              "german": "jemals; überhaupt",
              "page": 225
            },
            {
              "english": "right here",
              "german": "genau hier",
              "page": 225
            },
            {
              "english": "11-year-old",
              "german": "der/die 11-Jährige; ein 11-Jähriger / eine 11-Jährige",
              "page": 225
            },
            {
              "english": "running",
              "german": "das Laufen; das Rennen",
              "page": 225
            },
            {
              "english": "trial",
              "german": "die Qualifikation",
              "page": 225
            },
            {
              "english": "Who's in?",
              "german": "Wer macht mit?; Wer ist dabei?",
              "page": 225
            },
            {
              "english": "to be in",
              "german": "dabei sein; mitmachen",
              "page": 225
            },
            {
              "english": "to raise money",
              "german": "Geld sammeln",
              "page": 225
            },
            {
              "english": "before",
              "german": "schon einmal; vorher; zuvor",
              "page": 225
            }
          ]
        },
        {
          "id": "unit4-topic-b",
          "title": "B – Fitness & Training",
          "pages": [
            226
          ],
          "entries": [
            {
              "english": "to exercise",
              "german": "trainieren, Sport treiben",
              "page": 226
            },
            {
              "english": "push-up",
              "german": "Liegestütz",
              "page": 226
            },
            {
              "english": "sit-up",
              "german": "Sit-up",
              "page": 226
            },
            {
              "english": "to warm up",
              "german": "sich aufwärmen",
              "page": 226
            },
            {
              "english": "to stretch",
              "german": "dehnen, strecken",
              "page": 226
            },
            {
              "english": "muscle",
              "german": "Muskel",
              "page": 226
            },
            {
              "english": "competition",
              "german": "Wettbewerb",
              "page": 226
            },
            {
              "english": "tournament",
              "german": "Turnier",
              "page": 226
            },
            {
              "english": "championship",
              "german": "Meisterschaft",
              "page": 226
            },
            {
              "english": "doctor",
              "german": "der Arzt / die Ärztin",
              "page": 226
            },
            {
              "english": "yet",
              "german": "schon; noch",
              "page": 226
            },
            {
              "english": "not … yet",
              "german": "noch nicht",
              "page": 226
            },
            {
              "english": "to twist your ankle",
              "german": "sich den Knöchel verrenken",
              "page": 226
            },
            {
              "english": "pain",
              "german": "der Schmerz",
              "page": 226
            },
            {
              "english": "chant",
              "german": "der Sprechgesang",
              "page": 226
            },
            {
              "english": "to have a look (at)",
              "german": "anschauen",
              "page": 226
            },
            {
              "english": "prescription",
              "german": "das Rezept (für Arzneimittel)",
              "page": 226
            },
            {
              "english": "ointment",
              "german": "die Salbe",
              "page": 226
            },
            {
              "english": "to get well",
              "german": "gesund werden",
              "page": 226
            },
            {
              "english": "shoulder",
              "german": "die Schulter",
              "page": 226
            },
            {
              "english": "headache (no pl)",
              "german": "die Kopfschmerzen; das Kopfweh",
              "page": 226
            },
            {
              "english": "backache",
              "german": "die Rückenschmerzen; das Rückenweh",
              "page": 226
            },
            {
              "english": "stomachache",
              "german": "die Bauchschmerzen; das Bauchweh",
              "page": 226
            },
            {
              "english": "to feel sick",
              "german": "Übelkeit verspüren; sich schlecht fühlen",
              "page": 226
            },
            {
              "english": "cold",
              "german": "die Erkältung",
              "page": 226
            },
            {
              "english": "cough",
              "german": "das Husten",
              "page": 226
            },
            {
              "english": "fever",
              "german": "das Fieber",
              "page": 226
            },
            {
              "english": "pill",
              "german": "die Pille; die Tablette",
              "page": 226
            }
          ]
        },
        {
          "id": "unit4-station",
          "title": "Station 4",
          "pages": [
            227
          ],
          "entries": [
            {
              "english": "record",
              "german": "Rekord",
              "page": 227
            },
            {
              "english": "to break a record",
              "german": "einen Rekord brechen",
              "page": 227
            },
            {
              "english": "medal",
              "german": "Medaille",
              "page": 227
            },
            {
              "english": "trophy",
              "german": "Pokal, Trophäe",
              "page": 227
            },
            {
              "english": "champion",
              "german": "Meister/in, Champion",
              "page": 227
            }
          ]
        },
        {
          "id": "unit4-story",
          "title": "Story – Don't Call Me Ugly!",
          "pages": [
            228
          ],
          "entries": [
            {
              "english": "ugly",
              "german": "hässlich",
              "page": 228
            },
            {
              "english": "determined",
              "german": "entschlossen",
              "page": 228
            },
            {
              "english": "challenge",
              "german": "Herausforderung",
              "page": 228
            },
            {
              "english": "to believe (in)",
              "german": "glauben (an)",
              "page": 228
            },
            {
              "english": "strength",
              "german": "Stärke, Kraft",
              "page": 228
            },
            {
              "english": "weakness",
              "german": "Schwäche",
              "page": 228
            },
            {
              "english": "proud",
              "german": "stolz",
              "page": 228
            },
            {
              "english": "silly",
              "german": "der Dummkopf",
              "page": 228
            },
            {
              "english": "heart",
              "german": "das Herz",
              "page": 228
            },
            {
              "english": "anyway",
              "german": "jedenfalls; trotzdem; sowieso",
              "page": 228
            },
            {
              "english": "to let go (of)",
              "german": "loslassen",
              "page": 228
            },
            {
              "english": "fancy dress",
              "german": "die Verkleidung; das Kostüm",
              "page": 228
            },
            {
              "english": "to breathe",
              "german": "atmen",
              "page": 228
            },
            {
              "english": "to keep up (with)",
              "german": "mithalten (mit); Schritt halten (mit)",
              "page": 228
            },
            {
              "english": "to take sth seriously",
              "german": "ernst nehmen",
              "page": 228
            },
            {
              "english": "to get in the way",
              "german": "stören; im Weg stehen",
              "page": 228
            },
            {
              "english": "stomach",
              "german": "der Magen; der Bauch",
              "page": 228
            },
            {
              "english": "far",
              "german": "weit",
              "page": 228
            },
            {
              "english": "finish line",
              "german": "die Ziellinie",
              "page": 228
            },
            {
              "english": "stupid",
              "german": "dumm; blöd",
              "page": 228
            },
            {
              "english": "to be gone",
              "german": "verschwunden sein; weg sein",
              "page": 228
            },
            {
              "english": "We did it!",
              "german": "Wir haben es geschafft!",
              "page": 228
            },
            {
              "english": "to ruin",
              "german": "ruinieren; zerstören",
              "page": 228
            },
            {
              "english": "official",
              "german": "der Schiedsrichter / die Schiedsrichterin",
              "page": 228
            },
            {
              "english": "to surprise",
              "german": "überraschen",
              "page": 228
            },
            {
              "english": "in secret",
              "german": "heimlich",
              "page": 228
            },
            {
              "english": "hard",
              "german": "hart; schwer; schwierig",
              "page": 228
            },
            {
              "english": "to forgive",
              "german": "vergeben; verzeihen",
              "page": 228
            },
            {
              "english": "to cause",
              "german": "verursachen",
              "page": 228
            },
            {
              "english": "hope",
              "german": "die Hoffnung",
              "page": 228
            },
            {
              "english": "fear",
              "german": "die Angst; die Furcht; die Befürchtung",
              "page": 228
            },
            {
              "english": "relationship",
              "german": "die Beziehung",
              "page": 228
            },
            {
              "english": "point of view",
              "german": "der Standpunkt; die Ansicht; die Perspektive",
              "page": 228
            }
          ]
        },
        {
          "id": "unit4-unittask",
          "title": "Unit Task – Sports Day",
          "pages": [
            228
          ],
          "entries": [
            {
              "english": "sports day",
              "german": "Sporttag",
              "page": 228
            },
            {
              "english": "to compete",
              "german": "wettkampfen, teilnehmen",
              "page": 228
            },
            {
              "english": "to organize",
              "german": "organisieren",
              "page": 228
            },
            {
              "english": "to record",
              "german": "aufnehmen; aufzeichnen",
              "page": 228
            },
            {
              "english": "over",
              "german": "vorüber; vorbei",
              "page": 228
            },
            {
              "english": "change",
              "german": "die Änderung; die Veränderung; der Wechsel",
              "page": 228
            },
            {
              "english": "necessary",
              "german": "nötig; notwendig; erforderlich",
              "page": 228
            }
          ]
        },
        {
          "id": "unit4-checkout",
          "title": "Check-out",
          "pages": [
            229
          ],
          "entries": [
            {
              "english": "to improve",
              "german": "verbessern",
              "page": 229
            },
            {
              "english": "to keep going",
              "german": "weitermachen",
              "page": 229
            },
            {
              "english": "performance",
              "german": "Leistung",
              "page": 229
            },
            {
              "english": "bicycle motocross",
              "german": "das Fahrradmotocross",
              "page": 229
            },
            {
              "english": "bicycle",
              "german": "das Fahrrad",
              "page": 229
            },
            {
              "english": "mud",
              "german": "der Schlamm",
              "page": 229
            },
            {
              "english": "company",
              "german": "die Gesellschaft; die Firma; das Unternehmen",
              "page": 229
            },
            {
              "english": "riding",
              "german": "das Reiten",
              "page": 229
            }
          ]
        },
        {
          "id": "unit4-s3",
          "title": "S3 – Sports Events",
          "pages": [
            227
          ],
          "entries": [
            {
              "english": "cramp",
              "german": "der Krampf",
              "page": 227
            },
            {
              "english": "award",
              "german": "die Auszeichnung; der Preis",
              "page": 227
            },
            {
              "english": "… what it's like",
              "german": "… wie das ist",
              "page": 227
            },
            {
              "english": "camera",
              "german": "der Fotoapparat; die Kamera",
              "page": 227
            },
            {
              "english": "crowd",
              "german": "die Menschenmenge",
              "page": 227
            }
          ]
        },
        {
          "id": "unit4-sk2",
          "title": "Skills – News Reports",
          "pages": [
            228
          ],
          "entries": [
            {
              "english": "rescue",
              "german": "die Rettung",
              "page": 228
            },
            {
              "english": "to get hurt",
              "german": "verletzt werden",
              "page": 228
            },
            {
              "english": "injury",
              "german": "die Verletzung",
              "page": 228
            },
            {
              "english": "hospital",
              "german": "das Hospital; das Krankenhaus",
              "page": 228
            },
            {
              "english": "helicopter",
              "german": "der Helikopter; der Hubschrauber",
              "page": 228
            },
            {
              "english": "presenter",
              "german": "der Moderator / die Moderatorin",
              "page": 228
            },
            {
              "english": "reporter",
              "german": "der Reporter / die Reporterin",
              "page": 228
            },
            {
              "english": "witness",
              "german": "der Zeuge / die Zeugin",
              "page": 228
            },
            {
              "english": "eyewitness",
              "german": "der Augenzeuge / die Augenzeugin",
              "page": 228
            },
            {
              "english": "dramatic",
              "german": "dramatisch",
              "page": 228
            },
            {
              "english": "station",
              "german": "der Sender",
              "page": 228
            },
            {
              "english": "scene",
              "german": "der Schauplatz",
              "page": 228
            },
            {
              "english": "I couldn't believe my eyes.",
              "german": "Ich traute meinen Augen nicht.",
              "page": 228
            }
          ]
        }
      ]
    },
    {
      "id": "focus2",
      "title": "Focus 2 – Getting Around",
      "icon": "🚌",
      "subsections": [
        {
          "id": "focus2-transport",
          "title": "Transportation",
          "pages": [
            230,
            231,
            232
          ],
          "entries": [
            {
              "english": "bus",
              "german": "Bus",
              "page": 230
            },
            {
              "english": "train",
              "german": "Zug",
              "page": 230
            },
            {
              "english": "plane",
              "german": "Flugzeug",
              "page": 230
            },
            {
              "english": "car",
              "german": "Auto",
              "page": 230
            },
            {
              "english": "bike",
              "german": "Fahrrad",
              "page": 230
            },
            {
              "english": "on foot",
              "german": "zu Fuß",
              "page": 230
            },
            {
              "english": "traffic",
              "german": "Verkehr",
              "page": 230
            },
            {
              "english": "road",
              "german": "Straße",
              "page": 230
            },
            {
              "english": "public transport",
              "german": "öffentliche Verkehrsmittel",
              "page": 231
            },
            {
              "english": "tram",
              "german": "Straßenbahn",
              "page": 231
            },
            {
              "english": "underground",
              "german": "U-Bahn",
              "page": 231
            },
            {
              "english": "ferry",
              "german": "Fähre",
              "page": 231
            },
            {
              "english": "timetable",
              "german": "Fahrplan",
              "page": 231
            },
            {
              "english": "ticket",
              "german": "Fahrkarte",
              "page": 232
            },
            {
              "english": "platform",
              "german": "Bahnsteig",
              "page": 232
            },
            {
              "english": "single (ticket)",
              "german": "einfache Fahrkarte",
              "page": 232
            },
            {
              "english": "return (ticket)",
              "german": "Rückfahrkarte",
              "page": 232
            },
            {
              "english": "to get on",
              "german": "einsteigen",
              "page": 232
            },
            {
              "english": "to get off",
              "german": "aussteigen",
              "page": 232
            },
            {
              "english": "delay",
              "german": "Verspätung",
              "page": 232
            },
            {
              "english": "desk",
              "german": "der Schalter",
              "page": 230
            },
            {
              "english": "central",
              "german": "zentral; Zentral-",
              "page": 230
            },
            {
              "english": "the Tube",
              "german": "die U-Bahn (in London)",
              "page": 230
            },
            {
              "english": "express",
              "german": "der Eilzug",
              "page": 230
            },
            {
              "english": "probably",
              "german": "wahrscheinlich",
              "page": 230
            },
            {
              "english": "single",
              "german": "einfache Fahrkarte",
              "page": 230
            },
            {
              "english": "return",
              "german": "die Hin- und Rückfahrkarte",
              "page": 230
            },
            {
              "english": "adult",
              "german": "der/die Erwachsene; ein Erwachsener / eine Erwachsene",
              "page": 230
            },
            {
              "english": "cash",
              "german": "das Bargeld",
              "page": 230
            },
            {
              "english": "credit card",
              "german": "die Kreditkarte",
              "page": 230
            },
            {
              "english": "lift",
              "german": "der Lift; der Fahrstuhl",
              "page": 230
            },
            {
              "english": "luggage (no pl)",
              "german": "das Gepäck",
              "page": 230
            },
            {
              "english": "stay",
              "german": "der Aufenthalt",
              "page": 230
            },
            {
              "english": "alternative",
              "german": "die Alternative",
              "page": 230
            },
            {
              "english": "announcement",
              "german": "die Ankündigung; die Durchsage",
              "page": 230
            },
            {
              "english": "delayed",
              "german": "verspätet; verzögert",
              "page": 230
            },
            {
              "english": "to board",
              "german": "an Bord gehen; besteigen",
              "page": 230
            },
            {
              "english": "to depart",
              "german": "abfahren; abfliegen",
              "page": 230
            },
            {
              "english": "unattended",
              "german": "unbeaufsichtigt",
              "page": 230
            },
            {
              "english": "pass",
              "german": "der Ausweis; der Pass",
              "page": 230
            },
            {
              "english": "to go down",
              "german": "hinuntergehen; nach unten gehen; entlanggehen",
              "page": 230
            },
            {
              "english": "straight on",
              "german": "geradeaus",
              "page": 230
            },
            {
              "english": "to cross",
              "german": "überqueren; kreuzen",
              "page": 230
            }
          ]
        }
      ]
    },
    {
      "id": "unit5",
      "title": "Unit 5 – Stay in Touch",
      "icon": "📱",
      "subsections": [
        {
          "id": "unit5-checkin",
          "title": "Check-in",
          "pages": [
            233
          ],
          "entries": [
            {
              "english": "to stay in touch",
              "german": "in Kontakt bleiben",
              "page": 233
            },
            {
              "english": "message",
              "german": "Nachricht",
              "page": 233
            },
            {
              "english": "to phone",
              "german": "anrufen, telefonieren",
              "page": 233
            },
            {
              "english": "mobile phone",
              "german": "Handy, Mobiltelefon",
              "page": 233
            },
            {
              "english": "email",
              "german": "E-Mail",
              "page": 233
            },
            {
              "english": "to send",
              "german": "senden, schicken",
              "page": 233
            },
            {
              "english": "to receive",
              "german": "empfangen, erhalten",
              "page": 233
            },
            {
              "english": "to reply",
              "german": "antworten",
              "page": 233
            },
            {
              "english": "letter",
              "german": "Brief",
              "page": 233
            },
            {
              "english": "stamp",
              "german": "Briefmarke",
              "page": 233
            },
            {
              "english": "address",
              "german": "Adresse",
              "page": 233
            },
            {
              "english": "postcard",
              "german": "Postkarte",
              "page": 233
            },
            {
              "english": "parcel",
              "german": "Paket",
              "page": 233
            },
            {
              "english": "video call",
              "german": "Videoanruf",
              "page": 233
            },
            {
              "english": "to stay in touch (with)",
              "german": "in Kontakt bleiben (mit)",
              "page": 233
            },
            {
              "english": "nasty",
              "german": "garstig; gemein",
              "page": 233
            },
            {
              "english": "comment",
              "german": "der Kommentar",
              "page": 233
            },
            {
              "english": "cyber bully",
              "german": "jemand, der andere in sozialen Netzwerken belästigt/mobbt",
              "page": 233
            },
            {
              "english": "protection",
              "german": "der Schutz",
              "page": 233
            },
            {
              "english": "media",
              "german": "die Medien",
              "page": 233
            },
            {
              "english": "interest",
              "german": "das Interesse",
              "page": 233
            },
            {
              "english": "paradise",
              "german": "das Paradies",
              "page": 233
            },
            {
              "english": "print",
              "german": "gedruckt; Druck-",
              "page": 233
            },
            {
              "english": "to take part (in)",
              "german": "teilnehmen (an)",
              "page": 233
            },
            {
              "english": "discussion",
              "german": "die Diskussion",
              "page": 233
            },
            {
              "english": "practical",
              "german": "praktisch",
              "page": 233
            },
            {
              "english": "mobile",
              "german": "das Handy; das Mobiltelefon",
              "page": 233
            }
          ]
        },
        {
          "id": "unit5-topic-a",
          "title": "A – Online Communication",
          "pages": [
            234
          ],
          "entries": [
            {
              "english": "to sign up",
              "german": "sich anmelden",
              "page": 234
            },
            {
              "english": "password",
              "german": "Passwort",
              "page": 234
            },
            {
              "english": "account",
              "german": "Konto, Account",
              "page": 234
            },
            {
              "english": "to log in",
              "german": "sich einloggen",
              "page": 234
            },
            {
              "english": "to log out",
              "german": "sich ausloggen",
              "page": 234
            },
            {
              "english": "to upload",
              "german": "hochladen",
              "page": 234
            },
            {
              "english": "to download",
              "german": "herunterladen",
              "page": 234
            },
            {
              "english": "to attach",
              "german": "anhängen",
              "page": 234
            },
            {
              "english": "attachment",
              "german": "Anhang",
              "page": 234
            },
            {
              "english": "subject",
              "german": "Betreff",
              "page": 234
            },
            {
              "english": "to forward",
              "german": "weiterleiten",
              "page": 234
            },
            {
              "english": "agony aunt",
              "german": "die Kummerkastentante",
              "page": 234
            },
            {
              "english": "… what to do.",
              "german": "… was ich tun soll.",
              "page": 234
            },
            {
              "english": "the two of them",
              "german": "beide",
              "page": 234
            },
            {
              "english": "whenever",
              "german": "wann immer; jedes Mal, wenn; so oft",
              "page": 234
            },
            {
              "english": "self-critical",
              "german": "selbstkritisch",
              "page": 234
            },
            {
              "english": "to overreact",
              "german": "überreagieren",
              "page": 234
            },
            {
              "english": "as soon as",
              "german": "sobald",
              "page": 234
            },
            {
              "english": "headphones (pl)",
              "german": "die Kopfhörer",
              "page": 234
            },
            {
              "english": "compromise",
              "german": "der Kompromiss",
              "page": 234
            },
            {
              "english": "after",
              "german": "nachdem",
              "page": 234
            },
            {
              "english": "face-to-face",
              "german": "hier: persönlich; von Angesicht zu Angesicht",
              "page": 234
            },
            {
              "english": "forever",
              "german": "für immer; ewig",
              "page": 234
            },
            {
              "english": "attention",
              "german": "die Aufmerksamkeit; die Beachtung",
              "page": 234
            }
          ]
        },
        {
          "id": "unit5-topic-b",
          "title": "B – Social Media & Safety",
          "pages": [
            235
          ],
          "entries": [
            {
              "english": "social network",
              "german": "soziales Netzwerk",
              "page": 235
            },
            {
              "english": "to comment",
              "german": "kommentieren",
              "page": 235
            },
            {
              "english": "to like",
              "german": "liken, gefällt mir",
              "page": 235
            },
            {
              "english": "privacy",
              "german": "Privatsphäre",
              "page": 235
            },
            {
              "english": "private",
              "german": "privat",
              "page": 235
            },
            {
              "english": "safe",
              "german": "sicher",
              "page": 235
            },
            {
              "english": "cyberbullying",
              "german": "Cybermobbing",
              "page": 235
            },
            {
              "english": "stranger",
              "german": "Fremde/r",
              "page": 235
            },
            {
              "english": "to block",
              "german": "blockieren, sperren",
              "page": 235
            },
            {
              "english": "to report",
              "german": "melden",
              "page": 235
            },
            {
              "english": "to be allowed to (do sth)",
              "german": "dürfen",
              "page": 235
            },
            {
              "english": "to go over to",
              "german": "hinübergehen zu; zu jmdm. nach Hause gehen",
              "page": 235
            },
            {
              "english": "What on earth …?",
              "german": "Was um alles in der Welt …?",
              "page": 235
            },
            {
              "english": "pipe",
              "german": "das Rohr; die Rohrleitung",
              "page": 235
            },
            {
              "english": "to go crazy",
              "german": "ausflippen; durchdrehen; verrückt werden",
              "page": 235
            },
            {
              "english": "washing machine",
              "german": "die Waschmaschine",
              "page": 235
            },
            {
              "english": "to waste",
              "german": "verschwenden",
              "page": 235
            },
            {
              "english": "cannot",
              "german": "kann nicht; können nicht",
              "page": 235
            },
            {
              "english": "step-by-step",
              "german": "Schritt-für-Schritt-",
              "page": 235
            },
            {
              "english": "to be able to (do sth)",
              "german": "fähig sein zu; können",
              "page": 235
            },
            {
              "english": "still",
              "german": "dennoch",
              "page": 235
            },
            {
              "english": "knob",
              "german": "der Griff",
              "page": 235
            },
            {
              "english": "to reach",
              "german": "erreichen; dran kommen",
              "page": 235
            },
            {
              "english": "to turn off",
              "german": "abschalten; ausschalten",
              "page": 235
            },
            {
              "english": "to work",
              "german": "hier: funktionieren",
              "page": 235
            },
            {
              "english": "genius",
              "german": "das Genie",
              "page": 235
            },
            {
              "english": "With a very big head!",
              "german": "Und ein Angeber!",
              "page": 235
            },
            {
              "english": "son",
              "german": "der Sohn",
              "page": 235
            },
            {
              "english": "by",
              "german": "von; durch",
              "page": 235
            },
            {
              "english": "library",
              "german": "die Bibliothek; die Bücherei",
              "page": 235
            },
            {
              "english": "police",
              "german": "die Polizei",
              "page": 235
            },
            {
              "english": "to (e-)mail",
              "german": "mailen; per E-Mail schicken",
              "page": 235
            },
            {
              "english": "to comment (on)",
              "german": "kommentieren",
              "page": 235
            },
            {
              "english": "to care (about)",
              "german": "wichtig nehmen; sich kümmern (um); sich interessieren (für)",
              "page": 235
            }
          ]
        },
        {
          "id": "unit5-skills",
          "title": "Skills – How to Write an Email",
          "pages": [
            236
          ],
          "entries": [
            {
              "english": "formal",
              "german": "formell",
              "page": 236
            },
            {
              "english": "informal",
              "german": "informell",
              "page": 236
            },
            {
              "english": "greeting",
              "german": "Gruß, Begrüßung",
              "page": 236
            },
            {
              "english": "Dear ...",
              "german": "Liebe/r ...",
              "page": 236
            },
            {
              "english": "yours",
              "german": "Dein/e, Ihr/e",
              "page": 236
            },
            {
              "english": "to sign off",
              "german": "sich verabschieden (schriftlich)",
              "page": 236
            },
            {
              "english": "for example",
              "german": "zum Beispiel",
              "page": 236
            },
            {
              "english": "Yours …",
              "german": "Viele Grüße … (am Ende von Briefen und Mails)",
              "page": 236
            },
            {
              "english": "anywhere",
              "german": "irgendwo; überall (egal, wo)",
              "page": 236
            },
            {
              "english": "understanding",
              "german": "das Verständnis",
              "page": 236
            },
            {
              "english": "weird",
              "german": "merkwürdig; seltsam; sonderbar",
              "page": 236
            }
          ]
        },
        {
          "id": "unit5-story",
          "title": "Story – The Gift of the Magi",
          "pages": [
            237
          ],
          "entries": [
            {
              "english": "gift",
              "german": "Geschenk",
              "page": 237
            },
            {
              "english": "poor",
              "german": "arm",
              "page": 237
            },
            {
              "english": "rich",
              "german": "reich",
              "page": 237
            },
            {
              "english": "to sacrifice",
              "german": "opfern",
              "page": 237
            },
            {
              "english": "wise",
              "german": "weise, klug",
              "page": 237
            },
            {
              "english": "precious",
              "german": "wertvoll, kostbar",
              "page": 237
            },
            {
              "english": "chain",
              "german": "Kette",
              "page": 237
            },
            {
              "english": "comb",
              "german": "Kamm",
              "page": 237
            },
            {
              "english": "disaster",
              "german": "das Desaster; die Katastrophe; das Unglück",
              "page": 237
            },
            {
              "english": "to be on",
              "german": "an sein; laufen",
              "page": 237
            },
            {
              "english": "thunder (no pl)",
              "german": "der Donner",
              "page": 237
            },
            {
              "english": "lightning (no pl)",
              "german": "der Blitz",
              "page": 237
            },
            {
              "english": "to get out of",
              "german": "aussteigen; herauskommen aus",
              "page": 237
            },
            {
              "english": "front door",
              "german": "die Haustür",
              "page": 237
            },
            {
              "english": "PC (= personal computer)",
              "german": "der PC",
              "page": 237
            },
            {
              "english": "upstairs",
              "german": "nach oben; im Obergeschoss; oben",
              "page": 237
            },
            {
              "english": "downstairs",
              "german": "nach unten; im Untergeschoss; unten",
              "page": 237
            },
            {
              "english": "to tap",
              "german": "antippen",
              "page": 237
            },
            {
              "english": "to joke",
              "german": "scherzen",
              "page": 237
            },
            {
              "english": "to press",
              "german": "drücken; pressen",
              "page": 237
            },
            {
              "english": "to go black",
              "german": "schwarz werden",
              "page": 237
            },
            {
              "english": "power cut",
              "german": "der Stromausfall",
              "page": 237
            },
            {
              "english": "candlelight (no pl)",
              "german": "das Kerzenlicht",
              "page": 237
            },
            {
              "english": "torch",
              "german": "die Fackel; die Taschenlampe",
              "page": 237
            },
            {
              "english": "only",
              "german": "einzige/-r/-s",
              "page": 237
            },
            {
              "english": "right now",
              "german": "jetzt gleich; sofort; gerade",
              "page": 237
            },
            {
              "english": "impressed",
              "german": "beeindruckt",
              "page": 237
            },
            {
              "english": "to show off",
              "german": "angeben",
              "page": 237
            },
            {
              "english": "to borrow",
              "german": "(sich) ausleihen",
              "page": 237
            },
            {
              "english": "mine",
              "german": "mein/-er/-e/-es",
              "page": 237
            },
            {
              "english": "nervously",
              "german": "nervös; aufgeregt",
              "page": 237
            },
            {
              "english": "site",
              "german": "die Website",
              "page": 237
            },
            {
              "english": "to try hard",
              "german": "sich anstrengen; sich Mühe geben",
              "page": 237
            },
            {
              "english": "to feel left out",
              "german": "sich ausgeschlossen fühlen",
              "page": 237
            },
            {
              "english": "pros and cons",
              "german": "Argumente für und gegen etw.",
              "page": 237
            },
            {
              "english": "modern",
              "german": "modern",
              "page": 237
            },
            {
              "english": "to link",
              "german": "verbinden",
              "page": 237
            }
          ]
        },
        {
          "id": "unit5-station",
          "title": "Station 5 – Email Pen Pals",
          "pages": [
            235,
            236
          ],
          "entries": [
            {
              "english": "pen pal",
              "german": "Brieffreund/in",
              "page": 235
            },
            {
              "english": "to introduce yourself",
              "german": "sich vorstellen",
              "page": 235
            },
            {
              "english": "hobby",
              "german": "Hobby",
              "page": 236
            },
            {
              "english": "to look forward to",
              "german": "sich freuen auf",
              "page": 236
            },
            {
              "english": "regards",
              "german": "Grüße",
              "page": 236
            }
          ]
        },
        {
          "id": "unit5-unittask",
          "title": "Unit Task – Design an App",
          "pages": [
            237
          ],
          "entries": [
            {
              "english": "to design",
              "german": "entwerfen, gestalten",
              "page": 237
            },
            {
              "english": "app",
              "german": "App",
              "page": 237
            },
            {
              "english": "feature",
              "german": "Funktion, Merkmal",
              "page": 237
            }
          ]
        }
      ]
    },
    {
      "id": "focus3",
      "title": "Focus 3 – The Celts and the Romans in Britain",
      "icon": "🏛️",
      "subsections": [
        {
          "id": "focus3-celts",
          "title": "Celts & Romans",
          "pages": [
            238,
            239
          ],
          "entries": [
            {
              "english": "Celt",
              "german": "Kelte",
              "page": 238
            },
            {
              "english": "Roman",
              "german": "Römer",
              "page": 238
            },
            {
              "english": "to invade",
              "german": "einfallen, eindringen",
              "page": 238
            },
            {
              "english": "invasion",
              "german": "Invasion, Einfall",
              "page": 238
            },
            {
              "english": "empire",
              "german": "Reich, Imperium",
              "page": 238
            },
            {
              "english": "emperor",
              "german": "Kaiser",
              "page": 238
            },
            {
              "english": "soldier",
              "german": "Soldat",
              "page": 238
            },
            {
              "english": "army",
              "german": "Armee, Heer",
              "page": 238
            },
            {
              "english": "weapon",
              "german": "Waffe",
              "page": 238
            },
            {
              "english": "shield",
              "german": "Schild",
              "page": 239
            },
            {
              "english": "sword",
              "german": "Schwert",
              "page": 239
            },
            {
              "english": "fort",
              "german": "Festung, Fort",
              "page": 239
            },
            {
              "english": "wall",
              "german": "Mauer, Wall",
              "page": 239
            },
            {
              "english": "to build",
              "german": "bauen",
              "page": 239
            },
            {
              "english": "to defeat",
              "german": "besiegen",
              "page": 239
            },
            {
              "english": "battle",
              "german": "Schlacht",
              "page": 239
            },
            {
              "english": "to conquer",
              "german": "erobern",
              "page": 239
            },
            {
              "english": "tribe",
              "german": "Stamm",
              "page": 239
            },
            {
              "english": "Celtic",
              "german": "keltisch",
              "page": 238
            },
            {
              "english": "powerful",
              "german": "stark; mächtig",
              "page": 238
            },
            {
              "english": "peace",
              "german": "der Frieden",
              "page": 238
            },
            {
              "english": "to thank",
              "german": "danken",
              "page": 238
            },
            {
              "english": "god",
              "german": "der Gott",
              "page": 238
            },
            {
              "english": "nose",
              "german": "die Nase",
              "page": 238
            },
            {
              "english": "instead",
              "german": "stattdessen",
              "page": 238
            },
            {
              "english": "cruel",
              "german": "grausam",
              "page": 238
            },
            {
              "english": "to burn down",
              "german": "abbrennen; niederbrennen",
              "page": 238
            },
            {
              "english": "lost",
              "german": "verloren",
              "page": 238
            },
            {
              "english": "prisoner",
              "german": "der Gefangene; ein Gefangener / eine Gefangene",
              "page": 238
            },
            {
              "english": "AD (= Anno Domini)",
              "german": "nach Christus",
              "page": 238
            },
            {
              "english": "circle",
              "german": "der Kreis; der Ring",
              "page": 238
            },
            {
              "english": "Welsh",
              "german": "walisisch; Walisisch; der Waliser / die Waliserin",
              "page": 238
            },
            {
              "english": "Gaelic",
              "german": "gälisch; Gälisch",
              "page": 238
            },
            {
              "english": "detective",
              "german": "der Detektiv / die Detektivin",
              "page": 238
            }
          ]
        }
      ]
    },
    {
      "id": "unit6",
      "title": "Unit 6 – Goodbye Greenwich",
      "icon": "🌉",
      "subsections": [
        {
          "id": "unit6-checkin",
          "title": "Check-in",
          "pages": [
            240
          ],
          "entries": [
            {
              "english": "goodbye",
              "german": "Auf Wiedersehen, Tschüss",
              "page": 240
            },
            {
              "english": "to miss",
              "german": "vermissen",
              "page": 240
            },
            {
              "english": "memory",
              "german": "Erinnerung",
              "page": 240
            },
            {
              "english": "to remember",
              "german": "sich erinnern",
              "page": 240
            },
            {
              "english": "to forget",
              "german": "vergessen",
              "page": 240
            },
            {
              "english": "experience",
              "german": "Erfahrung, Erlebnis",
              "page": 240
            },
            {
              "english": "to look back",
              "german": "zurückblicken",
              "page": 240
            },
            {
              "english": "favourite",
              "german": "Lieblings-",
              "page": 240
            },
            {
              "english": "highlight",
              "german": "Höhepunkt",
              "page": 240
            },
            {
              "english": "term",
              "german": "Halbjahr, Schulhalbjahr",
              "page": 240
            },
            {
              "english": "to say goodbye",
              "german": "sich verabschieden",
              "page": 240
            },
            {
              "english": "living history show",
              "german": "Show, in der historischer Alltag nachgespielt wird",
              "page": 240
            },
            {
              "english": "pony trekking",
              "german": "das Ponyreiten im Gelände",
              "page": 240
            },
            {
              "english": "Scottish",
              "german": "schottisch",
              "page": 240
            },
            {
              "english": "at the seaside",
              "german": "am Meer",
              "page": 240
            },
            {
              "english": "harbour",
              "german": "der Hafen",
              "page": 240
            },
            {
              "english": "to grow",
              "german": "wachsen",
              "page": 240
            }
          ]
        },
        {
          "id": "unit6-topic-a",
          "title": "A – Memories & Experiences",
          "pages": [
            241
          ],
          "entries": [
            {
              "english": "diary",
              "german": "Tagebuch",
              "page": 241
            },
            {
              "english": "to grow up",
              "german": "aufwachsen",
              "page": 241
            },
            {
              "english": "childhood",
              "german": "Kindheit",
              "page": 241
            },
            {
              "english": "to change",
              "german": "ändern, verändern",
              "page": 241
            },
            {
              "english": "future",
              "german": "Zukunft",
              "page": 241
            },
            {
              "english": "past",
              "german": "Vergangenheit",
              "page": 241
            },
            {
              "english": "present",
              "german": "Gegenwart",
              "page": 241
            },
            {
              "english": "to promise",
              "german": "versprechen",
              "page": 241
            },
            {
              "english": "wish",
              "german": "Wunsch",
              "page": 241
            },
            {
              "english": "dream",
              "german": "Traum",
              "page": 241
            },
            {
              "english": "nowhere",
              "german": "nirgendwo; nirgendwohin",
              "page": 241
            },
            {
              "english": "Cornish",
              "german": "aus/in Cornwall; kornisch",
              "page": 241
            },
            {
              "english": "to stay",
              "german": "übernachten",
              "page": 241
            },
            {
              "english": "(not) any longer",
              "german": "(nicht) mehr; (nicht) länger",
              "page": 241
            },
            {
              "english": "all of us",
              "german": "wir alle",
              "page": 241
            },
            {
              "english": "transport",
              "german": "das Verkehrsmittel; der Transport",
              "page": 241
            },
            {
              "english": "prediction",
              "german": "die Vorhersage; die Voraussage",
              "page": 241
            },
            {
              "english": "reaction",
              "german": "die Reaktion",
              "page": 241
            },
            {
              "english": "travel agent's",
              "german": "das Reisebüro",
              "page": 241
            },
            {
              "english": "to depend (on)",
              "german": "abhängen von",
              "page": 241
            },
            {
              "english": "to book",
              "german": "buchen; reservieren",
              "page": 241
            },
            {
              "english": "weather forecast",
              "german": "die Wettervorhersage",
              "page": 241
            }
          ]
        },
        {
          "id": "unit6-station",
          "title": "Station 6 – History of London",
          "pages": [
            242
          ],
          "entries": [
            {
              "english": "century",
              "german": "Jahrhundert",
              "page": 242
            },
            {
              "english": "medieval",
              "german": "mittelalterlich",
              "page": 242
            },
            {
              "english": "tower",
              "german": "Turm",
              "page": 242
            },
            {
              "english": "cathedral",
              "german": "Kathedrale, Dom",
              "page": 242
            },
            {
              "english": "bridge",
              "german": "Brücke",
              "page": 242
            },
            {
              "english": "palace",
              "german": "Palast, Schloss",
              "page": 242
            },
            {
              "english": "to restore",
              "german": "restaurieren, wiederherstellen",
              "page": 242
            },
            {
              "english": "landmark",
              "german": "Wahrzeichen, Sehenswürdigkeit",
              "page": 242
            },
            {
              "english": "to come in",
              "german": "hereinkommen",
              "page": 242
            },
            {
              "english": "hall",
              "german": "der Flur; die Diele; der Korridor",
              "page": 242
            },
            {
              "english": "electricity",
              "german": "die Elektrizität; der Strom",
              "page": 242
            },
            {
              "english": "What’s the matter?",
              "german": "Was ist los?; Was hast du?",
              "page": 242
            },
            {
              "english": "Oh dear!",
              "german": "Oje!",
              "page": 242
            },
            {
              "english": "to go out",
              "german": "ausgehen; hinausgehen",
              "page": 242
            },
            {
              "english": "coastal path",
              "german": "der Küstenweg",
              "page": 242
            },
            {
              "english": "plumber",
              "german": "der Installateur / die Installateurin; der Klempner / die Klempnerin",
              "page": 242
            },
            {
              "english": "chimney",
              "german": "der Kamin; der Schornstein",
              "page": 242
            },
            {
              "english": "roof",
              "german": "das Dach",
              "page": 242
            },
            {
              "english": "tin",
              "german": "das Zinn",
              "page": 242
            },
            {
              "english": "geocaching",
              "german": "das Geocaching",
              "page": 242
            },
            {
              "english": "excitedly",
              "german": "aufgeregt; begeistert",
              "page": 242
            },
            {
              "english": "to solve",
              "german": "lösen",
              "page": 242
            },
            {
              "english": "deep",
              "german": "tief",
              "page": 242
            },
            {
              "english": "to boom",
              "german": "dröhnen",
              "page": 242
            },
            {
              "english": "skirt",
              "german": "der Rock",
              "page": 242
            },
            {
              "english": "trousers (pl)",
              "german": "die Hose",
              "page": 242
            },
            {
              "english": "spear",
              "german": "der Speer",
              "page": 242
            },
            {
              "english": "local",
              "german": "örtlich; lokal",
              "page": 242
            },
            {
              "english": "society",
              "german": "der Verein; die Gesellschaft",
              "page": 242
            },
            {
              "english": "Nice to meet you.",
              "german": "Nett, dich/euch/Sie kennenzulernen.",
              "page": 242
            },
            {
              "english": "wife, wives (pl)",
              "german": "die Ehefrau",
              "page": 242
            },
            {
              "english": "twin",
              "german": "der Zwilling; Zwillings-",
              "page": 242
            },
            {
              "english": "tool",
              "german": "das Werkzeug; das Gerät",
              "page": 242
            },
            {
              "english": "electrician",
              "german": "der Elektriker / die Elektrikerin",
              "page": 242
            },
            {
              "english": "plumbing",
              "german": "die Sanitärarbeit",
              "page": 242
            },
            {
              "english": "electrics",
              "german": "die Elektrik",
              "page": 242
            }
          ]
        },
        {
          "id": "unit6-skills",
          "title": "Skills – Giving Information",
          "pages": [
            243
          ],
          "entries": [
            {
              "english": "leaflet",
              "german": "Flyer, Prospekt",
              "page": 243
            },
            {
              "english": "guided tour",
              "german": "Führung",
              "page": 243
            },
            {
              "english": "opening hours",
              "german": "Öffnungszeiten",
              "page": 243
            },
            {
              "english": "admission",
              "german": "Eintritt",
              "page": 243
            },
            {
              "english": "entrance",
              "german": "Eingang",
              "page": 243
            },
            {
              "english": "exit",
              "german": "Ausgang",
              "page": 243
            },
            {
              "english": "tourist board",
              "german": "die Tourismuszentrale; die Tourismusbehörde",
              "page": 243
            },
            {
              "english": "material",
              "german": "das Material",
              "page": 243
            },
            {
              "english": "to send off",
              "german": "abschicken",
              "page": 243
            },
            {
              "english": "form",
              "german": "das Formular",
              "page": 243
            },
            {
              "english": "in a polite way",
              "german": "auf höfliche Art",
              "page": 243
            },
            {
              "english": "yourselves",
              "german": "ihr/euch/Sie/sich (selbst); selber",
              "page": 243
            },
            {
              "english": "Dear Sir or Madam",
              "german": "Sehr geehrte Dame, sehr geehrter Herr",
              "page": 243
            },
            {
              "english": "grammar school",
              "german": "das Gymnasium",
              "page": 243
            },
            {
              "english": "Best wishes",
              "german": "Viele Grüße; Herzliche Grüße",
              "page": 243
            }
          ]
        },
        {
          "id": "unit6-s2",
          "title": "S2 – Cornwall & Geography",
          "pages": [
            242
          ],
          "entries": [
            {
              "english": "coastline",
              "german": "die Küste; der Küstenverlauf",
              "page": 242
            },
            {
              "english": "to offer",
              "german": "anbieten",
              "page": 242
            },
            {
              "english": "to get to know",
              "german": "kennenlernen",
              "page": 242
            },
            {
              "english": "prehistoric",
              "german": "vorgeschichtlich; prähistorisch",
              "page": 242
            },
            {
              "english": "mining",
              "german": "der Bergbau",
              "page": 242
            },
            {
              "english": "Bronze Age",
              "german": "die Bronzezeit (ca. 2200–800 v. Chr.)",
              "page": 242
            },
            {
              "english": "cross",
              "german": "das Kreuz",
              "page": 242
            },
            {
              "english": "besides",
              "german": "neben",
              "page": 242
            },
            {
              "english": "jam",
              "german": "die Marmelade; die Konfitüre",
              "page": 242
            },
            {
              "english": "geography",
              "german": "die Geografie; die Erdkunde",
              "page": 242
            },
            {
              "english": "tourism",
              "german": "der Tourismus",
              "page": 242
            },
            {
              "english": "possibility",
              "german": "die Möglichkeit",
              "page": 242
            },
            {
              "english": "might",
              "german": "könnte/-n (vielleicht)",
              "page": 242
            },
            {
              "english": "stormy",
              "german": "stürmisch",
              "page": 242
            },
            {
              "english": "to supply",
              "german": "versorgen",
              "page": 242
            },
            {
              "english": "to rule",
              "german": "herrschen; regieren",
              "page": 242
            }
          ]
        }
      ]
    },
    {
      "id": "ac3",
      "title": "Across Cultures 3 – British Stories and Legends",
      "icon": "🐉",
      "subsections": [
        {
          "id": "ac3-prepositions",
          "title": "Difficult Prepositions (at/in/on)",
          "pages": [
            240
          ],
          "entries": [
            {
              "english": "at 6 o'clock",
              "german": "um 6 Uhr",
              "page": 240
            },
            {
              "english": "at night",
              "german": "in der Nacht",
              "page": 240
            },
            {
              "english": "at the weekend",
              "german": "am Wochenende",
              "page": 240
            },
            {
              "english": "at school",
              "german": "in der Schule",
              "page": 240
            },
            {
              "english": "at work",
              "german": "bei der Arbeit",
              "page": 240
            },
            {
              "english": "at the doctor's",
              "german": "beim Arzt",
              "page": 240
            },
            {
              "english": "at home",
              "german": "zu Hause",
              "page": 240
            },
            {
              "english": "on Sunday",
              "german": "am Sonntag, sonntags",
              "page": 240
            },
            {
              "english": "on 7th July",
              "german": "am 7. Juli",
              "page": 240
            },
            {
              "english": "on the phone",
              "german": "am Telefon",
              "page": 240
            },
            {
              "english": "on holiday",
              "german": "im Urlaub",
              "page": 240
            },
            {
              "english": "on the road",
              "german": "auf der Straße",
              "page": 240
            },
            {
              "english": "in the street",
              "german": "auf der Straße, in der Straße",
              "page": 240
            },
            {
              "english": "in the world",
              "german": "auf der Welt",
              "page": 240
            },
            {
              "english": "in the photo",
              "german": "auf dem Foto",
              "page": 240
            },
            {
              "english": "in the afternoon",
              "german": "am Nachmittag",
              "page": 240
            },
            {
              "english": "in 2015",
              "german": "im Jahr 2015",
              "page": 240
            },
            {
              "english": "in April",
              "german": "im April",
              "page": 240
            },
            {
              "english": "in the end",
              "german": "am Ende",
              "page": 240
            }
          ]
        },
        {
          "id": "ac3-vocab",
          "title": "Stories & Legends Vocabulary",
          "pages": [
            240
          ],
          "entries": [
            {
              "english": "to turn to",
              "german": "sich verwandeln in, sich hinwenden zu",
              "page": 240
            },
            {
              "english": "creative",
              "german": "kreativ",
              "page": 240
            },
            {
              "english": "diary entry",
              "german": "Tagebucheintrag",
              "page": 240
            },
            {
              "english": "sailboat",
              "german": "Segelboot",
              "page": 240
            },
            {
              "english": "villain",
              "german": "Bösewicht, Schurke",
              "page": 240
            },
            {
              "english": "magical",
              "german": "magisch, Zauber-",
              "page": 240
            },
            {
              "english": "wizard",
              "german": "Zauberer",
              "page": 240
            },
            {
              "english": "writer",
              "german": "Autor/in, Schriftsteller/in, Verfasser/in",
              "page": 240
            },
            {
              "english": "completely",
              "german": "komplett, völlig",
              "page": 240
            },
            {
              "english": "ingredient",
              "german": "Zutat",
              "page": 240
            }
          ]
        },
        {
          "id": "ac3-legends",
          "title": "Crime & Legends",
          "pages": [
            241
          ],
          "entries": [
            {
              "english": "knight",
              "german": "Ritter",
              "page": 241
            },
            {
              "english": "criminal",
              "german": "Kriminelle/r, Verbrecher/in",
              "page": 241
            },
            {
              "english": "power",
              "german": "Kraft, Macht, Stärke",
              "page": 241
            },
            {
              "english": "private detective",
              "german": "Privatdetektiv/in",
              "page": 241
            },
            {
              "english": "mysterious",
              "german": "mysteriös, geheimnisvoll",
              "page": 241
            },
            {
              "english": "crime",
              "german": "Verbrechen, Kriminalität",
              "page": 241
            },
            {
              "english": "outlaw",
              "german": "Gesetzlose/r, Geächtete/r",
              "page": 241
            },
            {
              "english": "robber",
              "german": "Räuber/in",
              "page": 241
            },
            {
              "english": "the Round Table",
              "german": "die Tafelrunde",
              "page": 241
            },
            {
              "english": "to hide",
              "german": "sich verstecken",
              "page": 241
            },
            {
              "english": "the rich",
              "german": "die Reichen",
              "page": 241
            },
            {
              "english": "the poor",
              "german": "die Armen",
              "page": 241
            },
            {
              "english": "prop",
              "german": "Requisite",
              "page": 241
            },
            {
              "english": "crime story",
              "german": "Krimi, Kriminalgeschichte",
              "page": 241
            },
            {
              "english": "set",
              "german": "Filmset, Bühnenbild, Kulisse",
              "page": 241
            }
          ]
        }
      ]
    }
  ]
};
