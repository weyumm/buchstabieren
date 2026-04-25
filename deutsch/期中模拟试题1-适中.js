"use strict";

const EXAM = {
  title: "期中模拟试题1-适中",
  durationMinutes: 100,
  totalScore: 85,
  storageKey: "de-midterm-mock-1-medium-v3",
  sections: [
    {
      id: "A",
      title: "II.A Wählen Sie die richtigen Lösungen",
      points: 10,
      help: "选择正确答案。每题 1 分。",
      questions: [
        {
          id: "A1",
          type: "mc",
          maxScore: 1,
          prompt: "Während ___ Auslandssemesters hat Mia viele Erfahrungen gesammelt.",
          options: ["des", "dem", "der", "den"],
          answer: "des",
          explanation: "das Auslandssemester 是中性名词；während 后常用第二格，所以是 des Auslandssemesters。"
        },
        {
          id: "A2",
          type: "mc",
          maxScore: 1,
          prompt: "Ich freue ___ auf die Reise in die Schweiz.",
          options: ["mich", "mir", "dich", "sich"],
          answer: "mich",
          explanation: "sich freuen auf + A 是真反身动词用法。主语是 ich，第四格反身代词是 mich。"
        },
        {
          id: "A3",
          type: "mc",
          maxScore: 1,
          prompt: "Nachdem wir die Tickets ___ hatten, brachen wir früh auf.",
          options: ["gekauft", "kaufen", "gekauftet", "kaufte"],
          answer: "gekauft",
          explanation: "nachdem 表示先发生的动作时，这里用 Plusquamperfekt：hatten + Partizip II。"
        },
        {
          id: "A4",
          type: "mc",
          maxScore: 1,
          prompt: "Als ich klein ___, wohnte ich auf dem Land.",
          options: ["war", "bin", "habe", "wurde"],
          answer: "war",
          explanation: "als 用于过去一次性或过去阶段的时间背景；sein 的 Präteritum 第一人称单数是 war。"
        },
        {
          id: "A5",
          type: "mc",
          maxScore: 1,
          prompt: "Wir sprechen über das Problem. Wir sprechen ___.",
          options: ["darüber", "darauf", "daran", "dafür"],
          answer: "darüber",
          explanation: "über + 事物可替换为 darüber；人不能用 da- 代副词。"
        },
        {
          id: "A6",
          type: "mc",
          maxScore: 1,
          prompt: "Bremen ist ___ als Leipzig, aber es hat weniger Einwohner.",
          options: ["größer", "groß", "am größten", "große"],
          answer: "größer",
          explanation: "als 用于比较级结构：größer als。"
        },
        {
          id: "A7",
          type: "mc",
          maxScore: 1,
          prompt: "Der Patient bleibt zu Hause, weil er ___ hat.",
          options: ["Fieber", "Praxis", "Apotheke", "Kreditkarte"],
          answer: "Fieber",
          explanation: "Fieber haben 是常用病症表达，意思是发烧。"
        },
        {
          id: "A8",
          type: "mc",
          maxScore: 1,
          prompt: "Wenn du gesund leben möchtest, solltest du ___ Zucker essen.",
          options: ["weniger", "wenigsten", "mehrere", "höher"],
          answer: "weniger",
          explanation: "weniger 是 wenig 的比较级，表示“更少”。"
        },
        {
          id: "A9",
          type: "mc",
          maxScore: 1,
          prompt: "Das Kolloquium findet morgen um 15 Uhr ___.",
          options: ["statt", "an", "auf", "mit"],
          answer: "statt",
          explanation: "stattfinden 是可分动词，变位后可分前缀 statt 放在句末。"
        },
        {
          id: "A10",
          type: "mc",
          maxScore: 1,
          prompt: "Die Studentin interessiert sich ___ Freiwilligenarbeit.",
          options: ["für", "auf", "über", "an"],
          answer: "für",
          explanation: "sich interessieren für + A 表示“对……感兴趣”。"
        }
      ]
    },
    {
      id: "B",
      title: "II.B Setzen Sie passende Wörter ein",
      points: 10,
      help: "从 12 个词中选 10 个填入句子，并按需要变形。每空 1 分；选对词但形态不完整给 0.5 分。",
      wordBank: [
        "einpacken", "die Sehenswürdigkeit", "sich erholen", "zufrieden",
        "erkältet", "verschreiben", "teilnehmen", "unterstützen",
        "einheimisch", "anfangen", "wissenschaftlich", "zurückschreiben"
      ],
      questions: [
        {
          id: "B1",
          type: "word",
          maxScore: 1,
          prompt: "Vor der Reise muss ich meinen Pass und das Ladegerät ______.",
          fullAnswers: ["einpacken"],
          lemmaAnswers: ["einpacken"],
          correctAnswerText: "einpacken",
          explanation: "müssen 后接动词原形；einpacken 表示把东西装进行李。"
        },
        {
          id: "B2",
          type: "word",
          maxScore: 1,
          prompt: "Viele Touristen besichtigen in Bremen wichtige ______.",
          fullAnswers: ["Sehenswürdigkeiten"],
          lemmaAnswers: ["Sehenswürdigkeit", "die Sehenswürdigkeit"],
          correctAnswerText: "Sehenswürdigkeiten",
          explanation: "wichtig 后修饰复数名词；die Sehenswürdigkeit 的复数是 Sehenswürdigkeiten。"
        },
        {
          id: "B3",
          type: "word",
          maxScore: 1,
          prompt: "Nach dem langen Flug möchte Lena sich zuerst ______.",
          fullAnswers: ["erholen"],
          lemmaAnswers: ["sich erholen", "erholen"],
          correctAnswerText: "erholen",
          explanation: "möchte 后用动词原形；句中已有 sich。"
        },
        {
          id: "B4",
          type: "word",
          maxScore: 1,
          prompt: "Ich bin mit meinem neuen Praktikum sehr ______.",
          fullAnswers: ["zufrieden"],
          lemmaAnswers: ["zufrieden"],
          correctAnswerText: "zufrieden",
          explanation: "zufrieden mit + D 表示“对……满意”。"
        },
        {
          id: "B5",
          type: "word",
          maxScore: 1,
          prompt: "Seit gestern hustet Max und ist stark ______.",
          fullAnswers: ["erkältet"],
          lemmaAnswers: ["erkälten", "sich erkälten", "erkältet"],
          correctAnswerText: "erkältet",
          explanation: "erkältet sein 表示“感冒了”。"
        },
        {
          id: "B6",
          type: "word",
          maxScore: 1,
          prompt: "Der Arzt hat mir Tabletten ______.",
          fullAnswers: ["verschrieben"],
          lemmaAnswers: ["verschreiben"],
          correctAnswerText: "verschrieben",
          explanation: "Perfekt 结构：hat + Partizip II；verschreiben 的第二分词是 verschrieben。"
        },
        {
          id: "B7",
          type: "word",
          maxScore: 1,
          prompt: "An der Veranstaltung haben viele Austauschstudenten ______.",
          fullAnswers: ["teilgenommen"],
          lemmaAnswers: ["teilnehmen"],
          correctAnswerText: "teilgenommen",
          explanation: "teilnehmen an + D；Perfekt 中第二分词为 teilgenommen。"
        },
        {
          id: "B8",
          type: "word",
          maxScore: 1,
          prompt: "Die Hochschule ______ ausländische Studierende beim Auslandssemester.",
          fullAnswers: ["unterstützt"],
          lemmaAnswers: ["unterstützen"],
          correctAnswerText: "unterstützt",
          explanation: "主语 die Hochschule 是第三人称单数，现在时词尾为 -t：unterstützt。"
        },
        {
          id: "B9",
          type: "word",
          maxScore: 1,
          prompt: "Die ______ Bevölkerung kennt die Stadt besser als Touristen.",
          fullAnswers: ["einheimische"],
          lemmaAnswers: ["einheimisch"],
          correctAnswerText: "einheimische",
          explanation: "die Bevölkerung 是阴性单数，定冠词后形容词词尾为 -e。"
        },
        {
          id: "B10",
          type: "word",
          maxScore: 1,
          prompt: "Morgen ______ der Deutschkurs um acht Uhr ______.",
          fullAnswers: ["fängt an", "faengt an"],
          lemmaAnswers: ["anfangen"],
          correctAnswerText: "fängt ... an",
          explanation: "anfangen 是可分动词，第三人称单数为 fängt ... an。"
        }
      ]
    },
    {
      id: "C",
      title: "II.C Ergänzen Sie Adjektive mit richtigen Endungen",
      points: 10,
      help: "在句子中填写形容词词尾。共 10 个空，每空 1 分；只填写词尾，如 -e/-en/-es。",
      questions: [
        {
          id: "C1",
          type: "adj",
          maxScore: 1,
          prompt: "Lukas macht ein interessant__ Auslandssemester in Bremen.",
          answer: "es",
          correctAnswerText: "interessantes Auslandssemester",
          explanation: "ein + 中性单数第四格/第一格，形容词用 -es：ein interessantes Auslandssemester。"
        },
        {
          id: "C2",
          type: "adj",
          maxScore: 1,
          prompt: "Clara interessiert sich für die traditionell__ chinesische Medizin.",
          answer: "e",
          correctAnswerText: "traditionelle chinesische Medizin",
          explanation: "die + 阴性单数第四格，形容词用 -e。"
        },
        {
          id: "C3",
          type: "adj",
          maxScore: 1,
          prompt: "Mit gut__ Freunden besucht Mei oft kulturelle Veranstaltungen.",
          answer: "en",
          correctAnswerText: "guten Freunden",
          explanation: "mit 后第三格；复数第三格形容词用 -en。"
        },
        {
          id: "C4",
          type: "adj",
          maxScore: 1,
          prompt: "Wegen des schlecht__ Wetters bleiben die Studenten im Wohnheim.",
          answer: "en",
          correctAnswerText: "schlechten Wetters",
          explanation: "wegen + Genitiv；des 后形容词用 -en。"
        },
        {
          id: "C5",
          type: "adj",
          maxScore: 1,
          prompt: "In Lijiang fotografiert Clara eine schön__ Gasse mit alten Häusern.",
          answer: "e",
          correctAnswerText: "schöne Gasse",
          explanation: "eine + 阴性单数第四格/第一格，形容词用 -e。"
        },
        {
          id: "C6",
          type: "adj",
          maxScore: 1,
          prompt: "Der neu__ Student wohnt in einem Miethaus am Stadtrand.",
          answer: "e",
          correctAnswerText: "neue Student",
          explanation: "der + 阳性单数第一格，形容词用 -e。"
        },
        {
          id: "C7",
          type: "multiAdj",
          maxScore: 2,
          parts: ["Frisch", " Gemüse und genug Schlaf sind für ein gesund", " Leben wichtig."],
          answers: ["es", "es"],
          correctAnswerText: "Frisches Gemüse; gesundes Leben",
          explanation: "无冠词中性单数第一格用 -es：frisches Gemüse；ein + 中性单数第四格/第一格也用 -es：ein gesundes Leben。"
        },
        {
          id: "C8",
          type: "multiAdj",
          maxScore: 2,
          parts: ["Der neu", " Student trägt einen braun", " Mantel und schwarze Schuhe."],
          answers: ["e", "en"],
          correctAnswerText: "neue Student; braunen Mantel",
          explanation: "der + 阳性第一格用 -e：der neue Student；einen + 阳性第四格用 -en：einen braunen Mantel。"
        }
      ]
    },
    {
      id: "D",
      title: "II.D Verbinden Sie die Sätze mit angegebenen Konjunktionen",
      points: 6,
      help: "用括号中的连词连接句子。每题 2 分。",
      questions: [
        {
          id: "D1",
          type: "open",
          maxScore: 2,
          prompt: "Lena hat gefrühstückt. Sie ist zur Universität gegangen. (nachdem)",
          expected: "Nachdem Lena gefrühstückt hatte, ist sie zur Universität gegangen.",
          explanation: "nachdem 引导先发生的动作；主句用 Perfekt 时，从句常用 Plusquamperfekt：gefrühstückt hatte。",
          keywordGroups: [["nachdem"], ["lena"], ["gefruehstueckt", "gefrühstückt"], ["hatte"], ["universitaet", "universität"], ["gegangen", "ging"]]
        },
        {
          id: "D2",
          type: "open",
          maxScore: 2,
          prompt: "Ich packe den Pass ein. Ich fahre zum Flughafen. (bevor)",
          expected: "Ich packe den Pass ein, bevor ich zum Flughafen fahre.",
          explanation: "bevor 从句动词放句末；主句和从句的先后关系要清楚。",
          keywordGroups: [["bevor"], ["pass"], ["einpacke", "packe"], ["flughafen"], ["fahre"]]
        },
        {
          id: "D3",
          type: "open",
          maxScore: 2,
          prompt: "Ich habe die Praxis gesehen. Ich interessiere mich für traditionelle chinesische Medizin. (seitdem)",
          expected: "Seitdem ich die Praxis gesehen habe, interessiere ich mich für traditionelle chinesische Medizin.",
          explanation: "seitdem 表示“自从……以来”；从句动词放句末，主句保持第二位动词。",
          keywordGroups: [["seitdem"], ["praxis"], ["gesehen"], ["habe"], ["interessiere"], ["medizin"]]
        }
      ]
    },
    {
      id: "E",
      title: "II.E Formen Sie die Sätze ins Präteritum um",
      points: 4,
      help: "把句子改写为 Präteritum。每题 1 分。",
      questions: [
        {
          id: "E1",
          type: "open",
          maxScore: 1,
          prompt: "Ich bin gestern krank.",
          expected: "Ich war gestern krank.",
          explanation: "sein 的 Präteritum 第一人称单数是 war。",
          fullAnswers: ["Ich war gestern krank"],
          keywordGroups: [["ich"], ["war"], ["gestern"], ["krank"]]
        },
        {
          id: "E2",
          type: "open",
          maxScore: 1,
          prompt: "Wir haben keine Zeit für die Reise.",
          expected: "Wir hatten keine Zeit für die Reise.",
          explanation: "haben 的 Präteritum 第一人称复数是 hatten。",
          fullAnswers: ["Wir hatten keine Zeit für die Reise"],
          keywordGroups: [["wir"], ["hatten"], ["keine"], ["zeit"], ["reise"]]
        },
        {
          id: "E3",
          type: "open",
          maxScore: 1,
          prompt: "Der Kurs findet am Montag statt.",
          expected: "Der Kurs fand am Montag statt.",
          explanation: "stattfinden 的 Präteritum 第三人称单数为 fand ... statt。"
          ,
          fullAnswers: ["Der Kurs fand am Montag statt"],
          keywordGroups: [["kurs"], ["fand"], ["montag"], ["statt"]]
        },
        {
          id: "E4",
          type: "open",
          maxScore: 1,
          prompt: "Anna geht früh nach Hause.",
          expected: "Anna ging früh nach Hause.",
          explanation: "gehen 的 Präteritum 第三人称单数是 ging。",
          fullAnswers: ["Anna ging früh nach Hause"],
          keywordGroups: [["anna"], ["ging"], ["frueh", "früh"], ["hause"]]
        }
      ]
    },
    {
      id: "R",
      title: "III. Leseverstehen",
      points: 20,
      help: "三篇阅读，每篇 5 题。A 部分为判断正误（R1-R10，1P × 10），B 部分为单项选择（R11-R15，2P × 5）。",
      parts: [
        {
          id: "reading-1",
          title: "Text 1: Ein gesundes Auslandssemester in Bremen",
          text: "Lukas macht in diesem Sommersemester ein Auslandssemester an einer Hochschule in Bremen. Bevor er nach Deutschland flog, packte er seinen Pass, die Versicherungskarte, ein Ladegerät, warme Kleidung und ein kleines Wörterbuch ein. Seine Eltern machten sich zuerst Sorgen, weil Lukas noch nie so lange allein im Ausland gewesen war. Lukas wollte aber selbstständiger werden und freute sich sehr auf das neue Leben.\n\nEr wohnt nicht direkt im Stadtzentrum, sondern in einem ruhigen Miethaus am Stadtrand. Trotzdem fühlt er sich nicht einsam, denn das Verkehrsnetz ist gut und die Straßenbahn fährt in wenigen Minuten zur Universität. In der Nähe gibt es einen kleinen Supermarkt, eine Apotheke und einen Park. Außerdem wohnt eine Tandempartnerin im gleichen Haus, mit der er abends manchmal Deutsch übt.\n\nAm Anfang war der Alltag für Lukas nicht einfach. Die Kurse begannen früh, und nachmittags musste er viele Texte lesen. In den ersten Wochen war er oft müde, weil er zu spät ins Bett ging, zu viel Zucker aß und nach dem Unterricht lange am Computer saß. Manchmal vergaß er sogar, genug Wasser zu trinken.\n\nNachdem er mit seiner Tandempartnerin darüber gesprochen hatte, änderte er seine Lebensweise. Er schläft früher, nimmt Obst und Wasser mit und geht nach dem Unterricht oft an der Weser spazieren. Am Wochenende kocht er manchmal mit anderen Austauschstudenten. So lernt er nicht nur neue Wörter, sondern auch einfache deutsche Gerichte kennen.\n\nEinmal hatte Lukas Husten und Schnupfen. Die Hausärztin stellte fest, dass er kein Fieber hatte. Sie verschrieb ihm keine starken Medikamente, sondern sagte, er solle sich ausruhen, viel trinken und auf jeden Fall genug schlafen. Seitdem achtet Lukas mehr auf seine Gesundheit. Er findet, dass ein gutes Auslandssemester nicht nur aus Lernen besteht, sondern auch aus einem gesunden Gleichgewicht.",
          questions: [
            {
              id: "R1",
              type: "mc",
              maxScore: 1,
              prompt: "Lukas macht in Bremen ein Auslandssemester.",
              options: ["Richtig", "Falsch"],
              answer: "Richtig",
              explanation: "第一句直接说 Lukas macht ... ein Auslandssemester。"
            },
            {
              id: "R2",
              type: "mc",
              maxScore: 1,
              prompt: "Lukas wohnt direkt im Stadtzentrum.",
              options: ["Richtig", "Falsch"],
              answer: "Falsch",
              explanation: "文中说 er wohnt nicht direkt im Stadtzentrum, sondern am Stadtrand。"
            },
            {
              id: "R3",
              type: "mc",
              maxScore: 1,
              prompt: "Seine Tandempartnerin wohnt im gleichen Haus.",
              options: ["Richtig", "Falsch"],
              answer: "Richtig",
              explanation: "第一段末尾说 eine Tandempartnerin wohnt im gleichen Haus。"
            },
            {
              id: "R4",
              type: "mc",
              maxScore: 1,
              prompt: "Die Hausärztin stellte fest, dass Lukas hohes Fieber hatte.",
              options: ["Richtig", "Falsch"],
              answer: "Falsch",
              explanation: "第二段说 kein Fieber，不是 hohes Fieber。"
            },
            {
              id: "R5",
              type: "mc",
              maxScore: 1,
              prompt: "Die Ärztin empfahl Lukas Ruhe, viel Trinken und genug Schlaf.",
              options: ["Richtig", "Falsch"],
              answer: "Richtig",
              explanation: "文中说 er solle sich ausruhen, viel trinken und genug schlafen。"
            }
          ]
        },
        {
          id: "reading-2",
          title: "Text 2: Stadt oder Land?",
          text: "Mei und Jonas diskutieren im Deutschkurs darüber, ob man lieber in der Stadt oder auf dem Land wohnen sollte. Die Lehrerin bittet die Studenten, nicht nur persönliche Meinungen zu nennen, sondern auch konkrete Beispiele zu geben. Deshalb schreiben Mei und Jonas zuerst ihre wichtigsten Argumente an die Tafel.\n\nMei ist in einer großen Stadt aufgewachsen. Sie mag die vielen kulturellen Veranstaltungen, die Fußgängerzone, die Kinos und die gute Auswahl an Restaurants. Wenn sie ein Buch braucht oder eine Ausstellung besuchen möchte, kann sie meistens spontan losgehen. Außerdem findet sie es praktisch, dass sie ohne Auto fast überall hinkommt.\n\nTrotzdem findet Mei das Stadtleben nicht immer angenehm. Besonders stören sie der Lärm, die Luftverschmutzung und die hohen Mieten. In ihrer Straße fahren morgens viele Autos, und manchmal kann sie bei offenem Fenster kaum schlafen. Sie sagt deshalb, dass man in der Stadt gut planen muss, wenn man ruhig wohnen möchte.\n\nJonas kommt aus einem kleinen Dorf. Er findet das Leben dort ruhiger und persönlicher. Auf dem Land kennt fast jeder jeden, und die Nachbarn helfen einander, wenn jemand krank ist oder ein Problem hat. Für Kinder gibt es viel Platz, und die Natur beginnt direkt hinter dem Haus. Jonas erinnert sich gern daran, dass er als Kind oft auf Feldwegen Fahrrad gefahren ist.\n\nAndererseits gibt es auf dem Land nur wenige Freizeitangebote. Nachdem der letzte Bus am Abend abgefahren ist, kann man ohne Auto kaum noch etwas machen. Junge Leute müssen oft in die nächste Stadt fahren, wenn sie ins Kino oder zu einer Veranstaltung wollen. Am Ende stellen Mei und Jonas fest, dass beide Wohnformen Vorteile und Nachteile haben. Wichtig ist, dass man die eigene Lebenssituation ehrlich betrachtet.",
          questions: [
            {
              id: "R6",
              type: "mc",
              maxScore: 1,
              prompt: "Mei mag an der Stadt vor allem kulturelle Angebote und gute Verkehrsmöglichkeiten.",
              options: ["Richtig", "Falsch"],
              answer: "Richtig",
              explanation: "第一段提到 kulturelle Veranstaltungen 和 ohne Auto fast überall hinkommen。"
            },
            {
              id: "R7",
              type: "mc",
              maxScore: 1,
              prompt: "Mei findet die Mieten in der Stadt niedrig.",
              options: ["Richtig", "Falsch"],
              answer: "Falsch",
              explanation: "文中说 sie stören ... die hohen Mieten。"
            },
            {
              id: "R8",
              type: "mc",
              maxScore: 1,
              prompt: "Jonas meint, dass die Nachbarn auf dem Land einander helfen.",
              options: ["Richtig", "Falsch"],
              answer: "Richtig",
              explanation: "第二段说 die Nachbarn helfen einander。"
            },
            {
              id: "R9",
              type: "mc",
              maxScore: 1,
              prompt: "Auf dem Land kann man abends ohne Auto immer leicht überall hinfahren.",
              options: ["Richtig", "Falsch"],
              answer: "Falsch",
              explanation: "第二段说 nach dem letzten Bus kann man ohne Auto kaum noch etwas machen。"
            },
            {
              id: "R10",
              type: "mc",
              maxScore: 1,
              prompt: "Mei und Jonas kommen zu dem Schluss, dass Stadt und Land beide Vor- und Nachteile haben.",
              options: ["Richtig", "Falsch"],
              answer: "Richtig",
              explanation: "最后一句前明确说 beide Wohnformen Vorteile und Nachteile haben。"
            }
          ]
        },
        {
          id: "reading-3",
          title: "Text 3: Vorbereitung auf eine Reise nach China",
          text: "Clara studiert in Deutschland und möchte im Sommer zum ersten Mal nach China reisen. Sie interessiert sich für traditionelle chinesische Medizin, alte Städte und regionale Spezialitäten. In einem Seminar hat sie schon viel über interkulturelle Kommunikation gelernt. Trotzdem ist sie ein wenig nervös, weil sie noch nicht weiß, wie sie sich in einer so großen und vielfältigen Umgebung orientieren wird.\n\nBevor sie die Flugtickets buchte, informierte sie sich im Auslandsamt über Visum, Krankenversicherung und notwendige Dokumente. Dort bekam sie auch den Rat, Kopien von wichtigen Papieren zu machen und die Adresse ihrer Unterkunft aufzuschreiben. Eine chinesische Freundin riet ihr, nicht nur Sehenswürdigkeiten zu planen, sondern auch Pausen einzuplanen.\n\nClara schrieb deshalb eine Liste. Pass, Versicherungskarte, Kreditkarte, etwas Bargeld, Ladegerät, Medikamente gegen Erkältung und eine bequeme Jacke sollten in den Koffer. Außerdem wollte sie ein kleines Heft mitnehmen, damit sie neue Wörter, Adressen und interessante Erlebnisse notieren kann. Sie findet, dass gute Vorbereitung eine Reise entspannter macht.\n\nFür die ersten Tage wählte Clara Hangzhou, weil sie den Westsee, Teeplantagen und ruhige Gassen sehen wollte. Sie möchte dort nicht nur schnell Fotos machen, sondern auch langsam durch die Stadt gehen und Tee probieren. Danach wollte sie nach Lijiang fahren. Dort gibt es eine bekannte Altstadt mit alten Häusern, Gästehäusern, Bars, Souvenirläden und Kunsthandwerk.\n\nClara weiß aber, dass Reisen nicht immer perfekt klappt. Wenn ein Zug Verspätung hat oder das Hotelzimmer kleiner ist als erwartet, möchte sie flexibel bleiben. Sie findet, dass man unterwegs nicht nur Fotos sammeln sollte. Wichtiger ist, mit Einheimischen zu sprechen, etwas Neues zu probieren und die eigene Perspektive zu erweitern. Gerade unerwartete Situationen können später zu den interessantesten Erinnerungen werden.",
          questions: [
            {
              id: "R11",
              type: "mc",
              maxScore: 2,
              prompt: "Wofür interessiert sich Clara?",
              options: ["Für traditionelle chinesische Medizin, alte Städte und regionale Spezialitäten.", "Nur für moderne Wolkenkratzer und Industrie.", "Für ein Praktikum in Australien.", "Nur für deutsche Restaurants in China."],
              answer: "Für traditionelle chinesische Medizin, alte Städte und regionale Spezialitäten.",
              explanation: "第一句后明确列出 TCM, alte Städte und regionale Spezialitäten。"
            },
            {
              id: "R12",
              type: "mc",
              maxScore: 2,
              prompt: "Wo informierte Clara sich vor der Buchung der Flugtickets?",
              options: ["Im Auslandsamt.", "In einer Konditorei.", "Bei der Feuerwehr.", "In einer Tiefgarage."],
              answer: "Im Auslandsamt.",
              explanation: "第一段说 sie informierte sich im Auslandsamt。"
            },
            {
              id: "R13",
              type: "mc",
              maxScore: 2,
              prompt: "Was riet Claras chinesische Freundin ihr?",
              options: ["Sie sollte auch Pausen einplanen.", "Sie sollte ohne Dokumente reisen.", "Sie sollte nur im Hotel bleiben.", "Sie sollte alle Medikamente wegwerfen."],
              answer: "Sie sollte auch Pausen einplanen.",
              explanation: "朋友建议 nicht nur Sehenswürdigkeiten planen, sondern auch Pausen einplanen。"
            },
            {
              id: "R14",
              type: "mc",
              maxScore: 2,
              prompt: "Warum wählte Clara für die ersten Tage Hangzhou?",
              options: ["Weil sie den Westsee, Teeplantagen und ruhige Gassen sehen wollte.", "Weil sie dort ein Staatsexamen ablegen musste.", "Weil es dort keine Sehenswürdigkeiten gibt.", "Weil sie dort nur Medikamente kaufen wollte."],
              answer: "Weil sie den Westsee, Teeplantagen und ruhige Gassen sehen wollte.",
              explanation: "第二段第一句说明了选择 Hangzhou 的原因。"
            },
            {
              id: "R15",
              type: "mc",
              maxScore: 2,
              prompt: "Was findet Clara unterwegs wichtiger als nur Fotos zu sammeln?",
              options: ["Mit Einheimischen zu sprechen, Neues zu probieren und die Perspektive zu erweitern.", "Möglichst spät ins Bett zu gehen.", "Keine Spezialitäten zu probieren.", "Nur im Stadtzentrum einzukaufen."],
              answer: "Mit Einheimischen zu sprechen, Neues zu probieren und die Perspektive zu erweitern.",
              explanation: "最后一句用 Wichtiger ist ... 概括了 Clara 的旅行观。"
            }
          ]
        }
      ]
    },
    {
      id: "T",
      title: "IV. Übersetzung",
      points: 15,
      help: "翻译句子。每题 3 分。",
      questions: [
        {
          id: "T1",
          type: "open",
          maxScore: 3,
          prompt: "Auf dem Land kennt jeder jeden und die Leute können fast nichts machen, weil es zu wenige Freizeitangebote gibt.",
          expected: "在乡下每个人都互相认识，人们几乎没什么可做，因为休闲活动太少。",
          explanation: "注意 jeder jeden 是“每个人都认识每个人”；weil 从句说明原因。",
          keywordGroups: [["乡下", "农村"], ["每个人", "人人"], ["认识"], ["几乎", "差不多"], ["休闲活动", " Freizeit"], ["太少", "很少"]]
        },
        {
          id: "T2",
          type: "open",
          maxScore: 3,
          prompt: "Seitdem ich in der letzten Woche eine Praxis für traditionelle chinesische Medizin gesehen habe, bin ich sehr neugierig darauf.",
          expected: "自从我上周看到一家传统中医诊所以来，我就对此很感兴趣/很好奇。",
          explanation: "seitdem 引导“自从……以来”；darauf 指代前面的传统中医诊所或相关内容。",
          keywordGroups: [["自从"], ["上周"], ["诊所", "实践"], ["中医"], ["好奇", "感兴趣"], ["对此", "对它"]]
        },
        {
          id: "T3",
          type: "open",
          maxScore: 3,
          prompt: "在旅行之前，你应该好好考虑一下想去哪里。",
          expected: "Bevor du eine Reise machst, solltest du dir gut überlegen, wohin du reisen möchtest.",
          explanation: "“在……之前”用 bevor；sich überlegen 表示“考虑”；间接疑问句 wohin ... möchtest 动词放末尾。",
          keywordGroups: [["bevor"], ["reise"], ["solltest"], ["ueberlegen", "überlegen"], ["wohin"], ["moechtest", "möchtest"]]
        },
        {
          id: "T4",
          type: "open",
          maxScore: 3,
          prompt: "如果本学期没有那么多活动，我们就可以多出去走走。",
          expected: "Wenn wir in diesem Semester nicht so viele Veranstaltungen haben, können wir mehr reisen.",
          explanation: "条件从句用 wenn；从句在前时，主句变位动词 können 放第二位。",
          keywordGroups: [["wenn"], ["semester"], ["veranstaltungen"], ["haben"], ["koennen", "können"], ["mehr", "öfter", "oefter", "reisen", "rausgehen"]]
        },
        {
          id: "T5",
          type: "open",
          maxScore: 3,
          prompt: "医生给我开了药，并让我多休息。",
          expected: "Der Arzt hat mir Medikamente verschrieben und gesagt, dass ich mich mehr ausruhen soll.",
          explanation: "“开药”可译为 Medikamente verschreiben；“让我多休息”可用 dass ich mich mehr ausruhen soll。",
          keywordGroups: [["arzt"], ["mir"], ["medikament", "medikamente", "tabletten"], ["verschrieben"], ["ausruhen", "erholen"], ["soll"]]
        }
      ]
    },
    {
      id: "W",
      title: "V. Schriftlicher Ausdruck",
      points: 10,
      help: "阅读邮件并回信，60-80 词。",
      questions: [
        {
          id: "W1",
          type: "writing",
          maxScore: 10,
          prompt: "Sie haben von Ihrem deutschen Freund Lukas eine E-Mail bekommen. Schreiben Sie ihm zurück. Beantworten Sie mindestens drei Fragen: Wo soll er in China studieren? Wie ist das Leben in der Stadt oder auf dem Land? Was soll er vor der Reise einpacken oder vorbereiten? Wie kann er gesund bleiben?\n\nLieber Freund / Liebe Freundin,\nich plane ein Auslandssemester in China. Ich weiß noch nicht, ob ich in einer großen Stadt oder in einer kleinen Stadt wohnen soll. Was meinst du? Was soll ich vor der Reise vorbereiten? Und hast du Tipps für ein gesundes Leben dort?\nViele Grüße\nLukas",
          expected: "示例：Lieber Lukas, ich finde, du solltest in einer großen Stadt studieren, weil es dort viele Veranstaltungen und ein gutes Verkehrsnetz gibt. Bevor du reist, solltest du deinen Pass, die Versicherungskarte und ein Ladegerät einpacken. Wenn du gesund bleiben möchtest, iss weniger Zucker, schlafe genug und gehe regelmäßig spazieren. Ich freue mich auf dich. Viele Grüße",
          explanation: "回信应覆盖来信问题，保持 60-80 词，注意称呼、结尾、连词和基本语序。",
          keywordGroups: [["lieber", "hallo"], ["stadt", "land"], ["bevor", "vor"], ["pass", "ladegeraet", "ladegerät", "versicherung"], ["gesund", "ernaehrung", "ernährung", "schlaf"], ["weil", "wenn", "da"]]
        }
      ]
    }
  ]
};

