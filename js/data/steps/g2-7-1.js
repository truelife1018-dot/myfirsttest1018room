window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-7-1"] = {
  lesson: [
    {
      say: "「〜される」「〜されている」は、be動詞 ＋ 過去分詞 で表すよ。",
      body: "これを「受け身」というよ。\n・I clean this room.（わたしはこの部屋をそうじする）\n・This room is cleaned.（この部屋はそうじされる）\n\nbe動詞は主語に合わせて am / is / are を使うよ。",
      examples: [
        { en: "This room is cleaned every day.", ja: "この部屋は毎日そうじされます。" },
        { en: "English is spoken in many countries.", ja: "英語は多くの国で話されています。" }
      ]
    },
    {
      say: "過去分詞の形を覚えよう。",
      body: "・規則動詞：過去形と同じ ed の形（clean → cleaned、use → used）\n・不規則動詞：1つずつ覚えよう\n　speak → spoke → spoken（話す）\n　write → wrote → written（書く）\n　make → made → made（作る）\n　see → saw → seen（見る）\n　take → took → taken（とる）\n　build → built → built（建てる）\n　know → knew → known（知る）",
      examples: [
        { en: "The book was written by Natsume Soseki.", ja: "その本は夏目漱石によって書かれました。" },
        { en: "This temple was built 500 years ago.", ja: "この寺は500年前に建てられました。" }
      ]
    },
    {
      say: "「〜によって」は by 〜 で表すよ。過去のことなら was / were を使うよ。",
      body: "・by 〜：〜によって（だれがしたかを言いたいとき）\n・過去：was ／ were ＋ 過去分詞（〜された）\n\nだれがしたかが大切でないときは、by 〜 は言わないことも多いよ。",
      examples: [
        { en: "This picture was taken by my father.", ja: "この写真は父によってとられました。" },
        { en: "These cars are made in Japan.", ja: "これらの車は日本で作られています。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "この部屋は毎日そうじされます。",
      sentence: "This room (　　) every day.",
      choices: ["is cleaned", "cleans", "cleaned", "is cleaning"], answer: 0,
      explain: "「〜される」は be動詞 ＋ 過去分詞。This room なので is cleaned だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "英語は多くの国で話されています。",
      sentence: "English is (　　) in many countries.",
      choices: ["spoken", "spoke", "speak", "speaking"], answer: 0,
      explain: "speak の過去分詞は spoken。spoke は過去形だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "この寺は500年前に建てられました。",
      sentence: "This temple (　　) built 500 years ago.",
      choices: ["was", "is", "were", "did"], answer: 0,
      explain: "500 years ago（500年前）の話で、主語は This temple（1つ）なので was だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "この本は多くの人に読まれています。",
      words: ["This", "book", "is", "read", "by", "many", "people"], end: ".",
      explain: "This book is read（この本は読まれている）→ by many people（多くの人によって）の順。read の過去分詞は read（発音は「レッド」）だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "This picture was taken by my father.",
      choices: ["この写真は父によってとられました。", "わたしは父の写真をとりました。", "父はこの写真を持っています。", "この写真は母によってとられました。"], answer: 0,
      explain: "was taken は「とられた」、by my father は「父によって」だよ。"
    },
    {
      type: "choice", prompt: "write（書く）の過去分詞はどれ？",
      choices: ["written", "wrote", "writed", "writing"], answer: 0,
      explain: "write → wrote → written と変わるよ。t を重ねるのを忘れずに。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "これらの車は日本で作られています。",
      sentence: "These cars (　　) made in Japan.",
      choices: ["are", "is", "was", "do"], answer: 0,
      explain: "These cars（これらの車）は2つ以上なので are。are made で「作られている」だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "This song is loved by young people.",
      choices: ["この歌は若い人たちに愛されています。", "若い人たちはこの歌を知りません。", "この歌は昔の歌です。", "わたしはこの歌が大好きです。"], answer: 0,
      explain: "is loved は「愛されている」、by young people は「若い人たちによって」だよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "There is an old [temple|寺] in my town.\nIt was built about 400 years ago.\nIt is visited by many people every spring because of its beautiful [cherry blossoms|桜の花].",
      question: "この寺について正しいものはどれ？",
      choices: ["約400年前に建てられ、春に多くの人が訪れる", "約40年前に建てられた", "秋に多くの人が訪れる", "最近建てられた新しい寺だ"], answer: 0,
      explain: "It was built about 400 years ago.（約400年前に建てられた）、It is visited by many people every spring（毎年春に多くの人が訪れる）と書いてあるね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "English is spoken in many countries.",
      ja: "英語は多くの国で話されています。"
    }
  ]
};
