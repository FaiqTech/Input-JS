var form = document.querySelector(".form");
var number = document.querySelector(".form__phone-inpt");
var message = document.querySelector(".message");
var warning = document.querySelector(".warning");
var mail = document.querySelector(".form__email-inpt");
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (number.value.trim() === "") {
    message.textContent = "Telefon nömrəsi daxil edin";
    message.style.color = "red";
    number.style.border = "1px solid red";
  } else {
    message.textContent = "";
    number.style.border = "0.5px solid black";
  }

  //email inputu
  if (mail.value.trim() === "") {
    warning.textContent = "Email daxil edin";
    warning.style.color = "red";
    mail.style.border = "1px solid red";
    console.log("asasasas");
  } else {
    warning.textContent = "";
    mail.style.border = "0.5px solid black";
    // @-isaresi telebi
    if (!mail.value.includes("@")) {
      warning.textContent = "@ işarəsi daxil edin";
      warning.style.color = "red";
      mail.style.border = "1px solid red";
    }
  }
});
