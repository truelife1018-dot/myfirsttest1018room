window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-2-1"] = {
  lesson: [
    {
      say: "近くのものは This is 〜.、遠くのものは That is 〜. だよ。",
      body: "・This is 〜.（これは〜です）→ 手がとどくくらい近くのもの\n・That is 〜.（あれは〜です）→ はなれたところにあるもの\n\nthis / that のときの be動詞は is を使うよ。",
      examples: [
        { en: "This is my bag.", ja: "これはわたしのかばんです。" },
        { en: "That is a school.", ja: "あれは学校です。" }
      ]
    },
    {
      say: "This is 〜. は、人をしょうかいするときにも使えるよ。",
      body: "人をしょうかいするときの This is 〜. は「こちらは〜です」という意味。\nThat is は短くして That's と言うこともできるよ。",
      examples: [
        { en: "This is my friend, Ken.", ja: "こちらはわたしの友だちのケンです。" },
        { en: "That's my teacher.", ja: "あちらはわたしの先生です。" }
      ]
    },
    {
      say: "「〜ではありません」「〜ですか？」の作り方は、am / are のときと同じだよ。",
      body: "・否定：is のあとに not → This is not 〜.（短くすると isn't）\n・疑問：Is を文のはじめに → Is this 〜?\n\n答えるときは、this / that ではなく it を使うよ：Yes, it is. ／ No, it isn't.",
      examples: [
        { en: "This is not my bike.", ja: "これはわたしの自転車ではありません。" },
        { en: "Is this your pen?", ja: "これはあなたのペンですか。" },
        { en: "Yes, it is.", ja: "はい、そうです。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice",
      prompt: "（手に持っているペンについて）（　）に入る語を選ぼう。",
      ja: "これはわたしのペンです。",
      sentence: "(　　) is my pen.",
      choices: ["This", "That", "I", "You"],
      answer: 0,
      explain: "手に持っている近くのものは This（これは）を使うよ。"
    },
    {
      type: "choice",
      prompt: "（遠くに見える建物について）（　）に入る語を選ぼう。",
      ja: "あれは図書館です。",
      sentence: "(　　) is a [library|図書館].",
      choices: ["This", "That", "I", "You"],
      answer: 1,
      explain: "遠くのものは That（あれは）を使うよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "こちらはわたしの兄です。",
      sentence: "This (　　) my [brother|兄・弟].",
      choices: ["am", "are", "is", "be"],
      answer: 2,
      explain: "this / that のときの be動詞は is。am は I、are は you のときだったね。"
    },
    {
      type: "order",
      prompt: "日本語に合うように並べよう。",
      ja: "こちらはわたしの母です。",
      words: ["This", "is", "my", "mother"],
      end: ".",
      explain: "This（こちらは）→ is（です）→ my mother（わたしの母）の順だよ。"
    },
    {
      type: "listen",
      prompt: "音声を聞いて、意味に合うものを選ぼう。",
      audio: "That is a big tree.",
      choices: ["あれは大きな木です。", "これは大きな木です。", "あれは小さな木です。", "これは小さな家です。"],
      answer: 0,
      explain: "That は「あれは」、big は「大きい」、tree は「木」だよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "これはあなたのかばんですか。― はい、そうです。",
      sentence: "Is this your bag? ― Yes, (　　) is.",
      choices: ["it", "this", "that", "I"],
      answer: 0,
      explain: "this / that で聞かれたら、答えるときは it を使うよ。Yes, it is. で「はい、そうです」。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "これはわたしの自転車ではありません。",
      sentence: "This (　　) my bike.",
      choices: ["is not", "not is", "don't", "am not"],
      answer: 0,
      explain: "「〜ではありません」は is のあとに not。This is not 〜. の順番だよ。"
    },
    {
      type: "order",
      prompt: "日本語に合うように並べよう。",
      ja: "あれはあなたの家ですか。",
      words: ["Is", "that", "your", "house"],
      end: "?",
      explain: "質問の文は Is を最初に出すよ。Is → that → your house の順。"
    },
    {
      type: "read",
      prompt: "英文を読んで、質問に答えよう。",
      passage: "Look at this [picture|写真].\nThis is my [father|父].\nThis is my dog, [Pochi|ポチ（名前）].\nThat is our [house|家].",
      question: "写真にうつって「いない」ものはどれ？",
      choices: ["お母さん", "お父さん", "犬", "家"],
      answer: 0,
      explain: "写真にうつっているのは father（お父さん）、dog（犬のポチ）、house（家）。mother（お母さん）は出てこないね。"
    },
    {
      type: "speak",
      prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "This is my friend, Ken. That is my school.",
      ja: "こちらはわたしの友だちのケンです。あれはわたしの学校です。"
    }
  ]
};
