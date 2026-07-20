const toggle = document.getElementById("theme-toggle");
const iconSun = document.getElementById("icon-sun");
const iconMoon = document.getElementById("icon-moon");

function syncIcons() {
  const isDark = document.documentElement.classList.contains("dark");
  iconSun.classList.toggle("hidden", !isDark);
  iconMoon.classList.toggle("hidden", isDark);
}

syncIcons();

toggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  syncIcons();
});
