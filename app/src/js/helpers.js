export const customizeUsersResponse = userInfo =>{
   for (let param in userInfo){
        if(userInfo[param] === null){
            userInfo[param] = 'there is no info';
        }
    }
}

export const customizeContentResponse = content =>{
    if(content.message){
        return content.length = 0;
    }
}

export const clear = element =>{
    return element.innerHTML = ""
}
