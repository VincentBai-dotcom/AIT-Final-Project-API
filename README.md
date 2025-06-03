# Ear Trainer

## Overview

A well-trained musician can identify intervals, chords, scales, etc. just by listening to a piece of music, and good ears will be beneficial to a musician in almost all aspects. However, this skill cannot be acquired without meticulous effort.

This Ear Trainer is a web app that will allow users to practice their ability to identify intervals and chords by ear. Users will be able to choose to practice either intervals or chords listening, and the app will also keep track of the users' performance on each type and quality of intervals and chords to help them sharpen their weakest points. 


## Data Model

The application will store Users and UserStats.

* Users can have multiple UserStats (via references)
* Each UserStats record has one attribute called `type` (either "interval" or "chord"), one attribute called `quality` (which marks the actual answer), and tracks the number of problems answered correctly by the user and the total number of problems attempted.

### Example User:

```javascript
{
  username: "shannonshopper",
  hash: // a password hash,
}
```

### Example UserStats:

```javascript
{
  username:  "vincent",// a reference to a User object
  type: "chord",
  quality: "Major Seventh",
  correct: 3,
  total: 10
}
```


## [Database Schema](./db.js)

## Wireframes

**/** - Index page that allows users to start training and login

![Index page wireframe](https://github.com/VincentBai-dotcom/AIT-Final-Project-API/blob/main/documentation/Index.jpg?raw=true)

**/interval** - Training page with a play button and a list of available answers for interval identification

![Interval training page wireframe](https://github.com/VincentBai-dotcom/AIT-Final-Project-API/blob/main/documentation/Interval.jpg?raw=true)

**/chord** - Identical to /interval except with chord-specific answer options

**/login** - Page for user login and signup

![Login page wireframe](https://github.com/VincentBai-dotcom/AIT-Final-Project-API/blob/main/documentation/Login.jpg?raw=true)

**/stats** - Page to display user performance statistics

![Stats page wireframe](https://github.com/VincentBai-dotcom/AIT-Final-Project-API/blob/main/documentation/Stats.jpg?raw=true)

## Site Map

- **/** - Navigation hub linking to [/login](#wireframes), [/chord](#wireframes), [/interval](#wireframes), [/stats](#wireframes)
- **/login** - Returns to [/](#wireframes)
- **/interval** - Returns to [/](#wireframes)
- **/chord** - Returns to [/](#wireframes)
- **/stats** - Returns to [/](#wireframes)

## User Stories or Use Cases

1. As a non-registered user, I can register a new account with the site
2. As a user, I can log in to the site
3. As a user, I can practice identifying chords and intervals by ear
4. As a user, I can check my past performance statistics for specific chords or intervals

## Research Topics

* **(3 points) Audio**
    * Need to find an efficient method to generate audio for the application
    * Evaluated two candidates: Web Audio API and Tone.js
* **(6 points) REST API**
    * Built a REST API using Express as a stand-alone application that serves the backend
    * Key challenges include authentication. The backend sends a JSON web token to the frontend, and the frontend includes this token in the request header for authentication.
* **(7 points) React**
    * Used React as the frontend framework; it's a challenging library to learn, so I've assigned it 7 points
    * Since React is a library, not a framework, I also learned other libraries necessary for development, including React Router, Axios, Tailwind CSS, etc.

## Project Files

- **[Backend Main File](./app.js)** - Express server and API setup
- **[Frontend Main File](https://github.com/VincentBai-dotcom/AIT-Final-Project-Frontend/blob/master/src/App.js)** - React application entry point

## References Used

1. [React router docs](https://reactrouter.com/) 
2. [React docs](https://reactjs.org/docs/getting-started.html) 
3. [Tone.js docs](https://tonejs.github.io/)
4. [Tailwind CSS docs](https://tailwindcss.com/docs/guides/create-react-app)
5. [Template codes of Tailwind CSS components](https://tailwind-elements.com/quick-start/)
6. [Json Web Token tutorial](https://www.djamware.com/post/58eba06380aca72673af8500/node-express-mongoose-and-passportjs-rest-api-authentication)
7. [Axios docs](https://axios-http.com/docs/intro)

