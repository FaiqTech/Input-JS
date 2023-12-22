var form = document.querySelector(".form");
var username = document.querySelector(".form__email-phone-inpt");
var message = document.querySelector(".message");

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  //email or phone inputu
  if (username.value.trim() === "") {
    message.textContent = "Bu sahəni boş saxlama";
    message.style.color = "red";
    username.style.border = "1px solid red";
  } else {
    message.textContent = "";
    username.style.border = "0.5px solid black";
    // @-isaresi telebi
    if (!username.value.includes("@")) {
      message.textContent = "@ işarəsi daxil edin";
      message.style.color = "red";
      username.style.border = "1px solid red";
    }
  }
});
