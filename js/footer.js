const CODING_LANGUAGES = ["HTML", "CSS", "JavaScript"];
const FOOTER_CODE_LANGS_OPENNING_PHRASE =
  "This website has been created with: ";

const stringifyCodingLanguages = (langs) => {
  let sentence = "";
  if (langs && langs.length > 0) {
    sentence += langs[0];
    for (let i = 1; i < langs.length; i++) {
      sentence += i === langs.length - 1 ? " and " : ", ";
      sentence += langs[i];
    }
  }
  return sentence;
};

const stringifyCodingLanguagesRecursive = (langs) => {
  let sentence = "";
  if (!(langs && langs.length > 0)) return sentence;
  const stringifyRecursiveCore = (langs, i) => {
    if (i === 0) return langs[i] + sentence;
    else if (i === langs.length - 1)
      return stringifyRecursiveCore(langs, i - 1) + " and " + langs[i];
    else {
      return stringifyRecursiveCore(langs, i - 1) + ", " + langs[i];
    }
  };
  return stringifyRecursiveCore(langs, langs.length - 1);
};

const setCodingLangsFooter = (phrase) => {
  const footerSentence = document.querySelector(".coding-langs");
  footerSentence.innerHTML = `${FOOTER_CODE_LANGS_OPENNING_PHRASE}${phrase}`;
};

const setCodingLangsFooterOffline = () => {
  const codeLangsPhrase = stringifyCodingLanguages(CODING_LANGUAGES);
  setCodingLangsFooter(codeLangsPhrase);
};

async function setCodingLangsFooterLive() {
  const langsUrl = getURLPath(
    getRepoLangsPath(GITHUB_REPO_OWNER, GITHUB_REPO_NAME),
    GITHUB_REPOS_API
  );
  const langsData = await getGitHubResponse(langsUrl);
  const codeLangsPhrase = stringifyCodingLanguages(Object.keys(langsData));
  setCodingLangsFooter(codeLangsPhrase);
}

const SetCodingLangs = (isLive = false) =>
  isLive ? setCodingLangsFooterLive() : setCodingLangsFooterOffline();

SetCodingLangs();
