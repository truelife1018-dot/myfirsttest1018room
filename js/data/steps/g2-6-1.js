window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-6-1"] = {
  lesson: [
    {
      say: "2つをくらべて「…より〜だ」と言うときは、〜er ＋ than を使うよ。",
      body: "tall（背が高い）→ taller than 〜（〜より背が高い）\nこの er の形を「比較級」というよ。",
      examples: [
        { en: "Ken is taller than Taku.", ja: "ケンはタクより背が高いです。" },
        { en: "This bag is bigger than that one.", ja: "このかばんはあのかばんより大きいです。" }
      ]
    },
    {
      say: "3つ以上の中で「いちばん〜だ」と言うときは、the 〜est を使うよ。",
      body: "tall → the tallest（いちばん背が高い）\nこの est の形を「最上級」というよ。\n\n「〜の中で」は2つの言い方があるよ。\n・in ＋ 場所やグループ：in Japan、in my class\n・of ＋ 数や all：of the five（5人の中で）、of all（すべての中で）",
      examples: [
        { en: "Mt. Fuji is the highest mountain in Japan.", ja: "富士山は日本でいちばん高い山です。" },
        { en: "He runs the fastest of the five.", ja: "彼は5人の中でいちばん速く走ります。" }
      ]
    },
    {
      say: "er / est のつけ方と、形が変わる語を覚えよう。",
      body: "・ふつう：tall → taller → tallest\n・e で終わる：large → larger → largest\n・y を i にかえる：easy → easier → easiest\n・最後の文字を重ねる：big → bigger → biggest、hot → hotter → hottest\n・形が変わる：good ／ well → better → best",
      examples: [
        { en: "This question is easier than that one.", ja: "この問題はあの問題より簡単です。" },
        { en: "I like summer the best.", ja: "わたしは夏がいちばん好きです。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "ケンはタクより背が高いです。",
      sentence: "Ken is (　　) than Taku.",
      choices: ["taller", "tall", "tallest", "more tall"], answer: 0,
      explain: "than（〜より）があるので比較級 taller だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "富士山は日本でいちばん高い山です。",
      sentence: "Mt. Fuji is the (　　) mountain in Japan.",
      choices: ["highest", "higher", "high", "most high"], answer: 0,
      explain: "「いちばん〜」は the ＋ 最上級。high → highest だよ。"
    },
    {
      type: "choice", prompt: "big（大きい）の比較級はどれ？",
      choices: ["bigger", "biger", "more big", "bigest"], answer: 0,
      explain: "big は最後の g を重ねて er をつけるよ。bigger。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "この問題はあの問題より簡単です。",
      words: ["This", "question", "is", "easier", "than", "that", "one"], end: ".",
      explain: "This question is easier（この問題はより簡単だ）→ than that one（あの問題より）の順。one は question のくり返しをさけることばだよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "My brother is older than me.",
      choices: ["兄はわたしより年上です。", "兄はわたしより年下です。", "兄はわたしより背が高いです。", "わたしは兄より年上です。"], answer: 0,
      explain: "older than me は「わたしより年上」。背が高いなら taller だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼は5人の中でいちばん速く走ります。",
      sentence: "He runs the fastest (　　) the five.",
      choices: ["of", "in", "than", "at"], answer: 0,
      explain: "the five（5人）のように数のときは of を使うよ。場所やグループなら in。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは夏がいちばん好きです。",
      sentence: "I like summer the (　　).",
      choices: ["best", "better", "good", "most good"], answer: 0,
      explain: "「いちばん好き」は like 〜 the best。good / well の最上級は best だよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "Who is the tallest in your family?",
      choices: ["My father is.", "Yes, he is.", "My father is tall.", "I'm taller."], answer: 0,
      explain: "「家族でいちばん背が高いのはだれ？」という質問。だれかを答えるので My father is.（父です）が合うよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "There are three rivers in our town: the Aka River, the Ao River, and the Kiiro River.\nThe Aka River is longer than the Ao River.\nThe Kiiro River is the longest of the three.",
      question: "いちばん短い川はどれ？",
      choices: ["Ao River（青川）", "Aka River（赤川）", "Kiiro River（黄川）", "3本とも同じ長さ"], answer: 0,
      explain: "黄川がいちばん長く、赤川は青川より長い。だから、いちばん短いのは青川だね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "Ken is taller than me. He is the tallest in our class.",
      ja: "ケンはわたしより背が高いです。彼はクラスでいちばん背が高いです。"
    }
  ]
};