const state = {
  started: false,
  paused: false,
  submitted: false,
  remainingSeconds: EXAM.durationMinutes * 60,
  answers: {},
  flags: {},
  results: {},
  apiConfig: {
    baseUrl: "http://127.0.0.1:18900/v1",
    model: "deepseek-reasoner",
    apiKey: "",
    autoJudge: false
  }
};

let timerId = null;
let apiBusy = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const allQuestions = EXAM.sections.flatMap((section) =>
  getSectionQuestions(section).map((question) => ({ ...question, sectionId: section.id, sectionTitle: section.title }))
);
const questionMap = new Map(allQuestions.map((question) => [question.id, question]));

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderExam();
  bindControls();
  bindAnswerEvents();
  applyStateToDom();
  updateAllPanels();
  if (state.started && !state.paused && !state.submitted) startTimer();
});

function renderExam() {
  $("#totalScoreText").textContent = EXAM.totalScore;
  $("#durationText").textContent = EXAM.durationMinutes;
  $("#examContainer").innerHTML = EXAM.sections.map(renderSection).join("");
  $("#questionNav").innerHTML = allQuestions.map((question) =>
    `<button class="nav-dot" type="button" data-jump="${question.id}">${question.id}</button>`
  ).join("");
}

function renderSection(section) {
  const bank = section.wordBank ? `<ul class="word-bank">${section.wordBank.map((word) => `<li>${escapeHtml(word)}</li>`).join("")}</ul>` : "";
  const passage = section.passage ? `
    <div class="reading-passage">
      <h3>${escapeHtml(section.passage.title)}</h3>
      <p>${escapeHtml(section.passage.text).replace(/\n/g, "<br>")}</p>
    </div>
  ` : "";
  const content = section.parts
    ? section.parts.map(renderSectionPart).join("")
    : `<div class="question-list">${(section.questions || []).map(renderQuestion).join("")}</div>`;
  return `
    <section class="section-block" id="section-${section.id}">
      <h2>${escapeHtml(section.title)} <span class="points">(${section.points} P)</span></h2>
      <p class="section-help">${escapeHtml(section.help)}</p>
      ${bank}
      ${passage}
      ${content}
    </section>
  `;
}

