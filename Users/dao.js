/*
    User Functions:
    1.) Creating a New User -> Sign Up
    2.) Finding User by Credentials -> Login
    3.) Delete User -> Delete Account
    4.) Find All Users -> Searching for Creators (Sharing of Collections)
    5.) UpdateCollaboration -> Share Collections with other user
    6.) UpdateCreation -> New Collection created by user
    7.) UpdateSavedCollections -> New Collection saved by user
    8.) UpdateFollowerCount -> New user starts following you
    9.) UpdateFollowingCount -> You start Following a User.
*/

import UserModel from "./model.js";
// export const createUser = (user) => {
//     delete user._id;
//     return UserModel.create(user);
// };
// export const findAllUsers = () => UserModel.find();
// export const findUserById = (userId) => UserModel.findById(userId);
// export const findUserByUsername = (username) =>  UserModel.findOne({ username: username });
// export const findUserByCredentials = (username, password) =>  UserModel.findOne({ username, password });
// export const updateUser = (userId, user) =>  UserModel.updateOne({ _id: userId }, { $set: user });
// export const deleteUser = (userId) => UserModel.deleteOne({ _id: userId });


const createUser = (userInfo) => {
  try {
    delete userInfo._id;
    const user = UserModel.create(userInfo);
    return user;
  } catch (error) {
    throw error;
  }
};

const findUserByCredentials = (username, password) => {
  try {
    const user = UserModel.findOne({ username, password });
    return user;
  } catch (error) {
    throw error;
  }
};

const deleteUser = (userId) => {
  try {
    const result = UserModel.deleteOne({ _id: userId });
    return result;
  } catch (error) {
    throw error;
  }
};

const findAllUsers = () => {
  try {
    const users = UserModel.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const updateCollaboration = (userId, collectionId) => {
  try {
    const user = UserModel.updateOne({ _id: userId }, { $push: { collectionsCollaborated: collectionId } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const updateCreation = (userId, collectionId) => {
  try {
    const user = UserModel.updateOne({ _id: userId }, { $push: { collectionsOwned: collectionId } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const updateSavedCollections = (userId, collectionId) => {
  try {
    const user = UserModel.updateOne({ _id: userId }, { $push: { collectionsSaved: collectionId } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const increaseFollowerCount = (userId) => {
  try {
    const user = UserModel.updateOne({ _id: userId }, { $inc: { followerCount: 1 } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const decreaseFollowerCount = (userId) => {
    try {
      const user = UserModel.updateOne({ _id: userId }, { $inc: { followerCount: -1 } }, { new: true });
      return user;
    } catch (error) {
      throw error;
    }
  };

const increaseFollowingCount = (userId) => {
  try {
    const user = UserModel.updateOne({ _id: userId }, { $inc: { followingCount: 1 } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const decreaseFollowingCount = (userId) => {
    try {
      const user = UserModel.updateOne({ _id: userId }, { $inc: { followingCount: -1 } }, { new: true });
      return user;
    } catch (error) {
      throw error;
    }
  };

export {
  createUser,
  findUserByCredentials,
  deleteUser,
  findAllUsers,
  updateCollaboration,
  updateCreation,
  updateSavedCollections,
  increaseFollowerCount,
  increaseFollowingCount,
  decreaseFollowerCount,
  decreaseFollowingCount
};
