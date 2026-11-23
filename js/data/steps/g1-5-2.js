window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-5-2"] = {
  lesson: [
    {
      say: "「〜しなさい」と言うときは、主語を言わずに動詞から始めるよ。",
      body: "これを「命令文」というよ。動詞はもとの形。\nPlease をつけると「〜してください」と、ていねいになるよ。Please は文のはじめでも最後でもOK。",
      examples: [
        { en: "Open the window.", ja: "窓を開けなさい。" },
        { en: "Sit down, please.", ja: "すわってください。" }
      ]
    },
    {
      say: "am / is / are の文の命令文は Be で始めるよ。",
      body: "You are quiet.（あなたは静かです）→ Be quiet.（静かにしなさい）\nam / is / are のもとの形が be なんだ。",
      examples: [
        { en: "Be quiet.", ja: "静かにしなさい。" },
        { en: "Be careful.", ja: "気をつけて。" }
      ]
    },
    {
      say: "「〜してはいけない」は Don't、「〜しよう」は Let's で始めるよ。",
      body: "・Don't ＋ 動詞 〜.：〜してはいけません\n・Let's ＋ 動詞 〜.：〜しましょう\n\nLet's 〜. にさんせいするときは Yes, let's. や Sure.（いいよ）と答えるよ。",
      examples: [
        { en: "Don't run here.", ja: "ここで走ってはいけません。" },
        { en: "Let's play soccer. Yes, let's.", ja: "サッカーをしよう。うん、そうしよう。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "窓を開けなさい。",
      sentence: "(　　) the window.",
      choices: ["Open", "Opens", "You open", "Opening"], answer: 0,
      explain: "命令文は、動詞のもとの形で始めるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "ここで泳いではいけません。",
      sentence: "(　　) swim here.",
      choices: ["Don't", "Not", "No", "Doesn't"], answer: 0,
      explain: "「〜してはいけない」は Don't で始めるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "いっしょに歌いましょう。",
      sentence: "(　　) sing [together|いっしょに].",
      choices: ["Let's", "Let", "Please", "Don't"], answer: 0,
      explain: "「〜しましょう」とさそうときは Let's だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "静かにしてください。",
      words: ["Please", "be", "quiet"], end: ".",
      explain: "quiet（静かな）は動詞ではないので、be をつけて Be quiet。Please を前につけるとていねいになるよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "Don't eat in the library.",
      choices: ["図書館で食べてはいけません。", "図書館で食べましょう。", "図書館で食べなさい。", "図書館で本を読みましょう。"], answer: 0,
      explain: "Don't 〜 は「〜してはいけない」。library は「図書館」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "気をつけて！",
      sentence: "(　　) careful!",
      choices: ["Be", "Are", "Is", "Do"], answer: 0,
      explain: "careful（気をつける）は動詞ではないので、命令文は Be で始めるよ。"
    },
    {
      type: "choice", prompt: "Let's play tennis.（テニスをしよう）に「うん、そうしよう」と答える文はどれ？",
      choices: ["Yes, let's.", "Yes, I do.", "Yes, I am.", "Yes, it is."], answer: 0,
      explain: "Let's 〜. にさんせいするときは Yes, let's. だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "この部屋で走ってはいけません。",
      words: ["Don't", "run", "in", "this", "room"], end: ".",
      explain: "Don't run（走ってはいけない）を最初に。in this room（この部屋で）は最後だよ。"
    },
    {
      type: "read", prompt: "プールのきまりを読んで、質問に答えよう。",
      passage: "[Pool Rules|プールのきまり]\n1. Don't run.\n2. Don't eat here.\n3. Be careful in the water.",
      question: "このきまりに書かれて「いない」ものはどれ？",
      choices: ["泳ぐ前に体操をする", "走らない", "ここで食べない", "水の中では気をつける"], answer: 0,
      explain: "書かれているのは「走らない」「ここで食べない」「水の中では気をつける」の3つ。体操のことは書かれていないね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "Let's play soccer. Yes, let's!",
      ja: "サッカーをしよう。うん、そうしよう！"
    }
  ]
};