function getSectionQuestions(section) {
  if (section.parts) return section.parts.flatMap((part) => part.questions.map((question) => ({ ...question, readingPartId: part.id })));
  return section.questions || [];
}

function renderSectionPart(part) {
  return `
    <div class="reading-part">
      <div class="reading-passage">
        <div class="reading-part-head">
          <button class="reading-focus-btn" type="button" data-reading-focus="${escapeAttr(part.id)}">放大阅读</button>
        </div>
        <h3>${escapeHtml(part.title)}</h3>
        <p>${escapeHtml(part.text).replace(/\n/g, "<br>")}</p>
      </div>
      <div class="question-list">
        ${part.questions.map((question) => renderQuestion({ ...question, modal: true })).join("")}
      </div>
    </div>
  `;
}

function openReadingModal(partId, focusQuestionId = "") {
  const part = findReadingPart(partId);
  if (!part) return;
  syncAllAnswersFromDom();
  $("#readingModalTitle").textContent = part.title;
  $("#readingModalBody").innerHTML = `
    <section class="reading-modal-text">
      <h3>${escapeHtml(part.title)}</h3>
      <p>${escapeHtml(part.text).replace(/\n/g, "<br>")}</p>
    </section>
    <section class="reading-modal-questions">
      <div class="question-list">
        ${part.questions.map((question) => renderQuestion({ ...question, modal: true })).join("")}
      </div>
    </section>
  `;
  $("#readingModal").hidden = false;
  document.body.classList.add("modal-open");
  applyStateToDom();
  updateAllPanels();
  if (state.submitted) {
    part.questions.forEach((question) => renderResult(question.id));
  }
  if (focusQuestionId) {
    window.setTimeout(() => {
      const target = document.getElementById(`q-${focusQuestionId}-modal`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        highlightQuestionCard(target);
      }
    }, 0);
  }
}

