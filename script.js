let emailInput = document.querySelector("#email");
let enterBtn = document.querySelector("#enter");
let errorLabel = document.querySelector("#error");
let successLabel = document.querySelector("#success");
let emailBox = document.querySelector(".email-box");
let errImg = document.querySelector(".error");

enterBtn.addEventListener("click", (e) => {
  debugger;
  let val = emailInput.value;
  let regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!regEmail.test(val)) {
    emailBox.classList.add("error");
    errImg.classList.remove("hide");
    errorLabel.classList.remove("hide");
    successLabel.classList.add("hide");
  } else {
    emailBox.classList.remove("error");
    errImg.classList.add("hide");
    emailInput.value = "";
    errorLabel.classList.add("hide");
    successLabel.classList.remove("hide");
  }
});
