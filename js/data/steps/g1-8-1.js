window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-8-1"] = {
  lesson: [
    {
      say: "am / is / are にも過去形があるよ。",
      body: "・am / is の過去形 → was\n・are の過去形 → were\n\n「〜でした」「〜にいました」という意味になるよ。",
      examples: [
        { en: "I was busy yesterday.", ja: "わたしは昨日いそがしかったです。" },
        { en: "They were in the park.", ja: "彼らは公園にいました。" }
      ]
    },
    {
      say: "was と were の使い分けをまとめよう。",
      body: "・was：I / he / she / it / 1人・1つ\n・were：you / we / they / 2人・2つ以上\n\n天気を言うときの主語は it。It was sunny.（晴れていました）",
      examples: [
        { en: "It was sunny yesterday.", ja: "昨日は晴れていました。" },
        { en: "My parents were at home.", ja: "両親は家にいました。" }
      ]
    },
    {
      say: "否定文と疑問文の作り方は、am / is / are のときと同じだよ。",
      body: "・否定：was not → wasn't、were not → weren't\n・疑問：Was 〜? ／ Were 〜? を文のはじめに\n・答え方：Yes, I was. ／ No, it wasn't. など",
      examples: [
        { en: "Were you tired? Yes, I was.", ja: "つかれていましたか。はい、つかれていました。" },
        { en: "The test wasn't difficult.", ja: "そのテストは難しくありませんでした。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは昨日いそがしかったです。",
      sentence: "I (　　) busy yesterday.",
      choices: ["was", "were", "am", "did"], answer: 0,
      explain: "I am の過去形は I was だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼らは昨日家にいました。",
      sentence: "They (　　) at home yesterday.",
      choices: ["were", "was", "are", "did"], answer: 0,
      explain: "They（彼ら）は2人以上なので were だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "昨日は晴れていました。",
      sentence: "It (　　) [sunny|晴れた] yesterday.",
      choices: ["was", "were", "is", "did"], answer: 0,
      explain: "It と yesterday（昨日）なので was だよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "そのテストは難しくありませんでした。",
      words: ["The", "test", "wasn't", "difficult"], end: ".",
      explain: "The test（そのテストは）→ wasn't（〜ではなかった）→ difficult（難しい）の順だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I was hungry this morning.",
      choices: ["今朝、おなかがすいていました。", "今、おなかがすいています。", "今朝、ねむかったです。", "今朝、つかれていました。"], answer: 0,
      explain: "was hungry は「おなかがすいていた」。this morning は「今朝」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "あなたは昨日学校にいましたか。― はい、いました。",
      sentence: "Were you at school yesterday? ― Yes, I (　　).",
      choices: ["was", "were", "am", "did"], answer: 0,
      explain: "Were you 〜? と聞かれても、I で答えるので Yes, I was. になるよ。"
    },
    {
      type: "choice", prompt: "正しい文はどれ？",
      choices: ["We were happy.", "We was happy.", "We did happy.", "We are happy yesterday."], answer: 0,
      explain: "We（わたしたち）は2人以上なので were。yesterday がつくなら過去形にするよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "Was the movie interesting?",
      choices: ["Yes, it was.", "Yes, I was.", "Yes, it did.", "Yes, it is."], answer: 0,
      explain: "「その映画はおもしろかった？」。the movie は it で受けて、Was には was で答えるよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "Yesterday was my [birthday|誕生日].\nMy friends were at my house.\nThe cake was very big.\nI was very happy.",
      question: "正しいものはどれ？",
      choices: ["昨日は誕生日で、とてもうれしかった", "今日が誕生日だ", "友だちは家に来なかった", "ケーキは小さかった"], answer: 0,
      explain: "Yesterday was my birthday.（昨日は誕生日だった）、I was very happy.（とてもうれしかった）と書いてあるね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I was busy yesterday. Were you busy?",
      ja: "わたしは昨日いそがしかったです。あなたはいそがしかったですか。"
    }
  ]
};
