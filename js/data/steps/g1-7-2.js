window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g1-7-2"] = {
  lesson: [
    {
      say: "ed をつけずに、形が変わる過去形もあるよ。",
      body: "これを「不規則動詞」というよ。よく使うものから少しずつ覚えよう。\n\ngo → went（行った）　have → had（持っていた・食べた）\neat → ate（食べた）　see → saw（見た）\nget → got（手に入れた）　make → made（作った）\ncome → came（来た）　buy → bought（買った）",
      examples: [
        { en: "I went to the zoo yesterday.", ja: "わたしは昨日動物園へ行きました。" },
        { en: "I ate curry for dinner.", ja: "わたしは夕食にカレーを食べました。" }
      ]
    },
    {
      say: "「〜しませんでした」は didn't を使うよ。",
      body: "didn't（did not）のあとの動詞は、もとの形にもどるよ。\n✕ I didn't went.　◯ I didn't go.\n主語が he / she でも didn't だよ。",
      examples: [
        { en: "I didn't go to school.", ja: "わたしは学校へ行きませんでした。" },
        { en: "He didn't watch TV.", ja: "彼はテレビを見ませんでした。" }
      ]
    },
    {
      say: "「〜しましたか？」は Did を文のはじめに出すよ。",
      body: "Did のあとの動詞も、もとの形。\n答えるときは did を使うよ：Yes, I did. ／ No, I didn't.\nWhat did you do yesterday? は「昨日何をしましたか？」。",
      examples: [
        { en: "Did you see the movie? Yes, I did.", ja: "その映画を見ましたか。はい、見ました。" },
        { en: "What did you do last Sunday? I went shopping.", ja: "先週の日曜日に何をしましたか。買い物に行きました。" }
      ]
    }
  ],
  questions: [
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは昨日公園へ行きました。",
      sentence: "I (　　) to the park yesterday.",
      choices: ["went", "goed", "go", "goes"], answer: 0,
      explain: "go の過去形は went。goed とは言わないよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "彼女は朝食にパンを食べました。",
      sentence: "She (　　) bread for breakfast.",
      choices: ["ate", "eated", "eats", "eat"], answer: 0,
      explain: "eat の過去形は ate だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "わたしは昨日テレビを見ませんでした。",
      sentence: "I (　　) watch TV yesterday.",
      choices: ["didn't", "don't", "wasn't", "not"], answer: 0,
      explain: "過去の「〜しなかった」は didn't。そのあとの watch はもとの形のままだよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "あなたは昨日何をしましたか。",
      words: ["What", "did", "you", "do", "yesterday"], end: "?",
      explain: "What（何を）→ did you do（あなたはしましたか）→ yesterday（昨日）の順だよ。"
    },
    {
      type: "listen", prompt: "音声を聞いて、意味に合うものを選ぼう。", audio: "I saw a big dog in the park.",
      choices: ["公園で大きな犬を見ました。", "公園で小さな犬を見ました。", "公園で大きな犬を飼っています。", "家で大きな犬を見ました。"], answer: 0,
      explain: "saw は see（見る）の過去形。big は「大きい」、park は「公園」だよ。"
    },
    {
      type: "choice", prompt: "（　）に入る語を選ぼう。", ja: "朝食を食べましたか。― はい、食べました。",
      sentence: "Did you have breakfast? ― Yes, I (　　).",
      choices: ["did", "do", "had", "was"], answer: 0,
      explain: "Did で聞かれたら did で答えるよ。Yes, I did."
    },
    {
      type: "choice", prompt: "正しい文はどれ？",
      choices: ["Did he come to school?", "Did he came to school?", "Does he came to school?", "Did he comes to school?"], answer: 0,
      explain: "Did のあとは動詞のもとの形。came（過去形）や comes にはしないよ。"
    },
    {
      type: "listen", prompt: "音声の質問に対する、正しい答えを選ぼう。", audio: "Did you buy a new bag?",
      choices: ["No, I didn't.", "No, I don't.", "No, it isn't.", "Yes, I buy."], answer: 0,
      explain: "「新しいかばんを買ったの？」と Did で聞かれたら、Yes, I did. か No, I didn't. で答えるよ。"
    },
    {
      type: "read", prompt: "英文を読んで、質問に答えよう。",
      passage: "Last summer, I went to [Hokkaido|北海道] with my family.\nWe saw many animals at the zoo.\nWe ate [ramen|ラーメン] for lunch.\nI had a great time.",
      question: "この人が北海道でしたことは？",
      choices: ["動物園で動物を見て、ラーメンを食べた", "海で泳いで、すしを食べた", "動物園には行かずに、ラーメンを食べた", "一人で旅行をした"], answer: 0,
      explain: "We saw many animals at the zoo.（動物園でたくさんの動物を見た）、We ate ramen（ラーメンを食べた）と書いてあるね。家族といっしょに行ったよ。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "What did you do yesterday? I went to the library.",
      ja: "昨日何をしましたか。図書館へ行きました。"
    }
  ]
};
