window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-6-3"] = {
  lesson: [
    {
      say: "「…と同じくらい〜だ」は as 〜 as … だよ。",
      body: "as と as のあいだには、もとの形（er や est をつけない形）を入れるよ。\n✕ as taller as　◯ as tall as",
      examples: [
        { en: "I am as tall as my brother.", ja: "わたしは兄と同じくらいの背の高さです。" },
        { en: "This bag is as big as that one.", ja: "このかばんはあのかばんと同じくらいの大きさです。" }
      ]
    },
    {
      say: "not as 〜 as … にすると「…ほど〜ではない」という意味になるよ。",
      body: "I'm not as tall as Ken.（わたしはケンほど背が高くない）\n→ つまり、ケンのほうが背が高いということ。どちらが上なのか、落ち着いて考えよう。",
      examples: [
        { en: "I'm not as tall as Ken.", ja: "わたしはケンほど背が高くありません。" },
        { en: "This movie is not as interesting as that one.", ja: "この映画はあの映画ほどおもしろくありません。" }
      ]
    },
    {
      say: "「速く」「上手に」などの動きのようすにも使えるよ。",
      body: "He can run as fast as his father.（彼は父親と同じくらい速く走れる）\nas 〜 as のあいだのことばは、いつでももとの形だよ。",
      examples: [
        { en: "He can run as fast as his father.", ja: "彼は父親と同じくらい速く走れます。" },
        { en: "She can't sing as well as her sister.", ja: "彼女は姉ほど上手に歌えません。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは兄と同じくらいの背の高さです。",
      sentence: "I am as (　　) as my brother.",
      choices: ["tall", "taller", "tallest", "more tall"], answer: 0,
      explain: "as と as のあいだは、もとの形 tall だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "このかばんはあのかばんと同じくらい重いです。",
      sentence: "This bag is (　　) heavy as that one.",
      choices: ["as", "so", "more", "than"], answer: 0,
      explain: "「同じくらい〜」は as 〜 as。最初の as が入るよ。"
    },
    {
      type: "choice", prompt: "I can't run as fast as Ken.（わたしはケンほど速く走れない）と同じ意味の文はどれ？",
      choices: ["Ken can run faster than me.", "I can run faster than Ken.", "I can run as fast as Ken.", "Ken can't run as fast as me."], answer: 0,
      explain: "「ケンほど速くない」ということは、ケンのほうが速い。だから Ken can run faster than me. と同じ意味だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "このペンはあのペンほど高くありません。",
      words: ["This", "pen", "is", "not", "as", "expensive", "as", "that", "one"], end: ".",
      explain: "is not as expensive as（〜ほど高くない）のあとに that one（あのペン）を置くよ。expensive は「値段が高い」。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "My cat is as big as your dog.",
      choices: ["わたしのねこは、あなたの犬と同じくらいの大きさです。", "わたしのねこは、あなたの犬より大きいです。", "わたしのねこは、あなたの犬ほど大きくありません。", "あなたの犬は、わたしのねこより大きいです。"], answer: 0,
      explain: "as big as は「同じくらい大きい」。どちらが大きいわけでもないよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼は父親と同じくらい速く走れます。",
      sentence: "He can run as (　　) as his father.",
      choices: ["fast", "faster", "fastest", "more fast"], answer: 0,
      explain: "as と as のあいだは、もとの形 fast だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "英語は数学ほど難しくありません。",
      sentence: "English is not as (　　) as math.",
      choices: ["difficult", "more difficult", "most difficult", "difficulter"], answer: 0,
      explain: "長いことばでも、as と as のあいだはもとの形 difficult だよ。more はつけない。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "Tom is not as old as Ken.",
      choices: ["ケンのほうがトムより年上です。", "トムのほうがケンより年上です。", "トムとケンは同じ年です。", "トムはケンより背が高いです。"], answer: 0,
      explain: "「トムはケンほど年上ではない」→ ケンのほうが年上だね。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "Emi, Yumi, and Saki are friends.\nEmi is as tall as Yumi.\nSaki is not as tall as Emi.",
      question: "いちばん背が低いのはだれ？",
      choices: ["サキ", "エミ", "ユミ", "3人とも同じ"], answer: 0,
      explain: "エミとユミは同じくらいの背。サキはエミほど背が高くない。だから、いちばん背が低いのはサキだね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I am as tall as my father. But I can't run as fast as him.",
      ja: "わたしは父と同じくらいの背の高さです。でも、父ほど速くは走れません。"
    }
  ]
};
