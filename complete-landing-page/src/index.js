const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

tabs.forEach((tab) => tab.addEventListener("click", handleTabSelection));

btn.addEventListener("click", navToggle);

function handleTabSelection(e) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-9"
    );
  });

  panels.forEach((panel) => panel.classList.add("hidden"));

  e.target.classList.add("border-softRed", "border-b-4");
  const classData = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classData)[0]
    .classList.remove("hidden");
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "../assets/images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "../assets/images/logo-bookmark.svg");
  }
}
