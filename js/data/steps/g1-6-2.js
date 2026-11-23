window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-6-2"] = {
  lesson: [
    {
      say: "「〜があります」「〜がいます」は There is / There are だよ。",
      body: "・1つ（1人）のとき：There is 〜.\n・2つ以上のとき：There are 〜.\n\n「どこに」は文の最後に置くよ。There は「そこに」と訳さなくてOK。",
      examples: [
        { en: "There is a cat under the table.", ja: "テーブルの下にねこがいます。" },
        { en: "There are two books on the desk.", ja: "机の上に本が2冊あります。" }
      ]
    },
    {
      say: "場所を表すことばをいっしょに覚えよう。",
      body: "・on：〜の上に（くっついている）\n・in：〜の中に\n・under：〜の下に\n・near：〜の近くに\n・by：〜のそばに",
      examples: [
        { en: "There is a park near my house.", ja: "わたしの家の近くに公園があります。" },
        { en: "There are many fish in the river.", ja: "川にはたくさんの魚がいます。" }
      ]
    },
    {
      say: "否定文と疑問文は、be動詞のルールと同じだよ。",
      body: "・否定：There isn't 〜. ／ There aren't 〜.\n・疑問：Is there 〜? → Yes, there is. ／ No, there isn't.\n・数をたずねる：How many 〜 are there?",
      examples: [
        { en: "Is there a hospital near here?", ja: "この近くに病院はありますか。" },
        { en: "Yes, there is.", ja: "はい、あります。" },
        { en: "How many students are there in your class?", ja: "あなたのクラスには生徒が何人いますか。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "机の上に本が1冊あります。",
      sentence: "There (　　) a book on the desk.",
      choices: ["is", "are", "am", "be"], answer: 0,
      explain: "a book（1冊）なので There is だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "公園に子どもが5人います。",
      sentence: "There (　　) five children in the park.",
      choices: ["are", "is", "am", "be"], answer: 0,
      explain: "five children（5人）なので There are だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "いすの下にねこがいます。",
      sentence: "There is a cat (　　) the chair.",
      choices: ["under", "on", "in", "at"], answer: 0,
      explain: "「〜の下に」は under。on は「〜の上に」だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしの家の近くに公園があります。",
      words: ["There", "is", "a", "park", "near", "my", "house"], end: ".",
      explain: "There is a park（公園があります）のあとに、near my house（わたしの家の近くに）を置くよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "There are three pens in my bag.",
      choices: ["かばんの中にペンが3本あります。", "かばんの上にペンが3本あります。", "かばんの中にペンが1本あります。", "机の中にペンが3本あります。"], answer: 0,
      explain: "There are three pens（ペンが3本ある）、in my bag（わたしのかばんの中に）だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "この近くに駅はありますか。― はい、あります。",
      sentence: "Is there a station near here? ― Yes, (　　).",
      choices: ["there is", "it is", "there are", "I am"], answer: 0,
      explain: "Is there 〜? には there を使って Yes, there is. と答えるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたのクラスには生徒が何人いますか。",
      sentence: "How many students (　　) there in your class?",
      choices: ["are", "is", "do", "does"], answer: 0,
      explain: "How many students（何人の生徒）は2人以上なので are there を使うよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "この町には図書館がありません。",
      words: ["There", "isn't", "a", "library", "in", "this", "town"], end: ".",
      explain: "「ありません」は There isn't。そのあとに a library、最後に in this town（この町に）だよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "My room is small.\nThere is a bed [by|〜のそばに] the window.\nThere are many books on my desk.\nThere is a guitar under the bed.",
      question: "ベッドの下にあるものは何？",
      choices: ["ギター", "本", "机", "窓"], answer: 0,
      explain: "There is a guitar under the bed.（ベッドの下にギターがある）と書いてあるね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "There is a big park near my house.",
      ja: "わたしの家の近くに大きな公園があります。"
    }
  ]
};
