import { searchUser } from "./services/user.js";
import { searchRepositories } from "./services/repositories.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";
import { profileData, button, inputSearch } from "./variables.js";

button.addEventListener("click", () => {
    const userName = document.querySelector("#input-search").value;
    getUserData(userName);
});

inputSearch.addEventListener("keyup", (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isKeyPressed = key === 13;

    if (isKeyPressed) {
        getUserData(userName);
    }
});

async function getUserData(userName) {
    const userResponse = await searchUser(userName);
    const repositoriesResponse = await searchRepositories(userName);

    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);

    screen.renderUser(user);
}
