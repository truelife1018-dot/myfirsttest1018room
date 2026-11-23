// 英語の読み上げ（Chromeの読み上げ機能を使います）
(function () {
  var synth = window.speechSynthesis;
  var voice = null;

  function pickVoice() {
    if (!synth) return;
    var voices = synth.getVoices();
    var en = voices.filter(function (v) { return /^en[-_]US/i.test(v.lang); });
    voice =
      en.find(function (v) { return /Google/.test(v.name); }) ||
      en[0] ||
      voices.find(function (v) { return /^en/i.test(v.lang); }) ||
      null;
  }

  if (synth) {
    pickVoice();
    if (typeof synth.onvoiceschanged !== "undefined") synth.onvoiceschanged = pickVoice;
  }

  window.Speech = {
    available: !!synth,
    speak: function (text) {
      if (!synth) return;
      synth.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      if (voice) u.voice = voice;
      u.rate = window.Store && Store.get().settings.slow ? 0.6 : 0.9;
      synth.speak(u);
    },
    stop: function () { if (synth) synth.cancel(); }
  };
})();
