import { createRepo, deleteRepo, findAllRepos, findRepoById } from "./dao.js";
import "dotenv/config";

export default function gitRoutes(app) {
  // POST /repoc/api/gitRepo - Create a new Repo Object

  app.post("/repoc/api/gitRepo/", async (req, res) => {
    try {
      const newRepo = await createRepo(req.body);
      res.status(201).json(newRepo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // DELETE /repoc/api/gitRepo - Delete a Repo Object

  app.post("/repoc/api/gitRepo/:gitId", async (req, res) => {
    try {
      const { gitId } = req.params;
      const updatedRepos = await deleteRepo(gitId);
      res.status(201).json(updatedRepos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get /repoc/api/gitRepo - Get all available Repo Objects

  app.get("/repoc/api/gitRepo/:gitId", async (req, res) => {
    try {
      const repos = await findAllRepos();
      res.status(201).json(repos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get /repoc/api/gitRepo/:gitId - Get Repo Object using gitId

  app.get("/repoc/api/gitRepo/:gitId", async (req, res) => {
    try {
      const { gitId } = req.params;
      const repo = await findRepoById(gitId);
      res.status(201).json(repo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
