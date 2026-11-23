// 学習記録の保存（このパソコンのブラウザの中だけに保存します）
(function () {
  var KEY = "eigo-manabi-v1";
  var REVIEW_DAYS = [1, 3, 7]; // 復習の間隔：翌日 → 3日後 → 1週間後

  function empty() {
    return {
      version: 1,
      steps: {},
      settings: { slow: false },
      studyDays: [],
      reviews: {},
      diag: { part: 0, pos: 0, answers: {}, done: false, skipped: false }
    };
  }

  function load() {
    var base = empty();
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return base;
      var data = JSON.parse(raw);
      Object.keys(base).forEach(function (k) {
        if (data[k] === undefined) data[k] = base[k];
      });
      return data;
    } catch (e) {
      return base;
    }
  }

  var state = load();

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      // 保存できない環境（プライベートモードなど）でも、アプリは動くようにする
    }
  }

  function dateStr(d) {
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }
  function today() { return dateStr(new Date()); }
  function daysLater(n) {
    var d = new Date();
    d.setDate(d.getDate() + n);
    return dateStr(d);
  }

  window.Store = {
    get: function () { return state; },
    save: save,
    today: today,
    // ステップの記録（なければ新しく作る）
    step: function (id) {
      if (!state.steps[id]) {
        state.steps[id] = { status: "new", session: 0, lessonSeen: false, results: {} };
      }
      return state.steps[id];
    },
    peekStep: function (id) { return state.steps[id] || null; },
    markStudyDay: function () {
      var t = today();
      if (state.studyDays.indexOf(t) === -1) state.studyDays.push(t);
    },
    setSlow: function (v) { state.settings.slow = !!v; save(); },

    // ----- 自動復習 -----
    // まちがえた問題を復習リストに入れる（すでにあれば、翌日からやり直し）
    addReview: function (stepId, qi) {
      var key = stepId + "#" + qi;
      state.reviews[key] = { step: stepId, q: qi, stage: 0, due: daysLater(REVIEW_DAYS[0]) };
    },
    // 復習の結果：正解なら次の間隔へ。3回続けて正解でリストから外す。まちがえたら翌日から。
    reviewResult: function (stepId, qi, ok) {
      var key = stepId + "#" + qi;
      var r = state.reviews[key];
      if (!r) return;
      if (ok) {
        r.stage += 1;
        if (r.stage >= REVIEW_DAYS.length) delete state.reviews[key];
        else r.due = daysLater(REVIEW_DAYS[r.stage]);
      } else {
        r.stage = 0;
        r.due = daysLater(REVIEW_DAYS[0]);
      }
    },
    // 今日が復習の日になっている問題（古い順）
    dueReviews: function () {
      var t = today();
      return Object.keys(state.reviews)
        .map(function (k) { return state.reviews[k]; })
        .filter(function (r) { return r.due <= t; })
        .sort(function (a, b) { return a.due < b.due ? -1 : a.due > b.due ? 1 : 0; });
    },
    reviewCount: function () { return Object.keys(state.reviews).length; },

    // ----- 診断テスト -----
    diag: function () { return state.diag; },
    resetDiag: function () {
      state.diag = { part: 0, pos: 0, answers: {}, done: false, skipped: false };
      save();
    }
  };
})();
