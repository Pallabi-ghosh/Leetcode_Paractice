function clock() {
  return setInterval(() => {
    let date = new Date();
    let tick = date.toLocaleTimeString();
    document.getElementById("span").innerHTML = tick;
  }, 5000);
}

clock();

var today = new Date().toLocaleTimeString();
console.log(today);

const d = new Date();
d.getDate();
console.log(d);

function favTutorial(event) {
  event.preventDefault();
  const state = document.getElementById("myList");

  if (state.value === "") {
    alert("gjhkjljl");

    state.focus();

    return;
  }
}

let buttonSubmit = document.getElementById("buttonSubmit");
console.log(buttonSubmit);

buttonSubmit.addEventListener("click", () => {
  window.alert("gjhkkjlk");
});
