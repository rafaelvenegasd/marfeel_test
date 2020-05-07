export const customizeResponse = user =>{
   for (let param in user){
        // return user[param] === null ? 'there is no info' : user[param]
        if(user[param] === null){
            user[param] = 'there is no info';
        }
    }
}
