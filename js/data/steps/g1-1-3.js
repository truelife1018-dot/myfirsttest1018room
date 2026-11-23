window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-1-3"] = {
  lesson: [
    {
      say: "まずは be動詞（am / are）の文の「〜ではない」「〜ですか？」だよ。",
      body: "・「〜ではありません」→ am / are のあとに not\n・「〜ですか？」→ Are を文のはじめに出す\n\n答えるときも be動詞を使うよ：Yes, I am. ／ No, I'm not.",
      examples: [
        { en: "I am not tired.", ja: "わたしはつかれていません。" },
        { en: "Are you a student?", ja: "あなたは生徒ですか。" },
        { en: "Yes, I am.", ja: "はい、そうです。" },
        { en: "No, I'm not.", ja: "いいえ、ちがいます。" }
      ]
    },
    {
      say: "次は一般動詞（like / play など）の文だよ。",
      body: "・「〜しません」→ 動詞の前に don't（do not）\n・「〜しますか？」→ Do を文のはじめに出す\n\n答えるときは do を使うよ：Yes, I do. ／ No, I don't.",
      examples: [
        { en: "I don't like carrots.", ja: "わたしはにんじんが好きではありません。" },
        { en: "Do you play tennis?", ja: "あなたはテニスをしますか。" },
        { en: "Yes, I do.", ja: "はい、します。" },
        { en: "No, I don't.", ja: "いいえ、しません。" }
      ]
    },
    {
      say: "見分け方のコツを教えるね！",
      body: "もとの文に am / are がある → not をつける、Are で聞く\nもとの文に am / are がない（like や play がある）→ don't をつける、Do で聞く\n\n✕ I am not like dogs.　◯ I don't like dogs.\n✕ Do you a student?　　◯ Are you a student?",
      examples: [
        { en: "Are you busy? No, I'm not.", ja: "あなたは忙しいですか。いいえ、忙しくありません。" },
        { en: "Do you like cats? Yes, I do.", ja: "あなたはねこが好きですか。はい、好きです。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "わたしはねむくありません。",
      sentence: "I (　　) [sleepy|ねむい].",
      choices: ["am not", "don't", "not am", "do not"],
      answer: 0,
      explain: "sleepy（ねむい）は動詞ではないので、be動詞の文。I am のあとに not をつけて I am not になるよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "わたしはコーヒーを飲みません。",
      sentence: "I (　　) [drink|飲む] coffee.",
      choices: ["am not", "don't", "not", "aren't"],
      answer: 1,
      explain: "drink（飲む）は一般動詞。一般動詞の「〜しません」は、動詞の前に don't を置くよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "あなたは生徒ですか。― はい、そうです。",
      sentence: "(　　) you a student? ― Yes, I am.",
      choices: ["Do", "Are", "Am", "Is"],
      answer: 1,
      explain: "a student（生徒）の前に動詞がないので be動詞の文。You are を Are you にして聞くよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "あなたはねこが好きですか。― はい、好きです。",
      sentence: "(　　) you like cats? ― Yes, I do.",
      choices: ["Are", "Do", "Am", "Is"],
      answer: 1,
      explain: "like（好き）は一般動詞なので、Do を文のはじめに置いて聞くよ。"
    },
    {
      type: "order",
      prompt: "日本語に合うように並べよう。",
      ja: "あなたはサッカーをしますか。",
      words: ["Do", "you", "play", "soccer"],
      end: "?",
      explain: "一般動詞 play の疑問文なので、Do を最初に。Do → you → play → soccer の順だよ。"
    },
    {
      type: "choice",
      prompt: "Are you busy?（あなたは忙しいですか）に「いいえ」で答える文はどれ？",
      choices: ["No, I'm not.", "No, I don't.", "No, you aren't.", "No, I am."],
      answer: 0,
      explain: "Are で聞かれたら be動詞で答えるよ。「いいえ」は No, I'm not.（I am not の短い形）。"
    },
    {
      type: "listen",
      prompt: "音声の質問に対する、正しい答えを選ぼう。",
      audio: "Do you like music?",
      choices: ["Yes, I do.", "Yes, I am.", "No, I am not.", "Yes, you are."],
      answer: 0,
      explain: "「Do you like music?（音楽は好き？）」と Do で聞かれたら、Yes, I do. か No, I don't. で答えるよ。"
    },
    {
      type: "order",
      prompt: "日本語に合うように並べよう。",
      ja: "わたしは犬が好きではありません。",
      words: ["I", "don't", "like", "dogs"],
      end: ".",
      explain: "「好きではない」は like の前に don't。I → don't → like → dogs の順だよ。"
    },
    {
      type: "read",
      prompt: "会話を読んで、質問に答えよう。",
      passage: "Aya: Are you from Tokyo, Tom?\nTom: No, I'm not. I'm from [London|ロンドン].\nAya: Do you like Japanese food?\nTom: Yes, I do. I like [sushi|すし].",
      question: "トムについて正しいものはどれ？",
      choices: ["ロンドン出身で、日本食が好き", "東京出身で、日本食が好き", "ロンドン出身で、日本食が好きではない", "東京出身で、すしが好きではない"],
      answer: 0,
      explain: "「東京出身？」に No, I'm not.（ちがう）、I'm from London.（ロンドン出身）。「日本食は好き？」に Yes, I do.（好き）と答えているよ。"
    },
    {
      type: "speak",
      prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "Do you play tennis? Yes, I do.",
      ja: "あなたはテニスをしますか。はい、します。"
    }
  ]
};
