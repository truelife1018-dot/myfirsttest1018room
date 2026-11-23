window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-2-1"] = {
  lesson: [
    {
      say: "「〜しなければならない」は must ＋ 動詞のもとの形 だよ。",
      body: "must は can や will のなかま（助動詞）。主語が he / she でも must の形は変わらないよ。\nあとの動詞は、いつでももとの形。",
      examples: [
        { en: "You must do your homework.", ja: "あなたは宿題をしなければなりません。" },
        { en: "I must go now.", ja: "わたしはもう行かなければなりません。" }
      ]
    },
    {
      say: "have to ＋ もとの形 も「〜しなければならない」という意味だよ。",
      body: "have to は主語や時に合わせて形が変わるよ。\n・he / she のとき → has to\n・過去のとき → had to（〜しなければならなかった）",
      examples: [
        { en: "He has to get up early.", ja: "彼は早く起きなければなりません。" },
        { en: "I had to clean my room yesterday.", ja: "わたしは昨日、部屋をそうじしなければなりませんでした。" }
      ]
    },
    {
      say: "ここが大事！否定文にすると、意味が大きくちがうよ。",
      body: "・must not（mustn't）＋ もとの形：〜してはいけない（禁止）\n・don't have to ＋ もとの形：〜しなくてもよい（必要がない）\n\n「〜してはいけない」と「〜しなくてもいい」は、まったくちがう意味だね。",
      examples: [
        { en: "You must not run in the hallway.", ja: "ろうかを走ってはいけません。" },
        { en: "You don't have to come tomorrow.", ja: "あなたは明日来なくてもいいですよ。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたは宿題をしなければなりません。",
      sentence: "You (　　) do your homework.",
      choices: ["must", "can", "will", "may"], answer: 0,
      explain: "「〜しなければならない」は must だよ。can は「できる」、will は「だろう」。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼は毎朝6時に起きなければなりません。",
      sentence: "He (　　) to get up at six every morning.",
      choices: ["has", "have", "is", "must"], answer: 0,
      explain: "主語が He なので have to が has to になるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "ここで写真をとってはいけません。",
      sentence: "You (　　) take pictures here.",
      choices: ["must not", "don't have to", "must", "have to"], answer: 0,
      explain: "「〜してはいけない」は must not。don't have to は「〜しなくてもよい」という意味だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしは今日、部屋をそうじしなければなりません。",
      words: ["I", "have", "to", "clean", "my", "room", "today"], end: ".",
      explain: "I have to clean（そうじしなければならない）→ my room（部屋を）→ today（今日）の順だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "You don't have to bring lunch tomorrow.",
      choices: ["明日はお弁当を持ってこなくてもいいです。", "明日はお弁当を持ってこなければなりません。", "明日はお弁当を持ってきてはいけません。", "今日はお弁当を持ってこなくてもいいです。"], answer: 0,
      explain: "don't have to は「〜しなくてもよい」。「持ってきてはいけない」なら must not bring だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは昨日、母を手伝わなければなりませんでした。",
      sentence: "I (　　) to help my mother yesterday.",
      choices: ["had", "have", "has", "must"], answer: 0,
      explain: "yesterday（昨日）の話なので、have to の過去形 had to を使うよ。must には過去形がないんだ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "制服を着なければなりませんか。― いいえ、着なくてもいいですよ。",
      sentence: "Do I have to wear a [uniform|制服]? ― No, you (　　).",
      choices: ["don't have to", "must not", "have to", "aren't"], answer: 0,
      explain: "「着なくてもいい」は don't have to。must not にすると「着てはいけない」になってしまうよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "図書館で話してはいけません。",
      words: ["You", "must", "not", "talk", "in", "the", "library"], end: ".",
      explain: "「〜してはいけない」は must not ＋ もとの形。You must not talk の順だよ。"
    },
    {
      type: "read", prompt: "学校のきまりを読んで、質問に答えよう。",
      passage: "[School Rules|学校のきまり]\n1. You must come to school by 8:20.\n2. You must not use your phone in class.\n3. You don't have to wear a uniform on Fridays.",
      question: "このきまりについて正しいものはどれ？",
      choices: ["金曜日は制服を着なくてもよい", "授業中にスマートフォンを使ってもよい", "8時50分までに登校すればよい", "金曜日は制服を着なければならない"], answer: 0,
      explain: "3番に You don't have to wear a uniform on Fridays.（金曜日は制服を着なくてもよい）と書いてあるね。by 8:20 は「8時20分までに」だよ。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I have to go now. See you tomorrow.",
      ja: "もう行かなくちゃ。また明日ね。"
    }
  ]
};
