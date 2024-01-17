let profileData = document.querySelector(".profile-data");
let button = document.querySelector("#btn-search");
let inputSearch = document.querySelector("#input-search");

button.addEventListener("click", () => {
    const userName = document.querySelector("#input-search").value;
    getUserProfile(userName);
});

inputSearch.addEventListener("keyup", (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isKeyPressed = key === 13;

    if (isKeyPressed) {
        getUserProfile(userName);
    }
});

async function searchUser(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    return await response.json();
}

async function searchRepositories(userName) {
    const response = await fetch(
        `https://api.github.com/users/${userName}/repos`
    );

    return await response.json();
}

function getUserProfile(userName) {
    searchUser(userName).then((userData) => {
        let userInfo = `
        <div class="info">
        <img src="${userData.avatar_url}" alt ="User profile pic"
        <div class="data">
            <h1>${userData.name ?? "No registered name😒"}</h1>
            <p>${userData.bio ?? "No registered bio😒"}</p>
        </div>
        </div>`;

        profileData.innerHTML = userInfo;

        getUserRepositories(userName);
    });
}

function getUserRepositories(userName) {
    searchRepositories(userName).then((repositoriesData) => {
        let repoItens = "";
        repositoriesData.forEach((repository) => {
            repoItens += `<li><a href="${repository.html_url}" target="_blank">${repository.name}</a></li>`;
        });
        profileData.innerHTML += `
        <div class="repositories section">
            <h2>Repositories</h2>
            <ul>${repoItens}</ul>
        </div>`;
    });
}

// getUserRepositories("isa56");
