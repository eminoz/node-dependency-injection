export default class UserService {
    constructor(repo) {
        this.userRepo = repo;
    }

    CreateUser = async ({name, email, password}) => {
        const responseUSer = await this.userRepo.CreateUser({
            name,
            email,
            password,
        });
        return responseUSer;
    };
}
