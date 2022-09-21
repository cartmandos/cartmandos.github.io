const codingLanguages = ["HTML", "CSS", "JavaScript"];
const FOOTER_OPENNING_PHRASE = "This website has been created with: ";

function getCodingLanguages() {
  let sentence = "";
  for (let i = 0; i < codingLanguages.length; i++) {
    if (i === 0) sentence += codingLanguages[i];
    else if (i === codingLanguages.length - 1)
      sentence += " and " + codingLanguages[i];
    else sentence += ", " + codingLanguages[i];
  }
  return sentence;
}

const footerSentence = document.getElementById("coding-lang");
footerSentence.innerHTML = FOOTER_OPENNING_PHRASE + getCodingLanguages();
