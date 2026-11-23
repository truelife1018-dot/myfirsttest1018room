window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-3-1"] = {
  lesson: [
    {
      say: "「〜できる」は、動詞の前に can を置くよ。",
      body: "can のあとの動詞は、いつでも「もとの形」のまま。\n主語が he / she でも、can や動詞に s はつけないよ。\n✕ He cans swim.　✕ He can swims.　◯ He can swim.",
      examples: [
        { en: "I can swim.", ja: "わたしは泳ぐことができます。" },
        { en: "She can play the piano.", ja: "彼女はピアノをひくことができます。" }
      ]
    },
    {
      say: "「〜できない」は can't（cannot）を使うよ。",
      body: "can't も、あとの動詞はもとの形のまま。\ncannot は can と not をくっつけて1語で書くよ。",
      examples: [
        { en: "I can't cook.", ja: "わたしは料理ができません。" },
        { en: "He can't ride a bike.", ja: "彼は自転車に乗れません。" }
      ]
    },
    {
      say: "「〜できますか？」は、Can を文のはじめに出すよ。",
      body: "答えるときも can を使うよ：Yes, I can. ／ No, I can't.\nCan you 〜? は「〜してくれますか？」とお願いするときにも使えるよ。",
      examples: [
        { en: "Can you ski?", ja: "あなたはスキーができますか。" },
        { en: "Yes, I can.", ja: "はい、できます。" },
        { en: "Can you help me?", ja: "手伝ってくれますか。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは速く走ることができます。",
      sentence: "I (　　) run fast.",
      choices: ["can", "am", "do", "is"], answer: 0,
      explain: "「〜できる」は can。動詞 run の前に置くよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼はギターをひくことができます。",
      sentence: "He can (　　) the guitar.",
      choices: ["play", "plays", "playing", "to play"], answer: 0,
      explain: "can のあとは動詞のもとの形。主語が He でも plays にはしないよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたは泳げますか。― いいえ、泳げません。",
      sentence: "Can you swim? ― No, I (　　).",
      choices: ["can't", "don't", "am not", "can"], answer: 0,
      explain: "Can で聞かれたら can で答えるよ。「いいえ」なら No, I can't."
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしは英語を話すことができます。",
      words: ["I", "can", "speak", "English"], end: ".",
      explain: "I（わたしは）→ can speak（話すことができる）→ English（英語を）の順だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I can't swim.",
      choices: ["わたしは泳げません。", "わたしは泳げます。", "あなたは泳げません。", "わたしは走れません。"], answer: 0,
      explain: "can't は「〜できない」。can と can't は最後の「ト」の音で聞き分けよう。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたは料理ができますか。― はい、できます。",
      sentence: "(　　) you cook? ― Yes, I can.",
      choices: ["Can", "Do", "Are", "Is"], answer: 0,
      explain: "答えが Yes, I can. なので、質問も Can で始めるよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "Can you play the piano?",
      choices: ["Yes, I can.", "Yes, I do.", "Yes, I am.", "No, I don't."], answer: 0,
      explain: "「ピアノをひけますか？」と Can で聞かれたら、Yes, I can. か No, I can't. で答えるよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "彼女は日本語を読むことができません。",
      words: ["She", "can't", "read", "Japanese"], end: ".",
      explain: "She（彼女は）→ can't read（読めない）→ Japanese（日本語を）の順。can't のあとの read に s はつけないよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "This is my friend, [Lucy|ルーシー（名前）].\nShe is from [Australia|オーストラリア].\nShe can swim very well.\nBut she can't [ski|スキーをする].",
      question: "ルーシーについて正しいものはどれ？",
      choices: ["泳ぐのがとても上手で、スキーはできない", "泳げないが、スキーは上手", "泳ぎもスキーも得意", "日本の出身"], answer: 0,
      explain: "She can swim very well.（とても上手に泳げる）、she can't ski（スキーはできない）と書いてあるね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I can play soccer. Can you play soccer?",
      ja: "わたしはサッカーができます。あなたはサッカーができますか。"
    }
  ]
};
