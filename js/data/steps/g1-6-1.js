window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-6-1"] = {
  lesson: [
    {
      say: "2つ以上のものを言うときは、名詞の最後に s をつけるよ。",
      body: "a book（1冊の本）→ two books（2冊の本）\nこれを「複数形」というよ。1つのときは a / an、2つ以上のときは数字や many（たくさんの）をつけるよ。",
      examples: [
        { en: "I have two dogs.", ja: "わたしは犬を2ひき飼っています。" },
        { en: "I want three apples.", ja: "わたしはりんごが3つほしいです。" }
      ]
    },
    {
      say: "s のつけ方には、いくつかパターンがあるよ。",
      body: "・ふつうは s：book → books\n・es をつける：box → boxes、bus → buses\n・y を i にかえて es：city → cities\n・形が変わる：child → children（子ども）、man → men（男の人）",
      examples: [
        { en: "I have three boxes.", ja: "わたしは箱を3つ持っています。" },
        { en: "She has two children.", ja: "彼女には子どもが2人います。" }
      ]
    },
    {
      say: "「いくつ？」と数をたずねるときは How many を使うよ。",
      body: "How many のあとには、名詞の複数形を続けるよ。\nHow many pens do you have?（ペンを何本持っていますか）\n答えるときは数を言うよ。",
      examples: [
        { en: "How many pens do you have?", ja: "あなたはペンを何本持っていますか。" },
        { en: "I have five pens.", ja: "5本持っています。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしはねこを2ひき飼っています。",
      sentence: "I have two (　　).",
      choices: ["cats", "cat", "a cat", "cates"], answer: 0,
      explain: "two（2つ）がついているので、複数形 cats にするよ。"
    },
    {
      type: "choice", prompt: "box（箱）の複数形はどれ？",
      choices: ["boxes", "boxs", "boxies", "box"], answer: 0,
      explain: "x で終わる語は es をつけるよ。boxes。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたはペンを何本持っていますか。",
      sentence: "How (　　) pens do you have?",
      choices: ["many", "much", "old", "long"], answer: 0,
      explain: "数をたずねるときは How many。How old は年れい、How long は長さだよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "あなたはノートを何冊持っていますか。",
      words: ["How", "many", "notebooks", "do", "you", "have"], end: "?",
      explain: "How many notebooks（何冊のノート）を最初に。そのあとは do you have の順だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I have three brothers.",
      choices: ["わたしには兄弟が3人います。", "わたしには兄弟が2人います。", "わたしには姉妹が3人います。", "わたしには兄弟が13人います。"], answer: 0,
      explain: "three は「3」。13 は thirteen だよ。brothers は「兄弟」の複数形。"
    },
    {
      type: "choice", prompt: "「子ども2人」を正しく表しているのはどれ？",
      choices: ["two children", "two childs", "two childrens", "two child"], answer: 0,
      explain: "child（子ども）の複数形は children。s をつけない特別な形だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼女は犬を何びき飼っていますか。― 2ひき飼っています。",
      sentence: "How many dogs does she have? ― She has (　　).",
      choices: ["two dogs", "two dog", "a dogs", "dogs two"], answer: 0,
      explain: "2ひきなので two dogs。数字は名詞の前に置くよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "How many apples do you want?",
      choices: ["Four, please.", "Yes, please.", "It's an apple.", "I like apples."], answer: 0,
      explain: "「りんごをいくつほしいですか？」という質問。数で答えるよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "I have a lot of [pets|ペット].\nI have two dogs and three cats.\nI also have a [rabbit|うさぎ].\nMy [favorite|大好きな] pet is the rabbit.",
      question: "この人のペットは、全部で何びき？",
      choices: ["6ぴき", "5ひき", "3びき", "2ひき"], answer: 0,
      explain: "犬2ひき＋ねこ3びき＋うさぎ1ぴき＝6ぴきだね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "How many books do you have? I have ten books.",
      ja: "あなたは本を何冊持っていますか。10冊持っています。"
    }
  ]
};
