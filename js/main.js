/* GitHub APIs base url */
const GITHUB_USERS_API = "https://api.github.com/users";
const GITHUB_REPOS_API = "https://api.github.com/repos";

/* !private GitHub required path params for GET user method
path: '{username}' 
*/
const GITHUB_USERNAME = "cartmandos";

/* !private GitHub required path params for GET repo method */
const GITHUB_REPO_OWNER = "cartmandos";
const GITHUB_REPO_NAME = "portfolio-web";

/* return path[string]: '{owner}/{repo}' */
const getRepoPath = (owner, repo) => `${owner}/${repo}`;

/* return path[string]: '{owner}/{repo}/{languages}' */
const LANGUAGES_SUB_PATH = "languages";
const getRepoLangsPath = (owner, repo) =>
  `${getRepoPath(owner, repo)}/${LANGUAGES_SUB_PATH}`;

const getURLPath = (path, base) => new URL(`./${path}`, `${base}/`);

const getGitHubResponse = async function (urlPath) {
  const response = await fetch(urlPath, {
    method: "GET",
    headers: {
      accept: "application/vnd.github+json",
    },
  });
  const data = await response.json();
  return data;
};

const setProfileImage = function (data) {
  const profileImage = document.querySelector(".profile-image");
  profileImage.setAttribute("src", data.avatar_url);
  profileImage.setAttribute("alt", data.login);
};

const setProfileName = function (data) {
  const profileName = document.querySelector(".profile-name-item");
  profileName.innerHTML = data.name;
};

/* main */
const userUrl = getURLPath(GITHUB_USERNAME, GITHUB_USERS_API);
getGitHubResponse(userUrl).then((userData) => {
  setProfileImage(userData);
  setProfileName(userData);
});
