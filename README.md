[![CircleCI](https://circleci.com/gh/AndreaDiotallevi/radio-player.svg?style=shield)](https://circleci.com/gh/AndreaDiotallevi/radio-player)

# Radio Player

[Description](#description) | [Technologies Used](#technologies-used) | [Getting Started](#getting-started) | [How to Run the App](#how-to-run-the-app) | [How to Run the Tests](#how-to-run-the-tests) | [Continuous Integration](#continuous-integration) | [Features to Implement Next](#features-to-implement-next)

## Description

A full-stack application in Express and React that lets the user toggle between two different radio stations in real-time with websocket connection.

## Technologies Used

- Main technologies:
  * [Express](https://expressjs.com/): a fast, unopinionated, minimalist web framework for Node.js I used to get, post and patch the albums information from / to the MongoDB database and the React single page app.
  * [Node](https://nodejs.org/en/): a JavaScript runtime built on Chrome's V8 JavaScript engine I used to write JavaScript code on the server side.
  * [React](https://reactjs.org/): a JavaScript library I used to build the user interface and gather data from the Express and external APIs.
  
- Testing frameworks:
  * [Jest](https://jestjs.io/): a JavaScript Testing Framework with a focus on simplicity.
  * [Enzyme](https://www.npmjs.com/package/enzyme): a JavaScript Testing utility for React that makes it easier to test the React Components' output.

## Getting Started

* Clone this repository and change into it
* Make sure you have [Node.js](https://nodejs.org/en/download/) installed
* Install all the back-end dependencies with ```npm install```
* Install all the front-end dependencies with ```npm run client-install```

## How to Run the App

* To start the Express server type ```npm run server```
* To start the React server type ```npm run client```
* To start both servers concurrently type ```npm run dev```

## How to Run the Tests

* To run the client tests type ```npm run client-test```

## Continuous Integration

[CircleCI](https://circleci.com/): tool for automating the development process quickly, safely, and at scale.

## Features to Implement Next

* Playback controlled via spawning a node child process
* Complete full test coverage suite
* Styling
