const mongoose = require("mongoose");
const User = require("../../model/user");
const UserRepository = require("../user");

describe("user test", () => {
  beforeAll(async () => {
    await mongoose.connect(
      "mongodb+srv://eminoz:Q8DZaO6sdnBDA4Uj@cluster0.cvbx9.mongodb.net/di?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  });
  const user = new UserRepository(User);
  it("should insert a doc into collection", async () => {
    const resUser = await user.CreateUser({
      name: "emin",
      email: "eminoz@gmail.com",
      password: "123456",
    });
    const foundUSer = await resUser;
    const userResponse = {
      _id: foundUSer._id,
      name: foundUSer.name,
      email: foundUSer.email,
      password: foundUSer.password,
    };

    expect(userResponse.email).toEqual("eminoz@gmail.com");
  });
  it("GetUserById is return a user", async () => {
    const newUser = await user.CreateUser({
      name: "emin",
      email: "eminoz@gmail.com",
      password: "123456",
    });
    const foundUSer = await user.GetUserById({ id: newUser._id });
    expect(foundUSer[0]._id).toEqual(newUser._id);
  });
  afterAll(async () => {
    await User.deleteMany({ email: "eminoz@gmail.com" });
    await mongoose.disconnect();
  });
});
