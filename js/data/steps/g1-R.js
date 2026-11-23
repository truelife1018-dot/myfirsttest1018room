/*
  ステップのデータの書き方（すべてのステップ共通）
  ------------------------------------------------
  lesson: 説明ページの配列
    say:      うさぎ先生のふきだし
    body:     説明文
    examples: 例文 [{ en: 英文, ja: 日本語 }]（🔊で読み上げ）
    alphabet: true にするとアルファベット表を表示
  questions: 問題の配列（前半と後半に分けて、2回の学習で出題）
    type: "choice"（選択） / "order"（並べ替え） / "listen"（リスニング）
          "read"（読解） / "speak"（聞いてまねする・採点なし）
    prompt:  問題の指示（日本語）
    ja:      日本語の意味（あれば）
    sentence:英文（（　）のある文など）
    passage: 読解の英文（\n で改行）
    audio:   読み上げる英文（listen / speak）
    choices: 選択肢、answer: 正解の番号（0から数える）
    words:   並べ替えの正しい順番、end: 最後につく記号
    explain: 解説（うさぎ先生が話す）
  英文の中で [単語|意味] と書くと、マウスを乗せたときに意味が出ます。
*/
window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-R"] = {
  lesson: [
    {
      say: "英語の文字は全部で26こ。それぞれに「大文字」と「小文字」があるよ。",
      body: "まずは下の表をながめてみよう。左が大文字、右が小文字だよ。",
      alphabet: true
    },
    {
      say: "形がにている小文字に気をつけよう！",
      body: "とくにまちがえやすいのは「b と d」「p と q」「h と n」だよ。\nb は「ぼう → まる」、d は「まる → ぼう」の順で書くよ。\n「bed（ベッド）」と書くと、b と d がベッドの両はしになるから覚えやすいよ。",
      examples: [
        { en: "bed", ja: "ベッド" },
        { en: "dog", ja: "犬" },
        { en: "pen", ja: "ペン" }
      ]
    },
    {
      say: "英語の文を書くときの3つのきまりを覚えよう。",
      body: "① 文のはじめは大文字で書く。\n② 「I（わたし）」はいつでも大文字。\n③ 文の最後にはピリオド（.）、質問の文には「?」をつける。\n単語と単語のあいだはスペースをあけるよ。",
      examples: [
        { en: "Hello. I'm Yuki.", ja: "こんにちは。わたしはユキです。" },
        { en: "Nice to meet you.", ja: "はじめまして。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice",
      prompt: "大文字「G」の小文字はどれ？",
      choices: ["g", "q", "j", "y"],
      answer: 0,
      explain: "G の小文字は g だよ。q とにているけど、g はしっぽが左にくるんとまがるよ。"
    },
    {
      type: "choice",
      prompt: "小文字「d」の大文字はどれ？",
      choices: ["B", "D", "P", "Q"],
      answer: 1,
      explain: "d の大文字は D。b（大文字は B）とよくまちがえるよ。「bed」の右はしが d だったね。"
    },
    {
      type: "order",
      prompt: "アルファベットの順番に並べよう。",
      words: ["E", "F", "G", "H"],
      end: "",
      explain: "A B C D の次は E F G H。歌で覚えている人は、歌いながら思い出してみよう。"
    },
    {
      type: "listen",
      prompt: "音声を聞いて、あてはまるものを選ぼう。",
      audio: "cat",
      choices: ["🐱 ねこ", "🐶 いぬ", "🐦 とり", "🐟 さかな"],
      answer: 0,
      explain: "cat は「ねこ」。c は「ク」に近い音だよ。犬は dog、鳥は bird、魚は fish だよ。"
    },
    {
      type: "choice",
      prompt: "正しく書かれている文はどれ？",
      choices: ["Hello. I'm Yuki.", "hello. I'm Yuki.", "Hello. i'm Yuki.", "Hello I'm Yuki"],
      answer: 0,
      explain: "文のはじめは大文字（Hello）、I はいつでも大文字、文のおわりにはピリオドをつけるよ。"
    },
    {
      type: "listen",
      prompt: "音声を聞いて、あてはまるものを選ぼう。",
      audio: "apple",
      choices: ["🍎 りんご", "🍌 バナナ", "🍊 オレンジ", "🍇 ぶどう"],
      answer: 0,
      explain: "apple は「りんご」。最初の a は「ア」と「エ」の間のような音だよ。"
    },
    {
      type: "choice",
      prompt: "「犬」を表す正しいつづりはどれ？",
      choices: ["bog", "dog", "dag", "gog"],
      answer: 1,
      explain: "犬は dog（ドッグ）。最初の文字は b ではなく d だよ。b と d の向きに気をつけよう。"
    },
    {
      type: "order",
      prompt: "「はじめまして。」という意味になるように並べよう。",
      ja: "はじめまして。",
      words: ["Nice", "to", "meet", "you"],
      end: ".",
      explain: "Nice to meet you. で「はじめまして（会えてうれしいです）」。初めて会った人へのあいさつだよ。"
    },
    {
      type: "read",
      prompt: "英文を読んで、質問に答えよう。",
      passage: "Hello. I'm [Ken|ケン（名前）].\nNice to meet you.",
      question: "この人の名前は？",
      choices: ["ケン", "ユキ", "トム", "ミカ"],
      answer: 0,
      explain: "I'm Ken. は「わたしはケンです」という意味。I'm のあとに名前が来るよ。"
    },
    {
      type: "speak",
      prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "Hello. Nice to meet you.",
      ja: "こんにちは。はじめまして。"
    }
  ]
};
