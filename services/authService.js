const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const User = require("../models/userModel");
const { NotAuthorizedError, ConflictError } = require("../utils/appError");
const { JWT_SECRET } = process.env;

const register = async (credentials) => {
  const { password, email } = credentials;

  const candidate = await User.findOne({ email });

  if (candidate) {
    throw new ConflictError(`Email in use.`);
  }

  const avatarUrl = gravatar.url(email, { s: "250", r: "pg", d: "mp" });
  const newUser = new User({ email, password, avatarUrl });
  await newUser.save();

  newUser.token = jwt.sign(
    {
      id: newUser._id,
    },
    JWT_SECRET,
    { expiresIn: "3h" }
  );
  await User.findByIdAndUpdate(newUser._id, { token: newUser.token });
  return newUser;
};

const login = async (credentials) => {
  const { password, email } = credentials;

  const user = await User.findOne({ email });
  if (!user) {
    throw new NotAuthorizedError(`Email or password is wrong`);
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError("Email or password is wrong");
  }

  user.token = jwt.sign(
    {
      id: user._id,
    },
    JWT_SECRET,
    { expiresIn: "3h" }
  );

  await User.findByIdAndUpdate(user._id, { token: user.token });

  return user;
};
const logout = async (id, next) => {
  const user = await User.findById(id);

  if (!user) {
    next(new NotAuthorizedError(`Not authorized.`));
  }

  await User.findByIdAndUpdate(id, { token: "" });
};

const updatedProfile = async (id, data) => {
  await User.findOneAndUpdate(id, { data });
};

module.exports = {
  register,
  login,
  logout,
  updatedProfile,
};