// コース全体の構成（単元マップに表示する内容）
// 教科書「Here We Go!」のUnitの順番に合わせています。
// 問題データがあるステップだけが学習できます（ほかは「じゅんび中」）。
window.COURSE = [
  {
    grade: 1,
    title: "中学1年",
    units: [
      { id: "g1-r", name: "Ready to Start", theme: "アルファベット・小学校の復習", steps: [
        { id: "g1-R", label: "R", title: "アルファベットと英語の音" }
      ]},
      { id: "g1-u1", name: "Unit 1", theme: "新しい生活", steps: [
        { id: "g1-1-1", label: "1-1", title: "I am ～. / You are ～." },
        { id: "g1-1-2", label: "1-2", title: "I like ～. / I play ～." },
        { id: "g1-1-3", label: "1-3", title: "否定文・疑問文" }
      ]},
      { id: "g1-u2", name: "Unit 2", theme: "身の回りのもの・人", steps: [
        { id: "g1-2-1", label: "2-1", title: "This is ～. / That is ～." },
        { id: "g1-2-2", label: "2-2", title: "He is ～. / She is ～." }
      ]},
      { id: "g1-u3", name: "Unit 3", theme: "学校生活・できること", steps: [
        { id: "g1-3-1", label: "3-1", title: "can / can't" },
        { id: "g1-3-2", label: "3-2", title: "What ～? / Who ～?" }
      ]},
      { id: "g1-u4", name: "Unit 4", theme: "週末の過ごし方", steps: [
        { id: "g1-4-1", label: "4-1", title: "He plays ～.（-s / -es）" },
        { id: "g1-4-2", label: "4-2", title: "does / doesn't" }
      ]},
      { id: "g1-u5", name: "Unit 5", theme: "日本の文化・行事", steps: [
        { id: "g1-5-1", label: "5-1", title: "When / Where / How ～?" },
        { id: "g1-5-2", label: "5-2", title: "命令文" }
      ]},
      { id: "g1-u6", name: "Unit 6", theme: "街案内・道案内", steps: [
        { id: "g1-6-1", label: "6-1", title: "複数形、How many ～?" },
        { id: "g1-6-2", label: "6-2", title: "There is / There are" },
        { id: "g1-6-3", label: "6-3", title: "現在進行形" }
      ]},
      { id: "g1-u7", name: "Unit 7", theme: "過去の出来事", steps: [
        { id: "g1-7-1", label: "7-1", title: "過去形（規則動詞）" },
        { id: "g1-7-2", label: "7-2", title: "過去形（不規則動詞）、did" }
      ]},
      { id: "g1-u8", name: "Unit 8", theme: "昔と今・未来の夢", steps: [
        { id: "g1-8-1", label: "8-1", title: "was / were" },
        { id: "g1-8-2", label: "8-2", title: "過去進行形" }
      ]}
    ]
  },
  {
    grade: 2,
    title: "中学2年",
    units: [
      { id: "g2-u1", name: "Unit 1", theme: "春休みの思い出・新学期の目標", steps: [
        { id: "g2-1-1", label: "1-1", title: "be going to" },
        { id: "g2-1-2", label: "1-2", title: "will" }
      ]},
      { id: "g2-u2", name: "Unit 2", theme: "職場体験・マナー", steps: [
        { id: "g2-2-1", label: "2-1", title: "must / have to" },
        { id: "g2-2-2", label: "2-2", title: "should" }
      ]},
      { id: "g2-u3", name: "Unit 3", theme: "自分の意見・進路", steps: [
        { id: "g2-3-1", label: "3-1", title: "when / if / because" },
        { id: "g2-3-2", label: "3-2", title: "I think that ～." }
      ]},
      { id: "g2-u4", name: "Unit 4", theme: "夏休みの計画・旅行", steps: [
        { id: "g2-4-1", label: "4-1", title: "不定詞（～すること）" },
        { id: "g2-4-2", label: "4-2", title: "不定詞（～するために）" },
        { id: "g2-4-3", label: "4-3", title: "不定詞（～するための）" }
      ]},
      { id: "g2-u5", name: "Unit 5", theme: "環境問題・ボランティア", steps: [
        { id: "g2-5-1", label: "5-1", title: "動名詞" },
        { id: "g2-5-2", label: "5-2", title: "give 人 もの" }
      ]},
      { id: "g2-u6", name: "Unit 6", theme: "世界の文化・比較", steps: [
        { id: "g2-6-1", label: "6-1", title: "比較級・最上級（-er / -est）" },
        { id: "g2-6-2", label: "6-2", title: "more / most" },
        { id: "g2-6-3", label: "6-3", title: "as ～ as" }
      ]},
      { id: "g2-u7", name: "Unit 7", theme: "日本の伝統・世界遺産", steps: [
        { id: "g2-7-1", label: "7-1", title: "受け身" },
        { id: "g2-7-2", label: "7-2", title: "受け身の否定文・疑問文" }
      ]},
      { id: "g2-u8", name: "Unit 8", theme: "1年間の振り返り", steps: [
        { id: "g2-8-1", label: "8-1", title: "総まとめ読解" }
      ]}
    ]
  }
];
