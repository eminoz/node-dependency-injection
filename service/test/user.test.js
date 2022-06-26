const UserService = require("../user");
class User {
  CreateUser = ({ name, email, password }) => {
    return { name, email, password };
  };
  GetUserById = ({ _id }) => {
    
  };
}
describe("user test", () => {
  it("SERVICE/user.js should return  email, password and email ", async () => {
    const userClass = new User();
    const resUser = new UserService(userClass).CreateUser({
      name: "emin",
      email: "eminoz@gmail.com",
      password: "123456",
    });
    const foundUSer = await resUser;

    expect(foundUSer.email).toEqual("eminoz@gmail.com");
  });
  it;
});
