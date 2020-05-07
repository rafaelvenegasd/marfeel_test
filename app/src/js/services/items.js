import { customizeResponse } from "./helpers.js";
export class Item{
    drawDivs(){
        const newDivContainer=`<div id="userContainer"></div><div id="reposContainer"></div>`
        document.getElementById("contents").innerHTML=newDivContainer;
    }
    drawUserInfo(user){
        customizeResponse(user);
        console.log(user);
        const newUserInfo=
        `<img src="${user.avatar_url}">
        <span>${user.login}</span>
        <span>${user.name}</span>
        <span>${user.email}</span>
        <span>${user.bio}</span>`;
        document.getElementById("userContainer").innerHTML=newUserInfo;
    }
    drawReposInfo(repos){
        console.log(repos);
        const newReposInfo='';
        document.getElementById("reposContainer").innerHTML=newReposInfo;
    }
}