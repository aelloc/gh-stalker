class UserService {
    mapAsUser(user) {
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
}