# Drumcircle 
Social media for drumcircles

## Routes
| METHOD | Route | Location | Purpose |
| ------ | ------------- | ----------------- |  ------------------------------------------------------------------------- |
| GET | / | Home.js | Home Page |
| GET | /auth/login | /auth/Login.js | Login Page |
| POST | /auth/login| /auth/Login.js | Login and authenticate user |
| GET | /auth/signup | /auth/Signup.js | Sign up form to register a user |
| POST | /auth/signup | /auth/Signup.js | Creates a new user and checks for duplicates |
| GET | /profile | Profile.js | Profile Page |
| GET | /group/:id | Group.js | A component protected by group members |
| PUT | /group/:id | Group.js | A component protected by group members to edit groups |
| DELETE | /group/:id | Group.js | A component protected by group members to delete groups |
| GET | /groups/new | Group.js | A component page for making new drum circle groups |
| POST | /groups/new | Group.js | A component page for posting new groups |
| GET | /posts | Post.js | A post component page for making new posts to groups |
| POST | /posts/new | Post.js | A post component page to post new posts to groups |
| PUT | /posts/:id | Post.js | A post component to edit posts |
| DELETE | /posts/:id | Post.js | A way to delete group posts |
