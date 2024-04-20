import {
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
} from './dao.js';

export default function UserRoutes(app){

    // POST /users - Create a new user
    app.post('/repoc/api/users', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

    // POST /users/login - Find user by credentials (login)
    app.post('/users/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await findUserByCredentials(username, password);
        if (user) {
        res.status(200).json(user);
        } else {
        res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

    // DELETE /users/:userId - Delete user by ID
    app.delete('/repoc/api/users/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const result = await deleteUser(userId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

    // GET /users - Find all users
    app.get('/repoc/api/users', async (req, res) => {
    try {
        const users = await findAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

    // PUT /users/:userId/collaborate/:collectionId - Update collaboration
    app.put('/repoc/api/users/:userId/collaborate/:collectionId', async (req, res) => {
    const { userId, collectionId } = req.params;
    try {
        const user = await updateCollaboration(userId, collectionId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

    // PUT /users/:userId/create/:collectionId - Update creation
    app.put('/repoc/api/users/:userId/create/:collectionId', async (req, res) => {
    const { userId, collectionId } = req.params;
    try {
        const user = await updateCreation(userId, collectionId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

    // PUT /users/:userId/save/:collectionId - Update saved collections
    app.put('/repoc/api/users/:userId/save/:collectionId', async (req, res) => {
    const { userId, collectionId } = req.params;
    try {
        const user = await updateSavedCollections(userId, collectionId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

    // PUT /users/:userId/follow - Increase follower count
    app.put('/repoc/api/users/:userId/follow', async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await increaseFollowerCount(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

    // PUT /users/:userId/unfollow - Decrease follower count
    app.put('/repoc/api/users/:userId/unfollow', async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await decreaseFollowerCount(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

    // PUT /users/:userId/following - Increase following count
    app.put('/repoc/api/users/:userId/following', async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await increaseFollowingCount(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

    // PUT /users/:userId/unfollowing - Decrease following count
    app.put('/repoc/api/users/:userId/unfollowing', async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await decreaseFollowingCount(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    });
};
