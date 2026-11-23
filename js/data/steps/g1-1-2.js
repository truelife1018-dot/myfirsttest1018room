window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-1-2"] = {
  lesson: [
    {
      say: "am / are のほかに、動きや気持ちを表す「一般動詞」があるよ。",
      body: "like（好きだ）、play（〈スポーツを〉する・〈楽器を〉ひく）、have（持っている・飼っている）、study（勉強する）などが一般動詞だよ。",
      examples: [
        { en: "I like dogs.", ja: "わたしは犬が好きです。" },
        { en: "I play soccer.", ja: "わたしはサッカーをします。" },
        { en: "I have a cat.", ja: "わたしはねこを飼っています。" }
      ]
    },
    {
      say: "英語は「だれが → どうする → 何を」の順番で言うよ。",
      body: "日本語：わたしは ／ サッカーを ／ します\n英語　：I ／ play ／ soccer\n\n日本語では「します」が最後だけど、英語では2番目に来るよ！\nピアノなどの楽器をひくときは、the をつけて play the piano と言うよ。",
      examples: [
        { en: "I play the piano.", ja: "わたしはピアノをひきます。" },
        { en: "I study English every day.", ja: "わたしは毎日英語を勉強します。" }
      ]
    },
    {
      say: "ここが大事！ am と like はいっしょに使わないよ。",
      body: "✕ I am like dogs.\n◯ I like dogs.\n\n1つの文の中では、be動詞（am / are）か一般動詞（like / play など）の、どちらか1つを使うよ。",
      examples: [
        { en: "I like music.", ja: "わたしは音楽が好きです。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "わたしはねこが好きです。",
      sentence: "I (　　) cats.",
      choices: ["like", "am", "play", "have"],
      answer: 0,
      explain: "「好きです」は like。am は「〜です（＝）」なので、ここでは使わないよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "わたしは野球をします。",
      sentence: "I (　　) [baseball|野球].",
      choices: ["like", "play", "am", "have"],
      answer: 1,
      explain: "スポーツを「する」は play だよ。play baseball で「野球をする」。"
    },
    {
      type: "choice",
      prompt: "正しい文はどれ？",
      choices: ["I like music.", "I am like music.", "I music like.", "Like I music."],
      answer: 0,
      explain: "「だれが（I）→ どうする（like）→ 何を（music）」の順番。am と like はいっしょに使わないよ。"
    },
    {
      type: "order",
      prompt: "日本語に合うように並べよう。",
      ja: "わたしはピアノをひきます。",
      words: ["I", "play", "the", "piano"],
      end: ".",
      explain: "I（わたしは）→ play（ひく）→ the piano（ピアノを）の順。楽器には the をつけるよ。"
    },
    {
      type: "listen",
      prompt: "音声を聞いて、意味に合うものを選ぼう。",
      audio: "I have a dog.",
      choices: ["わたしは犬を飼っています。", "わたしは犬が好きです。", "わたしはねこを飼っています。", "あなたは犬を飼っています。"],
      answer: 0,
      explain: "have は「持っている、飼っている」。like だったら「好き」になるよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "あなたはテニスが好きです。",
      sentence: "You (　　) tennis.",
      choices: ["are", "like", "is", "am"],
      answer: 1,
      explain: "「好きです」は like。You のときも like の形はそのままだよ。"
    },
    {
      type: "order",
      prompt: "日本語に合うように並べよう。",
      ja: "わたしは毎日英語を勉強します。",
      words: ["I", "study", "English", "every", "day"],
      end: ".",
      explain: "I（わたしは）→ study（勉強する）→ English（英語を）→ every day（毎日）。「いつ」は最後に来ることが多いよ。"
    },
    {
      type: "listen",
      prompt: "音声を聞いて、意味に合うものを選ぼう。",
      audio: "I play basketball.",
      choices: ["🏀 バスケットボールをします。", "⚽ サッカーをします。", "🎾 テニスをします。", "⚾ 野球をします。"],
      answer: 0,
      explain: "basketball は「バスケットボール」。サッカーは soccer、テニスは tennis、野球は baseball だよ。"
    },
    {
      type: "read",
      prompt: "英文を読んで、質問に答えよう。",
      passage: "I am [Riku|リク（名前）].\nI like [sports|スポーツ].\nI play soccer every day.",
      question: "リクが毎日することは？",
      choices: ["サッカー", "野球", "テニス", "ピアノ"],
      answer: 0,
      explain: "I play soccer every day. は「わたしは毎日サッカーをします」という意味だよ。"
    },
    {
      type: "speak",
      prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I like music. I play the guitar.",
      ja: "わたしは音楽が好きです。わたしはギターをひきます。"
    }
  ]
};
