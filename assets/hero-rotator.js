// Cycles the green second line of the hero headline through a few catchy
// value props (pipe-separated in data-values on the element itself, so the
// copy lives in the HTML, not buried in JS). Fades out, swaps text, fades
// back in -- CSS transition already declared on the element's own classes.
//
// Phrases vary a lot in length ("with code, not chaos." vs "built right,
// not just built fast."), and the element is forced to one line
// (whitespace-nowrap) so swapping text never reflows the paragraph below
// it. Font-size shrinks per-phrase to fit -- measured against the subhead
// paragraph's width, NOT the h1's own box: the h1 sits in a 1fr grid
// column with no fixed width, so a wide nowrap phrase would just stretch
// the column (and shove the photo sideways) instead of ever being
// measured as "too wide." The paragraph has its own max-width and normal
// wrapping, so its rendered width is a stable reference either way.
const rotatingEl = document.getElementById("rotating-value");
const widthRef = document.getElementById("hero-subhead");

const rawValues = rotatingEl && rotatingEl.dataset.values;

if (rotatingEl && widthRef && rawValues) {
  const values = rawValues.split("|");
  const baseFontSize = parseFloat(getComputedStyle(rotatingEl).fontSize);
  let index = 0;
  let swapTimeout;

  function fitFontSize() {
    const available = widthRef.getBoundingClientRect().width;
    rotatingEl.style.fontSize = `${baseFontSize}px`;
    const needed = rotatingEl.getBoundingClientRect().width;
    if (needed > available) {
      rotatingEl.style.fontSize = `${baseFontSize * (available / needed)}px`;
    }
  }

  fitFontSize();
  window.addEventListener("resize", fitFontSize);

  setInterval(() => {
    index = (index + 1) % values.length;
    rotatingEl.style.opacity = "0";

    clearTimeout(swapTimeout);
    swapTimeout = setTimeout(() => {
      rotatingEl.textContent = values[index];
      fitFontSize();
      rotatingEl.style.opacity = "1";
    }, 300);
  }, 2800);
}
