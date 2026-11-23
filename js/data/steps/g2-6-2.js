window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-6-2"] = {
  lesson: [
    {
      say: "長いことばは、er / est のかわりに more / most を前に置くよ。",
      body: "interesting（おもしろい）→ more interesting → the most interesting\n\nmore / most を使うことば：interesting、beautiful（美しい）、popular（人気がある）、famous（有名な）、difficult（難しい）、important（大切な）、exciting（わくわくする）など",
      examples: [
        { en: "This book is more interesting than that one.", ja: "この本はあの本よりおもしろいです。" },
        { en: "She is the most popular singer in Japan.", ja: "彼女は日本でいちばん人気のある歌手です。" }
      ]
    },
    {
      say: "more と er を両方つけないように気をつけよう。",
      body: "✕ more interestinger　✕ difficulter\n◯ more interesting　◯ more difficult\n\nmore が er の代わり、most が est の代わりだよ。",
      examples: [
        { en: "Math is more difficult than English for me.", ja: "わたしにとって数学は英語より難しいです。" },
        { en: "This is the most beautiful picture of all.", ja: "これはすべての中でいちばん美しい絵です。" }
      ]
    },
    {
      say: "「どちらが〜？」「何がいちばん〜？」のたずね方を覚えよう。",
      body: "・Which is 〜er, A or B?：AとBではどちらが〜ですか\n・Which do you like better, A or B? → I like A better.\n・What 〜 do you like the best? → I like 〜 the best.",
      examples: [
        { en: "Which do you like better, dogs or cats?", ja: "犬とねこでは、どちらが好きですか。" },
        { en: "I like cats better.", ja: "ねこのほうが好きです。" },
        { en: "What subject do you like the best?", ja: "あなたはどの教科がいちばん好きですか。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "この本はあの本よりおもしろいです。",
      sentence: "This book is (　　) interesting than that one.",
      choices: ["more", "most", "very", "much"], answer: 0,
      explain: "interesting は長いことばなので、比較級は more interesting だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "これはこの町でいちばん有名なレストランです。",
      sentence: "This is the (　　) famous restaurant in this town.",
      choices: ["most", "more", "much", "very"], answer: 0,
      explain: "「いちばん」は the most ＋ famous だよ。"
    },
    {
      type: "choice", prompt: "正しい文はどれ？",
      choices: ["Science is more difficult than math.", "Science is difficulter than math.", "Science is more difficulter than math.", "Science is most difficult than math."], answer: 0,
      explain: "difficult は more をつけて more difficult。er はつけないよ。than があるので most ではなく more。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "彼女は日本でいちばん人気のある歌手です。",
      words: ["She", "is", "the", "most", "popular", "singer", "in", "Japan"], end: ".",
      explain: "the most popular singer（いちばん人気のある歌手）のあとに、in Japan（日本で）を置くよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "Which do you like better, dogs or cats?",
      choices: ["I like cats better.", "Yes, I like them.", "No, I don't.", "They are cats."], answer: 0,
      explain: "「犬とねこ、どっちが好き？」という質問。Yes / No ではなく、I like 〜 better. で答えるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたはどの教科がいちばん好きですか。",
      sentence: "What subject do you like the (　　)?",
      choices: ["best", "better", "more", "good"], answer: 0,
      explain: "「いちばん好き」は like 〜 the best だよ。"
    },
    {
      type: "choice", prompt: "important（大切な）の最上級はどれ？",
      choices: ["the most important", "the importantest", "the more important", "most importanter"], answer: 0,
      explain: "important は長いことばなので、the most important だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "This flower is the most beautiful of all.",
      choices: ["この花はすべての中でいちばん美しいです。", "この花はあの花より美しいです。", "この花は美しくありません。", "すべての花が同じくらい美しいです。"], answer: 0,
      explain: "the most beautiful of all は「すべての中でいちばん美しい」だよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "We asked our class, \"Which sport do you like the best: soccer, baseball, or tennis?\"\nSoccer was the most popular.\nBaseball was more popular than tennis.",
      question: "人気が3番目のスポーツはどれ？",
      choices: ["テニス", "サッカー", "野球", "バスケットボール"], answer: 0,
      explain: "サッカーがいちばん人気、野球はテニスより人気。だから3番目はテニスだね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "Which do you like better, summer or winter? I like summer better.",
      ja: "夏と冬ではどちらが好きですか。夏のほうが好きです。"
    }
  ]
};
