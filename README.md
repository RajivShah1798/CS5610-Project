# CS5610-Project
Server side code for the CS5610 Project

## User Functionalities and API Documentation

### User Functionalities

    - **Creating a New User:** Sign Up
    - **Finding User by Credentials:** Login
    - **Delete User:** Delete Account
    - **Find All Users:** Searching for Creators (Sharing of Collections)
    - **AddCollaboration:** A user shared their Collection with you
    - **RemoveCollaboration:** A user revoked share access to their Collection with you
    - **ShowCollaboration:** Get List of All Collections shared with you 
    - **AddCreation:** A user created a new Collection
    - **RemoveCreation:** A user deleted their Collection
    - **ShowCreation:** Get List of All Collections created by you 
    - **AddSaved:** A user saved/ bookmarked a collection (here user has only read access to the collection)
    - **RemoveSaved:** A user deleted a bookmarked Collection
    - **ShowSaved:** Get List of All Collections saved by you
    - **IncreaseFollowerCount:** New user starts following you
    - **DecreaseFollowerCount:** New user stops following you
    - **IncreaseFollowingCount:** You start Following a User.
    - **DecreaseFollowingCount:** You stop Following a User.
    - **ShowFollowingCount:** No of users you follow
    - **ShowFollowerCount:** No of users that follow you

### User Routes Documentation

#### 1. Create a New User

- **URL:** `POST /repoc/api/users`
- **Description:** Creates a new user with the provided user information.
- **Request Body:**
  - `userInfo`: Object containing user information such as username, email, name, password, etc.
- **Response:**
  - `200 OK`: Returns the newly created user object.
  - `500 Internal Server Error`: Indicates an error occurred during user creation.

#### 2. Find User by Credentials (Login)

- **URL:** `POST /repoc/api/users/login`
- **Description:** Finds a user by their credentials (username and password) for login purposes.
- **Request Body:**
  - `username`: The username of the user.
  - `password`: The password of the user.
- **Response:**
  - `200 OK`: Returns the user object if found.
  - `404 Not Found`: Indicates that the user with the provided credentials was not found.
  - `500 Internal Server Error`: Indicates an error occurred during the login process.

#### 3. Delete User by ID

- **URL:** `DELETE /repoc/api/users/:userId`
- **Description:** Deletes a user by their ID.
- **Parameters:**
  - `userId`: The ID of the user to delete.
- **Response:**
  - `200 OK`: Returns the result of the deletion operation.
  - `500 Internal Server Error`: Indicates an error occurred during the deletion process.

#### 4. Find All Users

- **URL:** `GET /repoc/api/users`
- **Description:** Retrieves a list of all users.
- **Response:**
  - `200 OK`: Returns an array containing all user objects.
  - `500 Internal Server Error`: Indicates an error occurred during the retrieval process.

#### 5. Add Collaboration

- **URL:** `PUT /repoc/api/users/:userId/collaborate/:collectionId`
- **Description:** Adds collaboration for a user with a specific collection.
- **Parameters:**
  - `userId`: The ID of the user.
  - `collectionId`: The ID of the collection to collaborate on.
- **Response:**
  - `200 OK`: Returns the updated user object with the added collaboration.
  - `500 Internal Server Error`: Indicates an error occurred during the collaboration process.

#### 6. Remove Collaboration

- **URL:** `DELETE /repoc/api/users/:userId/collaborate/:collectionId`
- **Description:** Removes collaboration for a user from a specific collection.
- **Parameters:**
  - `userId`: The ID of the user.
  - `collectionId`: The ID of the collection to remove collaboration from.
- **Response:**
  - `200 OK`: Returns the updated user object with the removed collaboration.
  - `500 Internal Server Error`: Indicates an error occurred during the collaboration removal process.

#### 7. Show Collaborations

- **URL:** `GET /repoc/api/users/:userId/collaborate`
- **Description:** Retrieves a list of all collections shared with a user through collaboration.
- **Parameters:**
  - `userId`: The ID of the user.
- **Response:**
  - `200 OK`: Returns an array containing all collections shared with the user.
  - `500 Internal Server Error`: Indicates an error occurred during the retrieval process.

#### 8. Add Creation

- **URL:** `PUT /repoc/api/users/:userId/create/:collectionId`
- **Description:** Adds a new collection created by a user.
- **Parameters:**
  - `userId`: The ID of the user.
  - `collectionId`: The ID of the newly created collection.
- **Response:**
  - `200 OK`: Returns the updated user object with the added creation.
  - `500 Internal Server Error`: Indicates an error occurred during the creation addition process.

