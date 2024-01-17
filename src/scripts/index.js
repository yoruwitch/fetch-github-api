async function searchUser() {
    const response = await fetch("https://api.github.com/users/yoruwitch");

    return await response.json();
}
function getUserProfile() {
    searchUser().then((userData) => {
        let userInfo = `<img src="${userData.avatar_url}" alt ="User profile pic"
        <div class="data">
        

        `;
    });
}

console.log(searchUser());