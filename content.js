const sabotage = (text) => {
  // Example chaos functions
  text = text.replace(/\btheir\b/gi, 'thier');
  text = text.replace(/\bthe\b/gi, () => Math.random() > 0.5 ? 'teh' : 'thee');
  text = text.replace(/\bexcellent\b/gi, 'mediocre');
  if (Math.random() > 0.7) text += ' lol';
  return text;
};

// Target inputs, textareas, and contenteditable
document.addEventListener('input', (e) => {
  if (e.target.isContentEditable || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    let original = e.target.isContentEditable ? e.target.innerText : e.target.value;
    let ruined = sabotage(original);
    if (ruined !== original) {
      if (e.target.isContentEditable) {
        e.target.innerText = ruined;
      } else {
        e.target.value = ruined;
      }
    }
  }
});
