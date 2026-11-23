window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-4-1"] = {
  lesson: [
    {
      say: "主語が he / she / 名前1人 のとき、一般動詞の最後に s がつくよ。",
      body: "I play tennis. → He plays tennis.\n\nI（自分）と you（相手）以外の、1人・1つが主語のときのルールだよ。\nむずかしい名前で「三人称単数現在（3単現）の s」とよばれるよ。",
      examples: [
        { en: "He plays tennis.", ja: "彼はテニスをします。" },
        { en: "Emi likes music.", ja: "エミは音楽が好きです。" }
      ]
    },
    {
      say: "s のつけ方には、いくつかパターンがあるよ。",
      body: "・ふつうは s：play → plays、like → likes\n・es をつける：go → goes、watch → watches\n・y を i にかえて es：study → studies\n・形が変わる：have → has",
      examples: [
        { en: "She goes to school by bus.", ja: "彼女はバスで学校へ行きます。" },
        { en: "He studies English.", ja: "彼は英語を勉強します。" },
        { en: "My sister has a cat.", ja: "わたしの姉はねこを飼っています。" }
      ]
    },
    {
      say: "s をつけないときにも気をつけよう！",
      body: "・主語が I / you のときはつけない：I play、You play\n・2人以上のときもつけない：Ken and Emi play\n・can のあとはつけない：He can play（✕ can plays）",
      examples: [
        { en: "I play tennis. Ken plays tennis, too.", ja: "わたしはテニスをします。ケンもテニスをします。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼は毎日サッカーをします。",
      sentence: "He (　　) soccer every day.",
      choices: ["plays", "play", "playing", "is play"], answer: 0,
      explain: "主語が He なので、play に s をつけて plays だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "エミは音楽が好きです。",
      sentence: "Emi (　　) music.",
      choices: ["likes", "like", "is like", "liking"], answer: 0,
      explain: "Emi は1人なので、like に s をつけて likes。is like とは言わないよ。"
    },
    {
      type: "choice", prompt: "主語が He のとき、study の正しい形はどれ？",
      choices: ["studies", "studys", "studyes", "studied"], answer: 0,
      explain: "study のように「子音字＋y」で終わる語は、y を i にかえて es をつけるよ。studied は過去形（Unit 7 で学ぶよ）。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしの母は毎朝コーヒーを飲みます。",
      words: ["My", "mother", "drinks", "coffee", "every", "morning"], end: ".",
      explain: "My mother（わたしの母は）は1人なので drinks。every morning（毎朝）は最後に置くよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "She has a dog.",
      choices: ["彼女は犬を飼っています。", "わたしは犬を飼っています。", "彼女は犬が好きです。", "彼は犬を飼っています。"], answer: 0,
      explain: "has は have の3単現の形で「持っている、飼っている」。She（彼女）が主語だね。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼は8時に学校へ行きます。",
      sentence: "He (　　) to school at eight.",
      choices: ["goes", "go", "gos", "going"], answer: 0,
      explain: "go は es をつけて goes になるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは毎日テニスをします。",
      sentence: "I (　　) tennis every day.",
      choices: ["play", "plays", "playes", "is play"], answer: 0,
      explain: "主語が I のときは s をつけないよ。s がつくのは he / she / 名前1人のときだけ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "My brother watches TV every night.",
      choices: ["兄は毎晩テレビを見ます。", "兄は毎朝テレビを見ます。", "兄は毎晩本を読みます。", "わたしは毎晩テレビを見ます。"], answer: 0,
      explain: "watches は watch（見る）の3単現。every night は「毎晩」だよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "This is my friend, [Taro|タロウ（名前）].\nHe lives in [Nagoya|名古屋].\nHe plays baseball every Sunday.\nHe has a brother, [Jiro|ジロウ（名前）].\nJiro likes baseball, too.",
      question: "正しいものはどれ？",
      choices: ["タロウは毎週日曜日に野球をする", "タロウは名古屋に住んでいない", "ジロウは野球が好きではない", "タロウは毎日サッカーをする"], answer: 0,
      explain: "He plays baseball every Sunday.（毎週日曜日に野球をする）と書いてあるね。too は「〜も」なので、ジロウも野球が好きだよ。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "He plays tennis. She likes music.",
      ja: "彼はテニスをします。彼女は音楽が好きです。"
    }
  ]
};
