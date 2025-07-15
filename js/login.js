alert("hallo")
let user_login = document.querySelector("#accept");
let input_user = document.querySelector("#username");
let input_pass = document.querySelector("#password");
let login = function () {
  user_login.addEventListener("click", function () {
    let val_user = input_user.value;
    let val_pass = input_pass.value;
    let us = "admin";
    let pw = "123";
    if (val_user == pw && val_pass == us) {
      window.location.assign(`./pages/about.html`);
    } else {
      alert("Temukak mata");
    }
  });
};
login();

let found = 0;
let mata = document.querySelector("#mata");
let popup = document.querySelector("#popup");
mata.addEventListener("click", function () {
  if (found % 2 == 0) {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
  found += 1;
});
