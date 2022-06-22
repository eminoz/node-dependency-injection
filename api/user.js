export default class UserApi {
    constructor(service) {
        this.userService = service;
    }

    CreateUser = async (req, res, next) => {
        const {name, email, password} = req.body;
        const response = await this.userService.CreateUser({name, email, password})
        return res.json({user: response});
    };
}