function closeReadingModal() {
  syncAllAnswersFromDom();
  $("#readingModal").hidden = true;
  $("#readingModalBody").innerHTML = "";
  document.body.classList.remove("modal-open");
  applyStateToDom();
  updateAllPanels();
  saveState();
}

function findReadingPart(partId) {
  const reading = EXAM.sections.find((section) => section.id === "R");
  return reading?.parts?.find((part) => part.id === partId);
}

function findReadingPartByQuestionId(questionId) {
  const reading = EXAM.sections.find((section) => section.id === "R");
  return reading?.parts?.find((part) => part.questions.some((question) => question.id === questionId));
}

function navigateToQuestion(id) {
  const question = questionMap.get(id);
  if (question?.sectionId === "R") {
    const part = findReadingPartByQuestionId(id);
    if (part) {
      openReadingModal(part.id, id);
      return;
    }
  }

  const target = document.getElementById(`q-${id}`);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    highlightQuestionCard(target);
  }
}

function highlightQuestionCard(card) {
  card.classList.remove("jump-highlight");
  void card.offsetWidth;
  card.classList.add("jump-highlight");
  window.setTimeout(() => card.classList.remove("jump-highlight"), 1600);
}

function renderQuestion(question) {
  const domSuffix = question.modal ? "-modal" : "";
  return `
    <article class="question-card" id="q-${question.id}${domSuffix}" data-question-id="${question.id}">
      <div class="question-head">
        <span class="question-id">${question.id}</span>
        <div class="question-title">
          <h3>${typeLabel(question.type)}</h3>
          <p>${question.maxScore} P</p>
        </div>
        <button class="flag-btn" type="button" data-flag="${question.id}" aria-label="标记 ${question.id}">标记</button>
      </div>
      ${renderQuestionBody(question)}
      <div class="result-box" data-result="${question.id}" hidden></div>
    </article>
  `;
}

