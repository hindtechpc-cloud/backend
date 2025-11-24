import { response } from "express";
import { User } from "../models/User.js";
import { users } from "../user.js";
import { validationResult } from "express-validator";

export const addUser = async (req, res) => {
  users.push({ ...req.body, id: users.length + 1 });
  // if(user)
  return res.status(201).json({
    message: "user added successfully",
    users,
  });
};

export const getUsers = (req, res) => {
  if (users.length <= 0) {
    return res.status(200).json({
      message: "user not found",
    });
  }
  return res.json({
    message: "user found successfully",
    users,
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, salary, email, role, address, image } = req.body;

  const newUser = users.filter((user) => user.id == id);
  // [{}]
  if (newUser.length <= 0) {
    return res.json({
      message: "user not found",
    });
  }

  newUser[0].name = name || newUser[0]?.name;
  newUser[0].email = email || newUser[0]?.email;
  newUser[0].role = role || newUser[0]?.role;
  newUser[0].salary = salary || newUser[0]?.salary;
  newUser[0].address = address || newUser[0]?.address;
  newUser[0].image = image || newUser[0]?.image;

  return res.json({
    message: "user updated successfully",
    users,
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const newUsers = users.filter((user) => user.id == id);
  console.log(newUsers);
  if (newUsers.length <= 0) {
    return res.json({
      message: "user not found",
    });
  }
  return res.json({
    message: "user deleted successfully ",
    users: newUsers,
  });
};

export const MongoData = async (req, res) => {
  try {
    const user = await User.find();
    if (user != null || user != "") {
      return res.status(200).json({
        message: "user found successfully",
        user,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "server error",
      error: error,
    });
  }
};

export const addUserToMongo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.errors);
  }
  // console.log(req.body);

  try {
    const user = await User.create({ ...req.body });
    return res.status(201).json({
      message: "user added successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};

export const updateUserToMongo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.errors);
  }
  const { name, role, salary, address, email, image } = req.body;
  const id = req.params.id;

  // console.log(typeof id);
  try {
    // const user = await User.findById();
    // console.log(user)
    // if (!user || user == null) {
    //   user.name = name;
    //   user.role = role;
    //   user.salary = salary;
    //   user.email = email;
    //   user.address = address;
    //   user.image = image;
    //   await user.save();
    //   return res.json({
    //     message: "user updated successfully",
    //     user,
    //   });
    // }

    const updatedUser = await User.findByIdAndUpdate(id, {
      name,
      salary,
      address,
      email,
      role,
      image,
    });
    return res.status(200).json({
      message: "user updated successfully",
      updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};

export const deleteUserToMongo = async (req, res) => {
  const { id } = req.params;
  try {
    const userDeleted = await User.findByIdAndDelete(id);
    return res.json({
      message: "user deleted successfully",
    });
  } catch (error) {
    return res.json({
      message: "server error",
      error: error.message,
    });
  }
};
