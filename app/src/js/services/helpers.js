export const customizeUsersResponse = userInfo =>{
   for (let param in userInfo){
        // return userInfo[param] === null ? 'there is no info' : userInfo[param]
        if(userInfo[param] === null){
            userInfo[param] = 'there is no info';
        }
    }
}

export const customizeCommitsResponse = commitInfo =>{
   for (let param in commitInfo){
        // return commitInfo[param] === null ? 'there is no info' : commitInfo[param]
        if(commitInfo[param] === undefined){
            commitInfo[param] = 0;
        }
    }
}
