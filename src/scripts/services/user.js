import { baseUrl } from "/src/scripts/variables.js";
async function searchUser(userName) {
    const response = await fetch(`${baseUrl}}/${userName}`);

    return await response.json();
}

export { searchUser };
