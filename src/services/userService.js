const default_unk_avatar = 'https://i2.wp.com/assets-cdn.github.com/images/gravatars/gravatar-user-420.png';

export const asUser = function (user) {
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
};

export const asOrganization = function (org) {
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
};

export const asCommitter = function ({ committer, innerCommitter }) {
    committer = committer || {};
    return {
        avatar_url: committer.avatar_url || default_unk_avatar,
        html_url: committer.html_url || '',
        login: committer.login || '',
        type: committer.type || 'User',
        name: innerCommitter.name,
        email: innerCommitter.email
    };
};