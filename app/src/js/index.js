import { getUsers } from "./services/fetch.js";

const button = document.getElementById('search');

button.addEventListener("click", () =>{
    const keyword = document.getElementById('keyword').value;
    getUsers(keyword);
    event.preventDefault();
})