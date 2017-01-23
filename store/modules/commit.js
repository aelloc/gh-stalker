'use strict';

const commit = {
    state: {
        repository: '',
        branchs: [],
        commits: [],
        comments: {
            sha: '',
            comments: []
        },
        show: false
    },
    getters: {
        showCommits: () => state.show
    },
    mutations: {
        bindCommits(state, data) {
            data.commits.forEach(commit => {
                commit.author = $user.mapAsCommitter({ committer: commit.author, innerCommitter: commit.commit.committer });
            });

            state.repository = data.repository.trim();
            state.commits = data.commits;
            state.comments = {
                sha: '',
                comments: []
            };
            state.show = data.commits.length > 0;
        },
        bindBranchs(state, branchs) {
            state.branchs = branchs;
        },
        bindComments(state, comments) {
            state.comments = {
                sha: comments.sha,
                comments: comments.comments
            }
        }
    }
};