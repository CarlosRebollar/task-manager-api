const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

/**
 * Goal: Create a model for tasks
 *
 * 1. Define the model with description and completed fields
 * 2. Create a new instance of model
 * 3. Save the model to the database
 * 4. Test your work
 */

/**
 * Goal: Add a password field to User
 *
 * 1. Setup the field as a required string
 * 2. Ensure the length is greater than 6
 * 3. Ensure that password doesn't contain password
 * 4. Test your work!
 */

/**
 * Goal: Add validation and sanitization to task
 *
 * 1. Trim the description and make it required
 * 2. Make completed optional and default it to false
 * 3. Test your work with and without errors
 */
