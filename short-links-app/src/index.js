const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const submitMsg = document.getElementById("submit-msg");

btn.addEventListener("click", toggleNav);

function toggleNav() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}

linkForm.addEventListener("submit", formSubmit);

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

const getShortLink = async (url) => {
  const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      group_guid: "Bma8kr2oGog",
      long_url: url,
    }),
  });

  const data = await res.json();

  return data.link;
};

function resetForm() {
  input.classList.remove("border-rose-500");
  input.classList.remove("border-teal-400");
  submitMsg.classList.remove("text-teal-400");
  submitMsg.classList.remove("text-rose-500");
}

// Could add toats for successful submit
async function formSubmit(ev) {
  ev.preventDefault();
  resetForm();

  if (input.value === "" || !validURL(input.value)) {
    input.classList.add("border-rose-500");
    submitMsg.classList.add("text-rose-500");

    submitMsg.innerHTML = "Make sure you enter a valid url";
  } else {
    const shortLink = await getShortLink(input.value);

    input.classList.add("border-teal-400");
    submitMsg.classList.add("text-teal-400");

    submitMsg.innerHTML = `<a href="${shortLink}" class="hover:underline hover:underline-offset-1">${shortLink}</a>`;
    input.value = "";
  }
}

linkForm.addEventListener("submit", formSubmit);
