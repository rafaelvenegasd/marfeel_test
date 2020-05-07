import {customizeUsersResponse, customizeContentResponse} from "./helpers.js";
import {GithubApi} from "./fetch.js";

const api = new GithubApi();
export class Canvas{
    drawUserInfo(user){
        customizeUsersResponse(user);
        const newUserInfo=`<img src="${user.avatar_url}" class="img-user-profile">
            <div><span>${user.login}</span><h1>${user.name}</h1><span>${user.bio}</span></div>`;
        document.getElementById("users-content-container").innerHTML=newUserInfo;
    }
    drawReposInfo(username, repos){
        
        const reposTittle =
            `<div><h2>Repositories</h2></div>
            <div class="repos-content-container"><div><ul id="repos-names-list"></ul></div>
            <div><ul id="repos-commits-list"></ul></div></div>`;
        document.getElementById("repos-container").innerHTML += reposTittle;
        repos.forEach(async (repo) => {
            const commit = await api.getCommits(username, repo.name); 
            const fork = await api.getForks(username, repo.name); 
            customizeContentResponse(commit); 
            customizeContentResponse(fork); 
            let repoNames = `<li><span>${repo.name}</span></li>`;
            let repoCommits = `<figure><img src="../assets/images/star.svg" class="icon"><li><span>${commit.length}</span></figure>
            <figure><img src="../assets/images/fork.svg" class="icon"><li><span>${fork.length}</span></figure></li>`;
            document.getElementById("repos-names-list").innerHTML += repoNames;
            document.getElementById("repos-commits-list").innerHTML += repoCommits;
        });
    }
}