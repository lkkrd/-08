let value = 0;

const display = document.querySelector(".display");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    var style = e.currentTarget.classList;
    if (style.contains("plus")) {
      value++;
      console.log(`current value: ${value}`);
      display.textContent = value;
    } else if (style.contains("minus")) {
      value--;
      console.log(`current value: ${value}`);
      display.textContent = value;
    } else if (style.contains("reset")) {
      value = 0;
      console.log(`current value: ${value}`);
      display.textContent = value;
    } else {
      console.log("smth went fuck up");
    }
  });
});
