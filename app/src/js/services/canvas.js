import {customizeUsersResponse, customizeCommitsResponse} from "./helpers.js";
import {GithubApi} from "./fetch.js";

const api = new GithubApi();
export class Canvas{
    drawUserInfo(user){
        customizeUsersResponse(user);
        const newUserInfo=`<img src="${user.avatar_url}" class="img-user-profile">
            <div><span>${user.login}</span><h1>${user.name}</h1><span>${user.bio}</span></div>`;
        document.getElementById("users-content-container").innerHTML=newUserInfo;
    }
    drawRepositoriesInfo(username, repositories){
        
        const repositoryTittle =
            `<div><h2>Repositories</h2></div>
            <div class="repositories-content-container"><div><ul id="repositories-names-list"></ul></div>
            <div><ul id="repositories-commits-list"></ul></div></div>`;
        document.getElementById("repositories-container").innerHTML += repositoryTittle;
        repositories.forEach(async (repository) => {
            const commit = await api.getCommits(username, repository.name); 
            customizeCommitsResponse(commit); 
            let repositoryNames = `<li><span>${repository.name}</span></li>`;
            let repositoryCommits = `<li><span>${commit.length}</span></li>`;
            document.getElementById("repositories-names-list").innerHTML += repositoryNames;
            document.getElementById("repositories-commits-list").innerHTML += repositoryCommits;
        });
    }
}