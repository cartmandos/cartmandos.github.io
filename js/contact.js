const submitButton = document.getElementById("btn-submit-form");
const requiredFields = document.querySelectorAll("[required]");
var isRadioChecked = false;
var isFormValid = false;

function submitButtonState() {
  if (this.type === "radio") {
    isRadioChecked = this.checked;
  } else {
    if (this.checkValidity()) this.className += "--ok";
    else this.className = "";
  }
  if (
    document.querySelectorAll("[required]:not([type=radio],.--ok)").length ===
      0 &&
    isRadioChecked
  ) {
    submitButton.disabled = "";
  } else submitButton.disabled = true;
}

submitButton.disabled = "true";
for (let i = 0; i < requiredFields.length; i++) {
  requiredFields[i].addEventListener("change", submitButtonState);
}
