import {
  createUser,
  findUserByName,
  findUserById,
  findUserByCredentials,
  updateUserDetails,
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
  showFollowerCount,
} from "./dao.js";

export default function UserRoutes(app) {
  // POST /repoc/api/users - Create a new user
  app.post("/repoc/api/users/signup", async (req, res) => {
    try {
      const user = await findUserByName(req.body.username);
      if (user) {
        res.status(400).json(
          { message: "Username already taken" });
      }
      const newUser = await createUser(req.body);
      req.session["currentUser"] = newUser;
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // POST /repoc/api/users/login - Find user by credentials (login)
  app.post("/repoc/api/users/login", async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await findUserByCredentials(username, password);
      if (user) {
        req.session["currentUser"] = user;
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {createUser;
      res.status(500).json({ error: error.message });
    }
  });

  // GET /repoc/api/users/loggedin - Test to check if Session is being maintained or not
  app.get("/repoc/api/users/loggedin", async (req, res) => {
    if (req.session["currentUser"]) {
      res.status(200).json({message:"User Signed In"});
    } 
    res.status(404).json({message:"User not Signed In"})
  });

  // POST /repoc/api/users/logout - Log user out
  app.post("/repoc/api/users/logout", async(req, res) => {
    try {
      req.session.destroy();
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  // DELETE /repoc/api/users/:userId - Delete user by ID
  app.delete("/repoc/api/users/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
      const result = await deleteUser(userId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET /repoc/api/users - Find all users
  app.get("/repoc/api/users", async (req, res) => {
    try {
      const users = await findAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // PUT /repoc/api/users/:userId - Update User Details
  app.put("/repoc/api/users/:userId", async (req, res) => {
      const { userId } = req.params;
      try {
        delete req.body._id;
        const user = await updateUserDetails(userId, req.body);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  );



  // PUT /repoc/api/users/:userId/collaborate/:collectionId - Add collaboration
  app.put(
    "/repoc/api/users/:userId/collaborate/:collectionId",
    async (req, res) => {
      const { userId, collectionId } = req.params;
      try {
        const user = await addCollaboration(userId, collectionId);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  );

  // DELETE /repoc/api/users/:userId/collaborate/:collectionId - Remove collaboration
  app.delete(
    "/repoc/api/users/:userId/collaborate/:collectionId",
    async (req, res) => {
      const { userId, collectionId } = req.params;
      try {
        const user = await removeCollaboration(userId, collectionId);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  );

  // GET /repoc/api/users/:userId/collaborate - Show collaborations
  app.get("/repoc/api/users/:userId/collaborate", async (req, res) => {
    const userId = req.params.userId;
    try {
      const collaborations = await showCollaboration(userId);
      res.status(200).json(collaborations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // PUT /repoc/api/users/:userId/create/:collectionId - Add creation
  app.put("/repoc/api/users/:userId/create/:collectionId", async (req, res) => {
    const { userId, collectionId } = req.params;
    try {
      const user = await addCreation(userId, collectionId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // DELETE /repoc/api/users/:userId/create/:collectionId - Remove creation
  app.delete(
    "/repoc/api/users/:userId/create/:collectionId",
    async (req, res) => {
      const { userId, collectionId } = req.params;
      try {
        const user = await removeCreation(userId, collectionId);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  );

  // GET /repoc/api/users/:userId/create - Show creations
  app.get("/repoc/api/users/:userId/create", async (req, res) => {
    const userId = req.params.userId;
    try {
      const creations = await showCreation(userId);
      res.status(200).json(creations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // PUT /repoc/api/users/:userId/save/:collectionId - Add saved collections
  app.put("/repoc/api/users/:userId/save/:collectionId", async (req, res) => {
    const { userId, collectionId } = req.params;
    try {
      const user = await addSaved(userId, collectionId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // DELETE /repoc/api/users/:userId/save/:collectionId - Remove saved collections
  app.delete(
    "/repoc/api/users/:userId/save/:collectionId",
    async (req, res) => {
      const { userId, collectionId } = req.params;
      try {
        const user = await removeSaved(userId, collectionId);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  );

  // GET /repoc/api/users/:userId/save - Show saved collections
  app.get("/repoc/api/users/:userId/save", async (req, res) => {
    const userId = req.params.userId;
    try {
      const savedCollections = await showSaved(userId);
      res.status(200).json(savedCollections);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // PUT /repoc/api/users/:userId/follow - Increase follower count
  app.put("/repoc/api/users/:userId/follow", async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await increaseFollowerCount(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // PUT /repoc/api/users/:userId/unfollow - Decrease follower count
  app.put("/repoc/api/users/:userId/unfollow", async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await decreaseFollowerCount(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // PUT /repoc/api/users/:userId/following - Increase following count
  app.put("/repoc/api/users/:userId/following", async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await increaseFollowingCount(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // PUT /repoc/api/users/:userId/unfollowing - Decrease following count
  app.put("/repoc/api/users/:userId/unfollowing", async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await decreaseFollowingCount(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET /repoc/api/users/:userId/following/count - Show following count
  app.get("/repoc/api/users/:userId/following/count", async (req, res) => {
    const userId = req.params.userId;
    try {
      const followingCount = await showFollowingCount(userId);
      res.status(200).json(followingCount);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET /repoc/api/users/:userId/followers/count - Show follower count
  app.get("/repoc/api/users/:userId/followers/count", async (req, res) => {
    const userId = req.params.userId;
    try {
      const followerCount = await showFollowerCount(userId);
      res.status(200).json(followerCount);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET /repoc/api/users/:userId - Get User Details using Id
  app.get("/repoc/api/users/:userId", async (req, res) => {
    if(req.session["currentUser"]){
      const userId = req.params.userId;
      try {
        const user = await findUserById(userId);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(400).json({message:"User is not Signed In"});
    }
  });
}
