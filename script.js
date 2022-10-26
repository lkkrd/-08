let value = 0;

const display = document.querySelector("#display");
const plus = document.querySelector("#button3");
const minus = document.querySelector("#button1");
const reset = document.querySelector("#button2");

plus.addEventListener("click", function () {
  value++;
  console.log(`current value: ${value}`);
  display.textContent = value;
});

minus.addEventListener("click", function () {
  value--;
  console.log(`current value: ${value}`);
  display.textContent = value;
});

reset.addEventListener("click", function () {
  value = 0;
  console.log(`current value: ${value}`);
  display.textContent = value;
});
