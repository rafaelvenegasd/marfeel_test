import { getUsers } from "./services/fetch.js";

const button = document.getElementById('search');
button.addEventListener("click", () =>{
    getUsers();
})