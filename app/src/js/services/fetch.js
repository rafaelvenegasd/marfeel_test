export class GithubApi{
    async checkUserExist(keyword){
        const url = `https://api.github.com/users/${keyword}`
        return fetch(url).then(response => response.json())
    }
    async getRepositories(username){
        const url = `https://api.github.com/users/${username}/repos`
        return fetch(url).then(response => response.json())
    }
    async getCommits(username, repo){
        const url = `https://api.github.com/repos/${username}/${repo}/commits`
        return fetch(url).then(response => response.json())
    }
}