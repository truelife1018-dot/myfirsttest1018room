// うさぎ先生のイラスト（mood：normal ふつう / happy にっこり / cheer はげまし）
window.rabbitSVG = function (mood) {
  mood = mood || "normal";
  var eyes, mouth, extra = "";

  if (mood === "happy") {
    eyes =
      '<path d="M42 66 q6 -7 12 0" class="rb-line"/>' +
      '<path d="M66 66 q6 -7 12 0" class="rb-line"/>';
    mouth = '<path d="M52 82 q8 10 16 0" class="rb-line"/>';
    extra =
      '<path d="M100 22 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" class="rb-star"/>' +
      '<path d="M14 36 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" class="rb-star"/>';
  } else if (mood === "cheer") {
    eyes =
      '<ellipse cx="48" cy="66" rx="4" ry="5" class="rb-eye"/>' +
      '<ellipse cx="72" cy="66" rx="4" ry="5" class="rb-eye"/>' +
      '<circle cx="49.5" cy="64" r="1.4" fill="#fff"/>' +
      '<circle cx="73.5" cy="64" r="1.4" fill="#fff"/>' +
      '<path d="M42 56 q6 -4 12 -1" class="rb-line thin"/>' +
      '<path d="M78 56 q-6 -4 -12 -1" class="rb-line thin"/>';
    mouth = '<path d="M53 81 q7 7 14 0" class="rb-line"/>';
    extra =
      '<path d="M104 52 q4 -8 8 0 q-4 6 -8 0z" class="rb-heart"/>' +
      '<path d="M100 60 l2 4 4 2 -4 2 -2 4 -2 -4 -4 -2 4 -2z" class="rb-star"/>';
  } else {
    eyes =
      '<ellipse cx="48" cy="66" rx="4" ry="5" class="rb-eye"/>' +
      '<ellipse cx="72" cy="66" rx="4" ry="5" class="rb-eye"/>' +
      '<circle cx="49.5" cy="64" r="1.4" fill="#fff"/>' +
      '<circle cx="73.5" cy="64" r="1.4" fill="#fff"/>';
    mouth = '<path d="M54 80 q3 4 6 0 q3 4 6 0" class="rb-line"/>';
  }

  return (
    '<svg class="rabbit" viewBox="0 0 120 120" role="img" aria-label="うさぎ先生">' +
      '<ellipse cx="44" cy="26" rx="10" ry="24" class="rb-fur" transform="rotate(-10 44 26)"/>' +
      '<ellipse cx="44" cy="28" rx="5" ry="17" class="rb-inner" transform="rotate(-10 44 28)"/>' +
      '<ellipse cx="76" cy="26" rx="10" ry="24" class="rb-fur" transform="rotate(10 76 26)"/>' +
      '<ellipse cx="76" cy="28" rx="5" ry="17" class="rb-inner" transform="rotate(10 76 28)"/>' +
      '<ellipse cx="60" cy="74" rx="36" ry="32" class="rb-fur"/>' +
      '<ellipse cx="38" cy="78" rx="6" ry="4" class="rb-cheek"/>' +
      '<ellipse cx="82" cy="78" rx="6" ry="4" class="rb-cheek"/>' +
      eyes +
      '<ellipse cx="60" cy="75" rx="3.5" ry="2.6" class="rb-nose"/>' +
      mouth +
      extra +
    "</svg>"
  );
};
