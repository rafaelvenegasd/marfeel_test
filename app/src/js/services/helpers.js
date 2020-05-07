export function customizeResponse(user){
    for (let param in user){
        if(user[param] === null){
            user[param] = 'there is no info';
        }
    }
}