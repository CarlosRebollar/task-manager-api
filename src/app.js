const express = require("express");
require("./db/mongoose");

const errorHandling = require("./middleware/errorHandling");
const taskRouter = require("./routers/task");
const userRouter = require("./routers/user");

const app = express();
const port = process.env.port|| process.env.PORT;

app.use(express.json());
app.use(taskRouter);
app.use(userRouter);
app.use(errorHandling);

app.listen(port, () => {
  console.log("Server running on port: " + port);
});

/**
 * Goal: Setup the task creation endpoint
 *
 * 1. Create a separate file for the task model (load it into index.js)
 * 2. Create the task creation endpoint (handle success and error)
 * 3. Test the endpoint from postman with good and bad data
 */

/**
 * Goal: Setup the task reading endpoint
 *
 * 1. Create and endpoint for fetching all tasks
 * 2. Create and endpoint for fetching a task by its id
 * 3. Setup new requests in postman and test your work
 */

/**
 * Goal: Refactor task routes to use async/await
 *
 * 1. Refactor task routes to use async/await
 * 2. Test routes in postman
 */

/**
 * Goal: Allow for task updates
 *
 * 1. Setup the route handler
 * 2. Send error if unknown updates
 * 3. Attempt to update the task
 *   - Handle task not found
 *   - Handle validation errors
 *   - Handle success
 *  4. Test your work
 */

/**
 * Goal: Allow for task delete
 *
 * 1. Setup the route handler
 * 3. Attempt to delete the task
 *   - Handle task not found
 *   - Handle validation errors
 *   - Handle success
 *  4. Test your work
 */

/**
 * Goal: Create task router
 *
 * 1. Create new file the create/exports new router
 * 2. Move all the task routers over
 * 3. Load in and use the router with express app
 * 4. Test your work
 */

/**
 * Goal: Change how tasks are updated
 *
 * 1. Find the task
 * 2. Alter the task properties
 * 3. Save the task
 * 4. Test your work by updating a task from Postman
 */

/**
 * Goal: Have signup send back auth token
 *
 * 1. Generate a token for the saved user
 * 2. Send back both the token and the user
 * 3. Create a new user from Postman and confirm the token is there
 */

/**
 * Goal: Create a way to logout of all sessions
 * 1. Setup POST /users/logoutAll
 * 2. Create the router handler to wipe the tokens array
 *  - Send 200 or 500
 * 3. Test your work
 *  - Login a few times and logout all. Check db
 */

/**
 * Goal: Refactor the update profile route
 *
 * 1. Update the URL to /users/me
 * 2. Add the authentication middleware into the mix
 * 3. Use the existing user document instead of fetching via param id
 * 4. Test your work in Postman
 */

/**
 * Goal: Refactor GET /tasks
 *
 * 1. Add authentication
 * 2. Return tasks only for authenticated user
 * 3. Test your work!
 */

/**
 * Goal: Refactor task model to add timestamps
 *
 * 1. Explicity create schema
 * 2. Setup timestamps
 * 3. Create tasks to test work!
 */
