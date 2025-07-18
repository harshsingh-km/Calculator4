const display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0') display.innerText = '';
  display.innerText += value;
}

function clearDisplay() {
  display.innerText = '0';
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/[^-+*/.\\d]/g, ''));
  } catch {
    display.innerText = 'Error';
  }
}

// Language strings
const strings = {
  en: { title: "Smart Calculator", langLabel: "Language:" },
  hi: { title: "स्मार्ट कैलकुलेटर", langLabel: "भाषा:" },
  ur: { title: "سمارٹ کیلکولیٹر", langLabel: "زبان:" },
  ta: { title: "ஸ்மார்ட் கால்குலேட்டர்", langLabel: "மொழி:" },
  bn: { title: "স্মার্ট ক্যালকুলেটর", langLabel: "ভাষা:" }
};

document.getElementById('language').addEventListener('change', () => {
  const lang = document.getElementById('language').value;
  document.getElementById('title').innerText = strings[lang].title;
  document.getElementById('langLabel').innerText = strings[lang].langLabel;
});
