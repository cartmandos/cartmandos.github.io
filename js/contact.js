// wasteful

const submitButton = document.getElementById("btn-submit");
submitButton.disabled = "true";

const requiredFields = document.querySelectorAll("[required]");
for (let i = 0; i < requiredFields.length; i++) {
  requiredFields[i].addEventListener("change", submitButtonState);
}

function isFormValid() {
  for (let i = 0; i < requiredFields.length; i++) {
    if (!requiredFields[i].checkValidity()) return false;
  }
  return true;
}

function submitButtonState() {
  submitButton.disabled = isFormValid() ? "" : "true";
  console.log(isFormValid());
}
