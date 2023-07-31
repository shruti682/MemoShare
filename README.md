# MemoShare

A Full Stack Social Interactive MERN Application.

Here users can post their memories by adding a photo and text/links . They can view them at any time, and can also add tags and descriptions. They can also add likes to that post.

Users can either SignUp manually or by Google OAuth to view and interact with posts of other users.

It also allows to search and sort posts by tags and keywords.

Tech Stack : NodeJs, ExpressJs, ReactJs, MongoDB, MaterialUI

# How to run locally

1. Clone the repository
2. Create Google OAuth Client ID from Google console. [How to?](https://support.google.com/cloud/answer/6158849?hl=en)
3. Add following eviroment variables:
   - For server:
     - MongoDB connection URL
   - For client:
     - Google OAuth Client ID 
      - Local server URL
4. Run `npm install` in both client and server folders.
5. Run `npm start` in both client and server folders.
6. Open `localhost:3000` in your browser.
