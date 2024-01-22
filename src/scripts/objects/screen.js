import { profileData } from "../variables.js";

const screen = {
    userProfile: profileData,
    renderUser(user) {
        let userInfo = `
        <div class="info">
          <img src="${user.avatarUrl}" alt ="User profile pic"
          <div class="data">
             <h1>${user.name ?? "No registered name😒"}</h1>
             <p>${user.bio ?? "No registered bio😒"}</p>
         </div>
        </div>`;

        profileData.innerHTML = userInfo;

        let repositoriesItens = "";
        user.repositories.forEach((repo) => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
        });

        if (user.repositories.length > 0) {
          profileData.innerHTML += `<div class="repositories section">
                                        <h2>Repositories</h2>
                                        <ul>${repositoriesItens}<ul>
                                     </div>`
        }
    },

    renderNotFound() {
      profileData.innerHTML = `<h3>User not found.</h3>`;
    }
};

export { screen };
