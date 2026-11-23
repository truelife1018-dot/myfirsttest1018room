window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-3-2"] = {
  lesson: [
    {
      say: "「わたしは〜だと思う」は I think that 〜. だよ。",
      body: "that のあとに、ふつうの文（主語＋動詞）を続けるよ。\nこの that は「〜ということ」という意味で、よく省略されるよ。\nI think that he is kind. ＝ I think he is kind.",
      examples: [
        { en: "I think that he is kind.", ja: "わたしは、彼はやさしいと思います。" },
        { en: "I think this book is interesting.", ja: "わたしは、この本はおもしろいと思います。" }
      ]
    },
    {
      say: "think のほかにも、that を続けられる動詞があるよ。",
      body: "・know that 〜：〜だと知っている\n・hope that 〜：〜だといいなと思う\n・hear that 〜：〜だと聞いている\n・say that 〜：〜だと言う",
      examples: [
        { en: "I know that she likes music.", ja: "わたしは、彼女が音楽好きだと知っています。" },
        { en: "I hope that you will come.", ja: "あなたが来てくれるといいなと思います。" }
      ]
    },
    {
      say: "「〜ではないと思う」は、英語では I don't think 〜. と言うよ。",
      body: "日本語の「〜ないと思う」は、英語では think のほうを否定するのがふつうだよ。\n・I don't think it will rain.（雨は降らないと思う）\n・Do you think 〜?（〜だと思いますか）→ Yes, I think so.（そう思います）",
      examples: [
        { en: "I don't think it will rain.", ja: "雨は降らないと思います。" },
        { en: "Do you think he is right? Yes, I think so.", ja: "彼は正しいと思いますか。はい、そう思います。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは、彼はやさしいと思います。",
      sentence: "I think (　　) he is kind.",
      choices: ["that", "if", "because", "but"], answer: 0,
      explain: "「〜だと思う」は I think that 〜。that のあとに文を続けるよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは、彼女が音楽好きだと知っています。",
      sentence: "I (　　) that she likes music.",
      choices: ["know", "hope", "say", "want"], answer: 0,
      explain: "「知っている」は know。know that 〜 で「〜だと知っている」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "明日は雨が降らないと思います。",
      sentence: "I (　　) think it will rain tomorrow.",
      choices: ["don't", "am not", "doesn't", "not"], answer: 0,
      explain: "「〜ないと思う」は I don't think 〜. と think のほうを否定するよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "わたしは、この本はおもしろいと思います。",
      words: ["I", "think", "this", "book", "is", "interesting"], end: ".",
      explain: "I think（わたしは思う）のあとに、this book is interesting（この本はおもしろい）を続けるよ。that が省略された形だね。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I hope you will like it.",
      choices: ["気に入ってくれるといいな。", "気に入ったと思うよ。", "気に入らないと思うよ。", "それが好きだと知っているよ。"], answer: 0,
      explain: "hope は「〜だといいなと思う」。プレゼントをわたすときなどに使う表現だよ。"
    },
    {
      type: "choice", prompt: "正しい文はどれ？",
      choices: ["I think that English is fun.", "I think that English fun.", "I think English that is fun.", "I that think English is fun."], answer: 0,
      explain: "I think that のあとに、English is fun（英語は楽しい）という文を続けるよ。is をわすれないでね。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたは、彼が正しいと思いますか。",
      sentence: "(　　) you think he is right?",
      choices: ["Do", "Are", "Is", "Does"], answer: 0,
      explain: "think は一般動詞なので、疑問文は Do you think 〜? だよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "Do you think it will be sunny tomorrow?",
      choices: ["Yes, I think so.", "Yes, I do it.", "Yes, it is.", "No, I'm not."], answer: 0,
      explain: "「明日は晴れると思う？」という質問。「そう思う」は I think so. と言うよ。"
    },
    {
      type: "read", prompt: "会話を読んで、質問に答えよう。",
      passage: "Mika: I think that the school [festival|祭り] was great.\nTom: I think so, too. I know that our class worked very hard.\nMika: I hope we can do it again next year.",
      question: "2人について正しいものはどれ？",
      choices: ["2人とも、学校祭はよかったと思っている", "トムは、学校祭はよくなかったと思っている", "ミカは、来年はやりたくないと思っている", "2人のクラスは、あまりがんばらなかった"], answer: 0,
      explain: "ミカの I think that the school festival was great. に、トムは I think so, too.（ぼくもそう思う）と答えているね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I think that English is fun. Do you think so?",
      ja: "わたしは英語は楽しいと思います。あなたはそう思いますか。"
    }
  ]
};
