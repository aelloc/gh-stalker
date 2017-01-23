class UserService {
    constructor(unk_avatar) {
        this._unk_avatar = unk_avatar;
    }

    asUser(user) {
        return {
            login: user.login,
            avatar_url: user.avatar_url,
            html_url: user.html_url,
            name: user.name,
            bio: user.bio,
            type: user.type,
            followers: user.followers,
            following: user.following,
            created_at: user.created_at,
            updated_at: user.updated_at,
            repositories: []
        };
    }

    asOrganization(org) {
        return {
            login: org.login,
            avatar_url: org.avatar_url,
            html_url: org.html_url,
            name: org.name,
            blog: org.blog,
            bio: org.bio,
            type: org.type,
            created_at: org.created_at,
            updated_at: org.updated_at,
            public_repos: org.public_repos,
            repositories: []
        };
    }

    asCommitter({ committer, innerCommitter }) {
        committer = committer ? committer : {};  
        return {
            avatar_url: committer.avatar_url || this._unk_avatar,
            html_url: committer.html_url || '',
            login: committer.login || '',
            type: committer.type || 'User',
            name: innerCommitter.name,
            email: innerCommitter.email
        };
    }
}