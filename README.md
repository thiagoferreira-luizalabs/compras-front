# Compras Frontend

## Technologies
- React.js - v16
- Bootstraped with creat-react-app
- JSX
- Webpack
- Semantic UI
- Less

## Running Locally
Install the dependencies and run:

```
$ npm install
$ npm start
```


## Testing 

Run `npm test`

## Testing tecnologies

#### JEST (https://jestjs.io/docs/en/getting-started)
  
The default testing environment for `create-react-app`. JEST allow us to test "snapshots", which means accordingly to the docs:

> Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

>A typical snapshot test case for a mobile app renders a UI component, takes a screenshot, then compares it to a reference image stored alongside the test. The test will fail if the two images do not match: either the change is unexpected, or the screenshot needs to be updated to the new version of the UI component.  

#### Enzyme  (https://airbnb.io/enzyme/)

Testing utility by Airbnb:
> Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.



#### Sinon (https://sinonjs.org/)

Used to mock and spy api calls:

> Standalone test spies, stubs and mocks for JavaScript. Works with any unit testing framework.

## Running tests with coverage metrics

The following command will output the coverage metrics to the command line, and also to a HTML file for better visualization. The file can be found at `/compras-front/coverage/lcov-report/index.html` and can be opened with your prefered browser.
```
$ npm run test:coverage
```

To run the testing and open google chrome in one single command, you may run:
```
$ npm run test:coverage:chrome
```