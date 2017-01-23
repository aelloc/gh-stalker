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
        bindCommits(state, { repository, commits }) {
            commits.forEach(commit => {
                commit.author = $user.asCommitter({ committer: commit.author, innerCommitter: commit.commit.committer });
            });

            state.repository = repository.trim();
            state.commits = commits;
            state.comments = {
                sha: '',
                comments: []
            };
            state.show = commits.length > 0;
        },
        bindBranchs(state, branchs = []) {
            state.branchs = branchs;
        },
        bindComments(state, { sha, comments}) {
            state.comments = {
                sha: sha,
                comments: comments
            }
        }
    }
};