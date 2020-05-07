import { GithubApi } from "./services/fetch.js";
import { Canvas } from "./services/canvas.js";
const button = document.getElementById('btn-search');
const api = new GithubApi();
const canvas = new Canvas();

button.addEventListener("click", async () =>{
    event.preventDefault();
    const keyword = document.getElementById('keyword').value;   
    try {
        const user = await api.checkUserExist(keyword);
        canvas.drawUserInfo(user);
        
        const username = user.login;
        const repos = await api.getRepos(username);
        canvas.drawReposInfo(username, repos);
    } catch (error) {
        console.log(error);
    }
})