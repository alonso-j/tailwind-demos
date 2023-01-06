const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => tab.addEventListener("click", handleTabSelection));

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
