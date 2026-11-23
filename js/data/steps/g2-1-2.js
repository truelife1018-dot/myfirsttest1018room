window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-1-2"] = {
  lesson: [
    {
      say: "will ＋ 動詞のもとの形 でも、未来のことを言えるよ。",
      body: "will には2つの使い方があるよ。\n・「〜するだろう」：これからのことの予想\n・「〜します」：その場で決めたこと\n\n主語が何でも will の形は同じ。I will は I'll と短くできるよ。",
      examples: [
        { en: "It will be sunny tomorrow.", ja: "明日は晴れるでしょう。" },
        { en: "I'll help you.", ja: "わたしが手伝いますよ。" }
      ]
    },
    {
      say: "否定文と疑問文の作り方だよ。",
      body: "・否定：will not（短くすると won't）＋ もとの形\n・疑問：Will を文のはじめに → Yes, it will. ／ No, it won't.\n・Will you 〜? は「〜してくれますか？」というお願いにもなるよ。",
      examples: [
        { en: "It won't rain tomorrow.", ja: "明日は雨は降らないでしょう。" },
        { en: "Will you come to the party? Yes, I will.", ja: "パーティーに来ますか。はい、行きます。" },
        { en: "Will you open the door?", ja: "ドアを開けてくれますか。" }
      ]
    },
    {
      say: "be going to と will のちがいを見てみよう。",
      body: "・前から決めている予定 → be going to\n・予想や、その場で決めたこと → will\n\n例：電話が鳴った！ → I'll get it.（わたしが出ます）は、その場で決めたので will だよ。",
      examples: [
        { en: "The phone is ringing. I'll get it.", ja: "電話が鳴っているね。わたしが出ます。" },
        { en: "I'm going to visit Osaka next week.", ja: "来週、大阪を訪れる予定です。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "明日は雨が降るでしょう。",
      sentence: "It (　　) rain tomorrow.",
      choices: ["will", "is", "does", "was"], answer: 0,
      explain: "「〜するだろう」と予想するときは will ＋ もとの形だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "（重そうな荷物を見て）わたしが手伝いますよ。",
      sentence: "I (　　) help you.",
      choices: ["will", "am", "does", "was"], answer: 0,
      explain: "その場で「〜します」と決めたときは will を使うよ。I'll help you. と短くもできるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼は来年15さいになるでしょう。",
      sentence: "He will (　　) fifteen next year.",
      choices: ["be", "is", "are", "being"], answer: 0,
      explain: "will のあとは動詞のもとの形。is / am / are のもとの形は be だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "明日は寒くならないでしょう。",
      words: ["It", "won't", "be", "cold", "tomorrow"], end: ".",
      explain: "won't（will not）のあとは be。It won't be cold で「寒くならないだろう」だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "It will be sunny tomorrow.",
      choices: ["明日は晴れるでしょう。", "昨日は晴れていました。", "今日は晴れています。", "明日は雨が降るでしょう。"], answer: 0,
      explain: "will be は「〜になるだろう」。sunny は「晴れた」、tomorrow は「明日」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしの家に来ますか。― はい、行きます。",
      sentence: "Will you come to my house? ― Yes, I (　　).",
      choices: ["will", "do", "am", "come"], answer: 0,
      explain: "Will で聞かれたら will で答えるよ。Yes, I will."
    },
    {
      type: "choice", prompt: "正しい文はどれ？",
      choices: ["She will be a good teacher.", "She wills be a good teacher.", "She will is a good teacher.", "She will being a good teacher."], answer: 0,
      explain: "will には s をつけない。will のあとはもとの形 be だよ。"
    },
    {
      type: "listen", prompt: "音声に対する返事として、正しいものを選ぼう。", audio: "Will you open the window?",
      choices: ["Sure.", "Yes, it will.", "No, it isn't.", "I'm fine."], answer: 0,
      explain: "Will you 〜? は「〜してくれますか？」というお願い。Sure.（いいですよ）と答えるよ。"
    },
    {
      type: "read", prompt: "会話を読んで、質問に答えよう。",
      passage: "Mom: It's [cloudy|くもっている] today. It will rain this evening.\nKen: Really? I'm going to play soccer after school.\nMom: Take your [umbrella|かさ] with you.\nKen: OK, I will.",
      question: "ケンについて正しいものはどれ？",
      choices: ["放課後にサッカーをする予定で、かさを持っていく", "放課後のサッカーをやめることにした", "今日は晴れているので、かさは持っていかない", "夕方に雨が降ったので、サッカーができなかった"], answer: 0,
      explain: "I'm going to play soccer after school.（放課後サッカーをする予定）、かさを持っていくように言われて OK, I will.（そうする）と答えているね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "It will be cold tomorrow. I'll wear a coat.",
      ja: "明日は寒くなるでしょう。コートを着ます。"
    }
  ]
};
