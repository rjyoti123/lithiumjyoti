const userModel = require("../Models/userModel");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const saveData = await userModel.create(data);
    res.status(201).send(saveData);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const userName = req.body.emailId;
    const password = req.body.password;
    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    });
    if (!user) {
      return res
        .status(401)
        .send({ msg: "Username & password must be required" });
    }

    let token = jwt.sign({ userId: user._id.toString() }, "jyoti");
    res.setHeader("x-auth-token", token);
    res.status(201).send({ data: token });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getUserData = async (req, res) => {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
    res.status(200).send({ status: true, data: userDetails });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const updateUserData = async (req, res) => {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res
        .status(401)
        .send({ status: false, msg: "No such user exists" });
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      userData,
      { new: true }
    );
    res.status(204).send({ status: true, data: updatedUser });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const userPost = async (req, res) => {
  try {
    let user = await userModel.findById(req.params.userId);
    const message = req.body.message;
    const updatedPost = user.posts;
    updatedPost.push(message);
    const updatedData = await userModel.findOneAndUpdate(
      { _id: user._id },
      { posts: updatedPost },
      {
        new: true,
      }
    );
    res.status(201).send({ status: true, posts: updatedData });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports.createUser = createUser;
module.exports.login = login;
module.exports.userPost = userPost;
module.exports.getUserData = getUserData;
module.exports.updateUserData = updateUserData;



