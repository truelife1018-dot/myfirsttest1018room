window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-1-1"] = {
  lesson: [
    {
      say: "「〜するつもりです」「〜する予定です」は be going to ＋ 動詞のもとの形 だよ。",
      body: "be は主語に合わせて am / is / are を使うよ。\n前から決めている予定や、するつもりのことを言うときに使うんだ。\nto のあとの動詞は、いつでも「もとの形」。",
      examples: [
        { en: "I am going to visit Kyoto tomorrow.", ja: "わたしは明日、京都を訪れるつもりです。" },
        { en: "She is going to play tennis this afternoon.", ja: "彼女は今日の午後、テニスをする予定です。" }
      ]
    },
    {
      say: "否定文と疑問文は、be動詞のルールと同じだよ。",
      body: "・否定：I'm not going to 〜.\n・疑問：Are you going to 〜? → Yes, I am. ／ No, I'm not.\n・What are you going to do 〜?（〜に何をするつもりですか）",
      examples: [
        { en: "I'm not going to go out today.", ja: "わたしは今日、出かけるつもりはありません。" },
        { en: "What are you going to do this weekend?", ja: "あなたは今週末、何をするつもりですか。" },
        { en: "I'm going to see a movie.", ja: "映画を見るつもりです。" }
      ]
    },
    {
      say: "未来を表すことばもいっしょに覚えよう。",
      body: "・tomorrow：明日\n・next 〜：次の〜（next week 来週、next Sunday 次の日曜日）\n・this weekend：今週末、this afternoon：今日の午後\n・someday：いつか",
      examples: [
        { en: "We are going to have a party next Sunday.", ja: "わたしたちは次の日曜日にパーティーを開く予定です。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは明日、おじを訪ねるつもりです。",
      sentence: "I am (　　) to visit my [uncle|おじ] tomorrow.",
      choices: ["going", "go", "goes", "went"], answer: 0,
      explain: "「〜するつもり」は be going to。am のあとは going だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼は来週、京都へ行く予定です。",
      sentence: "He (　　) going to go to Kyoto next week.",
      choices: ["is", "are", "am", "does"], answer: 0,
      explain: "be going to の be は主語に合わせるよ。He なので is。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼女は今日の午後、テニスをするつもりです。",
      sentence: "She is going to (　　) tennis this afternoon.",
      choices: ["play", "plays", "playing", "played"], answer: 0,
      explain: "to のあとは動詞のもとの形。主語が She でも plays にはしないよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "あなたは今週末、何をするつもりですか。",
      words: ["What", "are", "you", "going", "to", "do", "this", "weekend"], end: "?",
      explain: "What（何を）を最初に。そのあとは are you going to do（するつもりですか）、最後に this weekend だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I'm going to watch a movie tonight.",
      choices: ["今夜、映画を見るつもりです。", "昨夜、映画を見ました。", "今、映画を見ています。", "今夜、テレビを見るつもりです。"], answer: 0,
      explain: "be going to は「〜するつもり」。tonight は「今夜」、movie は「映画」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたは今夜、勉強するつもりですか。― はい、そのつもりです。",
      sentence: "Are you going to study tonight? ― Yes, I (　　).",
      choices: ["am", "do", "will", "going"], answer: 0,
      explain: "Are you 〜? と be動詞で聞かれたので、Yes, I am. と答えるよ。"
    },
    {
      type: "choice", prompt: "正しい文はどれ？",
      choices: ["We are going to have a party.", "We are going to having a party.", "We going to have a party.", "We are go to have a party."], answer: 0,
      explain: "be動詞（are）＋ going to ＋ もとの形（have）がそろっているのは1つ目だけだよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしは明日、買い物に行くつもりはありません。",
      words: ["I'm", "not", "going", "to", "go", "shopping", "tomorrow"], end: ".",
      explain: "「〜するつもりはない」は be動詞のあとに not。I'm not going to go shopping の順だよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "Next Saturday is my mother's birthday.\nMy father and I are going to make a cake for her.\nMy sister is going to buy flowers.",
      question: "姉（妹）がするつもりのことは何？",
      choices: ["花を買う", "ケーキを作る", "料理をする", "プレゼントのかばんを買う"], answer: 0,
      explain: "My sister is going to buy flowers.（姉は花を買うつもり）と書いてあるね。ケーキを作るのは父と「わたし」だよ。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "What are you going to do tomorrow? I'm going to visit my grandmother.",
      ja: "明日何をするつもりですか。祖母を訪ねるつもりです。"
    }
  ]
};
