window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-2-2"] = {
  lesson: [
    {
      say: "男の人1人は he（彼は）、女の人1人は she（彼女は）と言うよ。",
      body: "he / she のときの be動詞は is だよ。\n2回目からは名前のかわりに he / she を使うことが多いよ。",
      examples: [
        { en: "He is my brother.", ja: "彼はわたしの兄です。" },
        { en: "She is a teacher.", ja: "彼女は先生です。" }
      ]
    },
    {
      say: "be動詞の使い分けを、ここでまとめよう！",
      body: "・I → am\n・You → are\n・He / She / This / That → is\n・名前（1人）→ is　（例：Ken is 〜.）\n\n自分（I）でも相手（you）でもない1人や1つのものには、is を使うよ。",
      examples: [
        { en: "Ken is my friend.", ja: "ケンはわたしの友だちです。" },
        { en: "I am Yuki. You are Ken. She is Emi.", ja: "わたしはユキです。あなたはケンです。彼女はエミです。" }
      ]
    },
    {
      say: "「彼の」は his、「彼女の」は her だよ。",
      body: "his name（彼の名前）、her bag（彼女のかばん）のように、もの の前につけるよ。\n質問の文は Is を前に出して、答えも he / she で答えるよ。",
      examples: [
        { en: "His name is Taku.", ja: "彼の名前はタクです。" },
        { en: "Is she your sister?", ja: "彼女はあなたの姉（妹）ですか。" },
        { en: "Yes, she is.", ja: "はい、そうです。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "彼女はわたしの姉です。",
      sentence: "(　　) is my [sister|姉・妹].",
      choices: ["She", "He", "I", "You"],
      answer: 0,
      explain: "sister（姉）は女の人なので She（彼女は）。男の人なら He だよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "彼は医者です。",
      sentence: "He (　　) a [doctor|医者].",
      choices: ["am", "are", "is", "be"],
      answer: 2,
      explain: "He / She のときの be動詞は is だよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "ケンはわたしの友だちです。",
      sentence: "Ken (　　) my friend.",
      choices: ["am", "is", "are", "do"],
      answer: 1,
      explain: "Ken は「わたし」でも「あなた」でもない1人なので is。Ken is は He is と同じ形だよ。"
    },
    {
      type: "order",
      prompt: "日本語に合うように並べよう。",
      ja: "彼女は英語の先生です。",
      words: ["She", "is", "an", "English", "teacher"],
      end: ".",
      explain: "She（彼女は）→ is（です）→ an English teacher（英語の先生）。English は母音（ア・イ・ウ・エ・オに近い音）で始まるので a ではなく an になるよ。"
    },
    {
      type: "listen",
      prompt: "音声を聞いて、意味に合うものを選ぼう。",
      audio: "He is tall.",
      choices: ["彼は背が高いです。", "彼女は背が高いです。", "彼は背が低いです。", "わたしは背が高いです。"],
      answer: 0,
      explain: "He は「彼は」、tall は「背が高い」。背が低いは short だよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "彼の名前はタクです。",
      sentence: "(　　) name is Taku.",
      choices: ["He", "His", "She", "Her"],
      answer: 1,
      explain: "「彼の名前」は his name。He は「彼は」なので、name の前にはつけないよ。"
    },
    {
      type: "choice",
      prompt: "（　）に入る語を選ぼう。",
      ja: "彼女は生徒ですか。― はい、そうです。",
      sentence: "Is she a student? ― Yes, (　　) is.",
      choices: ["it", "he", "she", "I"],
      answer: 2,
      explain: "she で聞かれたら she で答えるよ。人のときは it ではなく he / she を使うんだ。"
    },
    {
      type: "order",
      prompt: "日本語に合うように並べよう。",
      ja: "彼女のかばんは青いです。",
      words: ["Her", "bag", "is", "blue"],
      end: ".",
      explain: "Her bag（彼女のかばんは）→ is（です）→ blue（青い）の順だよ。"
    },
    {
      type: "read",
      prompt: "英文を読んで、質問に答えよう。",
      passage: "This is Ms. [Green|グリーン（名前）].\nShe is our English teacher.\nShe is from [Canada|カナダ].\nHer [favorite|大好きな] food is curry.",
      question: "グリーン先生について正しいものはどれ？",
      choices: ["カナダ出身で、カレーが大好き", "アメリカ出身で、カレーが大好き", "カナダ出身で、すしが大好き", "音楽の先生"],
      answer: 0,
      explain: "She is from Canada.（カナダ出身）、Her favorite food is curry.（大好きな食べ物はカレー）と書いてあるね。英語の先生だよ。"
    },
    {
      type: "speak",
      prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "She is my sister. Her name is Emi.",
      ja: "彼女はわたしの姉です。彼女の名前はエミです。"
    }
  ]
};
