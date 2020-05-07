import {customizeUsersResponse, customizeContentResponse} from "./helpers.js";
import {GithubApi} from "./services/fetch.js";
import forkImg from "../assets/images/fork.svg";
import starImg from "../assets/images/star.svg";

const api = new GithubApi();
export class Layout{
    
    drawUserInfo(user){
        customizeUsersResponse(user);
        const newUserInfo=`<div id="users-content-container" class="users-content-container">
        <img src="${user.avatar_url}" class="img-user-profile">
        <div><span>@ ${user.login}</span><h1>${user.name}</h1><span>${user.bio}</span></div></div>`;
        document.getElementById("content").innerHTML += newUserInfo;
    }
    drawError(){
        const newError=`<div class="alert alert-danger" role="alert">
        Does not exist!</div>`;
        document.getElementById("content").innerHTML += newError;
    }
    drawReposInfo(username, repos){
        const reposTittle =
        `<div id="repos-container"><div><span class="subtitle-size">Repositories</span><hr size="10" class="main-separator"/></div>
        <div><ul id="repos-list-container"></ul></div>`;
        document.getElementById("content").innerHTML += reposTittle;
        repos.forEach(async (repo) => {
            const commit = await api.getCommits(username, repo.name); 
            const fork = await api.getForks(username, repo.name); 
            customizeContentResponse(commit); 
            customizeContentResponse(fork); 
            let repoContent = `<li class="d-flex justify-content-between"><span>${repo.name}</span> <div><img src="${starImg}" class="icon"> <span>${commit.length}</span>
            <img src="${forkImg}" class="icon"> <span>${fork.length}</span> </div> </li>`;
            let separators = `<hr class="separator"/>`
            document.getElementById("repos-list-container").innerHTML += repoContent;
            document.getElementById("repos-list-container").innerHTML += separators;
        });
    }
}