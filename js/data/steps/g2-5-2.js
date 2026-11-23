window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-5-2"] = {
  lesson: [
    {
      say: "give ＋ 人 ＋ もの で「人にものをあげる」と言えるよ。",
      body: "順番が大事！「人」が先で、「もの」があとだよ。\ngive（あげる）→ him（彼に）→ a present（プレゼントを）",
      examples: [
        { en: "I gave him a present.", ja: "わたしは彼にプレゼントをあげました。" },
        { en: "My father gave me a watch.", ja: "父はわたしにうで時計をくれました。" }
      ]
    },
    {
      say: "give と同じ並べ方をする動詞を覚えよう。",
      body: "・show（見せる）・tell（伝える、話す）・teach（教える）\n・send（送る）・buy（買ってあげる）・make（作ってあげる）\n\n「人」のところは、me / him / her / us / them の形を使うよ。",
      examples: [
        { en: "Please show me your notebook.", ja: "わたしにあなたのノートを見せてください。" },
        { en: "Ms. Green teaches us English.", ja: "グリーン先生はわたしたちに英語を教えています。" }
      ]
    },
    {
      say: "「もの」を先に言いたいときは、to や for を使って書きかえられるよ。",
      body: "・give ／ show ／ tell ／ teach ／ send：もの ＋ to ＋ 人\n・buy ／ make：もの ＋ for ＋ 人\n\nI gave him a book. ＝ I gave a book to him.",
      examples: [
        { en: "I gave a present to him.", ja: "わたしは彼にプレゼントをあげました。" },
        { en: "My mother made a cake for me.", ja: "母はわたしにケーキを作ってくれました。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "「彼はわたしに写真を見せてくれました。」を正しく表している文はどれ？",
      choices: ["He showed me a picture.", "He showed a picture me.", "He me showed a picture.", "He showed to me a picture."], answer: 0,
      explain: "show ＋ 人（me）＋ もの（a picture）の順だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは彼女に花をあげました。",
      sentence: "I gave (　　) flowers.",
      choices: ["her", "she", "hers", "I"], answer: 0,
      explain: "「彼女に」は her。give ＋ her ＋ flowers の順だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "グリーン先生はわたしたちに英語を教えています。",
      sentence: "Ms. Green teaches (　　) English.",
      choices: ["us", "we", "our", "to us"], answer: 0,
      explain: "「わたしたちに」は us。teach ＋ 人 ＋ もの の順だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "あなたの写真をわたしに見せてください。",
      words: ["Please", "show", "me", "your", "pictures"], end: ".",
      explain: "Please show（見せてください）→ me（わたしに）→ your pictures（あなたの写真を）の順だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "My aunt sent me a letter.",
      choices: ["おばがわたしに手紙を送ってくれました。", "わたしがおばに手紙を送りました。", "おばが手紙を読んでくれました。", "おじがわたしに手紙を送ってくれました。"], answer: 0,
      explain: "sent は send（送る）の過去形。sent me a letter で「わたしに手紙を送った」だよ。aunt は「おば」。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは彼に本をあげました。",
      sentence: "I gave a book (　　) him.",
      choices: ["to", "for", "at", "with"], answer: 0,
      explain: "「もの」を先に言うときは、give もの to 人。I gave him a book. と同じ意味だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "母はわたしにケーキを作ってくれました。",
      sentence: "My mother made a cake (　　) me.",
      choices: ["for", "to", "at", "with"], answer: 0,
      explain: "make と buy は、もの for 人 の形にするよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "父はわたしに新しい自転車を買ってくれました。",
      words: ["My", "father", "bought", "me", "a", "new", "bike"], end: ".",
      explain: "bought は buy（買う）の過去形。bought ＋ me ＋ a new bike の順だよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "Yesterday was my birthday.\nMy mother made me a big cake.\nMy brother gave me a book.\nMy friend Ken sent me a nice card.",
      question: "兄弟がくれたものは何？",
      choices: ["本", "ケーキ", "カード", "自転車"], answer: 0,
      explain: "My brother gave me a book.（兄弟は本をくれた）と書いてあるね。ケーキは母、カードはケンからだよ。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "Please tell me your name. Please show me your notebook.",
      ja: "あなたの名前を教えてください。あなたのノートを見せてください。"
    }
  ]
};
