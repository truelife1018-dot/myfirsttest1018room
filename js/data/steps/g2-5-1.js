window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-5-1"] = {
  lesson: [
    {
      say: "動詞の ing 形は「〜すること」という意味にもなるよ。",
      body: "これを「動名詞」というよ。名詞と同じように、文の主語や、動詞のあとに置けるんだ。\n・I like playing tennis.（テニスをすることが好き）\n・Reading books is fun.（本を読むことは楽しい）",
      examples: [
        { en: "I like playing tennis.", ja: "わたしはテニスをすることが好きです。" },
        { en: "Reading books is fun.", ja: "本を読むことは楽しいです。" }
      ]
    },
    {
      say: "動詞によって、ing しか使えないもの、to しか使えないものがあるよ。",
      body: "・ing だけ：enjoy（楽しむ）、finish（終える）、stop（やめる）\n・to だけ：want（〜したい）、hope（望む）、decide（決める）\n・どちらもOK：like（好き）、start ／ begin（始める）\n\n✕ I enjoyed to swim.　◯ I enjoyed swimming.",
      examples: [
        { en: "I enjoyed swimming.", ja: "わたしは泳ぐのを楽しみました。" },
        { en: "I finished doing my homework.", ja: "わたしは宿題をし終えました。" },
        { en: "I want to swim.", ja: "わたしは泳ぎたいです。" }
      ]
    },
    {
      say: "at や for などのことば（前置詞）のあとも、ing 形を使うよ。",
      body: "・be good at 〜ing：〜するのが得意だ\n・How about 〜ing?：〜するのはどうですか\n・Thank you for 〜ing.：〜してくれてありがとう",
      examples: [
        { en: "She is good at singing.", ja: "彼女は歌うのが得意です。" },
        { en: "How about going to the movies?", ja: "映画に行くのはどう？" },
        { en: "Thank you for helping me.", ja: "手伝ってくれてありがとう。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしはサッカーをして楽しみました。",
      sentence: "I enjoyed (　　) soccer.",
      choices: ["playing", "to play", "play", "played"], answer: 0,
      explain: "enjoy のあとは ing 形だけ。to play は使えないよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼は絵をかくことが得意です。",
      sentence: "He is good at (　　) pictures.",
      choices: ["drawing", "draw", "to draw", "draws"], answer: 0,
      explain: "at のあとは ing 形。be good at 〜ing で「〜するのが得意」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "宿題をし終えましたか。",
      sentence: "Did you finish (　　) your homework?",
      choices: ["doing", "to do", "do", "did"], answer: 0,
      explain: "finish のあとは ing 形だけ。finish doing で「し終える」だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "英語を話すことは楽しいです。",
      words: ["Speaking", "English", "is", "fun"], end: ".",
      explain: "Speaking English（英語を話すこと）が主語。そのあとに is fun（楽しい）を続けるよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "Thank you for inviting me.",
      choices: ["招待してくれてありがとう。", "わたしを招待してください。", "あなたを招待したいです。", "招待できなくてごめんなさい。"], answer: 0,
      explain: "Thank you for 〜ing. は「〜してくれてありがとう」。invite は「招待する」だよ。"
    },
    {
      type: "choice", prompt: "正しい文はどれ？",
      choices: ["I want to go shopping.", "I want going shopping.", "I want go shopping.", "I want went shopping."], answer: 0,
      explain: "want のあとは to ＋ もとの形だけ。want going とは言わないよ。go shopping は「買い物に行く」。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "公園へ行くのはどうですか。",
      sentence: "How about (　　) to the park?",
      choices: ["going", "go", "to go", "went"], answer: 0,
      explain: "How about のあとは ing 形。How about going 〜? で「〜へ行くのはどう？」だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "My hobby is collecting stamps.",
      choices: ["わたしのしゅみは切手を集めることです。", "わたしは切手を集めたいです。", "わたしは切手をもらいました。", "わたしのしゅみは写真をとることです。"], answer: 0,
      explain: "collecting stamps は「切手を集めること」。hobby は「しゅみ」だよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "My brother loves cooking.\nHe started cooking when he was ten.\nHe is very good at making curry.\nLast Sunday, he finished making dinner at six, and we enjoyed eating it.",
      question: "正しいものはどれ？",
      choices: ["兄（弟）はカレーを作るのがとても得意", "兄（弟）は料理が苦手", "兄（弟）は15さいで料理を始めた", "先週の日曜日は家族で外食した"], answer: 0,
      explain: "He is very good at making curry.（カレーを作るのがとても得意）と書いてあるね。料理を始めたのは10さいのときだよ。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I like reading books. How about you?",
      ja: "わたしは本を読むことが好きです。あなたはどう？"
    }
  ]
};
