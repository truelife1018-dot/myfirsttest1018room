window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-6-3"] = {
  lesson: [
    {
      say: "「今〜しているところです」は、be動詞 ＋ 動詞の ing 形で表すよ。",
      body: "I read a book.（ふだん本を読みます）\nI am reading a book.（今、本を読んでいるところです）\n\nbe動詞（am / is / are）は主語に合わせて選ぶよ。これを「現在進行形」というよ。",
      examples: [
        { en: "I am reading a book.", ja: "わたしは本を読んでいます。" },
        { en: "She is playing tennis now.", ja: "彼女は今テニスをしています。" }
      ]
    },
    {
      say: "ing のつけ方を覚えよう。",
      body: "・ふつうはそのまま ing：play → playing、read → reading\n・e で終わる語は e をとって ing：make → making、write → writing\n・短い語は最後の文字を重ねて ing：run → running、swim → swimming、sit → sitting",
      examples: [
        { en: "He is running in the park.", ja: "彼は公園で走っています。" },
        { en: "My mother is making lunch.", ja: "母は昼食を作っています。" }
      ]
    },
    {
      say: "否定文と疑問文は、be動詞のルールと同じだよ。",
      body: "・否定：I'm not watching TV.\n・疑問：Are you studying? → Yes, I am. ／ No, I'm not.\n・What are you doing?（何をしているの？）→ I'm 〜ing.\n\nlike（好き）や know（知っている）のように、気持ちや状態を表す動詞は、ふつう ing にしないよ。",
      examples: [
        { en: "What are you doing? I'm cooking.", ja: "何をしているの？料理をしているよ。" },
        { en: "Are you studying? Yes, I am.", ja: "勉強しているの？うん、しているよ。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは今、テレビを見ています。",
      sentence: "I (　　) TV now.",
      choices: ["am watching", "watch", "watching", "am watch"], answer: 0,
      explain: "「今〜している」は be動詞＋ing。I なので am watching だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼は今、走っています。",
      sentence: "He is (　　) now.",
      choices: ["running", "runing", "run", "runs"], answer: 0,
      explain: "run は短い語なので、n を重ねて running になるよ。"
    },
    {
      type: "choice", prompt: "write（書く）の ing 形はどれ？",
      choices: ["writing", "writeing", "writting", "wrote"], answer: 0,
      explain: "e で終わる語は、e をとって ing をつけるよ。writing。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "彼女は今、昼食を作っています。",
      words: ["She", "is", "making", "lunch", "now"], end: ".",
      explain: "She is making（彼女は作っている）→ lunch（昼食を）→ now（今）の順だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "They are swimming in the sea.",
      choices: ["彼らは海で泳いでいます。", "彼らは海で走っています。", "彼らはプールで泳いでいます。", "わたしたちは海で泳いでいます。"], answer: 0,
      explain: "They は「彼ら」、swimming は「泳いでいる」、sea は「海」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "何をしているの？― 宿題をしているよ。",
      sentence: "What are you doing? ― I'm (　　) my homework.",
      choices: ["doing", "do", "does", "did"], answer: 0,
      explain: "I'm（I am）のあとなので ing 形の doing。do my homework で「宿題をする」だよ。"
    },
    {
      type: "choice", prompt: "Are you sleeping?（あなたは眠っているの？）に「いいえ」で答える文はどれ？",
      choices: ["No, I'm not.", "No, I don't.", "No, I amn't.", "No, you aren't."], answer: 0,
      explain: "Are で聞かれたら be動詞で答えるよ。No, I'm not.（I am not の短い形）。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "What is Ken doing?",
      choices: ["He is playing the guitar.", "He plays the guitar every day.", "Yes, he is.", "He is Ken."], answer: 0,
      explain: "「ケンは今何をしているの？」という質問。今していることを is 〜ing で答えるよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "It's Sunday.\nMy father is [washing|洗っている] his car.\nMy mother is reading a book.\nMy sister and I are playing a game.",
      question: "お母さんがしていることは何？",
      choices: ["本を読んでいる", "車を洗っている", "ゲームをしている", "料理をしている"], answer: 0,
      explain: "My mother is reading a book.（母は本を読んでいる）と書いてあるね。車を洗っているのはお父さんだよ。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "What are you doing? I'm studying English.",
      ja: "何をしているの？英語を勉強しているよ。"
    }
  ]
};
