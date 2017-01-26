import Https from './https';

const default_unk_avatar = 'https://i2.wp.com/assets-cdn.github.com/images/gravatars/gravatar-user-420.png';

export const branchs = (owner = '', repository = '') => Https.get(`/repos/${owner}/${repository}/branches`);
export const commits = (owner = '', repository = '') => Https.get(`/repos/${owner}/${repository}/commits`);
export const commitsAt = (owner = '', repository = '', branch = '') => Https.get(`/repos/${owner}/${repository}/commits?sha=${branch}`);
export const searchUser = (user = '') => Https.get(`/search/users?utf8=%E2%9C%93&q=${user.replace(" ", "+")}`);
export const searchRepos = (user = '') => Https.get(`/users/${user}/repos`);
export const user = (user = '') => Https.get(`/users/${user}`);
export const commitComments = (owner = '', repo = '', ref = '') => Https.get(`/repos/${owner}/${repo}/commits/${ref}/comments`);