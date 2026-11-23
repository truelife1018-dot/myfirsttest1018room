window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-4-3"] = {
  lesson: [
    {
      say: "名詞のすぐあとに to ＋ もとの形 を置くと「〜するための」「〜するべき」という意味になるよ。",
      body: "前の名詞を、後ろから説明する使い方だよ。\nhomework（宿題）← to do（するべき）＝ するべき宿題",
      examples: [
        { en: "I have a lot of homework to do.", ja: "わたしにはするべき宿題がたくさんあります。" },
        { en: "I want something to drink.", ja: "何か飲むものがほしいです。" }
      ]
    },
    {
      say: "よく使う形をまとめて覚えよう。",
      body: "・something to 〜：何か〜するもの（something to eat 何か食べるもの）\n・time to 〜：〜する時間\n・places to 〜：〜する場所\n・nothing to 〜 ／ no time to 〜：〜するものがない ／ 〜する時間がない",
      examples: [
        { en: "It's time to go to bed.", ja: "もう寝る時間ですよ。" },
        { en: "There are many places to visit in Kyoto.", ja: "京都には訪れる場所がたくさんあります。" }
      ]
    },
    {
      say: "不定詞の3つの意味をくらべてみよう。",
      body: "・I want to play.（遊ぶこと → 遊びたい）：want などの動詞のあと\n・I went out to play.（遊ぶために）：何のためにしたか\n・I have no time to play.（遊ぶための時間）：名詞のすぐあと\n\nto の前を見ると、どの意味か見分けやすいよ。",
      examples: [
        { en: "I have no time to play.", ja: "わたしには遊ぶ時間がありません。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしにはするべき宿題がたくさんあります。",
      sentence: "I have a lot of homework (　　).",
      choices: ["to do", "do", "does", "did"], answer: 0,
      explain: "homework（宿題）のあとに to do（するべき）を置いて、「するべき宿題」になるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "何か飲むものがほしいです。",
      sentence: "I want something (　　) drink.",
      choices: ["to", "for", "at", "and"], answer: 0,
      explain: "something to drink で「何か飲むもの」。something のあとに to ＋ もとの形を置くよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "もう寝る時間ですよ。",
      sentence: "It's time (　　) to bed.",
      choices: ["to go", "go", "going", "goes"], answer: 0,
      explain: "time to 〜 で「〜する時間」。go to bed は「寝る」だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "京都には訪れる場所がたくさんあります。",
      words: ["There", "are", "many", "places", "to", "visit", "in", "Kyoto"], end: ".",
      explain: "There are many places（たくさんの場所がある）のすぐあとに to visit（訪れるための）、最後に in Kyoto だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I have no time to watch TV.",
      choices: ["テレビを見る時間がありません。", "テレビを見るのが好きではありません。", "テレビを見るために時間をつくります。", "テレビを見る時間がたくさんあります。"], answer: 0,
      explain: "no time to watch TV は「テレビを見る時間がない」だよ。"
    },
    {
      type: "choice", prompt: "「読むための本（読む本）」を正しく表しているのはどれ？",
      choices: ["a book to read", "a read book to", "a to read book", "to read a book"], answer: 0,
      explain: "名詞 a book のすぐあとに to read を置くよ。to read a book だと「本を読むこと」になってしまうよ。"
    },
    {
      type: "choice", prompt: "I have no time to play. の to play と同じ使い方（〜するための）をしているのはどれ？",
      choices: ["I have no money to buy it.", "I want to buy it.", "I went out to buy it.", "I like to buy it."], answer: 0,
      explain: "money（お金）のすぐあとに to buy があって「それを買うためのお金」。ほかは「買いたい」「買うために」「買うのが好き」の意味だよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "Do you have anything to eat?",
      choices: ["Yes, I have some cookies.", "Yes, I'm eating.", "No, I didn't eat.", "Yes, you do."], answer: 0,
      explain: "anything to eat は「何か食べるもの」。「何か食べるものある？」に「クッキーがあるよ」と答えているね。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "I'm going to visit Tokyo next month.\nTokyo has a lot of places to visit.\nI want to see Tokyo Tower.\nI also want to buy something to give my family.",
      question: "この人がしたいこととして書かれているのはどれ？",
      choices: ["東京タワーを見て、家族におみやげを買う", "東京に引っこす", "家族といっしょに東京へ行く", "先月行った東京の写真を見せる"], answer: 0,
      explain: "I want to see Tokyo Tower.（東京タワーを見たい）、something to give my family（家族にあげるもの）を買いたいと書いてあるね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I'm hungry. I want something to eat.",
      ja: "おなかがすいたな。何か食べるものがほしいです。"
    }
  ]
};
