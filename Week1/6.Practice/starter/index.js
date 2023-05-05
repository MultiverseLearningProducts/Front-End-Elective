const button = document.querySelector(".button");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  button.classList.toggle("shakey");
  input.classList.toggle("shakey");

  setTimeout(() => {
    button.classList.toggle("shakey");
    input.classList.toggle("shakey");
  }, 500);
});
