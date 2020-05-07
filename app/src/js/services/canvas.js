import {customizeResponse} from "./helpers.js";
import { GithubApi } from "./fetch.js";

const api = new GithubApi();

export class Canvas{
    drawUserInfo(user){
        customizeResponse(user);
        console.log(user);
        const newUserInfo=
        `<img src="${user.avatar_url}"><span>${user.login}</span>
        <h1>${user.name}</h1><span>${user.email}</span><span>${user.bio}</span>`;
        document.getElementById("userContainer").innerHTML=newUserInfo;
    }
    drawRepositoriesInfo(username, repos){
        console.log(repos);
        const newReposTittle=
        `<h2>Repositories</h2>`;
        document.getElementById("reposTittle").innerHTML=newReposTittle;
        repos.forEach(async (repo) => {
            const commit = await api.getCommits(username, repo.name);
            console.log(commit.length);    
            console.log(repo.name);    
            let newReposInfo =
            `<li><span>${repo.name}</span><span>${commit.length}</span></li>`;
            document.getElementById("reposContainer").innerHTML += newReposInfo;
        });
    }
}