import { repositoriesQuantity, baseUrl } from "/src/scripts/variables.js";

async function searchRepositories(userName) {
    const response = await fetch(
        `${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`
    );

    return await response.json();
}

export {searchRepositories};