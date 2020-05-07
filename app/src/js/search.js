
import { GithubApi } from "./services/fetch.js";
import { Layout } from "./layout.js";
import { clear } from "./helpers.js";

const api = new GithubApi();
const layout = new Layout();
const content = document.getElementById('content');

export async function search(){
    event.preventDefault();
    const keyword = document.getElementById('keyword').value; 
    if(keyword){
        try {
            clear(content);
            const user = await api.checkUserExist(keyword);
            if(user.message){
                layout.drawError();
                throw new Error("Does not exist!")
            }else{
                layout.drawUserInfo(user);
                const username = user.login;
                const repos = await api.getRepos(username);
                layout.drawReposInfo(username, repos);
            }
        } catch (error) {
            console.log(error);
        }
    }  
}