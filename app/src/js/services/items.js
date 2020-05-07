import { customizeResponse } from "./helpers.js";
export class Item{
    drawDivs(){
        const newDivContainer=
        `<div id="userContainer"></div>
        <div>
            <div id="reposTittle"></div>
            <div id="reposContainer"></div>
        </div>`
        document.getElementById("contents").innerHTML=newDivContainer;
    }
    drawUserInfo(user){
        customizeResponse(user);
        console.log(user);
        const newUserInfo=
        `<img src="${user.avatar_url}">
        <span>${user.login}</span>
        <h1>${user.name}</h1>
        <span>${user.bio}</span>`;
        document.getElementById("userContainer").innerHTML=newUserInfo;
    }
    drawReposInfo(repos){
        const newReposTittle=
        `<h2>Repositories</h2>`;
        document.getElementById("reposTittle").innerHTML=newReposTittle;
        repos.forEach(element => {
            console.log(element);
        });
        const newReposInfo=`<div>here will be the repos</div>`;
        // `<span>${user.login}</span>`;
        document.getElementById("reposContainer").innerHTML=newReposInfo;
    }
}