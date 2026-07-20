// Email is assembled at runtime, not present as plain text anywhere in the
// HTML source, to cut down on bots scraping public pages for addresses to
// spam. Real visitors clicking the link still get a normal mailto: --
// this only deters scrapers reading raw HTML/JSON-LD, not a determined
// attacker inspecting rendered JS output.
const namePart = ["r", "i", "b", "a", "k", "l", "a"].reverse().join("");
const orgPart = ["u", "a"].reverse().join("");
const tldPart = ["e", "e"].reverse().join("");
const email = `${namePart}.${orgPart}.${tldPart}@gmail.com`;

document.querySelectorAll(".js-email-link").forEach((link) => {
  link.href = `mailto:${email}`;
});
