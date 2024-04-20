/*
    Collection Features:
        1.) Create a New Collection
        2.) Update Collection Type
        3.) Add Github Repo
        4.) Remove Repo
        5.) Add Collaborator
        6.) Remove Collaborator
        7.) Add to savedBy
        8.) Remove from savedBy
        9.) Get All Collections
        10.) Get CollectionsByType
*/

import { CollectionModel } from './models'; // Assuming your models are in a folder called 'models'

const createCollection = async (collectionInfo) => {
  try {
    const collection = await CollectionModel.create(collectionInfo);
    return collection;
  } catch (error) {
    throw error;
  }
};

const updateCollectionType = async (collectionId, newType) => {
  try {
    const collection = await CollectionModel.findByIdAndUpdate(collectionId, { collectionType: newType }, { new: true });
    return collection;
  } catch (error) {
    throw error;
  }
};

const addGithubRepo = async (collectionId, repoId) => {
  try {
    const collection = await CollectionModel.findByIdAndUpdate(collectionId, { $push: { githubRepos: repoId } }, { new: true });
    return collection;
  } catch (error) {
    throw error;
  }
};

const removeRepo = async (collectionId, repoId) => {
  try {
    const collection = await CollectionModel.findByIdAndUpdate(collectionId, { $pull: { githubRepos: repoId } }, { new: true });
    return collection;
  } catch (error) {
    throw error;
  }
};

const addCollaborator = async (collectionId, userId) => {
  try {
    const collection = await CollectionModel.findByIdAndUpdate(collectionId, { $push: { collaborators: userId } }, { new: true });
    return collection;
  } catch (error) {
    throw error;
  }
};

const removeCollaborator = async (collectionId, userId) => {
  try {
    const collection = await CollectionModel.findByIdAndUpdate(collectionId, { $pull: { collaborators: userId } }, { new: true });
    return collection;
  } catch (error) {
    throw error;
  }
};

const addToSavedBy = async (collectionId, userId) => {
  try {
    const collection = await CollectionModel.findByIdAndUpdate(collectionId, { $push: { savedBy: userId } }, { new: true });
    return collection;
  } catch (error) {
    throw error;
  }
};

const removeFromSavedBy = async (collectionId, userId) => {
  try {
    const collection = await CollectionModel.findByIdAndUpdate(collectionId, { $pull: { savedBy: userId } }, { new: true });
    return collection;
  } catch (error) {
    throw error;
  }
};

const getAllCollections = async () => {
  try {
    const collections = await CollectionModel.find();
    return collections;
  } catch (error) {
    throw error;
  }
};

const getCollectionsByType = async (collectionType) => {
  try {
    const collections = await CollectionModel.find({ collectionType });
    return collections;
  } catch (error) {
    throw error;
  }
};

export {
  createCollection,
  updateCollectionType,
  addGithubRepo,
  removeRepo,
  addCollaborator,
  removeCollaborator,
  addToSavedBy,
  removeFromSavedBy,
  getAllCollections,
  getCollectionsByType
};