window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-4-2"] = {
  lesson: [
    {
      say: "to ＋ 動詞のもとの形 には「〜するために」という意味もあるよ。",
      body: "何のためにするのか（目的）を表すよ。文の後ろのほうに置くことが多いんだ。\nI went to the library.（図書館へ行った）＋ to study（勉強するために）",
      examples: [
        { en: "I went to the library to study.", ja: "わたしは勉強するために図書館へ行きました。" },
        { en: "She got up early to make breakfast.", ja: "彼女は朝食を作るために早く起きました。" }
      ]
    },
    {
      say: "Why 〜?（なぜ？）と聞かれたら、To 〜.（〜するためです）で答えられるよ。",
      body: "Because 〜. で答えることもできるけど、目的を答えるときは To 〜. が短くて便利だよ。",
      examples: [
        { en: "Why did you go to the station?", ja: "なぜ駅へ行ったのですか。" },
        { en: "To meet my friend.", ja: "友だちに会うためです。" }
      ]
    },
    {
      say: "気持ちを表すことば ＋ to 〜 で「〜して（うれしい）」と、気持ちの理由を言えるよ。",
      body: "・glad to 〜 ／ happy to 〜：〜してうれしい\n・sad to 〜：〜して悲しい\n・surprised to 〜：〜しておどろく",
      examples: [
        { en: "I'm glad to see you.", ja: "あなたに会えてうれしいです。" },
        { en: "I was surprised to hear the news.", ja: "わたしはその知らせを聞いておどろきました。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは本を買うために書店へ行きました。",
      sentence: "I went to the [bookstore|書店] (　　) buy a book.",
      choices: ["to", "for", "and", "at"], answer: 0,
      explain: "「〜するために」は to ＋ もとの形。to buy で「買うために」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼はサッカーをするために公園へ行きました。",
      sentence: "He went to the park to (　　) soccer.",
      choices: ["play", "played", "plays", "playing"], answer: 0,
      explain: "過去の文でも、to のあとはもとの形 play だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたに会えてうれしいです。",
      sentence: "I'm glad (　　) you.",
      choices: ["to see", "see", "seeing", "saw"], answer: 0,
      explain: "glad to 〜 で「〜してうれしい」。to see you で「あなたに会えて」だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしは写真をとるために京都を訪れました。",
      words: ["I", "visited", "Kyoto", "to", "take", "pictures"], end: ".",
      explain: "I visited Kyoto（京都を訪れた）のあとに、to take pictures（写真をとるために）を続けるよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I got up early to watch the game.",
      choices: ["試合を見るために早起きしました。", "早起きして試合に出ました。", "試合を見たので、早起きできませんでした。", "早起きして散歩をしました。"], answer: 0,
      explain: "to watch the game は「試合を見るために」。早起きした目的を表しているよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "なぜ駅へ行ったのですか。― 友だちに会うためです。",
      sentence: "Why did you go to the station? ― (　　) meet my friend.",
      choices: ["To", "For", "Because", "At"], answer: 0,
      explain: "目的を答えるときは To ＋ もとの形。To meet my friend.（友だちに会うため）だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしはその知らせを聞いておどろきました。",
      sentence: "I was surprised to (　　) the news.",
      choices: ["hear", "heard", "hearing", "hears"], answer: 0,
      explain: "surprised to 〜 で「〜しておどろく」。to のあとはもとの形 hear だよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する答えとして、いちばん合うものを選ぼう。", audio: "Why do you study English?",
      choices: ["To talk with people around the world.", "Yes, I do.", "I study English every day.", "It's English."], answer: 0,
      explain: "「なぜ英語を勉強するの？」という質問。To 〜（〜するため）で目的を答えているものが合うね。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "Last Sunday, I went to the city library to [borrow|借りる] some books.\nThere I met my friend Aya.\nI was happy to see her.\nWe studied together for two hours.",
      question: "この人が図書館へ行った目的は何？",
      choices: ["本を借りるため", "アヤに会うため", "勉強するため", "本を返すため"], answer: 0,
      explain: "I went to the city library to borrow some books.（本を借りるために図書館へ行った）と書いてあるね。アヤとは図書館で偶然会ったんだよ。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I went to the park to play tennis. I was happy to see my friends.",
      ja: "わたしはテニスをするために公園へ行きました。友だちに会えてうれしかったです。"
    }
  ]
};
