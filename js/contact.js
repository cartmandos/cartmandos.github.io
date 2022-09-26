const submitButton = document.getElementById("btn-submit-form");
const requiredFields = document.querySelectorAll("[required]");
var isRadioChecked = false;

function handleSubmitButtonState() {
  if (this.type === "radio") {
    isRadioChecked = this.checked;
  } else {
    if (this.checkValidity()) this.classList.add("--ok");
    else this.classList.remove("--ok");
  }

  if (
    document.querySelectorAll("[required]:not([type=radio],.--ok)").length ===
      0 &&
    isRadioChecked
  ) {
    submitButton.disabled = "";
  } else submitButton.disabled = true;

  this.reportValidity();
}

for (let i = 0; i < requiredFields.length; i++) {
  requiredFields[i].addEventListener("change", handleSubmitButtonState);
}
