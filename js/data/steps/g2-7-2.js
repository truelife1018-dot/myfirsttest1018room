window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-7-2"] = {
  lesson: [
    {
      say: "受け身の否定文は、be動詞のあとに not を置くよ。",
      body: "be動詞 ＋ not ＋ 過去分詞：〜されない、〜されていない\nis not → isn't、was not → wasn't と短くもできるよ。",
      examples: [
        { en: "This room is not used now.", ja: "この部屋は今は使われていません。" },
        { en: "The letter wasn't written in English.", ja: "その手紙は英語で書かれていませんでした。" }
      ]
    },
    {
      say: "受け身の疑問文は、be動詞を文のはじめに出すよ。",
      body: "Is this room used? → Yes, it is. ／ No, it isn't.\nWas this made by 〜? → Yes, it was. ／ No, it wasn't.\n\ndo / does / did は使わないよ。✕ Does this room used?",
      examples: [
        { en: "Is English spoken in Australia? Yes, it is.", ja: "オーストラリアでは英語が話されていますか。はい、話されています。" },
        { en: "Was this cake made by your sister?", ja: "このケーキはあなたのお姉さんが作ったのですか。" }
      ]
    },
    {
      say: "疑問詞を使ったたずね方も覚えよう。",
      body: "疑問詞（When / Where / What など）を最初に置いて、そのあとは受け身の疑問文の形だよ。\n・When was this temple built?（この寺はいつ建てられましたか）\n・What language is spoken in Brazil?（ブラジルでは何語が話されていますか）",
      examples: [
        { en: "When was this temple built?", ja: "この寺はいつ建てられましたか。" },
        { en: "It was built about 400 years ago.", ja: "約400年前に建てられました。" },
        { en: "What language is spoken in Brazil?", ja: "ブラジルでは何語が話されていますか。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "この部屋は今は使われていません。",
      sentence: "This room (　　) used now.",
      choices: ["is not", "does not", "not", "are not"], answer: 0,
      explain: "受け身の否定文は be動詞 ＋ not。This room なので is not だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "この本はあなたのお兄さんによって書かれたのですか。",
      sentence: "(　　) this book written by your brother?",
      choices: ["Was", "Did", "Does", "Were"], answer: 0,
      explain: "受け身の疑問文は be動詞を前に出すよ。過去で this book なので Was。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "オーストラリアでは英語が話されていますか。― はい、話されています。",
      sentence: "Is English spoken in Australia? ― Yes, it (　　).",
      choices: ["is", "does", "was", "speaks"], answer: 0,
      explain: "Is で聞かれたら is で答えるよ。Yes, it is."
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "その手紙は英語で書かれていませんでした。",
      words: ["The", "letter", "wasn't", "written", "in", "English"], end: ".",
      explain: "The letter wasn't written（その手紙は書かれていなかった）→ in English（英語で）の順だよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "Was this cake made by your mother?",
      choices: ["Yes, it was.", "Yes, she did.", "Yes, it is made.", "No, she wasn't."], answer: 0,
      explain: "「このケーキはお母さんが作ったの？」と Was で聞かれたので、this cake を it で受けて Yes, it was. と答えるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "この寺はいつ建てられましたか。",
      sentence: "When (　　) this temple built?",
      choices: ["was", "did", "does", "were"], answer: 0,
      explain: "When のあとは受け身の疑問文の形。過去で this temple なので was だよ。"
    },
    {
      type: "choice", prompt: "「これらの車は日本で作られていますか」を正しく表している文はどれ？",
      choices: ["Are these cars made in Japan?", "Do these cars made in Japan?", "Are these cars make in Japan?", "Are made these cars in Japan?"], answer: 0,
      explain: "be動詞（Are）を前に出し、そのあとは these cars ＋ made（過去分詞）の順。do は使わないよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "What language is spoken in Brazil?",
      choices: ["Portuguese is.", "Yes, it is.", "Brazil is spoken.", "I speak Japanese."], answer: 0,
      explain: "「ブラジルでは何語が話されていますか」という質問。What で聞かれたので、ことばの名前を答えるよ。Portuguese は「ポルトガル語」。"
    },
    {
      type: "read", prompt: "会話を読んで、質問に答えよう。",
      passage: "Ann: Was this picture [painted|（絵の具で）かかれた] by you?\nTaku: No, it wasn't. It was painted by my grandfather.\nAnn: When was it painted?\nTaku: About 30 years ago.",
      question: "この絵について正しいものはどれ？",
      choices: ["タクのおじいさんが約30年前にかいた", "タクが約30年前にかいた", "タクのおじいさんが3年前にかいた", "アンがかいた"], answer: 0,
      explain: "It was painted by my grandfather.（祖父によってかかれた）、About 30 years ago.（約30年前）と答えているね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "When was this temple built? It was built about 400 years ago.",
      ja: "この寺はいつ建てられましたか。約400年前に建てられました。"
    }
  ]
};
