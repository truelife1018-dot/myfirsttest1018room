window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-1-1"] = {
  lesson: [
    {
      say: "「わたしは〜です」は I am 〜. と言うよ。",
      body: "I は「わたしは」、am は「〜です」。\nI am は短くして I'm と言うこともできるよ。",
      examples: [
        { en: "I am Yuki.", ja: "わたしはユキです。" },
        { en: "I am a student.", ja: "わたしは生徒です。" },
        { en: "I'm hungry.", ja: "わたしはおなかがすいています。" }
      ]
    },
    {
      say: "「あなたは〜です」は You are 〜. と言うよ。",
      body: "You は「あなたは」、are は「〜です」。\nYou are は短くして You're と言うこともできるよ。",
      examples: [
        { en: "You are Ken.", ja: "あなたはケンです。" },
        { en: "You're kind.", ja: "あなたは親切です。" }
      ]
    },
    {
      say: "am と are は「be動詞」というなかまだよ。",
      body: "be動詞は「＝（イコール）」のような働きをするよ。\nI am Yuki. は「I ＝ Yuki」ということ。\n\n組み合わせは決まっているよ：\n・I のときは → am\n・You のときは → are",
      examples: [
        { en: "I am Yuki. You are Ken.", ja: "わたしはユキです。あなたはケンです。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "わたしはユキです。",
      sentence: "I (　　) Yuki.",
      choices: ["am", "are", "is", "be"],
      answer: 0,
      explain: "I のときの be動詞は am だよ。「I am」はセットで覚えよう。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "あなたは歌がじょうずです。",
      sentence: "You (　　) a good [singer|歌う人].",
      choices: ["am", "is", "are", "be"],
      answer: 2,
      explain: "You のときの be動詞は are だよ。a good singer は「じょうずな歌い手」という意味。"
    },
    {
      type: "choice",
      prompt: "「わたしは生徒です。」を正しく表している文はどれ？",
      choices: ["I am a student.", "I are a student.", "You am a student.", "I is a student."],
      answer: 0,
      explain: "「わたしは」は I、I のときは am。だから I am a student. が正しいよ。"
    },
    {
      type: "order",
      prompt: "日本語に合うように並べよう。",
      ja: "あなたはテニスの選手です。",
      words: ["You", "are", "a", "tennis", "player"],
      end: ".",
      explain: "「あなたは」You →「〜です」are →「テニスの選手」a tennis player の順番だよ。"
    },
    {
      type: "listen",
      prompt: "音声を聞いて、意味に合うものを選ぼう。",
      audio: "I am hungry.",
      choices: ["わたしはおなかがすいています。", "わたしはねむいです。", "わたしは楽しいです。", "わたしはつかれています。"],
      answer: 0,
      explain: "hungry は「おなかがすいた」。ねむいは sleepy、つかれたは tired だよ。"
    },
    {
      type: "choice",
      prompt: "I'm は何を短くした形？",
      choices: ["I am", "I are", "I is", "You are"],
      answer: 0,
      explain: "I'm は I am を短くした形。' （アポストロフィ）が a のかわりに入っているよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "あなたはわたしの友だちです。",
      sentence: "(　　) are my [friend|友だち].",
      choices: ["I", "You", "Am", "Is"],
      answer: 1,
      explain: "are の前に来るのは You。「I are」とは言わないよ。my friend は「わたしの友だち」。"
    },
    {
      type: "listen",
      prompt: "音声を聞いて、意味に合うものを選ぼう。",
      audio: "You are kind.",
      choices: ["あなたは親切です。", "わたしは親切です。", "あなたは背が高いです。", "わたしは元気です。"],
      answer: 0,
      explain: "You are 〜 は「あなたは〜です」。kind は「親切な、やさしい」という意味だよ。"
    },
    {
      type: "read",
      prompt: "英文を読んで、質問に答えよう。",
      passage: "Hi! I am [Mika|ミカ（名前）].\nI am [thirteen|13さい].\nI am [from|〜出身] [Osaka|大阪].",
      question: "ミカについて正しいものはどれ？",
      choices: ["13さいで、大阪出身", "12さいで、東京出身", "13さいで、東京出身", "14さいで、大阪出身"],
      answer: 0,
      explain: "I am thirteen. は「13さいです」、I am from Osaka. は「大阪出身です」という意味だよ。"
    },
    {
      type: "speak",
      prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I am a student. You are my friend.",
      ja: "わたしは生徒です。あなたはわたしの友だちです。"
    }
  ]
};
