const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

// Could add toats for successful submit
const formSubmit = (ev) => {
  ev.preventDefault();

  if (input.value === "" || !validURL(input.value)) {
    input.classList.add("border-red");
    errMsg.innerHTML = "Make sure you enter a valid url";
  } else {
    input.classList.remove("border-red");
    errMsg.innerHTML = "";
    input.value = "";
  }
};

linkForm.addEventListener("submit", formSubmit);
