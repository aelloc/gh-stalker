class UserService {
    map(user) {
        let dateFormat = "DD/MM/YYYY hh:mm:ss";
        return {
            login: user.login,
            avatar_url: user.avatar_url,
            html_url: user.html_url,
            name: user.name,
            bio: user.bio,
            followers: user.followers,
            following: user.following,
            created_at: moment(user.created_at).format(dateFormat),
            updated_at: moment(user.updated_at).format(dateFormat),
            repositories: []
        };
    }
}