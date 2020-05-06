
export function getUsers(username){
    const url = 'https://api.github.com/users/'+username
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log('There was a problem with the Fetch request:' + error.message);
    });
} 