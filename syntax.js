const editor = document.getElementById("editor");
const highlighted = document.getElementById("highlighted");

// mode switcher
function setMode(mode) {
  document.body.className = mode;
}

// naive highlighter
function highlight(code) {
  let html = code
    // comments
    .replace(/\{\/\^\\\}[\s\S]*?"\{\/\^\\\}/g, m => `<span class="comment">${m}</span>`)
    // strings (start with &something)
    .replace(/&[^\s]+/g, m => `<span class="string">${m}</span>`)
    // numbers
    .replace(/\b\d+\b/g, m => `<span class="number">${m}</span>`)
    // keywords
    .replace(/\b(പറയുക|കണക്ക്|എങ്കിൽ|പിന്നെ|അല്ലെങ്കിൽ|അതേ-സമയം|പ്രവർത്തനം|നിർവ്വചിക്കുക)\b/g,
      m => `<span class="keyword">${m}</span>`);
  return html;
}

editor.addEventListener("input", () => {
  highlighted.innerHTML = highlight(editor.value);
});

// initial
highlighted.innerHTML = highlight(editor.value);
