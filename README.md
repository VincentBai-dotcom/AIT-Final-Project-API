The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

# Ear Trainer

## Overview

A well-trained musician can identify intervals, chords, scales, etc. just by listening to a piece of music, and good ears will be beneficial to a musician almost in all aspects. However this skill cannot be acquired without meticilous effort. 

This Ear Trainer is a web app that will allow users to pratice their ability to identifies intervals and chords (or more) by ear. The user will have the option to choose which set of questions they are working on, and the app will also keep track of the users' performance on each type of the question to sharpen their weakest point. 


## Data Model

(__TODO__: a description of your application's data and their relationships to each other_) 

The application will store Users and PerformanceStats.

* users can have one PerformanceStats (via references)
* each PerformanceStats can have multiple type of pratices(chords, intervals), and each type would have the number the problems answered correctly by the user and the total number of problems done by the user, as well as the stats classified by the type (by embedding)

An Example User:

```javascript
{
  username: "shannonshopper",
  hash: // a password hash,
  performanceStats: // a reference to a PerformanceStats
}
```

An Example PerformanceStats

```javascript
{
  user: // a reference to a User object
  interval: [{
    correct: 20,
    total: 30,
    type: "major3rd",
  },
  {
    correct: 10,
    total: 20,
    type: "perfect4th",
  }
  {
    correct: 30,
    total: 50,
    type: "total",
  }],
  chord:[{
    correct: 0,
    total: 0,
    type: "total",
  }]
}
```


## [Link to Commented First Draft Schema](db.js) 

(__TODO__: create a first draft of your Schemas in db.js and link to it_)

## Wireframes

/ - index page that will allow user to start training and login

![list create](documentation/index.jpg)

/intervalSelect - page for allows user to select which set of intervals they would like to be tested on

![list](documentation/intervalSelect.jpg)

/interval - page of actual training with a play button and a list of available answer

![list](documentation/interval.jpg)

/chordSelect - identical to /intervalSelect except for different set of possible answers

/chord - identical to /interval expect the set of possible answers

/login - page for login and signup

![list](documentation/login.jpg)

/stats - page to show stats 

![list](documentation/stats.jpg)

/stats/interval - page to show stats on interval alone. Looks similar to /stats

/stats/chord - page to show stats on chord alone. Looks similar to /stats

## Site map

/ - goes to /login, /chordSelect, /intervalSelect, /stats

/login - goes to /

/intervalSelect - goes to / and /interval

/chordSelect - goes to / and /chord

/interval - goes to /

/chord - goes to /

/stats - goes to /, /stats/interval, /stats/chord

/stats/interval - goes to /, /stats, /stats/chord

/stats/interval - goes to /, /stats, /stats/interval

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can pratice identifying chords and intervals by ear
4. as a user, I can check the past stats of my accuracy on particular chord or interval

## Research Topics

* (3 points) Audio
    * i need to find a efficient method to let my application make sound to implement the function
    * found two candidates: Web Audio API and Tone.js
* (8 points) REST API
    * i will build a REST API using express as a stand-alone application that serves the backend
    * some of the challenges include authentification and performance
* (5 points) React
    * used React as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

## [Link to Initial Main Project File](app.js) 
## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of_)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)

