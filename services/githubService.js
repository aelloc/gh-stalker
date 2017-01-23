class GitHubService {
    constructor(url, unk_avatar) {
        this._url = url;
        this.unk_avatar = unk_avatar;
    }

    branchs(owner = '', repository = '') {
        return axios.get(`${this._url}/repos/${owner}/${repository}/branches`);
    }

    commits(owner = '', repository = '') {
        return axios.get(`${this._url}/repos/${owner}/${repository}/commits`);
    }

    commitsAt(owner = '', repository = '', branch = '') {
        return axios.get(`${this._url}/repos/${owner}/${repository}/commits?sha=${branch}`);
    }

    searchUser(user = '') {
        return axios.get(`${this._url}/search/users?utf8=%E2%9C%93&q=${user.replace(" ", "+")}`);
    }

    searchRepositories(user = '') {
        return axios.get(`${this._url}/users/${user}/repos`);
    }

    user(user = '') {
        return axios.get(`${this._url}/users/${user}`);
    }

    commitComments(owner = '', repo = '', ref = '') {
        return axios.get(`${this._url}/repos/${owner}/${repo}/commits/${ref}/comments`);
    }
}