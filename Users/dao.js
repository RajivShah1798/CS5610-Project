import UserModel from './model.js';

const createUser = async (userInfo) => {
  try {
    const user = await UserModel.create(userInfo);
    return user;
  } catch (error) {
    throw error;
  }
};

const findUserByCredentials = async (username, password) => {
  try {
    const user = await UserModel.findOne({ username, password });
    return user;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    const result = await UserModel.deleteOne({ _id: userId });
    return result;
  } catch (error) {
    throw error;
  }
};

const findAllUsers = async () => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const addCollaboration = async (userId, collectionId) => {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { $push: { collectionsCollaborated: collectionId } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const removeCollaboration = async (userId, collectionId) => {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { $pull: { collectionsCollaborated: collectionId } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const showCollaboration = async (userId) => {
  try {
    const user = await UserModel.findById(userId).populate('collectionsCollaborated');
    return user.collectionsCollaborated;
  } catch (error) {
    throw error;
  }
};

const addCreation = async (userId, collectionId) => {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { $push: { collectionsOwned: collectionId } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const removeCreation = async (userId, collectionId) => {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { $pull: { collectionsOwned: collectionId } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const showCreation = async (userId) => {
  try {
    const user = await UserModel.findById(userId).populate('collectionsOwned');
    return user.collectionsOwned;
  } catch (error) {
    throw error;
  }
};

const addSaved = async (userId, collectionId) => {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { $push: { collectionsReadOnly: collectionId } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const removeSaved = async (userId, collectionId) => {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { $pull: { collectionsReadOnly: collectionId } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const showSaved = async (userId) => {
  try {
    const user = await UserModel.findById(userId).populate('collectionsReadOnly');
    return user.collectionsReadOnly;
  } catch (error) {
    throw error;
  }
};

const increaseFollowerCount = async (userId) => {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { $inc: { followerCount: 1 } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const decreaseFollowerCount = async (userId) => {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { $inc: { followerCount: -1 } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const increaseFollowingCount = async (userId) => {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { $inc: { followingCount: 1 } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const decreaseFollowingCount = async (userId) => {
  try {
    const user = await UserModel.findByIdAndUpdate(userId, { $inc: { followingCount: -1 } }, { new: true });
    return user;
  } catch (error) {
    throw error;
  }
};

const showFollowingCount = async (userId) => {
  try {
    const user = await UserModel.findById(userId);
    return user.followingCount;
  } catch (error) {
    throw error;
  }
};

const showFollowerCount = async (userId) => {
  try {
    const user = await UserModel.findById(userId);
    return user.followerCount;
  } catch (error) {
    throw error;
  }
};

export {
  createUser,
  findUserByCredentials,
  deleteUser,
  findAllUsers,
  addCollaboration,
  removeCollaboration,
  showCollaboration,
  addCreation,
  removeCreation,
  showCreation,
  addSaved,
  removeSaved,
  showSaved,
  increaseFollowerCount,
  decreaseFollowerCount,
  increaseFollowingCount,
  decreaseFollowingCount,
  showFollowingCount,
  showFollowerCount
};
