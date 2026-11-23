window.STEP_DATA = window.STEP_DATA || {};
window.STEP_DATA["g2-8-1"] = {
  lesson: [
    {
      say: "最後のステップは、中1・中2で学んだことを使って、少し長めの英文を読む練習だよ。",
      body: "都立高校の入試では、英文を読んで答える問題がたくさん出るよ。\n長い文章を読むコツ①：先に質問を読もう！\n何をさがせばいいかわかってから読むと、答えを見つけやすいよ。\n知らない単語があっても、止まらずに先へ読み進めてOK。",
      examples: [
        { en: "Read the question first.", ja: "先に質問を読もう。" }
      ]
    },
    {
      say: "コツ②：話の流れを教えてくれることばに注目しよう。",
      body: "・but（しかし）：前と反対のことが来る\n・so（だから）：結果が来る\n・because（なぜなら）：理由が来る\n・first / then / after that（最初に／それから／そのあと）：順番",
      examples: [
        { en: "I was tired, but I finished my homework.", ja: "つかれていたけれど、宿題を終わらせました。" },
        { en: "It was raining, so I stayed home.", ja: "雨が降っていたので、家にいました。" }
      ]
    },
    {
      say: "コツ③：いつ・どこで・だれが・何をしたか を整理しよう。",
      body: "手紙や会話、お知らせなど、いろいろな形の英文が出てくるよ。\n日付や時刻、場所のことばに線を引くつもりで読むと、まちがえにくくなるよ。\n\nここまで来たら、中1・中2の学び直しはゴール目前！がんばろう！",
      examples: [
        { en: "Last weekend, my host family took me to Kamakura.", ja: "先週末、ホストファミリーがわたしを鎌倉に連れていってくれました。" }
      ]
    }
  ],
  questions: [
    {
      type: "read", prompt: "エマからハルトへの手紙を読んで、質問に答えよう。",
      passage: "Dear Haruto,\nHow are you? I'm enjoying my life in Japan.\nLast weekend, my [host family|ホストファミリー] [took me to|わたしを〜に連れていった] [Kamakura|鎌倉].\nWe visited a big temple there. It was built a long time ago.\nI was surprised to see so many people from other countries.\nAfter that, we ate lunch at a small restaurant.\nThe food was more delicious than I [expected|思っていた].\nNext month, I'm going to visit Kyoto with my classmates.\nI want to buy something to give my family in Canada.\nYour friend,\nEmma",
      question: "先週末、エマがしたことは何？",
      choices: ["鎌倉で大きな寺を訪れ、小さなレストランで昼食を食べた", "京都で大きな寺を訪れた", "カナダの家族に会いに行った", "クラスメートと鎌倉へ行った"], answer: 0,
      explain: "Last weekend の文を見よう。鎌倉で We visited a big temple、After that, we ate lunch at a small restaurant. と書いてあるね。鎌倉へはホストファミリーと行ったよ。"
    },
    {
      type: "read", prompt: "エマからハルトへの手紙を読んで、質問に答えよう。",
      passage: "Dear Haruto,\nHow are you? I'm enjoying my life in Japan.\nLast weekend, my [host family|ホストファミリー] [took me to|わたしを〜に連れていった] [Kamakura|鎌倉].\nWe visited a big temple there. It was built a long time ago.\nI was surprised to see so many people from other countries.\nAfter that, we ate lunch at a small restaurant.\nThe food was more delicious than I [expected|思っていた].\nNext month, I'm going to visit Kyoto with my classmates.\nI want to buy something to give my family in Canada.\nYour friend,\nEmma",
      question: "エマが来月、京都でしたいことは何？",
      choices: ["カナダの家族へのおみやげを買う", "鎌倉の寺をもう一度訪れる", "カナダへ帰る", "ホストファミリーと料理をする"], answer: 0,
      explain: "Next month の文を見よう。京都へ行く予定で、I want to buy something to give my family in Canada.（カナダの家族にあげるものを買いたい）と書いてあるね。"
    },
    {
      type: "read", prompt: "会話を読んで、質問に答えよう。",
      passage: "Yuta: Hi, Ms. Brown. Can I ask you a question?\nMs. Brown: Sure. What is it?\nYuta: I want to speak English better. But I'm not good at speaking.\nMs. Brown: I see. You should talk with your friends in English every day. It's not as difficult as you think.\nYuta: Every day? That sounds hard.\nMs. Brown: You don't have to talk for a long time. Five minutes is OK.\nYuta: OK. I'll try it from tomorrow!",
      question: "ユウタのなやみは何？",
      choices: ["英語を話すのが得意ではないこと", "英語を読むのが苦手なこと", "いっしょに勉強する友だちがいないこと", "先生と話す時間がないこと"], answer: 0,
      explain: "ユウタは But I'm not good at speaking.（でも話すのが得意ではない）と言っているね。but のあとに大事なことが来ることが多いよ。"
    },
    {
      type: "order", prompt: "日本語に合うように並べよう。", ja: "英語を話すことは、あなたが思うほど難しくありません。",
      words: ["Speaking", "English", "is", "not", "as", "difficult", "as", "you", "think"], end: ".",
      explain: "Speaking English（英語を話すこと）が主語。is not as difficult as（〜ほど難しくない）のあとに you think（あなたが思う）を続けるよ。"
    },
    {
      type: "listen", prompt: "スピーチを聞いて、内容に合うものを選ぼう。",
      audio: "Hello, everyone. I'm going to talk about my summer vacation. I went to Hokkaido with my family. We saw many animals at the zoo. It was a lot of fun.",
      choices: ["家族と北海道へ行き、動物園で動物を見た", "友だちと沖縄へ行き、海で泳いだ", "一人で北海道へ行き、動物園で動物を見た", "家族と東京へ行き、買い物をした"], answer: 0,
      explain: "I went to Hokkaido with my family.（家族と北海道へ行った）、We saw many animals at the zoo.（動物園でたくさんの動物を見た）と話しているよ。"
    },
    {
      type: "read", prompt: "会話を読んで、質問に答えよう。",
      passage: "Yuta: Hi, Ms. Brown. Can I ask you a question?\nMs. Brown: Sure. What is it?\nYuta: I want to speak English better. But I'm not good at speaking.\nMs. Brown: I see. You should talk with your friends in English every day. It's not as difficult as you think.\nYuta: Every day? That sounds hard.\nMs. Brown: You don't have to talk for a long time. Five minutes is OK.\nYuta: OK. I'll try it from tomorrow!",
      question: "ブラウン先生のアドバイスはどれ？",
      choices: ["毎日、短い時間でも友だちと英語で話すこと", "毎日1時間、英語で話すこと", "英語の本をたくさん読むこと", "毎日、先生と英語で話すこと"], answer: 0,
      explain: "You should talk with your friends in English every day.（毎日友だちと英語で話すといい）、Five minutes is OK.（5分でいい）と言っているね。"
    },
    {
      type: "read", prompt: "お知らせを読んで、質問に答えよう。",
      passage: "Summer [Volunteer|ボランティア] Event\nLet's clean the beach together!\nDate: Saturday, July 20\nTime: 9:00 a.m. - 11:00 a.m.\nPlace: Minami Beach\n[Things to bring|持ってくるもの]: a hat and something to drink\nIf it rains, the event will be on July 27.\nYou don't have to bring [gloves|手ぶくろ]. We will give them to you.",
      question: "参加する人が持っていくものは何？",
      choices: ["ぼうしと飲み物", "ぼうしと手ぶくろ", "手ぶくろと飲み物", "何も持っていかなくてよい"], answer: 0,
      explain: "Things to bring: a hat and something to drink（ぼうしと飲み物）と書いてあるね。手ぶくろは持ってこなくてよい（don't have to bring）と書いてあるよ。"
    },
    {
      type: "listen", prompt: "図書館のお知らせを聞いて、内容に合うものを選ぼう。",
      audio: "Our school library is open from eight thirty to five. You can borrow three books for two weeks. Please don't eat or drink in the library.",
      choices: ["本は3冊まで、2週間借りられる", "図書館は8時から5時まで開いている", "本は2冊まで、3週間借りられる", "図書館の中で飲み物を飲んでもよい"], answer: 0,
      explain: "You can borrow three books for two weeks.（本を3冊、2週間借りられる）と言っているね。開いているのは8時30分から5時までだよ。"
    },
    {
      type: "read", prompt: "お知らせを読んで、質問に答えよう。",
      passage: "Summer [Volunteer|ボランティア] Event\nLet's clean the beach together!\nDate: Saturday, July 20\nTime: 9:00 a.m. - 11:00 a.m.\nPlace: Minami Beach\n[Things to bring|持ってくるもの]: a hat and something to drink\nIf it rains, the event will be on July 27.\nYou don't have to bring [gloves|手ぶくろ]. We will give them to you.",
      question: "7月20日に雨が降ったら、どうなる？",
      choices: ["7月27日に行われる", "中止になる", "7月20日の午後に行われる", "体育館で行われる"], answer: 0,
      explain: "If it rains, the event will be on July 27.（雨なら7月27日に行われる）と書いてあるね。"
    },
    {
      type: "speak", prompt: "音声を聞いて、声に出してまねしてみよう。",
      audio: "I think that learning English is important because I want to talk with people around the world.",
      ja: "世界中の人と話したいので、英語を学ぶことは大切だと思います。"
    }
  ]
};
