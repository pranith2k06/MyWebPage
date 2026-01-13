const toggle = document.getElementById("darkToggle");
const darkIcon = document.getElementById("darkIcon");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.setAttribute("data-theme", "dark");
  darkIcon.src = "sun.png";
}

toggle.addEventListener("click", () => {
  toggle.classList.add("spinning");

  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    darkIcon.src = "dark.png";
  } else {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkIcon.src = "sun.png";
  }

  setTimeout(() => {
    toggle.classList.remove("spinning");
  }, 600);
});