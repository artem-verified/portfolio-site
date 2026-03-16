console.log("JavaScript работает");
const button = document.querySelector("#contactBtn");
button.addEventListener("click", function () {
  alert("Спасибо за интерес! Скоро свяжемся.");
});

const textButton = document.querySelector("#changeTextBtn");
const message = document.querySelector("#message");
textButton.addEventListener("click", function () {
  message.textContent = "Я становлюсь JavaScript разработчиком!";
});

let count = 0;
const counterBtn = document.querySelector("#counterBtn");
const counterText = document.querySelector("#count");
counterBtn.addEventListener("click", function () {
  count = count + 1;
  counterText.textContent = count;
});

const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
