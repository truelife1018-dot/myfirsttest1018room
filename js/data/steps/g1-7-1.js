window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-7-1"] = {
  lesson: [
    {
      say: "「〜しました」と過去のことを言うときは、動詞の最後に ed をつけるよ。",
      body: "play → played、watch → watched\nこれを「過去形」というよ。\n過去形は、主語が I でも he でも同じ形。3単現の s のことは考えなくていいよ。",
      examples: [
        { en: "I played tennis yesterday.", ja: "わたしは昨日テニスをしました。" },
        { en: "She watched TV last night.", ja: "彼女は昨夜テレビを見ました。" }
      ]
    },
    {
      say: "ed のつけ方を覚えよう。",
      body: "・ふつうは ed：play → played、clean → cleaned\n・e で終わる語は d だけ：like → liked、use → used\n・「子音字＋y」は y を i にかえて ed：study → studied、try → tried\n・短い語は最後の文字を重ねて ed：stop → stopped",
      examples: [
        { en: "I studied English last night.", ja: "わたしは昨夜英語を勉強しました。" },
        { en: "We lived in Osaka.", ja: "わたしたちは大阪に住んでいました。" }
      ]
    },
    {
      say: "過去を表すことばもいっしょに覚えよう。",
      body: "・yesterday：昨日\n・last 〜：この前の〜（last Sunday 先週の日曜日、last week 先週、last year 去年）\n・〜 ago：〜前（two days ago 2日前）",
      examples: [
        { en: "I visited Kyoto last year.", ja: "わたしは去年京都を訪れました。" },
        { en: "He cleaned his room two days ago.", ja: "彼は2日前に部屋をそうじしました。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは昨日サッカーをしました。",
      sentence: "I (　　) soccer yesterday.",
      choices: ["played", "play", "plays", "playing"], answer: 0,
      explain: "yesterday（昨日）のことなので過去形 played だよ。"
    },
    {
      type: "choice", prompt: "study（勉強する）の過去形はどれ？",
      choices: ["studied", "studyed", "studed", "studies"], answer: 0,
      explain: "「子音字＋y」で終わる語は、y を i にかえて ed。studied だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼は昨夜テレビを見ました。",
      sentence: "He (　　) TV last night.",
      choices: ["watched", "watches", "watch", "watching"], answer: 0,
      explain: "last night（昨夜）なので過去形。He が主語でも、過去形は watched のままだよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしは先週おばを訪ねました。",
      words: ["I", "visited", "my", "aunt", "last", "week"], end: ".",
      explain: "I visited（わたしは訪ねた）→ my aunt（おばを）→ last week（先週）の順だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I cleaned my room yesterday.",
      choices: ["昨日、部屋をそうじしました。", "毎日、部屋をそうじします。", "昨日、部屋で勉強しました。", "今、部屋をそうじしています。"], answer: 0,
      explain: "cleaned は clean（そうじする）の過去形。yesterday は「昨日」だよ。"
    },
    {
      type: "choice", prompt: "「2日前に」を正しく表しているのはどれ？",
      choices: ["two days ago", "ago two days", "two days last", "two ago days"], answer: 0,
      explain: "「〜前に」は、時間のあとに ago を置くよ。two days ago。"
    },
    {
      type: "choice", prompt: "like（好き）の過去形はどれ？",
      choices: ["liked", "likeed", "likd", "liking"], answer: 0,
      explain: "e で終わる語は d だけをつけるよ。liked。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "We enjoyed the party last Saturday.",
      choices: ["先週の土曜日、パーティーを楽しみました。", "次の土曜日、パーティーを楽しみます。", "先週の日曜日、パーティーを楽しみました。", "毎週土曜日、パーティーを楽しみます。"], answer: 0,
      explain: "enjoyed は enjoy（楽しむ）の過去形。last Saturday は「先週の土曜日」だよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "Last Sunday, I [helped|手伝った] my mother.\nI cleaned the [kitchen|台所].\nThen I cooked lunch with her.\nWe enjoyed it very much.",
      question: "この人が先週の日曜日にしたことは？",
      choices: ["台所をそうじして、母と昼食を作った", "自分の部屋をそうじして、昼食を食べに行った", "母と買い物に行った", "父の手伝いをした"], answer: 0,
      explain: "I cleaned the kitchen.（台所をそうじした）、I cooked lunch with her.（母と昼食を作った）と書いてあるね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I played tennis yesterday. I enjoyed it.",
      ja: "わたしは昨日テニスをしました。楽しかったです。"
    }
  ]
};
