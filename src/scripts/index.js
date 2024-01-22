import { searchUser } from "./services/user.js";
import { searchRepositories } from "./services/repositories.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";
import { button, inputSearch } from "./variables.js";

button.addEventListener("click", () => {
    const userName = document.querySelector("#input-search").value;
    if (validateInput(userName)) return;
    getUserData(userName);
});

inputSearch.addEventListener("keyup", (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isKeyPressed = key === 13;

    if (isKeyPressed) {
        if (validateInput(userName)) return;
        getUserData(userName);
    }
});

function validateInput(userName) {
    if (userName.length === 0) {
        alert("Please fill the user camp.");
        return true;
    }
}

async function getUserData(userName) {
    const userResponse = await searchUser(userName);

    if (userResponse.message === "Not Found") {
        screen.renderNotFound();
        return;
    }

    const repositoriesResponse = await searchRepositories(userName);

    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);

    screen.renderUser(user);
}
