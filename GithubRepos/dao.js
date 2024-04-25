import GitRepoModel from "./model.js";

const createRepo = async (gitRepo) => {
  try {
    const repo = await GitRepoModel.create(gitRepo);
    return repo;
  } catch (error) {
    throw error;
  }
};

const deleteRepo = async (gitRepoId) => {
  try {
    const result = await GitRepoModel.deleteOne({ id: gitRepoId });
    return result;
  } catch (error) {
    throw error;
  }
};

const findRepoById = async (gitRepoId) => {
try {
    const result = await GitRepoModel.findById(gitRepoId);
    return result;
    } catch (error) {
    throw error;
    }
};

const findAllRepos = async () => {
try {
    const result = await GitRepoModel.find();
    return result;
    } catch (error) {
    throw error;
    }
};

// const addToCollection = async (gitRepoId, collectionId) => {
// try {
//     const result = await findRepoById(gitRepoId);
//     result.collections.push(collectionId);
//     await result.save();
//     return result;
//     } catch (error) {
//     throw error;
//     }   
// };

export {
    createRepo,
    deleteRepo,
    findAllRepos,
    findRepoById
}