export default class UserRepository {
    constructor(database) {
        this.User = database;
    }

    async CreateUser({name, email, password}) {
        const user = new this.User({name, email, password});
        const responseUser = await user.save();
        return responseUser;
    }
}