function renderQuestionBody(question) {
  if (question.type === "mc") {
    const inputName = question.modal ? `${question.id}__modal` : question.id;
    return `
      <p class="prompt">${escapeHtml(question.prompt)}</p>
      <div class="options">
        ${question.options.map((option, index) => `
          <label class="option-row">
            <input type="radio" name="${escapeAttr(inputName)}" value="${escapeAttr(option)}" data-answer="${question.id}">
            <span>${String.fromCharCode(65 + index)}. ${escapeHtml(option)}</span>
          </label>
        `).join("")}
      </div>
    `;
  }

  if (question.type === "word" || question.type === "adj") {
    return `
      <p class="prompt">${escapeHtml(question.prompt)}</p>
      <input class="short-answer" type="text" data-answer="${question.id}" aria-label="${question.id} 答案">
    `;
  }

  if (question.type === "multiAdj") {
    return `
      <p class="prompt sentence-answer">
        ${question.parts.map((part, index) => {
          const input = index < question.answers.length
            ? `<input class="ending-answer" type="text" data-answer="${question.id}" data-blank-index="${index}" aria-label="${question.id} 第 ${index + 1} 空">`
            : "";
          return `${escapeHtml(part)}${input}`;
        }).join("")}
      </p>
    `;
  }

  if (question.type === "writing") {
    return `
      <div class="prompt">${escapeHtml(question.prompt).replace(/\n/g, "<br>")}</div>
      <div class="writing-box">
        <textarea data-answer="${question.id}" aria-label="${question.id} 作文"></textarea>
        <div class="word-count" id="word-count-${question.id}">0 Wörter</div>
      </div>
    `;
  }

  return `
    <p class="prompt">${escapeHtml(question.prompt).replace(/\n/g, "<br>")}</p>
    <textarea data-answer="${question.id}" aria-label="${question.id} 答案"></textarea>
  `;
}

function bindControls() {
  $("#startBtn").addEventListener("click", startExam);
  $("#pauseBtn").addEventListener("click", pauseExam);
  $("#resumeBtn").addEventListener("click", resumeExam);
  $("#submitBtn").addEventListener("click", () => submitExam(false));
  $("#clearBtn").addEventListener("click", clearAnswers);
  $("#apiReviewBtn").addEventListener("click", () => runApiReview());
  $("#aiWrongBtn").addEventListener("click", () => generateWrongAiExplanations());
  $("#exportJsonBtn").addEventListener("click", exportJson);
  $("#exportMdBtn").addEventListener("click", exportMarkdown);
  $("#closeReadingModalBtn").addEventListener("click", closeReadingModal);
  $("#readingModal").addEventListener("click", (event) => {
    if (event.target.id === "readingModal") closeReadingModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !$("#readingModal").hidden) closeReadingModal();
  });
  $("#apiBaseUrl").addEventListener("input", updateApiConfig);
  $("#apiModel").addEventListener("input", updateApiConfig);
  $("#apiKey").addEventListener("input", updateApiConfig);
  $("#autoApiJudge").addEventListener("change", updateApiConfig);

  $("#questionNav").addEventListener("click", (event) => {
    const button = event.target.closest("[data-jump]");
    if (!button) return;
    navigateToQuestion(button.dataset.jump);
  });

  $("#examContainer").addEventListener("click", (event) => {
    const flagButton = event.target.closest("[data-flag]");
    if (flagButton) {
      toggleFlag(flagButton.dataset.flag);
      return;
    }
    const aiButton = event.target.closest("[data-ask-ai]");
    if (aiButton) {
      askAi(aiButton.dataset.askAi);
      return;
    }
    const focusButton = event.target.closest("[data-reading-focus]");
    if (focusButton) {
      openReadingModal(focusButton.dataset.readingFocus);
    }
  });

  $("#readingModalBody").addEventListener("click", (event) => {
    const flagButton = event.target.closest("[data-flag]");
    if (flagButton) {
      toggleFlag(flagButton.dataset.flag);
      return;
    }
    const aiButton = event.target.closest("[data-ask-ai]");
    if (aiButton) {
      askAi(aiButton.dataset.askAi);
    }
  });
}

function bindAnswerEvents() {
  document.addEventListener("input", (event) => {
    const target = event.target.closest("[data-answer]");
    if (!target || state.submitted) return;
    saveAnswerFromTarget(target);
    syncQuestionInputs(target.dataset.answer, target);
    updateWritingCount(target.dataset.answer);
    updateAllPanels();
    saveState();
  });

  document.addEventListener("change", (event) => {
    const target = event.target.closest("[data-answer]");
    if (!target || state.submitted) return;
    saveAnswerFromTarget(target);
    syncQuestionInputs(target.dataset.answer, target);
    updateAllPanels();
    saveState();
  });
}

function startExam() {
  state.started = true;
  state.paused = false;
  state.submitted = false;
  startTimer();
  applyStateToDom();
  updateAllPanels();
  saveState();
}

function pauseExam() {
  if (!state.started || state.submitted) return;
  state.paused = true;
  stopTimer();
  applyStateToDom();
  saveState();
}

function resumeExam() {
  if (state.submitted) return;
  if (!state.started) state.started = true;
  state.paused = false;
  startTimer();
  applyStateToDom();
  saveState();
}

function clearAnswers() {
  const confirmed = window.confirm("确认清除本次作答、标记和判卷结果？此操作不能撤销。");
  if (!confirmed) return;
  stopTimer();
  state.started = false;
  state.paused = false;
  state.submitted = false;
  state.remainingSeconds = EXAM.durationMinutes * 60;
  state.answers = {};
  state.flags = {};
  state.results = {};
  setApiProgress(0, 0);
  allQuestions.forEach((question) => {
    $$(`[data-result="${CSS.escape(question.id)}"]`).forEach((box) => {
      box.hidden = true;
      box.innerHTML = "";
    });
  });
  applyStateToDom();
  updateAllPanels();
  saveState();
}

async function submitExam(isAuto) {
  if (state.submitted) return;
  if (!isAuto) {
    const confirmed = window.confirm("确认交卷并判分？交卷后不能继续修改答案。");
    if (!confirmed) return;
  }
  syncAllAnswersFromDom();
  stopTimer();
  state.submitted = true;
  state.paused = false;
  gradeAllLocal();
  renderAllResults();
  applyStateToDom();
  updateAllPanels();
  saveState();

  if (state.apiConfig.autoJudge) {
    await runApiReview();
  }
}

function startTimer() {
  stopTimer();
  timerId = window.setInterval(() => {
    if (!state.started || state.paused || state.submitted) return;
    state.remainingSeconds = Math.max(0, state.remainingSeconds - 1);
    updateTimerDisplay();
    if (state.remainingSeconds % 10 === 0) saveState();
    if (state.remainingSeconds <= 0) {
      submitExam(true);
    }
  }, 1000);
}

function stopTimer() {
  if (timerId) window.clearInterval(timerId);
  timerId = null;
}

