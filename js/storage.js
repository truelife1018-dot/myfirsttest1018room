// 学習記録の保存（このパソコンのブラウザの中だけに保存します）
(function () {
  var KEY = "eigo-manabi-v1";

  function empty() {
    return { version: 1, steps: {}, settings: { slow: false }, studyDays: [] };
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return empty();
      var data = JSON.parse(raw);
      var base = empty();
      data.steps = data.steps || base.steps;
      data.settings = data.settings || base.settings;
      data.studyDays = data.studyDays || base.studyDays;
      return data;
    } catch (e) {
      return empty();
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

  function today() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  window.Store = {
    get: function () { return state; },
    save: save,
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
    setSlow: function (v) { state.settings.slow = !!v; save(); }
  };
})();
