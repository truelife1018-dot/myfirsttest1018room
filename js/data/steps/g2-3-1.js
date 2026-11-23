window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-3-1"] = {
  lesson: [
    {
      say: "when は「〜するとき」。2つの文をつなぐことができるよ。",
      body: "when 〜 のまとまりは、文の前にも後ろにも置けるよ。\n前に置くときは、まとまりの終わりにコンマ（,）を入れるよ。",
      examples: [
        { en: "When I got home, my mother was cooking.", ja: "わたしが家に帰ったとき、母は料理をしていました。" },
        { en: "I was reading a book when he called me.", ja: "彼が電話してきたとき、わたしは本を読んでいました。" }
      ]
    },
    {
      say: "if は「もし〜なら」だよ。",
      body: "if のまとまりも、前にも後ろにも置けるよ。\n注意：これからのことでも、if のまとまりの中は現在形を使うよ。\n✕ If it will be sunny 〜　◯ If it is sunny 〜",
      examples: [
        { en: "If it is sunny tomorrow, let's go to the park.", ja: "もし明日晴れたら、公園へ行こう。" },
        { en: "If you are tired, you should rest.", ja: "もしつかれているなら、休んだほうがいいよ。" }
      ]
    },
    {
      say: "because は「〜なので」と理由を表すよ。",
      body: "Why 〜?（なぜ？）と聞かれたら、Because 〜.（なぜなら〜だから）で答えられるよ。",
      examples: [
        { en: "I stayed home because it was raining.", ja: "雨が降っていたので、わたしは家にいました。" },
        { en: "Why do you like summer? Because I can swim in the sea.", ja: "なぜ夏が好きなの？海で泳げるからだよ。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしが家に帰ったとき、弟は寝ていました。",
      sentence: "(　　) I got home, my brother was sleeping.",
      choices: ["When", "If", "Because", "That"], answer: 0,
      explain: "「〜したとき」は when だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "もし明日晴れたら、テニスをしましょう。",
      sentence: "(　　) it is sunny tomorrow, let's play tennis.",
      choices: ["If", "Because", "That", "But"], answer: 0,
      explain: "「もし〜なら」は if だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "雨が降っていたので、わたしは家にいました。",
      sentence: "I stayed home (　　) it was raining.",
      choices: ["because", "if", "that", "or"], answer: 0,
      explain: "「〜なので」と理由を言うときは because だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "もし時間があれば、わたしを手伝ってください。",
      words: ["If", "you", "have", "time,", "please", "help", "me"], end: ".",
      explain: "If you have time,（もし時間があれば）を前に置いて、コンマのあとに please help me（手伝ってください）だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I like winter because I can ski.",
      choices: ["スキーができるので、冬が好きです。", "冬は好きではありません。", "スキーができないので、冬が好きではありません。", "夏にスキーをします。"], answer: 0,
      explain: "because I can ski は「スキーができるので」。理由が後ろについているね。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "もし明日雨が降ったら、わたしは家にいます。",
      sentence: "If it (　　) tomorrow, I will stay home.",
      choices: ["rains", "will rain", "rained", "raining"], answer: 0,
      explain: "これからのことでも、if のまとまりの中は現在形。主語が it なので rains だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "なぜ遅れたのですか。― バスに乗りおくれたからです。",
      sentence: "Why were you late? ― (　　) I missed the bus.",
      choices: ["Because", "If", "When", "So"], answer: 0,
      explain: "Why（なぜ）と聞かれたら、Because（なぜなら）で理由を答えるよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしが子どもだったとき、犬を飼っていました。",
      words: ["When", "I", "was", "a", "child,", "I", "had", "a", "dog"], end: ".",
      explain: "When I was a child,（子どもだったとき）を前に置いて、そのあとに I had a dog（犬を飼っていた）だよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "I like summer because I can swim in the sea.\nWhen I was ten, I went to [Okinawa|沖縄] with my family.\nIf I have time next summer, I want to go there again.",
      question: "この人について正しいものはどれ？",
      choices: ["海で泳げるので夏が好き", "冬がいちばん好き", "10さいのとき北海道に行った", "来年の夏は沖縄に行きたくない"], answer: 0,
      explain: "I like summer because I can swim in the sea.（海で泳げるので夏が好き）と書いてあるね。10さいで行ったのは沖縄で、来年もまた行きたいと言っているよ。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "If it is sunny tomorrow, let's go to the park.",
      ja: "もし明日晴れたら、公園へ行こう。"
    }
  ]
};
