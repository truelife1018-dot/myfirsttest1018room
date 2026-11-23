window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-2-2"] = {
  lesson: [
    {
      say: "「〜したほうがいい」「〜すべきだ」は should ＋ 動詞のもとの形 だよ。",
      body: "相手にアドバイスするときによく使うよ。\nshould も助動詞なので、主語が he / she でも形は変わらない。あとの動詞はもとの形だよ。",
      examples: [
        { en: "You should go to bed early.", ja: "早く寝たほうがいいですよ。" },
        { en: "You should see a doctor.", ja: "医者にみてもらったほうがいいですよ。" }
      ]
    },
    {
      say: "否定文と疑問文だよ。",
      body: "・否定：should not（shouldn't）＋ もとの形：〜しないほうがいい\n・疑問：Should I 〜?：〜したほうがいいですか？ → Yes, you should. ／ No, you shouldn't.",
      examples: [
        { en: "You shouldn't eat too much.", ja: "食べすぎないほうがいいですよ。" },
        { en: "Should I call him? Yes, you should.", ja: "彼に電話したほうがいいですか。はい、そうしたほうがいいです。" }
      ]
    },
    {
      say: "must / have to / should の強さをくらべてみよう。",
      body: "・must：絶対に〜しなければならない（いちばん強い）\n・have to：（事情があって）〜しなければならない\n・should：〜したほうがいい（アドバイス）",
      examples: [
        { en: "You must stop at a red light.", ja: "赤信号では止まらなければなりません。" },
        { en: "You should read this book. It's interesting.", ja: "この本を読んだほうがいいよ。おもしろいから。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたはもっと野菜を食べたほうがいいです。",
      sentence: "You (　　) eat more [vegetables|野菜].",
      choices: ["should", "shouldn't", "don't", "are"], answer: 0,
      explain: "「〜したほうがいい」は should ＋ もとの形だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "夜おそくまでゲームをしないほうがいいです。",
      sentence: "You (　　) play games late at night.",
      choices: ["shouldn't", "should", "must", "have to"], answer: 0,
      explain: "「〜しないほうがいい」は shouldn't（should not）だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "窓を開けたほうがいいですか。― はい、そうしたほうがいいです。",
      sentence: "Should I open the window? ― Yes, you (　　).",
      choices: ["should", "do", "are", "will"], answer: 0,
      explain: "Should で聞かれたら should で答えるよ。Yes, you should."
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "あなたは医者にみてもらったほうがいいです。",
      words: ["You", "should", "see", "a", "doctor"], end: ".",
      explain: "You should（あなたは〜したほうがいい）→ see a doctor（医者にみてもらう）の順だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "You should take an umbrella.",
      choices: ["かさを持っていったほうがいいですよ。", "かさを持っていってはいけません。", "かさを持っていかなくてもいいですよ。", "かさを買ったほうがいいですよ。"], answer: 0,
      explain: "should は「〜したほうがいい」。take an umbrella は「かさを持っていく」だよ。"
    },
    {
      type: "choice", prompt: "「ここで待ったほうがいいですか」とたずねる正しい文はどれ？",
      choices: ["Should I wait here?", "I should wait here?", "Do I should wait here?", "Should I waiting here?"], answer: 0,
      explain: "疑問文は Should を文のはじめに出すよ。あとの動詞はもとの形 wait。do はいらないよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼はもっと一生けんめい勉強したほうがいいです。",
      sentence: "He (　　) study harder.",
      choices: ["should", "shoulds", "is should", "should to"], answer: 0,
      explain: "should には s をつけないし、to もいらないよ。He should study だね。"
    },
    {
      type: "listen", prompt: "音声に対する返事として、いちばん合うものを選ぼう。", audio: "I have a headache.",
      choices: ["You should go home and rest.", "You should go to the party.", "Yes, I should.", "You shouldn't see a doctor."], answer: 0,
      explain: "I have a headache. は「頭が痛いです」。「家に帰って休んだほうがいいよ」とアドバイスするのが合うね。"
    },
    {
      type: "read", prompt: "会話を読んで、質問に答えよう。",
      passage: "Yumi: I want to speak English better. What should I do?\nMr. Smith: You should listen to English every day.\nAnd you should not be [afraid of|〜をこわがる] [mistakes|まちがい].",
      question: "スミス先生のアドバイスはどれ？",
      choices: ["毎日英語を聞き、まちがいをこわがらないこと", "毎日英語で日記を書くこと", "まちがえないように、あまり話さないこと", "毎日先生に会いに来ること"], answer: 0,
      explain: "You should listen to English every day.（毎日英語を聞くといい）、you should not be afraid of mistakes（まちがいをこわがらないほうがいい）と言っているね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "You look tired. You should go to bed early.",
      ja: "つかれているみたいだね。早く寝たほうがいいよ。"
    }
  ]
};
