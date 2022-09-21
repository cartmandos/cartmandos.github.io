const GITHUB_URL = "https://api.github.com/users/cartmandos";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    profileImage.setAttribute("src", data.avatar_url);
    profileImage.setAttribute("alt", data.login);
    profileName.innerHTML = data.name;
    console.log(data);
  });
