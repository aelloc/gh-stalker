class GitHubAPI {
    
    constructor(url) {
        this._url = url;
    }

    branchs(owner, repository) {
        return `${this._url}/repos/${owner}/${repository}/branches`;
    }

    commits(owner, repository) {
        return `${this._url}/repos/${owner}/${repository}/commits`;
    }

    commitsAt(owner, repository, branch) {
        return `${this._url}/repos/${owner}/${repository}/commits?sha=${branch}`;
    }

    searchUser(user) {
        return `${this._url}/users/${user}`;
    }

    searchRepositories(user) {
        return `${this._url}/users/${user}/repos`;
    }
}