// アプリ本体：画面の切りかえと、学習の流れ
(function () {
  "use strict";

  var app = document.getElementById("app");
  var modal = document.getElementById("modal");
  var modalBody = document.getElementById("modalBody");
  var CLEAR_RATE = 0.8; // クリアの条件：8割以上せいかい

  // ---------- コースの情報 ----------
  var allSteps = [];
  COURSE.forEach(function (grade) {
    grade.units.forEach(function (unit) {
      unit.steps.forEach(function (s) {
        allSteps.push({ id: s.id, label: s.label, title: s.title, unit: unit, grade: grade });
      });
    });
  });

  function stepInfo(id) {
    return allSteps.find(function (s) { return s.id === id; });
  }
  function hasData(id) { return !!(window.STEP_DATA && STEP_DATA[id]); }
  function statusOf(id) {
    var r = Store.peekStep(id);
    return r ? r.status : "new";
  }
  function recommended() {
    return allSteps.find(function (s) { return hasData(s.id) && statusOf(s.id) !== "cleared"; }) || null;
  }
  function nextAfter(id) {
    var i = allSteps.findIndex(function (s) { return s.id === id; });
    for (var j = i + 1; j < allSteps.length; j++) {
      if (hasData(allSteps[j].id)) return allSteps[j];
    }
    return null;
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

  function scoredQuestions(data) {
    return data.questions.filter(function (q) { return q.type !== "speak"; });
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
    var rec = recommended();
    var clearedCount = allSteps.filter(function (s) { return statusOf(s.id) === "cleared"; }).length;
    var greet;
    if (clearedCount === 0 && !Store.get().studyDays.length) {
      greet = "はじめまして！わたしは<b>うさぎ先生</b>。<br>いっしょに英語を、はじめから少しずつ学び直そうね。1回10分でだいじょうぶ！";
    } else if (rec) {
      greet = "おかえり！今日もいっしょにがんばろう。<br>次は<b>「" + esc(rec.label + " " + rec.title) + "」</b>だよ。";
    } else {
      greet = "すごい！今あるステップは全部クリアしたよ。<br>新しいステップができるまで、すきなステップを復習しよう。";
    }

    var html = '<section class="home-hero">' + sensei(clearedCount ? "happy" : "normal", greet);
    if (rec) {
      html += '<button type="button" class="btn btn-big" data-start="' + rec.id + '">今日の学習をはじめる ▶</button>';
    }
    html += "</section>";

    COURSE.forEach(function (grade) {
      html += '<section class="grade"><h2 class="grade-title">' + esc(grade.title) + "</h2><div class=\"islands\">";
      grade.units.forEach(function (unit) {
        var steps = unit.steps;
        var cleared = steps.filter(function (s) { return statusOf(s.id) === "cleared"; }).length;
        var ready = steps.some(function (s) { return hasData(s.id); });
        var cls = cleared === steps.length ? "island done" : ready ? "island" : "island locked";
        html += '<div class="' + cls + '"><div class="island-head"><span class="island-name">' + esc(unit.name) +
          '</span><span class="island-theme">' + esc(unit.theme) + "</span></div><ol class=\"path\">";
        steps.forEach(function (s) {
          var st = statusOf(s.id);
          var available = hasData(s.id);
          var stCls = !available ? "soon" : st;
          var mark = st === "cleared" ? "✔" : esc(s.label);
          var sub = !available ? "じゅんび中" : st === "cleared" ? "クリア！" : st === "learning" ? "学習中" : "";
          var isRec = rec && rec.id === s.id;
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
    html += '<p class="footnote">※ 6-3「現在進行形」は、教科書でどのUnitに出てくるか確認中のため、Unit 6 のあとに入れています。</p>';
    show(html);
  }

  // ---------- 学習の開始 ----------
  var cur = null; // いま学習中の内容

  function startStep(id) {
    var data = STEP_DATA[id];
    if (!data) return;
    var rec = Store.step(id);
    var indices = sessionIndices(data, rec.session);
    cur = { id: id, info: stepInfo(id), data: data, session: rec.session, indices: indices, pos: 0, answers: [] };

    // 途中でやめていたら、つづきから
    if (rec.partial && rec.partial.session === rec.session && rec.partial.pos < indices.length) {
      cur.pos = rec.partial.pos;
      cur.answers = rec.partial.answers || [];
    }
    Store.markStudyDay();
    Store.save();

    if (!rec.lessonSeen) {
      renderLesson(0);
    } else {
      renderResume(rec);
    }
  }

  function stepHeader() {
    return '<div class="step-head"><span class="step-unit">' + esc(cur.info.unit.name) + "</span>" +
      '<span class="step-name">' + esc(cur.info.label + "　" + cur.info.title) + "</span></div>";
  }

  function renderResume(rec) {
    var part = cur.session === 0 ? "前半" : "後半";
    var msg = cur.pos > 0
      ? "前回のつづき（" + part + "の " + (cur.pos + 1) + " 問目）から始めるよ。"
      : "今日は" + part + "の問題をやるよ。<br>説明をもう一度見てから始めてもいいよ。";
    if (rec.status === "cleared") msg = "このステップはクリアずみ！復習でもう一度ためしてみよう。<br>" + msg;
    show(stepHeader() + sensei("normal", msg) +
      '<div class="actions"><button type="button" class="btn btn-sub" data-act="lesson">説明を見る</button>' +
      '<button type="button" class="btn btn-big" data-act="quiz">問題へすすむ ▶</button></div>');
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

  function openLessonModal() {
    var html = '<h3 class="modal-title">' + esc(cur.info.label + " " + cur.info.title) + " のせつめい</h3>";
    cur.data.lesson.forEach(function (p) {
      html += '<div class="modal-page"><p class="modal-say">🐰 ' + fmt(p.say) + "</p>" + lessonPageHTML(p) + "</div>";
    });
    modalBody.innerHTML = html;
    modal.hidden = false;
    modal.querySelector(".modal-box").scrollTop = 0;
  }
  function closeModal() { modal.hidden = true; Speech.stop(); }

  // ---------- 問題 ----------
  function savePartial() {
    var rec = Store.step(cur.id);
    rec.partial = { session: cur.session, pos: cur.pos, answers: cur.answers };
    if (rec.status === "new") rec.status = "learning";
    Store.save();
  }

  function renderQuestion() {
    var rec = Store.step(cur.id);
    if (!rec.lessonSeen) { rec.lessonSeen = true; }
    savePartial();

    var q = cur.data.questions[cur.indices[cur.pos]];
    var total = cur.indices.length;
    var pct = Math.round((cur.pos / total) * 100);
    var html = stepHeader() +
      '<div class="quiz-top"><span class="quiz-count">もんだい ' + (cur.pos + 1) + " / " + total +
      '</span><div class="bar"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
      '<button type="button" class="btn-link" data-act="modal">📖 せつめいを見る</button></div>' +
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
      html += '<div class="passage">' + speakBtn(q.passage) + '<p>' + fmt(q.passage) + "</p></div>" +
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

  function choicesHTML(q) {
    var html = '<div class="choices">';
    q.choices.forEach(function (c, i) {
      html += '<button type="button" class="choice" data-choice="' + i + '"><span class="choice-no">' + (i + 1) +
        "</span>" + esc(c) + "</button>";
    });
    return html + "</div>";
  }

  function answerChoice(i) {
    var q = cur.data.questions[cur.indices[cur.pos]];
    var buttons = app.querySelectorAll(".choice");
    if (!buttons.length || buttons[0].disabled) return;
    var ok = i === q.answer;
    buttons.forEach(function (b, k) {
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
    cur.answers.push({ q: cur.indices[cur.pos], ok: ok });
    var head = ok ? '<span class="fb-title ok">⭕ せいかい！</span>' : '<span class="fb-title ng">おしい！ もう少し</span>';
    var body = head + (extra || "") +
      (ok ? "" : '<p class="fb-correct">正しい答え：<b>' + esc(correctText(q)) + "</b></p>") +
      (q.type === "listen" ? '<p class="fb-audio">' + speakBtn(q.audio) + " 音声：" + esc(q.audio) + "</p>" : "") +
      '<p class="fb-explain">' + fmt(q.explain || "") + "</p>";
    var html = '<div class="feedback ' + (ok ? "ok" : "ng") + '">' + sensei(ok ? "happy" : "cheer", body) +
      '<div class="actions">' +
      (ok ? "" : '<button type="button" class="btn btn-sub" data-act="modal">📖 せつめいにもどる</button>') +
      '<button type="button" class="btn btn-big" id="nextBtn" data-act="next">' +
      (cur.pos + 1 >= cur.indices.length ? "けっかを見る ▶" : "つぎへ ▶") + "</button></div></div>";
    var fb = document.getElementById("feedback");
    fb.innerHTML = html;
    fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function nextQuestion() {
    cur.pos++;
    if (cur.pos >= cur.indices.length) finishSession();
    else renderQuestion();
  }

  // ---------- 結果 ----------
  function finishSession() {
    var rec = Store.step(cur.id);
    var wasCleared = rec.status === "cleared";
    // 発音の問題は採点しないので、結果の数から外す
    cur.answers = cur.answers.filter(function (a) { return !a.speak; });
    cur.answers.forEach(function (a) { rec.results[a.q] = a.ok; });
    var got = cur.answers.filter(function (a) { return a.ok; }).length;
    var asked = cur.answers.length;
    delete rec.partial;

    var summary = { got: got, asked: asked, finishedStep: false, cleared: false, newlyCleared: false, wrong: [] };
    cur.answers.forEach(function (a) { if (!a.ok) summary.wrong.push(cur.data.questions[a.q]); });

    if (cur.session === 0) {
      rec.session = 1;
      if (!wasCleared) rec.status = "learning";
    } else {
      var scored = [];
      cur.data.questions.forEach(function (q, i) { if (q.type !== "speak") scored.push(i); });
      var total = scored.length;
      var correct = scored.filter(function (i) { return rec.results[i] === true; }).length;
      summary.finishedStep = true;
      summary.total = total;
      summary.correct = correct;
      summary.cleared = correct / total >= CLEAR_RATE;
      if (summary.cleared) {
        if (!wasCleared) { summary.newlyCleared = true; rec.clearedAt = new Date().toISOString(); }
        rec.status = "cleared";
      } else if (!wasCleared) {
        rec.status = "learning";
      }
      rec.session = 0;
      rec.results = {};
    }
    Store.save();
    renderResult(summary);
  }

  function renderResult(s) {
    var mood, msg;
    if (s.finishedStep && s.cleared) {
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

    var html = stepHeader() + sensei(mood, msg) + '<div class="card result">' +
      '<div class="score"><span class="score-num">' + s.got + '</span><span class="score-of"> / ' + s.asked + " 問 せいかい</span></div>";
    if (s.finishedStep) {
      html += '<p class="score-step">ステップ全体：' + s.correct + " / " + s.total + " 問（" + Math.ceil(s.total * CLEAR_RATE) +
        " 問以上でクリア）</p>";
    }
    if (s.wrong.length) {
      html += '<h3 class="result-sub">まちがえた問題の確認</h3><ul class="wrong-list">';
      s.wrong.forEach(function (q) {
        html += "<li><div class=\"wl-q\">" + esc(q.prompt) + (q.ja ? "　" + esc(q.ja) : "") +
          "</div><div class=\"wl-a\">正しい答え：<b>" + esc(correctText(q)) + "</b></div></li>";
      });
      html += "</ul>";
    }
    html += "</div>";

    var nextLabel, nextId;
    if (!s.finishedStep) { nextLabel = "つづけて後半をやる ▶"; nextId = cur.id; }
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
    if (t.dataset.choice) { answerChoice(Number(t.dataset.choice)); return; }
    if (t.dataset.pick !== undefined && order && !order.done) {
      order.picked.push(Number(t.dataset.pick)); drawOrder(); return;
    }
    if (t.dataset.unpick !== undefined && order && !order.done) {
      order.picked.splice(Number(t.dataset.unpick), 1); drawOrder(); return;
    }
    switch (t.dataset.act) {
      case "lesson": renderLesson(0); break;
      case "quiz": renderQuestion(); break;
      case "modal": openLessonModal(); break;
      case "order-reset": if (order && !order.done) { order.picked = []; drawOrder(); } break;
      case "order-check": checkOrder(); break;
      case "spoke": cur.answers.push({ q: cur.indices[cur.pos], ok: true, speak: true }); nextQuestion(); break;
      case "next": nextQuestion(); break;
      case "home": renderHome(); break;
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
      var c = app.querySelector('.choice[data-choice="' + (Number(e.key) - 1) + '"]');
      if (c && !c.disabled) c.click();
    }
  });

  document.getElementById("brand").addEventListener("click", function () { closeModal(); renderHome(); });
  var slow = document.getElementById("slowToggle");
  slow.checked = !!Store.get().settings.slow;
  slow.addEventListener("change", function () { Store.setSlow(slow.checked); });

  renderHome();
})();