function updateTimerDisplay() {
  const minutes = Math.floor(state.remainingSeconds / 60);
  const seconds = state.remainingSeconds % 60;
  $("#timerDisplay").textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function saveAnswerFromTarget(target) {
  const id = target.dataset.answer;
  const question = questionMap.get(id);
  if (!question) return;
  if (question.type === "mc") {
    const scope = target.closest(".question-card") || document;
    const checked = scope.querySelector(`[data-answer="${CSS.escape(id)}"]:checked`);
    state.answers[id] = checked ? checked.value : "";
  } else if (question.type === "multiAdj") {
    const scope = target.closest(".question-card") || document;
    state.answers[id] = Array.from(scope.querySelectorAll(`[data-answer="${CSS.escape(id)}"][data-blank-index]`))
      .sort((left, right) => Number(left.dataset.blankIndex) - Number(right.dataset.blankIndex))
      .map((input) => input.value);
  } else {
    state.answers[id] = target.value;
  }
}

function syncQuestionInputs(id, source) {
  const question = questionMap.get(id);
  if (!question) return;
  const answer = state.answers[id] ?? "";
  if (question.type === "mc") {
    $$(`[data-answer="${CSS.escape(id)}"]`).forEach((radio) => {
      if (radio !== source) radio.checked = radio.value === answer;
    });
    return;
  }
  if (question.type === "multiAdj") {
    const index = source?.dataset?.blankIndex;
    if (index === undefined) return;
    $$(`[data-answer="${CSS.escape(id)}"][data-blank-index="${CSS.escape(index)}"]`).forEach((input) => {
      if (input !== source) input.value = Array.isArray(answer) ? (answer[Number(index)] || "") : "";
    });
    return;
  }
  $$(`[data-answer="${CSS.escape(id)}"]`).forEach((input) => {
    if (input !== source && input.value !== answer) input.value = answer;
  });
}

function syncAllAnswersFromDom() {
  $$("[data-answer]").forEach(saveAnswerFromTarget);
}

function toggleFlag(id) {
  state.flags[id] = !state.flags[id];
  if (!state.flags[id]) delete state.flags[id];
  updateAllPanels();
  saveState();
}

function applyStateToDom() {
  updateTimerDisplay();
  document.body.classList.toggle("submitted", state.submitted);

  $("#startBtn").disabled = state.started || state.submitted;
  $("#pauseBtn").disabled = !state.started || state.paused || state.submitted;
  $("#resumeBtn").disabled = !state.paused || state.submitted;
  $("#submitBtn").disabled = !state.started || state.submitted;
  $("#apiReviewBtn").disabled = !state.submitted || apiBusy;
  $("#aiWrongBtn").disabled = !state.submitted || apiBusy;

  const status = $("#examStatus");
  status.className = "status-pill";
  if (state.submitted) {
    status.textContent = "已交卷";
    status.classList.add("submitted");
  } else if (state.paused) {
    status.textContent = "暂停中";
    status.classList.add("paused");
  } else if (state.started) {
    status.textContent = "作答中";
    status.classList.add("running");
  } else {
    status.textContent = "未开始";
  }

  $$("input[data-answer], textarea[data-answer]").forEach((input) => {
    input.disabled = !state.started || state.paused || state.submitted;
  });

  $("#apiBaseUrl").value = state.apiConfig.baseUrl;
  $("#apiModel").value = state.apiConfig.model;
  $("#apiKey").value = state.apiConfig.apiKey;
  $("#autoApiJudge").checked = state.apiConfig.autoJudge;

  allQuestions.forEach((question) => {
    const answer = state.answers[question.id] ?? "";
    if (question.type === "mc") {
      $$(`[data-answer="${CSS.escape(question.id)}"]`).forEach((radio) => {
        radio.checked = radio.value === answer;
        radio.disabled = !state.started || state.paused || state.submitted;
      });
    } else if (question.type === "multiAdj") {
      $$(`[data-answer="${CSS.escape(question.id)}"][data-blank-index]`).forEach((input) => {
        const values = Array.isArray(answer) ? answer : [];
        input.value = values[Number(input.dataset.blankIndex)] || "";
        input.disabled = !state.started || state.paused || state.submitted;
      });
    } else {
      $$(`[data-answer="${CSS.escape(question.id)}"]`).forEach((input) => {
        if (input.value !== answer) input.value = answer;
      });
      updateWritingCount(question.id);
    }
  });
}

function updateAllPanels() {
  const answeredIds = allQuestions.filter((question) => isAnswered(question.id)).map((question) => question.id);
  $("#answeredCount").textContent = `${answeredIds.length} / ${allQuestions.length}`;
  $("#progressMeter").style.width = `${(answeredIds.length / allQuestions.length) * 100}%`;

  renderPillList("#answeredList", answeredIds);
  renderPillList("#markedList", Object.keys(state.flags).filter((id) => state.flags[id]));

  const earned = getEarnedScore();
  $("#scoreText").textContent = state.submitted ? `${formatScore(earned)} / ${EXAM.totalScore}` : `-- / ${EXAM.totalScore}`;
  $("#scoreMeter").style.width = state.submitted ? `${(earned / EXAM.totalScore) * 100}%` : "0%";

  $$(".nav-dot").forEach((button) => {
    const id = button.dataset.jump;
    const result = state.results[id];
    button.classList.toggle("answered", isAnswered(id));
    button.classList.toggle("flagged", !!state.flags[id]);
    button.classList.toggle("correct", !!result && result.score >= result.maxScore);
    button.classList.toggle("incorrect", !!result && result.score < result.maxScore);
  });

  $$("[data-flag]").forEach((button) => {
    button.classList.toggle("active", !!state.flags[button.dataset.flag]);
  });
}

function renderPillList(selector, ids) {
  const node = $(selector);
  if (!ids.length) {
    node.textContent = "暂无";
    node.classList.add("empty");
    return;
  }
  node.classList.remove("empty");
  node.innerHTML = ids.map((id) => `<span>${id}</span>`).join("");
}

function isAnswered(id) {
  const value = state.answers[id];
  if (Array.isArray(value)) return value.length > 0 && value.every((item) => String(item || "").trim().length > 0);
  return typeof value === "string" && value.trim().length > 0;
}

function gradeAllLocal() {
  allQuestions.forEach((question) => {
    state.results[question.id] = gradeQuestionLocal(question, state.answers[question.id] ?? "");
  });
}

function gradeQuestionLocal(question, rawAnswer) {
  if (question.type === "mc") return gradeMc(question, rawAnswer);
  if (question.type === "word") return gradeWord(question, rawAnswer);
  if (question.type === "adj") return gradeAdj(question, rawAnswer);
  if (question.type === "multiAdj") return gradeMultiAdj(question, rawAnswer);
  if (question.type === "writing") return gradeWriting(question, rawAnswer);
  return gradeOpen(question, rawAnswer);
}

function gradeMc(question, rawAnswer) {
  const ok = rawAnswer === question.answer;
  return {
    score: ok ? question.maxScore : 0,
    maxScore: question.maxScore,
    source: "local",
    feedback: ok ? "选择正确。" : "选择不正确。",
    correctAnswer: question.answer
  };
}

function gradeWord(question, rawAnswer) {
  const answer = normalizeText(rawAnswer);
  const full = (question.fullAnswers || []).map(normalizeText);
  const lemmas = (question.lemmaAnswers || []).map(normalizeText);
  let score = 0;
  let feedback = "答案不正确。";
  if (full.includes(answer)) {
    score = question.maxScore;
    feedback = "单词和形态都正确。";
  } else if (lemmas.includes(answer)) {
    score = question.maxScore / 2;
    feedback = "选词基本正确，但形态不完整。";
  }
  return {
    score,
    maxScore: question.maxScore,
    source: "local",
    feedback,
    correctAnswer: question.correctAnswerText
  };
}

function gradeAdj(question, rawAnswer) {
  const answer = normalizeEnding(rawAnswer);
  const ok = answer === normalizeEnding(question.answer);
  return {
    score: ok ? question.maxScore : 0,
    maxScore: question.maxScore,
    source: "local",
    feedback: ok ? "词尾正确。" : "词尾不正确。",
    correctAnswer: question.correctAnswerText
  };
}

function gradeMultiAdj(question, rawAnswer) {
  const answers = Array.isArray(rawAnswer) ? rawAnswer : [];
  let score = 0;
  const details = question.answers.map((expected, index) => {
    const ok = normalizeEnding(answers[index]) === normalizeEnding(expected);
    if (ok) score += 1;
    return `第 ${index + 1} 空${ok ? "正确" : `应为 -${expected}`}`;
  });
  return {
    score: clamp(score, 0, question.maxScore),
    maxScore: question.maxScore,
    source: "local",
    feedback: details.join("；") + "。",
    correctAnswer: question.correctAnswerText
  };
}

function gradeOpen(question, rawAnswer) {
  if (!rawAnswer.trim()) {
    return {
      score: 0,
      maxScore: question.maxScore,
      source: "local",
      feedback: "未作答。",
      correctAnswer: question.expected
    };
  }

  const normalizedAnswer = normalizeText(rawAnswer);
  const exactAnswers = (question.fullAnswers || []).map(normalizeText);
  if (exactAnswers.includes(normalizedAnswer)) {
    return {
      score: question.maxScore,
      maxScore: question.maxScore,
      source: "local",
      feedback: "答案与参考答案匹配。",
      correctAnswer: question.expected
    };
  }

  const groups = question.keywordGroups || [];
  if (!groups.length) {
    return {
      score: 0,
      maxScore: question.maxScore,
      source: "local",
      feedback: "本地规则无法可靠判分，建议使用 API 复核。",
      correctAnswer: question.expected
    };
  }

  const matched = groups.filter((group) => group.some((keyword) => normalizedAnswer.includes(normalizeText(keyword)))).length;
  const ratio = matched / groups.length;
  const rawScore = question.maxScore * ratio;
  const score = clamp(roundHalf(rawScore), 0, question.maxScore);
  return {
    score,
    maxScore: question.maxScore,
    source: "local",
    feedback: `本地规则匹配 ${matched}/${groups.length} 个关键点；开放题建议用 API 复核。`,
    correctAnswer: question.expected
  };
}

function gradeWriting(question, rawAnswer) {
  if (!rawAnswer.trim()) {
    return {
      score: 0,
      maxScore: question.maxScore,
      source: "local",
      feedback: "未作答。",
      correctAnswer: question.expected
    };
  }

  const sampleWithoutLabel = String(question.expected || "").replace(/^示例：/, "");
  if ([question.expected, sampleWithoutLabel].map(normalizeText).includes(normalizeText(rawAnswer))) {
    return {
      score: question.maxScore,
      maxScore: question.maxScore,
      source: "local",
      feedback: "答案与示例表达匹配。",
      correctAnswer: question.expected
    };
  }

  const words = countGermanWords(rawAnswer);
  const text = normalizeText(rawAnswer);
  let score = 0;
  const notes = [];

  if (words >= 60 && words <= 80) {
    score += 2;
    notes.push("词数达标");
  } else if (words >= 45 && words <= 95) {
    score += 1;
    notes.push("词数接近要求");
  } else {
    notes.push("词数偏离要求");
  }

  const contentGroups = question.keywordGroups || [];
  const matched = contentGroups.filter((group) => group.some((keyword) => text.includes(normalizeText(keyword)))).length;
  score += Math.min(4, matched);
  notes.push(`内容点 ${matched}/${contentGroups.length}`);

  const connectorCount = ["weil", "wenn", "bevor", "da", "seitdem"].filter((word) => text.includes(word)).length;
  score += Math.min(2, connectorCount);
  notes.push(`连词 ${connectorCount}`);

  const closing = ["viele gruesse", "viele grüße", "liebe gruesse", "liebe grüße", "dein", "deine"].some((word) => text.includes(normalizeText(word)));
  if (closing) score += 1;
  if (/[.!?]$/.test(rawAnswer.trim())) score += 1;

  return {
    score: clamp(score, 0, question.maxScore),
    maxScore: question.maxScore,
    source: "local",
    feedback: `本地规则：${notes.join("；")}。作文建议使用 API 复核语法和表达。`,
    correctAnswer: question.expected
  };
}

function renderAllResults() {
  allQuestions.forEach((question) => renderResult(question.id));
}

function renderResult(id) {
  const question = questionMap.get(id);
  const result = state.results[id];
  const boxes = $$(`[data-result="${CSS.escape(id)}"]`);
  if (!question || !result || !boxes.length) return;
  const full = result.score >= result.maxScore;
  const zero = result.score <= 0;
  const badgeClass = full ? "full" : zero ? "zero" : "partial";
  const sourceText = result.source === "api" ? "API判分" : "本地判分";
  const html = `
    <div class="result-line">
      <span class="score-badge ${badgeClass}">${formatScore(result.score)} / ${formatScore(result.maxScore)} P</span>
      <span class="score-badge">${sourceText}</span>
    </div>
    <details class="explanation" ${full ? "" : "open"}>
      <summary>解析</summary>
      <p class="answer-line">参考答案：${escapeHtml(result.correctAnswer || question.expected || question.correctAnswerText || question.answer || "")}</p>
      <p>${escapeHtml(question.explanation || "")}</p>
      <p class="feedback-line">${escapeHtml(result.feedback || "")}</p>
      <button class="ask-ai-btn" type="button" data-ask-ai="${id}">${full ? "生成AI解析" : "一键生成AI错题解析"}</button>
      <div class="ai-answer" data-ai-answer="${id}" hidden></div>
    </details>
  `;
  boxes.forEach((box) => {
    box.hidden = false;
    box.innerHTML = html;
  });
}

async function generateWrongAiExplanations() {
  if (!state.submitted || apiBusy) return;
  const targets = allQuestions.filter((question) => {
    const result = state.results[question.id];
    return result && result.score < result.maxScore;
  });
  if (!targets.length) {
    window.alert("当前没有错题。");
    return;
  }

  apiBusy = true;
  $("#apiReviewBtn").disabled = true;
  $("#aiWrongBtn").disabled = true;
  setApiProgress(0, targets.length);

  for (let index = 0; index < targets.length; index += 1) {
    await askAi(targets[index].id, { quiet: true });
    setApiProgress(index + 1, targets.length);
  }

  apiBusy = false;
  applyStateToDom();
  setApiProgress(targets.length, targets.length);
}

async function runApiReview() {
  if (!state.submitted || apiBusy) return;
  const targets = allQuestions.filter((question) => ["open", "writing"].includes(question.type));
  apiBusy = true;
  $("#apiReviewBtn").disabled = true;
  setApiProgress(0, targets.length);
  saveState();

  for (let index = 0; index < targets.length; index += 1) {
    const question = targets[index];
    const answer = state.answers[question.id] || "";
    try {
      const apiResult = await judgeWithApi(question, answer);
      if (apiResult) {
        state.results[question.id] = apiResult;
        renderResult(question.id);
        updateAllPanels();
        saveState();
      }
    } catch (error) {
      const existing = state.results[question.id] || gradeQuestionLocal(question, answer);
      state.results[question.id] = {
        ...existing,
        feedback: appendApiFailure(existing.feedback, error.message)
      };
      renderResult(question.id);
    }
    setApiProgress(index + 1, targets.length);
  }

  apiBusy = false;
  $("#apiReviewBtn").disabled = false;
  updateAllPanels();
  saveState();
}

async function judgeWithApi(question, answer) {
  const baseUrl = state.apiConfig.baseUrl.replace(/\/+$/, "");
  const headers = { "Content-Type": "application/json" };
  if (state.apiConfig.apiKey) headers.Authorization = `Bearer ${state.apiConfig.apiKey}`;

  const payload = {
    model: state.apiConfig.model,
    temperature: 0,
    messages: [
      {
        role: "system",
        content: "你是A2-B1德语期中考试阅卷老师。严格按题目满分给分，允许同义表达。最终回答必须是单行合法JSON，必须以{开头并以}结尾；不要Markdown，不要前置解释。"
      },
      {
        role: "user",
        content: [
          `题号：${question.id}`,
          `满分：${question.maxScore}`,
          getReadingContextLine(question),
          `题目：${getQuestionPromptText(question)}`,
          `参考答案：${question.expected || question.correctAnswerText || question.answer || ""}`,
          `评分要求：A2-B1水平；语法、词形、语序、关键词和表达完整度都要考虑。`,
          `学生答案：${answer || "(空白)"}`,
          `请返回：{"score":数字,"feedback":"中文简短解析","correctAnswer":"参考答案或可接受答案"}`,
          "score 必须在 0 到满分之间，可以有 0.5。即使学生答案很差，也必须只返回合法JSON。"
        ].join("\n")
      }
    ]
  };

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  const message = data?.choices?.[0]?.message || {};
  const content = [message.content, data?.choices?.[0]?.text].filter(Boolean).join("\n").trim();
  const parseSource = content || String(message.reasoning_content || "").trim();
  const parsed = parseApiJudgeResult(parseSource, question);
  if (typeof parsed.score !== "number") {
    throw new Error("API未返回有效分数");
  }
  return {
    score: clamp(roundHalf(parsed.score), 0, question.maxScore),
    maxScore: question.maxScore,
    source: "api",
    feedback: parsed.feedback || (content ? "API已完成复核。" : "API返回了可识别分数，但没有返回最终反馈。"),
    correctAnswer: parsed.correctAnswer || question.expected || ""
  };
}

async function askAi(id, options = {}) {
  const question = questionMap.get(id);
  const result = state.results[id];
  const boxes = $$(`[data-ai-answer="${CSS.escape(id)}"]`);
  if (!question || !boxes.length) return;
  boxes.forEach((box) => {
    box.hidden = false;
    box.textContent = options.quiet ? "正在生成错题AI解析..." : "AI思考中...";
  });
  try {
    const baseUrl = state.apiConfig.baseUrl.replace(/\/+$/, "");
    const headers = { "Content-Type": "application/json" };
    if (state.apiConfig.apiKey) headers.Authorization = `Bearer ${state.apiConfig.apiKey}`;
    const payload = {
      model: state.apiConfig.model,
      temperature: 0.2,
      messages: [
        { role: "system", content: "你是耐心的德语老师，用中文解释A2-B1德语题。回答要短，指出关键语法和一个可迁移的记忆点。" },
        {
          role: "user",
          content: [
            `题号：${id}`,
            getReadingContextLine(question),
            `题目：${getQuestionPromptText(question)}`,
            `我的答案：${formatUserAnswer(state.answers[id])}`,
            `参考答案：${result?.correctAnswer || question.expected || question.correctAnswerText || question.answer || ""}`,
            `原解析：${question.explanation || ""}`,
            "我读了解析还是不懂，请换一种说法解释。"
          ].join("\n")
        }
      ]
    };
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content || "API没有返回解释。";
    boxes.forEach((box) => {
      box.textContent = content;
    });
  } catch (error) {
    boxes.forEach((box) => {
      box.textContent = `AI提问失败：${error.message}`;
    });
  }
}

function setApiProgress(done, total) {
  $("#apiProgressText").textContent = `${done} / ${total}`;
  $("#apiProgressMeter").style.width = total ? `${(done / total) * 100}%` : "0%";
}

function updateApiConfig() {
  state.apiConfig.baseUrl = $("#apiBaseUrl").value.trim() || "http://127.0.0.1:18900/v1";
  state.apiConfig.model = $("#apiModel").value.trim() || "deepseek-reasoner";
  state.apiConfig.apiKey = $("#apiKey").value;
  state.apiConfig.autoJudge = $("#autoApiJudge").checked;
  saveState();
}

function updateWritingCount(id) {
  const question = questionMap.get(id);
  if (!question || question.type !== "writing") return;
  const node = document.getElementById(`word-count-${id}`);
  if (!node) return;
  node.textContent = `${countGermanWords(state.answers[id] || "")} Wörter`;
}

function getEarnedScore() {
  return Object.values(state.results).reduce((sum, result) => sum + (Number(result.score) || 0), 0);
}

function exportJson() {
  syncAllAnswersFromDom();
  const payload = {
    title: EXAM.title,
    exportedAt: new Date().toISOString(),
    submitted: state.submitted,
    score: state.submitted ? getEarnedScore() : null,
    totalScore: EXAM.totalScore,
    remainingSeconds: state.remainingSeconds,
    markedQuestions: Object.keys(state.flags).filter((id) => state.flags[id]),
    answers: state.answers,
    results: state.results,
    answerKey: buildAnswerKey()
  };
  downloadFile("期中模拟试题1-适中-作答结果.json", JSON.stringify(payload, null, 2), "application/json");
}

function exportMarkdown() {
  syncAllAnswersFromDom();
  const lines = [];
  lines.push(`# ${EXAM.title} 作答结果`);
  lines.push("");
  lines.push(`- 导出时间：${new Date().toLocaleString()}`);
  lines.push(`- 状态：${state.submitted ? "已交卷" : "未交卷"}`);
  lines.push(`- 分数：${state.submitted ? `${formatScore(getEarnedScore())} / ${EXAM.totalScore}` : "--"}`);
  lines.push(`- 标记题目：${Object.keys(state.flags).filter((id) => state.flags[id]).join(", ") || "无"}`);
  lines.push("");
  allQuestions.forEach((question) => {
    const result = state.results[question.id];
    lines.push(`## ${question.id}`);
    lines.push("");
    lines.push(`题目：${getQuestionPromptText(question).replace(/\n/g, " ")}`);
    lines.push("");
    lines.push(`我的答案：${state.answers[question.id] || "(空白)"}`);
    lines.push("");
    lines.push(`参考答案：${getCorrectAnswer(question)}`);
    if (result) {
      lines.push("");
      lines.push(`判分：${formatScore(result.score)} / ${formatScore(result.maxScore)} (${result.source === "api" ? "API" : "本地"})`);
      lines.push("");
      lines.push(`反馈：${result.feedback || ""}`);
    }
    lines.push("");
  });
  downloadFile("期中模拟试题1-适中-作答结果.md", lines.join("\n"), "text/markdown");
}

function buildAnswerKey() {
  const key = {};
  allQuestions.forEach((question) => {
    key[question.id] = getCorrectAnswer(question);
  });
  return key;
}

function getCorrectAnswer(question) {
  return question.expected || question.correctAnswerText || question.answer || "";
}

function getQuestionPromptText(question) {
  if (question.prompt) return question.prompt;
  if (question.type === "multiAdj") return question.parts.join("__");
  return "";
}

function getReadingContextLine(question) {
  const part = findReadingPartByQuestionId(question.id);
  if (!part) return "";
  return `阅读原文（${part.title}）：\n${part.text}`;
}

function formatUserAnswer(value) {
  if (Array.isArray(value)) return value.filter(Boolean).join("; ") || "(空白)";
  return value || "(空白)";
}

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function loadState() {
  try {
    const raw = localStorage.getItem(EXAM.storageKey);
    if (!raw) return;
    const saved = JSON.parse(raw);
    Object.assign(state, {
      started: !!saved.started,
      paused: !!saved.paused,
      submitted: !!saved.submitted,
      remainingSeconds: Number.isFinite(saved.remainingSeconds) ? saved.remainingSeconds : EXAM.durationMinutes * 60,
      answers: saved.answers || {},
      flags: saved.flags || {},
      results: saved.results || {},
      apiConfig: { ...state.apiConfig, ...(saved.apiConfig || {}) }
    });
    state.paused = false;
  } catch {
    localStorage.removeItem(EXAM.storageKey);
  }
}

function saveState() {
  const payload = {
    started: state.started,
    paused: state.paused,
    submitted: state.submitted,
    remainingSeconds: state.remainingSeconds,
    answers: state.answers,
    flags: state.flags,
    results: state.results,
    apiConfig: state.apiConfig
  };
  localStorage.setItem(EXAM.storageKey, JSON.stringify(payload));
}

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[“”„"'.。,，;；:：!?！？()[\]{}]/g, " ")
    .replace(/[-–—]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeEnding(value) {
  return normalizeText(value).replace(/^-+/, "").replace(/\s/g, "");
}

function countGermanWords(value) {
  const matches = String(value || "").trim().match(/[A-Za-zÄÖÜäöüß]+(?:[-'][A-Za-zÄÖÜäöüß]+)*/g);
  return matches ? matches.length : 0;
}

function roundHalf(value) {
  return Math.round(Number(value) * 2) / 2;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatScore(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function parseApiJudgeResult(content, question) {
  const jsonResult = parseJsonFromModel(content);
  if (jsonResult) return normalizeApiJudgeObject(jsonResult, content, question);

  const score = extractScoreFromText(content, question.maxScore);
  if (typeof score === "number") {
    return {
      score,
      feedback: extractFieldFromText(content, ["feedback", "评语", "反馈", "解析", "理由"]) || compactApiText(content),
      correctAnswer: extractFieldFromText(content, ["correctAnswer", "参考答案", "可接受答案"]) || question.expected || ""
    };
  }

  throw new Error("API未返回可识别分数");
}

function normalizeApiJudgeObject(parsed, content, question) {
  const score = parseNumericScore(parsed.score ?? parsed.得分 ?? parsed.分数 ?? parsed.grade);
  return {
    score,
    feedback: parsed.feedback || parsed.反馈 || parsed.评语 || parsed.解析 || compactApiText(content),
    correctAnswer: parsed.correctAnswer || parsed.参考答案 || parsed.answer || question.expected || ""
  };
}

function parseJsonFromModel(content) {
  if (!content) return null;
  const direct = safeJsonParse(content);
  if (direct) return direct;

  const fenced = content.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced) {
    const parsed = safeJsonParse(fenced[1]);
    if (parsed) return parsed;
    const repaired = safeJsonParse(repairLooseJson(fenced[1]));
    if (repaired) return repaired;
  }

  const candidates = extractJsonCandidates(content);
  for (const candidate of candidates) {
    const parsed = safeJsonParse(candidate);
    if (parsed) return parsed;
    const repaired = safeJsonParse(repairLooseJson(candidate));
    if (repaired) return repaired;
  }

  return null;
}

function extractJsonCandidates(text) {
  const candidates = [];
  let start = -1;
  let depth = 0;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === "{") {
      if (depth === 0) start = index;
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0 && start >= 0) {
        candidates.push(text.slice(start, index + 1));
        start = -1;
      }
    }
  }
  return candidates;
}

function repairLooseJson(text) {
  return String(text || "")
    .replace(/[“”]/g, "\"")
    .replace(/[‘’]/g, "'")
    .replace(/,\s*([}\]])/g, "$1")
    .replace(/([{,]\s*)(score|feedback|correctAnswer|answer|grade)\s*:/g, "$1\"$2\":")
    .replace(/([{,]\s*)(得分|分数|反馈|评语|解析|参考答案)\s*:/g, "$1\"$2\":");
}

function extractScoreFromText(text, maxScore) {
  const patterns = [
    /(?:score|grade|得分|分数)\s*["']?\s*[:：=]\s*([0-9]+(?:\.[0-9]+)?)/i,
    /(?:得分|分数)\s*(?:应为|为|是)\s*([0-9]+(?:\.[0-9]+)?)/,
    /([0-9]+(?:\.[0-9]+)?)\s*\/\s*([0-9]+(?:\.[0-9]+)?)/,
    /给\s*([0-9]+(?:\.[0-9]+)?)\s*分/,
    /判为\s*([0-9]+(?:\.[0-9]+)?)\s*分/
  ];
  for (const pattern of patterns) {
    const match = String(text || "").match(pattern);
    if (!match) continue;
    const value = parseNumericScore(match[1]);
    if (typeof value === "number" && value >= 0 && value <= maxScore) return value;
  }
  return null;
}

function parseNumericScore(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const match = String(value ?? "").match(/[0-9]+(?:\.[0-9]+)?/);
  return match ? Number(match[0]) : null;
}

function extractFieldFromText(text, labels) {
  for (const label of labels) {
    const pattern = new RegExp(`${escapeRegExp(label)}["']?\\s*[:：=]\\s*["']?([^"'\\n\\r}]+)`, "i");
    const match = String(text || "").match(pattern);
    if (match) return match[1].trim().replace(/^["']|["']$/g, "");
  }
  return "";
}

function compactApiText(text) {
  return String(text || "")
    .replace(/```(?:json)?|```/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 600);
}

function appendApiFailure(feedback, message) {
  const base = String(feedback || "").replace(/\s*API复核失败：[^。]*。?/g, "").trim();
  return `${base}${base ? " " : ""}API复核失败：${message}`;
}

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function typeLabel(type) {
  if (type === "mc") return "选择题";
  if (type === "word") return "选词填空";
  if (type === "adj" || type === "multiAdj") return "形容词词尾";
  if (type === "writing") return "写作";
  return "作答";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
