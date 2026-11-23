window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-8-2"] = {
  lesson: [
    {
      say: "「（そのとき）〜していました」は、was / were ＋ ing 形で表すよ。",
      body: "これを「過去進行形」というよ。\n現在進行形（am / is / are ＋ ing）の be動詞を、過去形の was / were にかえるだけ！",
      examples: [
        { en: "I was reading a book at nine last night.", ja: "わたしは昨夜9時に本を読んでいました。" },
        { en: "They were playing soccer then.", ja: "彼らはそのときサッカーをしていました。" }
      ]
    },
    {
      say: "現在進行形とくらべてみよう。",
      body: "・I am studying now.（今、勉強しています）\n・I was studying then.（そのとき、勉強していました）\n\nthen（そのとき）、at 〜（〜時に）、last night（昨夜）などといっしょに使うことが多いよ。",
      examples: [
        { en: "I am studying now.", ja: "わたしは今、勉強しています。" },
        { en: "I was studying then.", ja: "わたしはそのとき、勉強していました。" }
      ]
    },
    {
      say: "否定文と疑問文は、was / were のルールと同じだよ。",
      body: "・否定：I wasn't sleeping.\n・疑問：Were you sleeping? → Yes, I was. ／ No, I wasn't.\n・What were you doing at 〜?（〜時に何をしていましたか）",
      examples: [
        { en: "What were you doing at seven? I was eating dinner.", ja: "7時に何をしていましたか。夕食を食べていました。" },
        { en: "Was she sleeping? No, she wasn't.", ja: "彼女は眠っていましたか。いいえ、眠っていませんでした。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "そのとき、わたしは本を読んでいました。",
      sentence: "I (　　) a book then.",
      choices: ["was reading", "am reading", "were reading", "reading"], answer: 0,
      explain: "「そのとき〜していた」は was / were ＋ ing。I なので was reading だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼らはそのとき、テニスをしていました。",
      sentence: "They (　　) tennis then.",
      choices: ["were playing", "was playing", "are playing", "play"], answer: 0,
      explain: "They は2人以上なので were。were playing で「していた」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "8時に何をしていましたか。― テレビを見ていました。",
      sentence: "What were you doing at eight? ― I (　　) TV.",
      choices: ["was watching", "am watching", "watch", "were watching"], answer: 0,
      explain: "過去進行形で聞かれたので、過去進行形で答えるよ。I なので was watching。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしはそのとき、宿題をしていました。",
      words: ["I", "was", "doing", "my", "homework", "then"], end: ".",
      explain: "I was doing（わたしはしていた）→ my homework（宿題を）→ then（そのとき）の順だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "She was sleeping at ten.",
      choices: ["彼女は10時に眠っていました。", "彼女は今、眠っています。", "彼は10時に眠っていました。", "彼女は10時に起きました。"], answer: 0,
      explain: "was sleeping は「眠っていた」、at ten は「10時に」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたはそのとき勉強していましたか。― いいえ、していませんでした。",
      sentence: "Were you studying then? ― No, I (　　).",
      choices: ["wasn't", "weren't", "didn't", "am not"], answer: 0,
      explain: "I で答えるので wasn't。Were で聞かれても、I のときは was を使うよ。"
    },
    {
      type: "choice", prompt: "正しい文はどれ？",
      choices: ["We were running in the park.", "We was running in the park.", "We were run in the park.", "We running in the park."], answer: 0,
      explain: "We なので were、そのあとは ing 形 running。be動詞と ing はセットだよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "What were you doing at seven last night?",
      choices: ["I was having dinner.", "I have dinner.", "Yes, I was.", "It was seven."], answer: 0,
      explain: "「昨夜7時に何をしていたの？」という質問。していたことを was 〜ing で答えるよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "It [rained|雨が降った] yesterday.\nAt four, I was studying in my room.\nMy brother was playing a video game.\nMy mother was cooking dinner.",
      question: "4時に兄弟がしていたことは何？",
      choices: ["ゲームをしていた", "勉強していた", "料理をしていた", "眠っていた"], answer: 0,
      explain: "My brother was playing a video game.（兄弟はゲームをしていた）と書いてあるね。勉強していたのは「わたし」だよ。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "What were you doing then? I was reading a book.",
      ja: "そのとき何をしていましたか。本を読んでいました。"
    }
  ]
};
