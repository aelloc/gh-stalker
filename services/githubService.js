class GitHubService {
    
    constructor(url) {
        this._url = url;
    }

    branchs(owner, repository) {
        return axios.get(`${this._url}/repos/${owner}/${repository}/branches`);
    }

    commits(owner, repository) {
        return axios.get(`${this._url}/repos/${owner}/${repository}/commits`);
    }

    commitsAt(owner, repository, branch) {
        return axios.get(`${this._url}/repos/${owner}/${repository}/commits?sha=${branch}`);
    }

    searchUser(user) {
        return axios.get(`${this._url}/search/users?utf8=%E2%9C%93&q=${user.replace(" ", "+")}`);
    }

    searchRepositories(user) {
        return axios.get(`${this._url}/users/${user}/repos`);
    }

    user(user) {
        return axios.get(`${this._url}/users/${user}`);
    }
}