// 保護者画面：学習の様子の確認と、記録のバックアップ
// （4けたの番号は、お子さんがまちがって開かないためのものです。本格的な鍵ではありません）
(function () {
  "use strict";

  var PLAN_END = "2027-03-31";   // 中1・中2の学び直しを終える目標の日
  var BACKUP_REMIND_DAYS = 30;   // この日数バックアップしていなければ、お知らせする
  var WEAK_MIN_ANSWERS = 5;      // 苦手ランキングに入れる、最低の解答数
  var WEAK_RATE = 0.8;           // この正解率より低いと「苦手」

  var app = document.getElementById("app");
  var unlocked = false;
  var calMonth = null; // カレンダーで表示している月（その月の1日）

  function A() { return window.App; }
  function esc(s) { return A().esc(s); }

  function parseDate(str) {
    var p = str.split("-");
    return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  }
  function daysBetween(a, b) { return Math.round((parseDate(b) - parseDate(a)) / 86400000); }
  function fmtDate(str) {
    var d = parseDate(str);
    return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
  }
  function pct(ok, n) { return n ? Math.round((ok / n) * 100) : null; }

  // ---------- 番号の入力 ----------
  function open() {
    A().closeModal();
    if (unlocked) { render(); return; }
    var hasPin = !!Store.get().settings.pin;
    var html = '<div class="parent-gate card">' +
      '<h2 class="parent-title">👪 保護者の方へ</h2>' +
      (hasPin
        ? "<p>4けたの番号を入れてください。</p>"
        : "<p>はじめて開くときは、保護者画面用の<b>4けたの番号</b>を決めてください。<br>お子さんがまちがって開かないためのものです。</p>") +
      '<form id="pinForm" class="pin-form" autocomplete="off">' +
      '<input id="pin1" class="pin-input" type="password" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" placeholder="●●●●" aria-label="4けたの番号" required>' +
      (hasPin ? "" : '<input id="pin2" class="pin-input" type="password" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" placeholder="もう一度" aria-label="確認のためもう一度" required>') +
      '<button type="submit" class="btn btn-big">' + (hasPin ? "開く" : "番号を決めて開く") + "</button></form>" +
      '<p class="pin-msg" id="pinMsg" role="alert"></p>' +
      (hasPin ? '<button type="button" class="btn-link small" data-pact="pin-forgot">番号を忘れたとき</button>' : "") +
      '<div class="actions"><button type="button" class="btn btn-sub" data-act="home">お子さんの画面（ホーム）へもどる</button></div></div>';
    A().show(html);
    document.getElementById("pin1").focus();
  }

  function submitPin() {
    var p1 = document.getElementById("pin1").value;
    var p2el = document.getElementById("pin2");
    var msg = document.getElementById("pinMsg");
    if (!/^[0-9]{4}$/.test(p1)) { msg.textContent = "数字4けたで入れてください。"; return; }
    var pin = Store.get().settings.pin;
    if (!pin) {
      if (p2el.value !== p1) { msg.textContent = "2つの番号がちがいます。もう一度入れてください。"; return; }
      Store.setPin(p1);
    } else if (p1 !== pin) {
      msg.textContent = "番号がちがいます。";
      document.getElementById("pin1").value = "";
      return;
    }
    unlocked = true;
    render();
  }

  // ---------- 保護者画面 ----------
  function render() {
    var st = Store.get();
    var html = '<div class="parent-head"><h2 class="parent-title">👪 保護者画面</h2>' +
      '<button type="button" class="btn btn-sub" data-pact="close">お子さんの画面へもどる</button></div>';
    html += backupNotice(st);
    html += progressSection(st);
    html += calendarSection(st);
    html += weakSection(st);
    html += stepsSection(st);
    html += backupSection(st);
    html += settingsSection();
    A().show(html);
  }

  function backupNotice(st) {
    var last = st.settings.lastBackup;
    var t = Store.today();
    if (st.studyDays.length === 0) return "";
    if (last && daysBetween(last, t) < BACKUP_REMIND_DAYS) return "";
    return '<div class="notice">💾 ' + (last ? "前回のバックアップから " + daysBetween(last, t) + " 日たっています。" : "まだバックアップがありません。") +
      ' 記録が消えたときのために、<a href="#backup">下のバックアップ</a>で保存しておくと安心です。</div>';
  }

  // 予定に対する進み具合
  function progressSection(st) {
    var steps = A().allSteps;
    var t = Store.today();
    var done = steps.filter(function (s) { return A().statusOf(s.id) === "cleared" || A().known(s.id); });
    var g1 = steps.filter(function (s) { return s.grade.grade === 1; });
    var g2 = steps.filter(function (s) { return s.grade.grade === 2; });
    var count = function (list) { return list.filter(function (s) { return done.indexOf(s) !== -1; }).length; };

    var days = st.studyDays.slice().sort();
    var start = days[0] || t;
    var total = Math.max(1, daysBetween(start, PLAN_END));
    var elapsed = Math.min(total, Math.max(0, daysBetween(start, t)));
    var expected = Math.round(steps.length * elapsed / total);
    var diff = done.length - expected;
    var left = Math.max(0, daysBetween(t, PLAN_END));
    var perWeek = left > 0 ? ((steps.length - done.length) / (left / 7)).toFixed(1) : "-";

    var status, cls;
    if (diff >= 1) { status = "予定より " + diff + " ステップ先に進んでいます"; cls = "good"; }
    else if (diff >= -1) { status = "予定どおりです"; cls = "good"; }
    else { status = "予定より " + (-diff) + " ステップおくれています"; cls = "late"; }

    var notReady = steps.filter(function (s) { return !A().hasData(s.id); }).length;
    var html = '<section class="p-section"><h3>📈 進み具合</h3>' +
      '<div class="p-progress ' + cls + '"><b>' + status + "</b></div>" +
      '<div class="p-bars">' + bar("中学1年", count(g1), g1.length) + bar("中学2年", count(g2), g2.length) + bar("全体", done.length, steps.length) + "</div>" +
      '<ul class="p-facts">' +
      "<li>目標：<b>" + fmtDate(PLAN_END) + "</b> までに全 " + steps.length + " ステップ（あと " + left + " 日）</li>" +
      "<li>今日の時点の目安：" + expected + " ステップ ／ 実際：" + done.length + " ステップ（クリア＋診断テストで★）</li>" +
      "<li>このあとのペース：週に約 <b>" + perWeek + " ステップ</b> で目標に間に合います</li>";
    if (notReady) html += '<li class="muted">※ ' + notReady + " ステップは、まだ問題を準備中です（準備中のステップは先に進めません）。</li>";
    var d = st.diag;
    html += "<li>診断テスト：" + (d.done ? "受験ずみ（" + (d.finishedAt ? fmtDate(d.finishedAt.slice(0, 10)) : "") + "）・★ " +
      steps.filter(function (s) { return d.answers[s.id] === true; }).length + " ステップ" : d.skipped ? "とばしました" : "まだ（" + d.part + " / 3 回 受験ずみ）") + "</li>";
    html += "</ul></section>";
    return html;
  }
  function bar(label, n, total) {
    var w = total ? Math.round(n / total * 100) : 0;
    return '<div class="p-bar"><span class="p-bar-label">' + label + '</span><div class="bar"><div class="bar-fill" style="width:' + w +
      '%"></div></div><span class="p-bar-num">' + n + " / " + total + "</span></div>";
  }

  // 学習した日のカレンダー
  function calendarSection(st) {
    var t = parseDate(Store.today());
    if (!calMonth) calMonth = new Date(t.getFullYear(), t.getMonth(), 1);
    var y = calMonth.getFullYear(), m = calMonth.getMonth();
    var studied = {};
    st.studyDays.forEach(function (d) { studied[d] = true; });

    var monthPrefix = y + "-" + String(m + 1).padStart(2, "0") + "-";
    var monthDays = st.studyDays.filter(function (d) { return d.indexOf(monthPrefix) === 0; }).length;

    var html = '<section class="p-section"><h3>📅 学習した日</h3>' +
      '<div class="cal-head"><button type="button" class="btn-link" data-pact="cal-prev" aria-label="前の月">◀</button>' +
      "<b>" + y + "年 " + (m + 1) + "月</b>" +
      '<button type="button" class="btn-link" data-pact="cal-next" aria-label="次の月">▶</button></div>' +
      '<p class="cal-sum">この月：<b>' + monthDays + " 日</b>　／　これまでの合計：<b>" + st.studyDays.length + " 日</b></p>" +
      '<div class="cal"><div class="cal-w sun">日</div><div class="cal-w">月</div><div class="cal-w">火</div><div class="cal-w">水</div><div class="cal-w">木</div><div class="cal-w">金</div><div class="cal-w sat">土</div>';
    var first = new Date(y, m, 1).getDay();
    var last = new Date(y, m + 1, 0).getDate();
    for (var i = 0; i < first; i++) html += '<div class="cal-d empty"></div>';
    for (var d = 1; d <= last; d++) {
      var key = monthPrefix + String(d).padStart(2, "0");
      var info = st.daily[key];
      var isToday = y === t.getFullYear() && m === t.getMonth() && d === t.getDate();
      var title = studied[key] ? "学習した日" + (info ? "：" + info.n + " 問（正解 " + info.ok + "）" : "") : "";
      html += '<div class="cal-d' + (studied[key] ? " on" : "") + (isToday ? " today" : "") + '"' + (title ? ' title="' + title + '"' : "") + ">" +
        '<span class="cal-num">' + d + "</span>" +
        (studied[key] ? '<span class="cal-mark">' + (info ? info.n + "問" : "✔") + "</span>" : "") + "</div>";
    }
    html += '</div><p class="muted small">色のついた日が学習した日です。数字はその日に解いた問題の数です。</p></section>';
    return html;
  }

  // 苦手なステップ
  function weakSection(st) {
    var list = A().allSteps.map(function (s) {
      var x = st.stats[s.id];
      return { s: s, n: x ? x.n : 0, ok: x ? x.ok : 0 };
    }).filter(function (r) { return r.n >= WEAK_MIN_ANSWERS && r.ok / r.n < WEAK_RATE; })
      .sort(function (a, b) { return a.ok / a.n - b.ok / b.n; })
      .slice(0, 5);
    var html = '<section class="p-section"><h3>🔍 苦手なステップ（正解率が低い順）</h3>';
    if (!list.length) {
      html += "<p>今のところ、苦手なステップはありません。<br><span class=\"muted small\">（" + WEAK_MIN_ANSWERS +
        " 問以上解いて、正解率が " + WEAK_RATE * 100 + "% 未満のステップをここに表示します）</span></p>";
    } else {
      html += '<ol class="weak-list">';
      list.forEach(function (r) {
        var p = pct(r.ok, r.n);
        html += '<li><span class="weak-name">' + esc(r.s.grade.title.replace("中学", "中") + " " + r.s.label + " " + r.s.title) + "</span>" +
          '<span class="weak-rate">' + p + "%</span><span class=\"muted small\">（" + r.ok + " / " + r.n + " 問）</span></li>";
      });
      html += '</ol><p class="muted small">声をかけるときは「どこがわからなかった？」と、いっしょに説明画面を見るのがおすすめです。</p>';
    }
    return html + "</section>";
  }

  // ステップごとの状態と正解率
  function stepsSection(st) {
    var reviewsByStep = {};
    Object.keys(st.reviews).forEach(function (k) {
      var r = st.reviews[k];
      reviewsByStep[r.step] = (reviewsByStep[r.step] || 0) + 1;
    });
    var html = '<section class="p-section"><h3>📋 ステップごとの記録</h3>' +
      '<div class="table-wrap"><table class="p-table"><thead><tr><th>ステップ</th><th>状態</th><th>正解率</th><th>復習待ち</th></tr></thead><tbody>';
    var lastGrade = null;
    A().allSteps.forEach(function (s) {
      if (s.grade !== lastGrade) {
        html += '<tr class="grade-row"><td colspan="4">' + esc(s.grade.title) + "</td></tr>";
        lastGrade = s.grade;
      }
      var x = st.stats[s.id];
      var p = x ? pct(x.ok, x.n) : null;
      var stt = A().statusOf(s.id);
      var label, cls;
      if (stt === "cleared") { label = "✔ クリア"; cls = "c-clear"; }
      else if (A().known(s.id)) { label = "★ 診断でOK"; cls = "c-known"; }
      else if (!A().hasData(s.id)) { label = "準備中"; cls = "c-soon"; }
      else if (stt === "learning") { label = "学習中"; cls = "c-learn"; }
      else { label = "まだ"; cls = "c-new"; }
      html += '<tr><td><span class="t-label">' + esc(s.label) + "</span> " + esc(s.title) + "</td>" +
        '<td><span class="chip-s ' + cls + '">' + label + "</span></td>" +
        "<td>" + (p === null ? '<span class="muted">—</span>' : '<span class="' + (p < WEAK_RATE * 100 && x.n >= WEAK_MIN_ANSWERS ? "low" : "") + '">' + p + "%</span> <span class=\"muted small\">(" + x.ok + "/" + x.n + ")</span>") + "</td>" +
        "<td>" + (reviewsByStep[s.id] ? reviewsByStep[s.id] + " 問" : '<span class="muted">—</span>') + "</td></tr>";
    });
    html += '</tbody></table></div><p class="muted small">正解率は、ふつうの問題と復習問題をあわせた全解答の割合です（第4段階より前の解答は入っていません）。</p></section>';
    return html;
  }

  // バックアップ
  function backupSection(st) {
    var last = st.settings.lastBackup;
    return '<section class="p-section" id="backup"><h3>💾 記録のバックアップ</h3>' +
      "<p>学習の記録は、このパソコンのChromeの中だけに保存されています。Chromeの「閲覧履歴データの削除」をすると消えてしまうので、<b>月に1回ほどファイルに保存</b>しておくと安心です。</p>" +
      '<p class="muted small">前回のバックアップ：' + (last ? fmtDate(last) : "まだありません") + "</p>" +
      '<div class="backup-actions">' +
      '<button type="button" class="btn" data-pact="export">📥 記録をファイルに保存する</button>' +
      '<label class="btn btn-sub file-btn">📤 ファイルから記録を元にもどす<input type="file" id="importFile" accept=".json,application/json" hidden></label>' +
      '</div><p class="pin-msg" id="importMsg" role="alert"></p>' +
      '<p class="muted small">保存したファイルは「ダウンロード」フォルダに入ります。元にもどすと、今の記録はファイルの内容に置きかわります。</p></section>';
  }

  function settingsSection() {
    return '<section class="p-section"><h3>⚙️ 設定</h3><div class="backup-actions">' +
      '<button type="button" class="btn btn-sub" data-pact="pin-change">保護者画面の番号を変える</button>' +
      "</div></section>";
  }

  function doExport() {
    Store.markBackup(); // ファイルの中にも「前回のバックアップ日」が入るよう、先に記録する
    var data = Store.exportData();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "eigo-manabi-backup-" + Store.today() + ".json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    render();
  }

  function doImport(file) {
    var msg = document.getElementById("importMsg");
    var reader = new FileReader();
    reader.onload = function () {
      var data;
      try { data = JSON.parse(reader.result); } catch (e) { data = null; }
      if (!data || data.version !== 1 || typeof data.steps !== "object" || !Array.isArray(data.studyDays)) {
        msg.textContent = "このファイルは、このアプリのバックアップではないようです。";
        return;
      }
      var when = data.exportedAt ? fmtDate(data.exportedAt.slice(0, 10)) + "に保存した" : "";
      if (!window.confirm(when + "記録にもどします。今の記録は、ファイルの内容に置きかわります。よろしいですか？")) return;
      if (Store.importData(data)) {
        window.alert("記録を元にもどしました。");
        location.reload();
      } else {
        msg.textContent = "読みこめませんでした。";
      }
    };
    reader.onerror = function () { msg.textContent = "ファイルを読めませんでした。"; };
    reader.readAsText(file);
  }

  // ---------- 操作の受けつけ ----------
  app.addEventListener("click", function (e) {
    var t = e.target.closest("[data-pact]");
    if (!t) return;
    switch (t.dataset.pact) {
      case "close": unlocked = false; A().home(); break;
      case "cal-prev": calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() - 1, 1); render(); break;
      case "cal-next": calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() + 1, 1); render(); break;
      case "export": doExport(); break;
      case "pin-change":
        Store.setPin("");
        unlocked = false;
        open();
        break;
      case "pin-forgot":
        if (window.confirm("番号をリセットして、新しい番号を決めなおしますか？（学習の記録は消えません）")) {
          Store.setPin("");
          open();
        }
        break;
    }
  });
  app.addEventListener("submit", function (e) {
    if (e.target.id === "pinForm") { e.preventDefault(); submitPin(); }
  });
  app.addEventListener("change", function (e) {
    if (e.target.id === "importFile" && e.target.files[0]) doImport(e.target.files[0]);
  });

  window.Parent = {
    open: open,
    lock: function () { unlocked = false; }
  };
})();