#### 9. Remove Creation

- **URL:** `DELETE /repoc/api/users/:userId/create/:collectionId`
- **Description:** Removes a collection created by a user.
- **Parameters:**
  - `userId`: The ID of the user.
  - `collectionId`: The ID of the collection to remove.
- **Response:**
  - `200 OK`: Returns the updated user object with the removed creation.
  - `500 Internal Server Error`: Indicates an error occurred during the creation removal process.

#### 10. Show Creations

- **URL:** `GET /repoc/api/users/:userId/create`
- **Description:** Retrieves a list of all collections created by a user.
- **Parameters:**
  - `userId`: The ID of the user.
- **Response:**
  - `200 OK`: Returns an array containing all collections created by the user.
  - `500 Internal Server Error`: Indicates an error occurred during the retrieval process.

#### 11. Add Saved

- **URL:** `PUT /repoc/api/users/:userId/save/:collectionId`
- **Description:** Adds a collection saved/bookmarked by a user.
- **Parameters:**
  - `userId`: The ID of the user.
  - `collectionId`: The ID of the collection to be saved.
- **Response:**
  - `200 OK`: Returns the updated user object with the added saved collection.
  - `500 Internal Server Error`: Indicates an error occurred during the saved collection addition process.

#### 12. Remove Saved

- **URL:** `DELETE /repoc/api/users/:userId/save/:collectionId`
- **Description:** Removes a saved/bookmarked collection from a user's list.
- **Parameters:**
  - `userId`: The ID of the user.
  - `collectionId`: The ID of the collection to be removed from saved.
- **Response:**
  - `200 OK`: Returns the updated user object with the removed saved collection.
  - `500 Internal Server Error`: Indicates an error occurred during the saved collection removal process.

#### 13. Show Saved

- **URL:** `GET /repoc/api/users/:userId/save`
- **Description:** Retrieves a list of all collections saved/bookmarked by a user.
- **Parameters:**
  - `userId`: The ID of the user.
- **Response:**
  - `200 OK`: Returns an array containing all collections saved by the user.
  - `500 Internal Server Error`: Indicates an error occurred during the retrieval process.

#### 14. Increase Follower Count

- **URL:** `PUT /repoc/api/users/:userId/follow`
- **Description:** Increases the follower count for a user.
- **Parameters:**
  - `userId`: The ID of the user.
- **Response:**
  - `200 OK`: Returns the updated user object with the increased follower count.
  - `500 Internal Server Error`: Indicates an error occurred during the follower count increment process.

#### 15. Decrease Follower Count

- **URL:** `PUT /repoc/api/users/:userId/unfollow`
- **Description:** Decreases the follower count for a user.
- **Parameters:**
  - `userId`: The ID of the user.
- **Response:**
  - `200 OK`: Returns the updated user object with the decreased follower count.
  - `500 Internal Server Error`: Indicates an error occurred during the follower count decrement process.



#### 16. Increase Following Count

- **URL:** `PUT /repoc/api/users/:userId/following`
- **Description:** Increases the following count for a user.
- **Parameters:**
  - `userId`: The ID of the user.
- **Response:**
  - `200 OK`: Returns the updated user object with the increased following count.
  - `500 Internal Server Error`: Indicates an error occurred during the following count increment process.

#### 17. Decrease Following Count

- **URL:** `PUT /repoc/api/users/:userId/unfollowing`
- **Description:** Decreases the following count for a user.
- **Parameters:**
  - `userId`: The ID of the user.
- **Response:**
  - `200 OK`: Returns the updated user object with the decreased following count.
  - `500 Internal Server Error`: Indicates an error occurred during the following count decrement process.

#### 18. Show Following Count

- **URL:** `GET /repoc/api/users/:userId/following/count`
- **Description:** Retrieves the number of users that the specified user is following.
- **Parameters:**
  - `userId`: The ID of the user.
- **Response:**
  - `200 OK`: Returns the count of users being followed by the specified user.
  - `500 Internal Server Error`: Indicates an error occurred during the retrieval process.

#### 19. Show Follower Count

- **URL:** `GET /repoc/api/users/:userId/followers/count`
- **Description:** Retrieves the number of users following the specified user.
- **Parameters:**
  - `userId`: The ID of the user.
- **Response:**
  - `200 OK`: Returns the count of users following the specified user.
  - `500 Internal Server Error`: Indicates an error occurred during the retrieval process.

---

This document provides detailed information about each route, including their purpose, parameters, expected request/response formats, and potential error responses. It can be shared with the front-end team to help them understand how to interact with the backend API.