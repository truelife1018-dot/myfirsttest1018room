window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-4-1"] = {
  lesson: [
    {
      say: "to ＋ 動詞のもとの形 で「〜すること」という意味になるよ。",
      body: "これを「不定詞」というよ。\n・want to 〜：〜することを望む → 〜したい\n・like to 〜：〜することが好き\n\nto のあとは、主語が he でも、過去の文でも、いつでももとの形だよ。\n✕ He wants to plays.　◯ He wants to play.",
      examples: [
        { en: "I want to go to Hawaii.", ja: "わたしはハワイに行きたいです。" },
        { en: "She likes to read books.", ja: "彼女は本を読むのが好きです。" }
      ]
    },
    {
      say: "want to be 〜 で「〜になりたい」と言えるよ。ほかの動詞もいっしょに覚えよう。",
      body: "・want to be 〜：〜になりたい\n・start to 〜 ／ begin to 〜：〜し始める\n・try to 〜：〜しようとする\n・need to 〜：〜する必要がある",
      examples: [
        { en: "I want to be a teacher.", ja: "わたしは先生になりたいです。" },
        { en: "It started to rain.", ja: "雨が降り始めました。" }
      ]
    },
    {
      say: "「〜すること」は、文の主語や、is のあとにも置けるよ。",
      body: "・My dream is to be a doctor.（わたしの夢は医者になることです）\n・To play soccer is fun.（サッカーをすることは楽しい）",
      examples: [
        { en: "My dream is to be a doctor.", ja: "わたしの夢は医者になることです。" },
        { en: "What do you want to do?", ja: "あなたは何をしたいですか。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは医者になりたいです。",
      sentence: "I want (　　) a doctor.",
      choices: ["to be", "be", "being", "am"], answer: 0,
      explain: "「〜になりたい」は want to be 〜。to のあとは am のもとの形 be だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼女は本を読むのが好きです。",
      sentence: "She likes (　　) books.",
      choices: ["to read", "to reads", "reads", "read"], answer: 0,
      explain: "「読むこと」は to read。to のあとは、主語が She でももとの形だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼はサッカーをしたがっています。",
      sentence: "He wants to (　　) soccer.",
      choices: ["play", "plays", "played", "playing"], answer: 0,
      explain: "s がつくのは wants のほう。to のあとはもとの形 play だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしの夢は先生になることです。",
      words: ["My", "dream", "is", "to", "be", "a", "teacher"], end: ".",
      explain: "My dream is（わたしの夢は〜です）のあとに、to be a teacher（先生になること）を続けるよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I want to visit Canada someday.",
      choices: ["いつかカナダを訪れたいです。", "以前カナダに住んでいました。", "来週カナダに行きます。", "カナダが好きではありません。"], answer: 0,
      explain: "want to visit は「訪れたい」。someday は「いつか」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "雨が降り始めました。",
      sentence: "It started (　　) rain.",
      choices: ["to", "for", "at", "in"], answer: 0,
      explain: "「〜し始める」は start to 〜。to のあとに rain（雨が降る）が続くよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたは何をしたいですか。",
      sentence: "What do you want (　　)?",
      choices: ["to do", "do", "doing", "to doing"], answer: 0,
      explain: "「何をしたい？」は What do you want to do? だよ。to のあとはもとの形 do。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしはもっと英語を勉強する必要があります。",
      words: ["I", "need", "to", "study", "English", "more"], end: ".",
      explain: "need to 〜 は「〜する必要がある」。I need to study English more の順だよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "My name is Ryo.\nI like animals very much.\nI want to be a [vet|獣医] in the [future|将来].\nSo I need to study [science|理科] hard.",
      question: "リョウの将来の夢は何？",
      choices: ["獣医になること", "理科の先生になること", "動物園で働くこと", "科学者になること"], answer: 0,
      explain: "I want to be a vet in the future.（将来は獣医になりたい）と書いてあるね。そのために理科を勉強する必要があると言っているよ。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I want to be a doctor. What do you want to be?",
      ja: "わたしは医者になりたいです。あなたは何になりたいですか。"
    }
  ]
};
