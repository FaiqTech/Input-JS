var eye = document.querySelector(".form__password-icon-eye");
var eyeOff = document.querySelector(".form__password-icon-eye-off");
var password = document.querySelector(".form__password-inpt");
var username = document.querySelector(".form__email-phone-inpt");
var form = document.querySelector(".form");
var message = document.querySelector(".message"); //burada error mesaji cixartmaq isdediyimiz yerde  html de bir div acib class verib onu burda cagirriq
var warning = document.querySelector(".warning");

eye.addEventListener("click", function () {
  eye.style.display = "none"; //burada qeyd edirkki eye class adli elemente klidledikde eye yoxa cixsin
  eyeOff.style.display = "block"; //yoxa cismis eyenin yerine eye off gelsin
  password.type = "text"; //burada qeyd edirkki eye class adli elemente klidledikde passwordun tipi deyissin text olsun
});
eyeOff.addEventListener("click", function () {
  eye.style.display = "block";
  eyeOff.style.display = "none";
  password.type = "password";
});
document.querySelector(".form").addEventListener("submit", function (e) {
  //get formu class ile cagir ve bunda olan (e)eventi dinle ,eger submit olarsa
  //yeni formda olan butonun type submit click edildikde
  e.preventDefault(); //her hansi meselencun A tegine click eddikde reflesh gedir , bu refleshin qabagin alir
  //email or phone inputu
  if (username.value.trim() === "") {
    //trim yeni sag ve sol hissedeki space ve bir deyer kimi qebul etmir
    message.textContent = "Bu sahəni boş saxlama"; //error verdikde bu metni mesaj olaraq bildirir
    message.style.color = "red";
    username.style.border = "1px solid red";
  } else {
    message.textContent = ""; //burda bos deyer veririkki probel olmuyanda  if e girmiyende elsede o errorun smsi gorsenmesn
    username.style.border = "0.5px solid black";
    // @-isaresi telebi
    if (!username.value.includes("@")) {
      //burada qeyd edirikki @ isaresi olmadan melumatlar qeyde alinmasn
      message.textContent = "@ işarəsi daxil edin";
      message.style.color = "red";
      username.style.border = "1px solid red";
    }
  } //Return-bunu eyer yuxardan asagi yoxlaya yoxlaya geldikde hansisa birinde error tapsa asagi inputlara kecmesin

  //password inputu
  if (password.value.trim() === "") {
    warning.textContent = "Şifrə daxil edin";
    warning.style.color = "red";
    password.style.border = "1px solid red";
  } else {
    warning.textContent = "";
    password.style.border = "0.5px solid black";
  }
});
