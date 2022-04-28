The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

# Ear Trainer

## Overview

A well-trained musician can identify intervals, chords, scales, etc. just by listening to a piece of music, and good ears will be beneficial to a musician almost in all aspects. However this skill cannot be acquired without meticilous effort. 

This Ear Trainer is a web app that will allow users to pratice their ability to identifies intervals and chords by ear. The user will able to choose to practice either intervals or chords listening, and the app will also keep track of the users' performance on each type of the quality of intervals and chords to sharpen their weakest point. 


## Data Model

(__TODO__: a description of your application's data and their relationships to each other_) 

The application will store Users and UserStats.

* users can have multiple UserStats (via references)
* each UserStats will have one attribute called type, whose value will be either interval or chord, one attribute called quality, which marks the actual answer, and will have the number the problems answered correctly by the user and the total number of problems done by the user.
An Example User:

```javascript
{
  username: "shannonshopper",
  hash: // a password hash,
}
```

An Example PerformanceStats

```javascript
{
  username:  "vincent",// a reference to a User object
  type: "chord",
  quality: "Major Seventh",
  correct: 3,
  total: 10
}
```


## [Link to Commented First Draft Schema](db.js) 

(__TODO__: create a first draft of your Schemas in db.js and link to it_)

## Wireframes

/ - index page that will allow user to start training and login

![index](https://github.com/VincentBai-dotcom/AIT-Final-Project-API/blob/main/documentation/Index.jpg?raw=true)

/interval - page of actual training with a play button and a list of available answer

![list](https://github.com/VincentBai-dotcom/AIT-Final-Project-API/blob/main/documentation/Interval.jpg?raw=true)

/chord - identical to /interval expect the set of possible answers

/login - page for login and signup

![list](https://github.com/VincentBai-dotcom/AIT-Final-Project-API/blob/main/documentation/Login.jpg?raw=true)

/stats - page to show stats 

![list](https://github.com/VincentBai-dotcom/AIT-Final-Project-API/blob/main/documentation/Stats.jpg?raw=true)

## Site map

/ - goes to /login, /chord, /interval, /stats

/login - goes to /

/interval - goes to /

/chord - goes to /

/stats - goes to /

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can pratice identifying chords and intervals by ear
4. as a user, I can check the past stats of my accuracy on particular chord or interval

## Research Topics

* (3 points) Audio
    * i need to find a efficient method to let my application make sound to implement the function
    * found two candidates: Web Audio API and Tone.js
* (6 points) REST API
    * i will build a REST API using express as a stand-alone application that serves the backend
    * some of the challenges include authentification. I will have the backend send a json web token to the frontend, and the frontend will include this token in the request header such that the backend can authenticate with.
* (7 points) React
    * used React as the frontend framework; it's a challenging library to learn, so I've assigned it 7 points
    * since React is a library, not a framework, I will also learn other libraries nessacery for development, including React Router, Axios, Tailwind CSS, etc.

## [Link to Initial Main Project File](app.js) 
## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of_)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)

