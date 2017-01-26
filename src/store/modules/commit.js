import { asCommitter } from '../../services/userService';
import * as types from '../mutationTypes';

const state = {
    repository: '',
    branchs: [],
    commits: [],
    comments: {
        sha: '',
        comments: []
    },
    show: false
};

const getters = {
    showCommits: () => this.state.show
};

const mutations = {
    [types.UPDATE.COMMITS](state, { repository, commits }) {
        commits.forEach(commit => {
            commit.author = asCommitter({ committer: commit.author, innerCommitter: commit.commit.committer });
        });

        state.repository = repository.trim();
        state.commits = commits;
        state.comments = {
            sha: '',
            comments: []
        };
        state.show = commits.length > 0;
    },
    [types.UPDATE.BRANCHS](state, branchs = []) {
        state.branchs = branchs;
    },
    [types.UPDATE.COMMENTS](state, { sha, comments}) {
        state.comments = {
            sha: sha,
            comments: comments
        }
    }
};

export default {
    state,
    getters,
    mutations
};