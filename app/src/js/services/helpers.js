export const customizeUsersResponse = userInfo =>{
   for (let param in userInfo){
        if(userInfo[param] === null){
            userInfo[param] = 'there is no info';
        }
    }
}

export const customizeContentResponse = content =>{
   for (let param in content){
        if(!content[param]){
            return 0;
        }
    }
}
