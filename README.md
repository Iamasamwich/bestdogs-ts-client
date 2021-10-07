# BEST DOGS

## Specs

### Frontend

* React frontend
* Interface with an image & 3 buttons
* The image should show the currently viewed dog
* There should be a Next, Previous & Favourite button
* Next button should fetch a new dog image to display
* Previous button should show the previous dog
* Store up to 10 previous dogs already shown
* Favourite button should add the current dog to a separate UI element below the image view

* *See Best-Dogs-Design.png for wireframe*

### Backend

* Node/Express/[Node-Json-DB](https://www.npmjs.com/package/node-json-db)
* Rest API to perform CRUD operations
* Favourite dogs should be stored in the JSONdb
* Should be able to remove favourite dogs
* The favourite dogs should persist when the page reloads

## Links:

* [Dog API](https://github.com/public-apis/public-apis#animals)

## Bonus points:

* Typescript
* Testing (any framework)
* Documentation

## Installation

* If you haven't already, create the bestdogs directory

\> `mkdir bestdogs`

* Change to that directory

\> `cd bestdogs`

* Clone the server

bestdogs\> `git clone https://github.com/Iamasamwich/bestdogs-ts.git`

* install the server packages

bestdogs\> `cd bestdogs-ts`

bestdogs/bestdogs-js\> `npm install`

* start the server

bestdogs/bestdogs-js\> `npm run dev`

* You can see the built version by going to http://localhost:8080

* to see the react development version, open a new terminal window, change to the parent directory and clone the client

bestdogs\> `git clone https://github.com/Iamasamwich/bestdogs-ts-client.git`

* install the client packages

bestdogs\> `cd bestdogs-ts-client`

bestdogs/bestdogs-ts-client\> `npm install`

* start the client server

\> `npm start`

* go to http://localhost:3000 to see it in action 

* If the server isn't running the app will still work, but won't fetch or update your favourite dogs.

