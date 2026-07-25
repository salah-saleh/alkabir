// Rotates the 3-paragraph "Why Alkabir" story in place, one paragraph
// visible at a time, instead of showing all three stacked. Auto-advances
// every 12s (slower than the hero's tagline rotator -- this is prose meant
// to be read, not a quick tagline) but the dots let a reader jump to any
// part directly, and clicking a dot restarts the auto-advance timer from
// there instead of fighting it.
const slides = document.querySelectorAll("#story-rotator .story-slide");
const dots = document.querySelectorAll("#story-dots .story-dot");

if (slides.length && slides.length === dots.length) {
  let index = 0;
  let timer;

  function show(newIndex) {
    slides[index].style.opacity = "0";
    dots[index].classList.remove("bg-primary");
    dots[index].classList.add("bg-border");

    index = newIndex;

    slides[index].style.opacity = "1";
    dots[index].classList.remove("bg-border");
    dots[index].classList.add("bg-primary");
  }

  function startAutoAdvance() {
    clearInterval(timer);
    timer = setInterval(() => show((index + 1) % slides.length), 12000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      show(i);
      startAutoAdvance();
    });
  });

  startAutoAdvance();
}
