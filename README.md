
#TFL Project

This is a personal project I have created based around Transport For London's API, using ReactJS and ES2015. It is a work in progress, I have enjoyed creating it so far, and am intereted in exploring more of the TFL API and these technologies.


## Setup
This setup requires NPM to install packages so please ensure you have node and npm installed.

First, clone the repo from Git and run:

```js
$ npm install
```

To compile stylesheets, run:

```js
$ npm run build-sass
```

To bundle files, run:
```js
$ npm run webpack
```

And to start the server and bundle files, run:

```js
$ npm run start-server
```

The website should now be viewable at http://localhost:8080/


## Notes

As this is a work in progress, there is still a lot I would like to implement but have not had the oppotunity to as of yet:

* Split styling into separate sass files for base, layout, normalise, and each component
* Set up sass preprocessor to compile and lint styling
* Set up linter for javascript
* Set up unit testing for javascript


There are also a number of features I would like to implement in future:
* Filter by transport service
* Filter by location along each line
* Colour coding for each line - Matching the TFL website
* Display information for Disruptions - perhaps as an accordian or pop-up
* Colour coding for different service statuses 



## Setup Issues
In case of any issues with setup, the packages can be individually installed:

```js
$ npm install react react-dom
$ npm install babel-core babel-loader webpack
$ npm install babel-preset-es2015 babel-preset-react
$ npm install webpack-dev-server
$ npm install npm-sass
```


