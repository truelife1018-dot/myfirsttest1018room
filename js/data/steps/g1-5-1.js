window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-5-1"] = {
  lesson: [
    {
      say: "「どこ？」は Where、「いつ？」は When だよ。",
      body: "どちらも文のはじめに置いて、そのあとはふつうの疑問文の形（do you 〜? / is 〜? など）を続けるよ。\nYes / No ではなく、場所や時を答えるよ。",
      examples: [
        { en: "Where do you live? I live in Tokyo.", ja: "あなたはどこに住んでいますか。東京に住んでいます。" },
        { en: "When do you play tennis? I play tennis on Sundays.", ja: "あなたはいつテニスをしますか。日曜日にします。" }
      ]
    },
    {
      say: "時刻や曜日のたずね方と答え方を覚えよう。",
      body: "・時刻：What time is it? → It's seven thirty.（7時30分です）\n・曜日：What day is it today? → It's Monday.\n\n「〜時に」は at、「〜曜日に」は on を使うよ。at six（6時に）、on Sunday（日曜日に）。",
      examples: [
        { en: "What time is it? It's seven thirty.", ja: "何時ですか。7時30分です。" },
        { en: "I get up at six.", ja: "わたしは6時に起きます。" }
      ]
    },
    {
      say: "「どう？」「どうやって？」は How だよ。",
      body: "How are you? は「元気ですか？」というあいさつ。\nHow do you go to 〜? は「どうやって行きますか？」。by bus（バスで）、by bike（自転車で）、walk（歩いて行く）などで答えるよ。",
      examples: [
        { en: "How are you? I'm fine, thank you.", ja: "元気ですか。元気です、ありがとう。" },
        { en: "How do you go to school? I go by bike.", ja: "どうやって学校へ行きますか。自転車で行きます。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたはどこに住んでいますか。",
      sentence: "(　　) do you live?",
      choices: ["Where", "When", "What", "Who"], answer: 0,
      explain: "「どこ？」と場所を聞くときは Where だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "今、何時ですか。",
      sentence: "(　　) time is it?",
      choices: ["What", "When", "How", "Where"], answer: 0,
      explain: "時刻を聞くときは What time 〜? だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたはどうやって学校に来ますか。― 自転車で来ます。",
      sentence: "(　　) do you come to school? ― By bike.",
      choices: ["How", "Where", "When", "What"], answer: 0,
      explain: "「どうやって？」と方法を聞くときは How。By bike.（自転車で）と答えているね。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "あなたの誕生日はいつですか。",
      words: ["When", "is", "your", "birthday"], end: "?",
      explain: "When（いつ）を最初に。そのあとは is your birthday の順だよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "What day is it today?",
      choices: ["It's Monday.", "It's seven.", "It's my bag.", "I'm fine."], answer: 0,
      explain: "What day is it today? は「今日は何曜日？」。曜日で答えるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは日曜日にテニスをします。",
      sentence: "I play tennis (　　) Sunday.",
      choices: ["on", "at", "in", "to"], answer: 0,
      explain: "「〜曜日に」は on を使うよ。時刻なら at だね。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは6時に起きます。",
      sentence: "I get up (　　) six.",
      choices: ["at", "on", "in", "for"], answer: 0,
      explain: "「〜時に」は at を使うよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I go to school by bus.",
      choices: ["バスで学校へ行きます。", "自転車で学校へ行きます。", "歩いて学校へ行きます。", "電車で学校へ行きます。"], answer: 0,
      explain: "by bus は「バスで」。自転車は by bike、電車は by train だよ。"
    },
    {
      type: "read", prompt: "会話を読んで、質問に答えよう。",
      passage: "Ami: Where do you live, Tom?\nTom: I live near the [station|駅].\nAmi: How do you come to school?\nTom: I walk.\nAmi: What time do you [leave home|家を出る]?\nTom: At seven forty.",
      question: "トムについて正しいものはどれ？",
      choices: ["駅の近くに住み、歩いて学校に来る", "駅の近くに住み、バスで学校に来る", "学校の近くに住み、7時に家を出る", "駅の近くに住み、8時40分に家を出る"], answer: 0,
      explain: "near the station（駅の近く）、I walk.（歩く）、At seven forty.（7時40分）と答えているね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "What time is it? It's seven thirty.",
      ja: "何時ですか。7時30分です。"
    }
  ]
};
