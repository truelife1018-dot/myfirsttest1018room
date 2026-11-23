window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-4-2"] = {
  lesson: [
    {
      say: "主語が he / she のとき、「〜しません」は doesn't を使うよ。",
      body: "doesn't（does not）のあとの動詞は、s をとった「もとの形」にするよ。\n✕ He doesn't plays.　◯ He doesn't play.",
      examples: [
        { en: "He doesn't play tennis.", ja: "彼はテニスをしません。" },
        { en: "She doesn't like fish.", ja: "彼女は魚が好きではありません。" }
      ]
    },
    {
      say: "「〜しますか？」は Does を文のはじめに出すよ。",
      body: "Does のあとの動詞も、もとの形。\n答えるときは does を使うよ：Yes, he does. ／ No, he doesn't.",
      examples: [
        { en: "Does Ken play soccer?", ja: "ケンはサッカーをしますか。" },
        { en: "Yes, he does.", ja: "はい、します。" },
        { en: "What does she study?", ja: "彼女は何を勉強しますか。" }
      ]
    },
    {
      say: "do と does の使い分けをまとめよう！",
      body: "・I / you / 2人以上 → do / don't\n・he / she / 名前1人 → does / doesn't\n\ns（es）は1つの文に1回だけ。does に es がついたら、動詞はもとの形にもどるよ。",
      examples: [
        { en: "Do you like dogs?", ja: "あなたは犬が好きですか。" },
        { en: "Does she like dogs?", ja: "彼女は犬が好きですか。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼は肉を食べません。",
      sentence: "He (　　) eat [meat|肉].",
      choices: ["doesn't", "don't", "isn't", "not"], answer: 0,
      explain: "主語が He の一般動詞の文なので、doesn't を使うよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼女はテニスをしますか。",
      sentence: "(　　) she play tennis?",
      choices: ["Does", "Do", "Is", "Are"], answer: 0,
      explain: "主語が she で、play は一般動詞。だから Does で始めるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "ケンはねこが好きですか。― はい、好きです。",
      sentence: "Does Ken like cats? ― Yes, he (　　).",
      choices: ["does", "do", "is", "likes"], answer: 0,
      explain: "Does で聞かれたら does で答えるよ。Yes, he does."
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "彼女は日本語を話しません。",
      words: ["She", "doesn't", "speak", "Japanese"], end: ".",
      explain: "She → doesn't → speak（もとの形）→ Japanese の順だよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "Does your father cook?",
      choices: ["Yes, he does.", "Yes, I do.", "Yes, he is.", "No, she doesn't."], answer: 0,
      explain: "「あなたのお父さんは料理をしますか？」。father は he で受けて、Does には does で答えるよ。"
    },
    {
      type: "choice", prompt: "正しい文はどれ？",
      choices: ["He doesn't play the piano.", "He doesn't plays the piano.", "He don't play the piano.", "He isn't play the piano."], answer: 0,
      explain: "He には doesn't、そのあとの動詞はもとの形 play。s は doesn't のほうについているよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたのお姉さんは犬を飼っていますか。",
      sentence: "Does your sister (　　) a dog?",
      choices: ["have", "has", "having", "haves"], answer: 0,
      explain: "Does のあとは、もとの形。has ではなく have にもどるよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "トムは何を勉強しますか。",
      words: ["What", "does", "Tom", "study"], end: "?",
      explain: "What（何を）を最初に。そのあとは does Tom study の順。study は もとの形だよ。"
    },
    {
      type: "read", prompt: "会話を読んで、質問に答えよう。",
      passage: "Ken: Does your brother play sports?\nMika: Yes, he does. He plays tennis.\nKen: Does he play soccer, too?\nMika: No, he doesn't.",
      question: "ミカの兄弟について正しいものはどれ？",
      choices: ["テニスをするが、サッカーはしない", "テニスもサッカーもする", "サッカーをするが、テニスはしない", "スポーツをしない"], answer: 0,
      explain: "He plays tennis.（テニスをする）、サッカーもするかには No, he doesn't.（しない）と答えているね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "Does he like music? Yes, he does.",
      ja: "彼は音楽が好きですか。はい、好きです。"
    }
  ]
};
