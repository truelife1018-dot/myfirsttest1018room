// アプリ本体：画面の切りかえと、学習の流れ
(function () {
  "use strict";

  var app = document.getElementById("app");
  var modal = document.getElementById("modal");
  var modalBody = document.getElementById("modalBody");
  var CLEAR_RATE = 0.8;      // クリアの条件：8割以上せいかい
  var REVIEW_IN_STEP = 3;    // 学習のはじめに出す復習問題の数（最大）
  var REVIEW_ONLY = 5;       // 「復習だけする」ときの問題数（最大）
  var DIAG_PARTS = 3;        // 診断テストを何回に分けるか

  // ---------- コースの情報 ----------
  var allSteps = [];
  COURSE.forEach(function (grade) {
    grade.units.forEach(function (unit) {
      unit.steps.forEach(function (s) {
        allSteps.push({ id: s.id, label: s.label, title: s.title, unit: unit, grade: grade });
      });
    });
  });

  // 診断テストを3回に分ける
  var diagParts = [];
  (function () {
    var size = Math.ceil(allSteps.length / DIAG_PARTS);
    for (var i = 0; i < DIAG_PARTS; i++) {
      diagParts.push(allSteps.slice(i * size, (i + 1) * size).map(function (s) { return s.id; }));
    }
  })();

  function stepInfo(id) {
    return allSteps.find(function (s) { return s.id === id; });
  }
  function hasData(id) { return !!(window.STEP_DATA && STEP_DATA[id]); }
  function statusOf(id) {
    var r = Store.peekStep(id);
    return r ? r.status : "new";
  }
  // 診断テストで「もうできている」と判定されたか
  function known(id) { return Store.diag().answers[id] === true; }
  function recommended() {
    return allSteps.find(function (s) {
      return hasData(s.id) && statusOf(s.id) !== "cleared" && !known(s.id);
    }) || null;
  }
  function nextAfter(id) {
    var i = allSteps.findIndex(function (s) { return s.id === id; });
    for (var j = i + 1; j < allSteps.length; j++) {
      if (hasData(allSteps[j].id) && !known(allSteps[j].id)) return allSteps[j];
    }
    return null;
  }
  function questionOf(item) {
    var d = STEP_DATA[item.step];
    return d ? d.questions[item.q] : null;
  }

  // ---------- 文字の表示 ----------
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // [単語|意味] をヒントつきの単語にする。改行は <br> にする。
  function fmt(s) {
    return esc(s)
      .replace(/\[([^\]|]+)\|([^\]]+)\]/g, '<span class="hint" tabindex="0" data-tip="$2">$1</span>')
      .replace(/\n/g, "<br>");
  }
  // 読み上げ用：ヒントの記号を取りのぞく
  function plain(s) {
    return String(s).replace(/\[([^\]|]+)\|([^\]]+)\]/g, "$1");
  }
  function sensei(mood, html) {
    return '<div class="sensei"><div class="sensei-face">' + rabbitSVG(mood) +
      '</div><div class="bubble">' + html + "</div></div>";
  }
  function speakBtn(text, label) {
    return '<button type="button" class="btn-sound" data-say="' + esc(plain(text)) + '" aria-label="読み上げ">🔊' +
      (label ? " " + esc(label) : "") + "</button>";
  }
  function sessionIndices(data, session) {
    var n = data.questions.length;
    var half = Math.ceil(n / 2);
    var from = session === 0 ? 0 : half;
    var to = session === 0 ? half : n;
    var list = [];
    for (var i = from; i < to; i++) list.push(i);
    return list;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function show(html) {
    Speech.stop();
    app.innerHTML = html;
    window.scrollTo(0, 0);
  }

  // ---------- ホーム（単元マップ） ----------
  function renderHome() {
    cur = null;
    var d = Store.diag();
    var needsDiag = !d.done && !d.skipped;
    var rec = recommended();
    var due = Store.dueReviews().length;
    var started = Store.get().studyDays.length > 0;
    var greet, buttons = "";

    if (needsDiag) {
      if (d.part === 0 && d.pos === 0) {
        greet = (started ? "おかえり！" : "はじめまして！わたしは<b>うさぎ先生</b>。<br>") +
          "まずは<b>診断テスト</b>で、どこから学び直すといいか調べよう。<br>3回に分けて、1回10分くらいだよ。";
      } else {
        greet = "おかえり！診断テストのつづき（" + (d.part + 1) + "回目 / " + DIAG_PARTS + "回）をやろう。";
      }
      buttons = '<button type="button" class="btn btn-big" data-act="diag">診断テストを受ける（' + (d.part + 1) + " / " + DIAG_PARTS + "回目）▶</button>" +
        '<button type="button" class="btn btn-sub" data-act="diag-skip">とばして、はじめから学習する</button>';
    } else {
      if (rec) {
        greet = (started ? "おかえり！今日もいっしょにがんばろう。" : "さあ、学習をはじめよう！") +
          "<br>次は<b>「" + esc(rec.label + " " + rec.title) + "」</b>だよ。";
        buttons = '<button type="button" class="btn btn-big" data-start="' + rec.id + '">今日の学習をはじめる ▶</button>';
      } else {
        greet = "すごい！今あるステップは全部クリアしたよ。<br>新しいステップができるまで、復習やすきなステップの見直しをしよう。";
        if (due) buttons = '<button type="button" class="btn btn-big" data-act="review-only">復習をする ▶</button>';
      }
      if (due) {
        greet += '<br><span class="due-note">🔁 今日の復習：<b>' + due + " 問</b>" +
          (rec ? "（学習のはじめに出すね）" : "") + "</span>";
      }
    }

    var html = '<section class="home-hero">' + sensei(started ? "happy" : "normal", greet) +
      (buttons ? '<div class="actions hero-actions">' + buttons + "</div>" : "") + "</section>";

    COURSE.forEach(function (grade) {
      html += '<section class="grade"><h2 class="grade-title">' + esc(grade.title) + "</h2><div class=\"islands\">";
      grade.units.forEach(function (unit) {
        var steps = unit.steps;
        var done = steps.filter(function (s) { return statusOf(s.id) === "cleared" || known(s.id); }).length;
        var ready = steps.some(function (s) { return hasData(s.id); });
        var cls = done === steps.length ? "island done" : ready ? "island" : "island locked";
        html += '<div class="' + cls + '"><div class="island-head"><span class="island-name">' + esc(unit.name) +
          '</span><span class="island-theme">' + esc(unit.theme) + "</span></div><ol class=\"path\">";
        steps.forEach(function (s) {
          var st = statusOf(s.id);
          var available = hasData(s.id);
          var isKnown = known(s.id) && st !== "cleared";
          var stCls = st === "cleared" ? "cleared" : isKnown ? "known" : !available ? "soon" : st;
          var mark = st === "cleared" ? "✔" : isKnown ? "★" : esc(s.label);
          var sub = st === "cleared" ? "クリア！" : isKnown ? "できている！" : !available ? "じゅんび中" : st === "learning" ? "学習中" : "";
          var isRec = !needsDiag && rec && rec.id === s.id;
          html += '<li><button type="button" class="node ' + stCls + (isRec ? " rec" : "") + '"' +
            (available ? ' data-start="' + s.id + '"' : " disabled") + ">" +
            '<span class="node-dot">' + mark + "</span>" +
            '<span class="node-text"><span class="node-title">' + esc(s.title) + "</span>" +
            (sub ? '<span class="node-sub">' + sub + "</span>" : "") + "</span></button></li>";
        });
        html += "</ol></div>";
      });
      html += "</div></section>";
    });

    html += '<div class="home-foot">';
    if (d.done || d.skipped) {
      html += '<button type="button" class="btn-link" data-act="diag-restart">' +
        (d.done ? "🔍 診断テストをやり直す" : "🔍 診断テストを受ける") + "</button>";
    }
    html += '<p class="footnote">★ は診断テストで「できている」とわかったステップです（学習しなくても先へ進めます）。<br>' +
      "※ 6-3「現在進行形」は、教科書でどのUnitに出てくるか確認中のため、Unit 6 のあとに入れています。</p></div>";
    show(html);
  }

  // ---------- 診断テスト ----------
  var diagOrder = null; // 選択肢の表示順

  function startDiag() {
    var d = Store.diag();
    if (d.done) { Store.resetDiag(); d = Store.diag(); }
    d.skipped = false;
    Store.markStudyDay();
    Store.save();
    if (d.pos > 0) { renderDiagQuestion(); return; }
    var n = diagParts[d.part].length;
    var msg = d.part === 0
      ? "診断テストは、中1・中2のそれぞれのステップから1問ずつ出すよ。<br>" +
        "<b>まだ習っていない問題や、わからない問題は「わからない」を押してね。</b>当てずっぽうで答えないほうが、正しく調べられるよ。<br>" +
        "まちがえても大丈夫。点数をつけるテストではないからね！"
      : "診断テストの " + (d.part + 1) + " 回目だよ。前の回と同じように、わからないときは「わからない」を押してね。";
    show('<div class="step-head"><span class="step-unit diag">診断テスト</span><span class="step-name">' +
      (d.part + 1) + " 回目 / " + DIAG_PARTS + " 回（" + n + " 問）</span></div>" +
      sensei("normal", msg) +
      '<div class="actions"><button type="button" class="btn btn-sub" data-act="home">ホームへもどる</button>' +
      '<button type="button" class="btn btn-big" id="nextBtn" data-act="diag-q">はじめる ▶</button></div>');
  }

  function renderDiagQuestion() {
    var d = Store.diag();
    var ids = diagParts[d.part];
    var id = ids[d.pos];
    var q = DIAGNOSTIC[id];
    diagOrder = shuffle(q.choices.map(function (_, i) { return i; }));
    var pct = Math.round((d.pos / ids.length) * 100);
    var html = '<div class="step-head"><span class="step-unit diag">診断テスト</span><span class="step-name">' +
      (d.part + 1) + " 回目 / " + DIAG_PARTS + " 回</span></div>" +
      '<div class="quiz-top"><span class="quiz-count">もんだい ' + (d.pos + 1) + " / " + ids.length +
      '</span><div class="bar"><div class="bar-fill" style="width:' + pct + '%"></div></div></div>' +
      '<div class="card question">' +
      '<p class="q-prompt">' + esc(q.prompt || "（　）に入る語を選ぼう。") + "</p>";
    if (q.ja) html += '<p class="q-ja">' + esc(q.ja) + "</p>";
    if (q.sentence) html += '<p class="q-sentence">' + fmt(q.sentence) + "</p>";
    if (q.passage) {
      html += '<div class="passage">' + speakBtn(q.passage) + "<p>" + fmt(q.passage) + "</p></div>" +
        '<p class="q-question">Q. ' + esc(q.question) + "</p>";
    }
    html += '<div class="choices">';
    diagOrder.forEach(function (orig, i) {
      html += '<button type="button" class="choice" data-n="' + i + '" data-dchoice="' + orig + '"><span class="choice-no">' +
        (i + 1) + "</span>" + esc(q.choices[orig]) + "</button>";
    });
    html += '</div><div class="idk-row"><button type="button" class="btn btn-sub" data-act="diag-idk">🤔 わからない・まだ習っていない</button></div></div>';
    show(html);
  }

  function answerDiag(ok) {
    var d = Store.diag();
    var ids = diagParts[d.part];
    d.answers[ids[d.pos]] = ok;
    d.pos++;
    if (d.pos >= ids.length) {
      var part = d.part;
      d.part++;
      d.pos = 0;
      if (d.part >= DIAG_PARTS) { d.done = true; d.finishedAt = new Date().toISOString(); }
      Store.save();
      renderDiagResult(part);
    } else {
      Store.save();
      renderDiagQuestion();
    }
  }

  function renderDiagResult(part) {
    var d = Store.diag();
    var ids = diagParts[part];
    var okIds = ids.filter(function (id) { return d.answers[id] === true; });
    var html = '<div class="step-head"><span class="step-unit diag">診断テスト</span><span class="step-name">' +
      (d.done ? "全3回のけっか" : (part + 1) + " 回目のけっか") + "</span></div>";

    if (d.done) {
      var firstNeed = allSteps.find(function (s) { return d.answers[s.id] !== true; });
      var rec = recommended();
      var knownCount = allSteps.filter(function (s) { return d.answers[s.id] === true; }).length;
      var msg = "診断テスト、全部おわったよ！おつかれさま。<br>" +
        "36ステップのうち <b>" + knownCount + " ステップ</b>は、もうできていたよ（マップに★がつくよ）。<br>";
      if (firstNeed) msg += "<b>「" + esc(firstNeed.label + " " + firstNeed.title) + "」</b>（" + esc(firstNeed.grade.title + " " + firstNeed.unit.name) + "）から学び直すのがおすすめだよ。";
      if (rec && firstNeed && rec.id !== firstNeed.id) msg += "<br>（このステップはまだじゅんび中なので、今は「" + esc(rec.label + " " + rec.title) + "」から始めよう）";
      html += sensei("happy", msg);
    } else {
      html += sensei("happy", (part + 1) + " 回目おつかれさま！<br>" + ids.length + " 問のうち、<b>" + okIds.length +
        " ステップ</b>がもうできていたよ。<br>のこりは " + (DIAG_PARTS - d.part) + " 回。次の回も、わからないときは「わからない」でOKだよ。");
    }

    // 最後の回は、全36ステップのけっかをまとめて表示する
    var listIds = d.done ? allSteps.map(function (s) { return s.id; }) : ids;
    html += '<div class="card">' + (d.done ? '<h3 class="result-sub first">全ステップのけっか</h3>' : "") +
      '<ul class="diag-list' + (d.done ? " compact" : "") + '">';
    listIds.forEach(function (id) {
      var s = stepInfo(id);
      var ok = d.answers[id] === true;
      html += '<li class="' + (ok ? "ok" : "need") + '"><span class="diag-mark">' + (ok ? "★" : "📘") + "</span>" +
        '<span class="diag-step">' + esc(s.grade.title.replace("中学", "中") + " " + s.label + " " + s.title) + "</span>" +
        '<span class="diag-res">' + (ok ? "できている" : "これから学ぼう") + "</span></li>";
    });
    html += "</ul></div>";

    var actions = '<div class="actions"><button type="button" class="btn btn-sub" data-act="home">ホームへもどる</button>';
    if (!d.done) {
      actions += '<button type="button" class="btn btn-big" id="nextBtn" data-act="diag">つづけて ' + (d.part + 1) + " 回目を受ける ▶</button>";
    } else {
      var r = recommended();
      if (r) actions += '<button type="button" class="btn btn-big" id="nextBtn" data-start="' + r.id + '">おすすめのステップから学習する ▶</button>';
    }
    actions += "</div>";
    if (!d.done) actions += '<p class="footnote center">1回10分が目安。今日はここまででもOK！ つづきは次回、ホームから受けられるよ。</p>';
    show(html + actions);
  }

  // ---------- 学習の開始 ----------
  // cur.queue の1つ1つ：{ step: ステップID, q: 問題番号, review: 復習問題かどうか }
  var cur = null;

  function startStep(id) {
    var data = STEP_DATA[id];
    if (!data) return;
    var rec = Store.step(id);
    cur = { mode: "step", id: id, info: stepInfo(id), data: data, session: rec.session, queue: [], pos: 0, answers: [], lessonShown: false };

    var p = rec.partial;
    if (p && p.session === rec.session && p.queue && p.pos < p.queue.length) {
      // 途中でやめていたら、つづきから
      cur.queue = p.queue; cur.pos = p.pos; cur.answers = p.answers || [];
    } else {
      var mainIdx = sessionIndices(data, rec.session);
      // 今回そのまま出題する問題は、復習から外す（同じ問題が2回出ないように）
      var reviews = Store.dueReviews().filter(function (r) {
        return questionOf(r) && !(r.step === id && mainIdx.indexOf(r.q) !== -1);
      }).slice(0, REVIEW_IN_STEP);
      cur.queue = reviews.map(function (r) { return { step: r.step, q: r.q, review: true }; })
        .concat(mainIdx.map(function (i) { return { step: id, q: i }; }));
    }
    Store.markStudyDay();
    Store.save();

    var firstIsReview = cur.queue[cur.pos] && cur.queue[cur.pos].review;
    if (cur.pos === 0 && firstIsReview) renderReviewIntro();
    else if (!rec.lessonSeen) renderLesson(0);
    else renderResume(rec);
  }

  function startReviewOnly() {
    var reviews = Store.dueReviews().filter(questionOf).slice(0, REVIEW_ONLY);
    if (!reviews.length) { renderHome(); return; }
    cur = { mode: "review", id: null, info: null, queue: reviews.map(function (r) { return { step: r.step, q: r.q, review: true }; }), pos: 0, answers: [] };
    Store.markStudyDay();
    Store.save();
    renderReviewIntro();
  }

  function stepHeader(item) {
    if (item && item.review) {
      var s = stepInfo(item.step);
      return '<div class="step-head"><span class="step-unit review">🔁 復習</span>' +
        '<span class="step-name">' + esc(s.label + "　" + s.title) + "</span></div>";
    }
    if (!cur.info) return '<div class="step-head"><span class="step-unit review">🔁 復習</span></div>';
    return '<div class="step-head"><span class="step-unit">' + esc(cur.info.unit.name) + "</span>" +
      '<span class="step-name">' + esc(cur.info.label + "　" + cur.info.title) + "</span></div>";
  }

  function renderReviewIntro() {
    var n = cur.queue.filter(function (it) { return it.review; }).length;
    var msg = "まずは<b>復習</b>から！<br>前にまちがえた問題が <b>" + n + " 問</b>あるよ。" +
      "時間をあけてもう一度解くと、しっかり覚えられるんだ。";
    show('<div class="step-head"><span class="step-unit review">🔁 復習</span></div>' +
      sensei("normal", msg) +
      '<div class="actions"><button type="button" class="btn btn-big" id="nextBtn" data-act="quiz">復習をはじめる ▶</button></div>');
  }

  function renderResume(rec) {
    var part = cur.session === 0 ? "前半" : "後半";
    var msg = cur.pos > 0
      ? "前回のつづき（" + (cur.pos + 1) + " 問目）から始めるよ。"
      : "今日は" + part + "の問題をやるよ。<br>説明をもう一度見てから始めてもいいよ。";
    if (rec.status === "cleared") msg = "このステップはクリアずみ！復習でもう一度ためしてみよう。<br>" + msg;
    else if (known(cur.id)) msg = "診断テストでは「できている」だったステップだよ。確認のつもりでやってみよう。<br>" + msg;
    show(stepHeader() + sensei("normal", msg) +
      '<div class="actions"><button type="button" class="btn btn-sub" data-act="lesson">説明を見る</button>' +
      '<button type="button" class="btn btn-big" id="nextBtn" data-act="quiz">問題へすすむ ▶</button></div>');
  }

  // ---------- 説明 ----------
  function lessonPageHTML(p) {
    var html = '<div class="lesson-body">' + (p.body ? "<p>" + fmt(p.body) + "</p>" : "");
    if (p.alphabet) html += alphabetGrid();
    if (p.examples && p.examples.length) {
      html += '<ul class="examples">';
      p.examples.forEach(function (ex) {
        html += "<li>" + speakBtn(ex.en) + '<div><div class="ex-en">' + fmt(ex.en) +
          '</div><div class="ex-ja">' + esc(ex.ja) + "</div></div></li>";
      });
      html += "</ul>";
    }
    return html + "</div>";
  }

  function alphabetGrid() {
    var html = '<div class="abc">';
    for (var i = 0; i < 26; i++) {
      var up = String.fromCharCode(65 + i);
      html += '<div class="abc-cell"><span class="abc-up">' + up + '</span><span class="abc-low">' + up.toLowerCase() + "</span></div>";
    }
    return html + "</div>";
  }

  function renderLesson(page) {
    cur.lessonShown = true;
    var pages = cur.data.lesson;
    var p = pages[page];
    var last = page === pages.length - 1;
    var html = stepHeader() +
      '<div class="lesson-progress">せつめい ' + (page + 1) + " / " + pages.length + "</div>" +
      sensei("normal", fmt(p.say)) + lessonPageHTML(p) +
      '<div class="actions">' +
      (page > 0 ? '<button type="button" class="btn btn-sub" data-lesson="' + (page - 1) + '">◀ もどる</button>' : "") +
      (last
        ? '<button type="button" class="btn btn-big" id="nextBtn" data-act="quiz">問題へすすむ ▶</button>'
        : '<button type="button" class="btn btn-big" id="nextBtn" data-lesson="' + (page + 1) + '">つぎへ ▶</button>') +
      "</div>";
    show(html);
  }

  function openLessonModal(stepId) {
    var info = stepInfo(stepId);
    var html = '<h3 class="modal-title">' + esc(info.label + " " + info.title) + " のせつめい</h3>";
    STEP_DATA[stepId].lesson.forEach(function (p) {
      html += '<div class="modal-page"><p class="modal-say">🐰 ' + fmt(p.say) + "</p>" + lessonPageHTML(p) + "</div>";
    });
    modalBody.innerHTML = html;
    modal.hidden = false;
    modal.querySelector(".modal-box").scrollTop = 0;
  }
  function closeModal() { modal.hidden = true; Speech.stop(); }

  // ---------- 問題 ----------
  function savePartial() {
    if (cur.mode !== "step") return;
    var rec = Store.step(cur.id);
    rec.partial = { session: cur.session, queue: cur.queue, pos: cur.pos, answers: cur.answers };
    if (rec.status === "new") rec.status = "learning";
    Store.save();
  }

  function renderQuestion() {
    var item = cur.queue[cur.pos];
    if (cur.mode === "step" && !item.review) {
      var rec = Store.step(cur.id);
      if (!rec.lessonSeen && !cur.lessonShown) { renderLesson(0); return; }
      rec.lessonSeen = true;
    }
    savePartial();

    var q = questionOf(item);
    var total = cur.queue.length;
    var pct = Math.round((cur.pos / total) * 100);
    var html = stepHeader(item) +
      '<div class="quiz-top"><span class="quiz-count">もんだい ' + (cur.pos + 1) + " / " + total +
      '</span><div class="bar"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
      '<button type="button" class="btn-link" data-modal="' + item.step + '">📖 せつめいを見る</button></div>' +
      '<div class="card question">';

    html += '<p class="q-prompt">' + esc(q.prompt) + "</p>";
    if (q.ja && q.type !== "speak") html += '<p class="q-ja">' + esc(q.ja) + "</p>";

    if (q.type === "choice") {
      if (q.sentence) html += '<p class="q-sentence">' + fmt(q.sentence) + "</p>";
      html += choicesHTML(q);
    } else if (q.type === "listen") {
      html += '<div class="listen-box">' + speakBtn(q.audio, "音声を聞く") +
        '<span class="listen-note">何回でも聞けるよ</span></div>' + choicesHTML(q);
    } else if (q.type === "read") {
      html += '<div class="passage">' + speakBtn(q.passage) + "<p>" + fmt(q.passage) + "</p></div>" +
        '<p class="q-question">Q. ' + esc(q.question) + "</p>" + choicesHTML(q);
    } else if (q.type === "order") {
      html += '<div class="order">' +
        '<div class="order-answer" id="orderAnswer"></div>' +
        '<div class="order-bank" id="orderBank"></div>' +
        '<div class="order-actions"><button type="button" class="btn btn-sub" data-act="order-reset">やりなおす</button>' +
        '<button type="button" class="btn" id="orderCheck" data-act="order-check" disabled>こたえあわせ</button></div></div>';
    } else if (q.type === "speak") {
      html += '<div class="speak-box"><p class="speak-en">' + fmt(q.audio) + '</p><p class="speak-ja">' + esc(q.ja) + "</p>" +
        speakBtn(q.audio, "聞く") + '<p class="speak-note">聞いたら、声に出してまねしてみよう（3回くらい）。<br>' +
        "🐢「ゆっくり読む」にすると、聞き取りやすいよ。</p>" +
        '<button type="button" class="btn btn-big" id="nextBtn" data-act="spoke">言えた！ つぎへ ▶</button></div>';
    }

    html += '</div><div id="feedback"></div>';
    show(html);

    if (q.type === "order") setupOrder(q);
    if (q.type === "listen") setTimeout(function () { Speech.speak(q.audio); }, 350);
  }

  // 選択肢は毎回シャッフルして表示する（答えの位置を覚えてしまわないように）
  function choicesHTML(q) {
    var html = '<div class="choices">';
    shuffle(q.choices.map(function (_, i) { return i; })).forEach(function (orig, n) {
      html += '<button type="button" class="choice" data-n="' + n + '" data-choice="' + orig + '"><span class="choice-no">' + (n + 1) +
        "</span>" + esc(q.choices[orig]) + "</button>";
    });
    return html + "</div>";
  }

  function answerChoice(i) {
    var q = questionOf(cur.queue[cur.pos]);
    var buttons = app.querySelectorAll(".choice");
    if (!buttons.length || buttons[0].disabled) return;
    var ok = i === q.answer;
    buttons.forEach(function (b) {
      var k = Number(b.dataset.choice);
      b.disabled = true;
      if (k === q.answer) b.classList.add("correct");
      else if (k === i) b.classList.add("wrong");
    });
    showFeedback(ok, q);
  }

  // 並べ替え
  var order = null;
  function setupOrder(q) {
    var idx = q.words.map(function (_, i) { return i; });
    var bank = shuffle(idx);
    var tries = 0;
    while (bank.join() === idx.join() && tries++ < 10) bank = shuffle(idx);
    order = { q: q, bank: bank, picked: [], done: false };
    drawOrder();
  }
  function drawOrder() {
    var ans = document.getElementById("orderAnswer");
    var bank = document.getElementById("orderBank");
    var q = order.q;
    var a = order.picked.map(function (i, pos) {
      return '<button type="button" class="chip" data-unpick="' + pos + '"' + (order.done ? " disabled" : "") + ">" + esc(q.words[i]) + "</button>";
    }).join("");
    ans.innerHTML = (a || '<span class="order-placeholder">下のカードをクリックして、ここに並べよう</span>') +
      (q.end ? '<span class="order-end">' + esc(q.end) + "</span>" : "");
    bank.innerHTML = order.bank.map(function (i) {
      var used = order.picked.indexOf(i) !== -1;
      return '<button type="button" class="chip' + (used ? " used" : "") + '" data-pick="' + i + '"' +
        (used || order.done ? " disabled" : "") + ">" + esc(q.words[i]) + "</button>";
    }).join("");
    var check = document.getElementById("orderCheck");
    if (check) check.disabled = order.done || order.picked.length !== q.words.length;
  }
  function checkOrder() {
    var q = order.q;
    var mine = order.picked.map(function (i) { return q.words[i]; }).join(" ");
    var ok = mine === q.words.join(" ");
    order.done = true;
    drawOrder();
    document.getElementById("orderAnswer").classList.add(ok ? "correct" : "wrong");
    app.querySelectorAll(".order-actions button").forEach(function (b) { b.disabled = true; });
    showFeedback(ok, q, ok ? "" : '<p class="fb-mine">あなたの答え：' + esc(mine + (q.end || "")) + "</p>");
  }

  function correctText(q) {
    if (q.type === "order") return q.words.join(" ") + (q.end || "");
    return plain(q.choices[q.answer]);
  }

  function showFeedback(ok, q, extra) {
    var item = cur.queue[cur.pos];
    cur.answers.push({ step: item.step, q: item.q, ok: ok, review: !!item.review });
    // 自動復習の記録
    if (item.review) Store.reviewResult(item.step, item.q, ok);
    else if (!ok) Store.addReview(item.step, item.q);
    Store.save();

    var head = ok ? '<span class="fb-title ok">⭕ せいかい！</span>' : '<span class="fb-title ng">おしい！ もう少し</span>';
    var body = head + (extra || "") +
      (ok ? "" : '<p class="fb-correct">正しい答え：<b>' + esc(correctText(q)) + "</b></p>") +
      (q.type === "listen" ? '<p class="fb-audio">' + speakBtn(q.audio) + " 音声：" + esc(q.audio) + "</p>" : "") +
      '<p class="fb-explain">' + fmt(q.explain || "") + "</p>" +
      (ok ? "" : '<p class="fb-review">🔁 この問題は、明日の復習にも出てくるよ。</p>');
    var html = '<div class="feedback ' + (ok ? "ok" : "ng") + '">' + sensei(ok ? "happy" : "cheer", body) +
      '<div class="actions">' +
      (ok ? "" : '<button type="button" class="btn btn-sub" data-modal="' + item.step + '">📖 せつめいにもどる</button>') +
      '<button type="button" class="btn btn-big" id="nextBtn" data-act="next">' +
      (cur.pos + 1 >= cur.queue.length ? "けっかを見る ▶" : "つぎへ ▶") + "</button></div></div>";
    var fb = document.getElementById("feedback");
    fb.innerHTML = html;
    fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function nextQuestion() {
    cur.pos++;
    if (cur.pos >= cur.queue.length) finishSession();
    else renderQuestion();
  }

  // ---------- 結果 ----------
  function finishSession() {
    // 発音の問題は採点しないので、結果の数から外す
    var answers = cur.answers.filter(function (a) { return !a.speak; });
    var main = answers.filter(function (a) { return !a.review; });
    var revs = answers.filter(function (a) { return a.review; });

    var summary = {
      got: main.filter(function (a) { return a.ok; }).length, asked: main.length,
      revGot: revs.filter(function (a) { return a.ok; }).length, revAsked: revs.length,
      finishedStep: false, cleared: false, newlyCleared: false,
      wrong: answers.filter(function (a) { return !a.ok; }).map(questionOf)
    };

    if (cur.mode === "step") {
      var rec = Store.step(cur.id);
      var wasCleared = rec.status === "cleared";
      main.forEach(function (a) { rec.results[a.q] = a.ok; });
      delete rec.partial;

      if (cur.session === 0) {
        rec.session = 1;
        if (!wasCleared) rec.status = "learning";
      } else {
        var scored = [];
        cur.data.questions.forEach(function (q, i) { if (q.type !== "speak") scored.push(i); });
        var correct = scored.filter(function (i) { return rec.results[i] === true; }).length;
        summary.finishedStep = true;
        summary.total = scored.length;
        summary.correct = correct;
        summary.cleared = correct / scored.length >= CLEAR_RATE;
        if (summary.cleared) {
          if (!wasCleared) { summary.newlyCleared = true; rec.clearedAt = new Date().toISOString(); }
          rec.status = "cleared";
        } else if (!wasCleared) {
          rec.status = "learning";
        }
        rec.session = 0;
        rec.results = {};
      }
    }
    Store.save();
    renderResult(summary);
  }

  function renderResult(s) {
    var mood, msg;
    if (cur.mode === "review") {
      mood = s.revGot === s.revAsked ? "happy" : "cheer";
      msg = "復習おつかれさま！<br>" + (s.revGot === s.revAsked
        ? "全部せいかい！ちゃんと覚えられているね。"
        : "まちがえた問題は、また明日出てくるよ。くり返すうちに覚えられるからね。");
    } else if (s.finishedStep && s.cleared) {
      mood = "happy";
      msg = s.newlyCleared
        ? "やったね！<b>「" + esc(cur.info.label + " " + cur.info.title) + "」をクリア！</b><br>単元マップに色がついたよ。"
        : "復習もばっちり！このステップは、しっかり身についているね。";
    } else if (s.finishedStep) {
      mood = "cheer";
      msg = "このステップは、あと少しでクリア！<br>説明を見直して、もう一度チャレンジしよう。まちがえたところが、のびるところだよ。";
    } else {
      mood = s.got >= s.asked - 1 ? "happy" : "cheer";
      msg = "前半おつかれさま！<br>次回は後半の問題をやるよ。前半と後半あわせて8割せいかいでクリアだよ。";
    }

    var html = stepHeader() + sensei(mood, msg) + '<div class="card result">';
    if (cur.mode === "review") {
      html += '<div class="score"><span class="score-num">' + s.revGot + '</span><span class="score-of"> / ' + s.revAsked + " 問 せいかい</span></div>";
    } else {
      html += '<div class="score"><span class="score-num">' + s.got + '</span><span class="score-of"> / ' + s.asked + " 問 せいかい</span></div>";
      if (s.revAsked) html += '<p class="score-step">🔁 復習：' + s.revGot + " / " + s.revAsked + " 問 せいかい</p>";
      if (s.finishedStep) {
        html += '<p class="score-step">ステップ全体：' + s.correct + " / " + s.total + " 問（" + Math.ceil(s.total * CLEAR_RATE) +
          " 問以上でクリア）</p>";
      }
    }
    if (s.wrong.length) {
      html += '<h3 class="result-sub">まちがえた問題の確認（明日の復習に出るよ）</h3><ul class="wrong-list">';
      s.wrong.forEach(function (q) {
        html += "<li><div class=\"wl-q\">" + esc(q.prompt) + (q.ja ? "　" + esc(q.ja) : "") +
          "</div><div class=\"wl-a\">正しい答え：<b>" + esc(correctText(q)) + "</b></div></li>";
      });
      html += "</ul>";
    }
    html += "</div>";

    var nextLabel, nextId;
    if (cur.mode === "review") {
      var r = recommended();
      if (r) { nextLabel = "学習をはじめる ▶"; nextId = r.id; }
    } else if (!s.finishedStep) { nextLabel = "つづけて後半をやる ▶"; nextId = cur.id; }
    else if (!s.cleared) { nextLabel = "もう一度チャレンジ ▶"; nextId = cur.id; }
    else {
      var n = nextAfter(cur.id);
      if (n) { nextLabel = "次のステップへ ▶"; nextId = n.id; }
    }
    html += '<div class="actions"><button type="button" class="btn btn-sub" data-act="home">ホームへもどる</button>' +
      (nextId ? '<button type="button" class="btn btn-big" id="nextBtn" data-start="' + nextId + '">' + nextLabel + "</button>" : "") +
      '</div><p class="footnote center">1回10分が目安だよ。今日はここまででもOK！</p>';
    show(html);
  }

  // ---------- 操作の受けつけ ----------
  app.addEventListener("click", function (e) {
    var t = e.target.closest("button");
    if (!t || t.disabled) return;
    if (t.dataset.say) { Speech.speak(t.dataset.say); return; }
    if (t.dataset.start) { startStep(t.dataset.start); return; }
    if (t.dataset.lesson) { renderLesson(Number(t.dataset.lesson)); return; }
    if (t.dataset.modal) { openLessonModal(t.dataset.modal); return; }
    if (t.dataset.choice) { answerChoice(Number(t.dataset.choice)); return; }
    if (t.dataset.dchoice) {
      var dq = DIAGNOSTIC[diagParts[Store.diag().part][Store.diag().pos]];
      answerDiag(Number(t.dataset.dchoice) === dq.answer);
      return;
    }
    if (t.dataset.pick !== undefined && order && !order.done) {
      order.picked.push(Number(t.dataset.pick)); drawOrder(); return;
    }
    if (t.dataset.unpick !== undefined && order && !order.done) {
      order.picked.splice(Number(t.dataset.unpick), 1); drawOrder(); return;
    }
    switch (t.dataset.act) {
      case "lesson": renderLesson(0); break;
      case "quiz": renderQuestion(); break;
      case "order-reset": if (order && !order.done) { order.picked = []; drawOrder(); } break;
      case "order-check": checkOrder(); break;
      case "spoke":
        cur.answers.push({ step: cur.queue[cur.pos].step, q: cur.queue[cur.pos].q, ok: true, speak: true });
        nextQuestion();
        break;
      case "next": nextQuestion(); break;
      case "home": renderHome(); break;
      case "review-only": startReviewOnly(); break;
      case "diag": startDiag(); break;
      case "diag-q": renderDiagQuestion(); break;
      case "diag-idk": answerDiag(false); break;
      case "diag-skip":
        Store.diag().skipped = true; Store.save(); renderHome(); break;
      case "diag-restart":
        if (!Store.diag().done || window.confirm("診断テストをはじめからやり直しますか？（★の記録が消えます。学習の記録は消えません）")) {
          Store.resetDiag(); startDiag();
        }
        break;
    }
  });

  modalBody.addEventListener("click", function (e) {
    var t = e.target.closest("button[data-say]");
    if (t) Speech.speak(t.dataset.say);
  });
  document.getElementById("modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });

  document.addEventListener("keydown", function (e) {
    if (!modal.hidden) { if (e.key === "Escape") closeModal(); return; }
    if (e.key === "Enter") {
      var nb = document.getElementById("nextBtn");
      if (nb && document.activeElement && document.activeElement.tagName !== "BUTTON") { e.preventDefault(); nb.click(); }
    } else if (/^[1-4]$/.test(e.key)) {
      var c = app.querySelector('.choice[data-n="' + (Number(e.key) - 1) + '"]');
      if (c && !c.disabled) c.click();
    }
  });

  document.getElementById("brand").addEventListener("click", function () { closeModal(); renderHome(); });
  var slow = document.getElementById("slowToggle");
  slow.checked = !!Store.get().settings.slow;
  slow.addEventListener("change", function () { Store.setSlow(slow.checked); });

  renderHome();
})();
