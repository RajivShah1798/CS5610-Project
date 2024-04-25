import request from 'request';
import {
    createCollection,
    updateCollectionType,
    addGithubRepo,
    removeRepo,
    addCollaborator,
    removeCollaborator,
    addToSavedBy,
    removeFromSavedBy,
    getCollectionsByUser,
    getAllCollections,
    getCollectionById,
    getCollectionsByType
  } from './dao.js';
  import 'dotenv/config';
  
  export default function CollectionRoutes(app) {

  function searchRepositories(tags, callback) {
    const options = {
        url: `https://api.github.com/search/repositories?q=${tags}&sort=stars&per_page=15&page=1`,
        method: 'GET',
        headers: {
          "Authorization": "Bearer" + process.env.GIT_ACCESS_TOKEN,
          "User-Agent": "RajivShah1798"
        }
    };

    request(options, (error, response, body) => {
        if (error) {
            console.error('Error searching repositories:', error);
            callback(error);
        } else {
            const data = JSON.parse(body);
            callback(null, data.items);
        }
    });
  }

  // This API returns search results from the Github API and all available Public Collections.
  app.post('/repoc/api/search', async (req, res) => {
    try {
      console.log("In API Search");
      const search = req.body;
      searchRepositories(search.query, async (err, repositories) => {
        if (err) {
            console.error('Failed to search repositories:', err);
        } else {
            const repos = repositories.map(repo => ({
              "gitId": repo.id,
              "name": repo.name,
              "ownerName": repo.owner.login,
              "htmlURL": repo.html_url,
              "description": repo.description,
              "language": repo.language,
              "topics": repo.topics,
              "stargazerCount": repo.stargazers_count,
              "watcherCount": repo.watchers_count,
              "forksCount": repo.forks_count,
              "createdAt": repo.created_at
          }));
            const collections = await getCollectionsByType("Public");
            res.status(201).json({"gitRepos": repos, "collections": collections});
            // repositories.forEach(repo => {
            //     console.log(`${repo.full_name}: ${repo.description}`);
            // });
        }
    });
    } catch(error) {
      res.status(500).json({error: error.message});
  }
});
    
    
    // POST /repoc/api/collections - Create a new collection

    app.post('/repoc/api/collections/:userId', async (req, res) => {
      const userId = req.params.userId;
      try {
        const newCollection = await createCollection(userId, req.body);
        res.status(201).json(newCollection);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    // PUT /repoc/api/collections/:collectionId/type - Update collection type
    app.put('/repoc/api/collections/:collectionId/type', async (req, res) => {
      const { collectionId } = req.params;
      try {
        const updatedCollection = await updateCollectionType(collectionId, req.body.newType);
        res.status(200).json(updatedCollection);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    // POST /repoc/api/collections/:collectionId/github-repos - Add Github repo to collection
    app.post('/repoc/api/collections/:collectionId/github-repos', async (req, res) => {
      const { collectionId } = req.params;
      try {
        const updatedCollection = await addGithubRepo(collectionId, req.body.repo);
        res.status(200).json(updatedCollection);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    // DELETE /repoc/api/collections/:collectionId/github-repos/:repoId - Remove Github repo from collection
    app.delete('/repoc/api/collections/:collectionId/github-repos/:repoId', async (req, res) => {
      const { collectionId, repoId } = req.params;
      try {
        const updatedCollection = await removeRepo(collectionId, repoId);
        res.status(200).json(updatedCollection);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    // POST /repoc/api/collections/:collectionId/collaborators - Add collaborator to collection
    app.post('/repoc/api/collections/:collectionId/collaborators', async (req, res) => {
      const { collectionId } = req.params;
      try {
        const updatedCollection = await addCollaborator(collectionId, req.body.userId);
        res.status(200).json(updatedCollection);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    // DELETE /repoc/api/collections/:collectionId/collaborators/:userId - Remove collaborator from collection
    app.delete('/repoc/api/collections/:collectionId/collaborators/:userId', async (req, res) => {
      const { collectionId, userId } = req.params;
      try {
        const updatedCollection = await removeCollaborator(collectionId, userId);
        res.status(200).json(updatedCollection);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    // POST /repoc/api/collections/:collectionId/savedBy - Add to savedBy
    app.post('/repoc/api/collections/:collectionId/savedBy', async (req, res) => {
      const { collectionId } = req.params;
      try {
        const updatedCollection = await addToSavedBy(collectionId, req.body.userId);
        res.status(200).json(updatedCollection);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    // DELETE /repoc/api/collections/:collectionId/savedBy/:userId - Remove from savedBy
    app.delete('/repoc/api/collections/:collectionId/savedBy/:userId', async (req, res) => {
      const { collectionId, userId } = req.params;
      try {
        const updatedCollection = await removeFromSavedBy(collectionId, userId);
        res.status(200).json(updatedCollection);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    // GET /repoc/api/collections - Get all collections
    app.get('/repoc/api/collections', async (req, res) => {
      try {
        const collections = await getAllCollections();
        res.status(200).json(collections);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // GET /repoc/api/collections/:collectionId - Get collection by Id
    app.get('/repoc/api/collections/:collectionId', async (req, res) => {
      try {
        const { collectionId } = req.params;
        const collections = await getCollectionById(collectionId);
        res.status(200).json(collections);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // POST /repoc/api/collections - Get all collections for a User
    app.post('/repoc/api/collections', async (req, res) => {
      try {
        const userId = req.body.userId;
        const collections = await getCollectionsByUser(userId);
        res.status(200).json(collections);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    // GET /repoc/api/collections - Get collections by type
    app.get('/repoc/api/collections', async (req, res) => {
      const { type } = req.body.type;
      try {
        const collections = await getCollectionsByType(type);
        res.status(200).json(collections);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
  };
  
  