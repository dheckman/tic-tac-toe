# Product Requirements

Please write a simple two-player game of tic-tac-toe on 3x3 board using React components.
This game is played by two players in the same browser window, with progress saved to a
server using either REST or GraphQL. Please mock this server endpoints by storing this
information in localStorage.

Your solution should provide a clean abstraction for managing state of the components, game,
and cumulative scores. Ideally, this abstraction leverages the latest and greatest best practices from the React community, but any clean and generalizable abstraction will do. Also, css styling and high-quality interactions are a bonus.


## About this Project

I chose to use React Hooks with this project, as they give you all the benefits of lifecycle methods without the bloat. 

## Todo:

* Clean up Game.tsx file. 
* Testing!

## Running the local server

### System Requirments

* node v8.10.0+
* npm v5.0.0+

### To install and run

```sh
$ git clone <url>
$ cd to repo
$ npm install
$ yarn watch
# or 
$ npm run watch
$ open another terminal tab
$ yarn runserver
# or
$ npm run runserver

Server will be available at http://localhost:3000/ and the ./app directory will be mounted to '/'.
```

