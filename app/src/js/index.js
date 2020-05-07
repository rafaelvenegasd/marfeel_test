import { GithubApi } from "./services/fetch.js";
import { Item } from "./services/items.js";

const button = document.getElementById('search');
const api = new GithubApi();
const item = new Item();

button.addEventListener("click", async () =>{
    event.preventDefault();
    const keyword = document.getElementById('keyword').value;
        
    try {
        const user = await api.checkUserExist(keyword);
        const username = user.login;
        const repos = await api.getRepositories(username);
        const userData = item.drawUserInfo(user);
        const reposData = item.drawReposInfo(repos);
        console.log(user);
        console.log(repos);
    } catch (error) {
        console.log(error);
    }
})