window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-3-2"] = {
  lesson: [
    {
      say: "「何？」とたずねるときは What を文のはじめに置くよ。",
      body: "What is this?（これは何ですか）には、It is 〜.（It's 〜.）で答えるよ。this / that で聞かれても、答えは it だったね。\n一般動詞の文なら What do you 〜? の形になるよ。",
      examples: [
        { en: "What is this? It's a cake.", ja: "これは何ですか。ケーキです。" },
        { en: "What do you like? I like music.", ja: "あなたは何が好きですか。音楽が好きです。" }
      ]
    },
    {
      say: "What のすぐあとに名詞をつけると「何の〜」になるよ。",
      body: "What sport（何のスポーツ）、What food（何の食べ物）、What color（何色）のように使うよ。",
      examples: [
        { en: "What sport do you like? I like tennis.", ja: "あなたは何のスポーツが好きですか。テニスが好きです。" },
        { en: "What color is your bag? It's blue.", ja: "あなたのかばんは何色ですか。青です。" }
      ]
    },
    {
      say: "「だれ？」とたずねるときは Who を使うよ。",
      body: "Who is 〜?（〜はだれですか）には、he / she を使って答えるよ。\nWhat も Who も、Yes / No では答えないよ。",
      examples: [
        { en: "Who is that girl? She is Emi.", ja: "あの女の子はだれですか。彼女はエミです。" },
        { en: "Who is he? He is my brother.", ja: "彼はだれですか。わたしの兄です。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "これは何ですか。",
      sentence: "(　　) is this?",
      choices: ["What", "Who", "Where", "How"], answer: 0,
      explain: "「何？」は What。Who は「だれ？」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "これは何ですか。― 辞書です。",
      sentence: "What is this? ― (　　) a [dictionary|辞書].",
      choices: ["It's", "This", "I'm", "He's"], answer: 0,
      explain: "this で聞かれたら、答えは It's（It is）で始めるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あの男の子はだれですか。",
      sentence: "(　　) is that boy?",
      choices: ["Who", "What", "When", "Where"], answer: 0,
      explain: "人について「だれ？」と聞くときは Who だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "あなたは何のスポーツが好きですか。",
      words: ["What", "sport", "do", "you", "like"], end: "?",
      explain: "What sport（何のスポーツ）を最初に置いて、そのあとは do you like の順だよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "What do you have in your bag?",
      choices: ["I have a book.", "Yes, I do.", "It's my bag.", "I'm fine."], answer: 0,
      explain: "「かばんの中に何を持っていますか？」という質問。What には Yes / No ではなく、持っているものを答えるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あの女の人はだれですか。― わたしのおばです。",
      sentence: "Who is that woman? ― (　　) is my [aunt|おば].",
      choices: ["She", "He", "It", "This"], answer: 0,
      explain: "woman（女の人）について答えるので She。人には it を使わないよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたは朝食に何を食べますか。",
      sentence: "What (　　) you eat for [breakfast|朝食]?",
      choices: ["do", "are", "is", "can't"], answer: 0,
      explain: "eat（食べる）は一般動詞なので、What のあとは do you eat の順になるよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "Who is your English teacher?",
      choices: ["He is Mr. Brown.", "Yes, he is.", "It's English.", "I like English."], answer: 0,
      explain: "「あなたの英語の先生はだれですか？」という質問。Who には人の名前で答えるよ。"
    },
    {
      type: "read", prompt: "会話を読んで、質問に答えよう。",
      passage: "Ken: Who is that girl?\nMary: She is my sister, [Jane|ジェーン（名前）].\nKen: Is she a student?\nMary: Yes. She is ten.",
      question: "ジェーンについて正しいものはどれ？",
      choices: ["メアリーの姉妹で、10さい", "メアリーの友だちで、10さい", "ケンの姉妹で、10さい", "メアリーの姉妹で、先生"], answer: 0,
      explain: "She is my sister, Jane.（わたしの姉妹のジェーン）、She is ten.（10さい）とメアリーが言っているね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "What is this? It's a pen. Who is she? She is my friend.",
      ja: "これは何ですか。ペンです。彼女はだれですか。わたしの友だちです。"
    }
  ]
};
