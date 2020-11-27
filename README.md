# react-test
### Jest

Jest is a delightful JavaScript testing framework with a focus on simplicity. It can be installed with npm or Yarn. Jest fits into a broader category of utilities known as test runners. It works great for React applications, but it also works great outside of React applications.
 
Enzyme is a library that is used to test React applications. It’s designed to test components, and it makes it possible to write assertions that simulate actions that confirm whether the UI is working correctly.
 
Jest and Enzyme complement each other so well, so we will be using both.
 
Jest will be installed by default if you create react app from 
npx create-react-app <project name>


### Process Of Running A Test With Jest
Create  react app `npx create-react-app <project name>`

`npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer`

Create a file under src called `setupTests.js`


```import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });```

Paste above code in `setupTests.js`

This imports Enzyme and sets up the adapter to run our tests.
Keywords which is important for testing 
it or test You would pass a function to this method, and the test runner would execute that function as a block of tests.

describe This optional method is for grouping any number of it or test statements.

expect This is the condition that the test needs to pass. It compares the received parameter to the matcher. It also gives you access to a number of matchers that let you validate different things. You can read more about it in the documentation.

mount This method renders the full DOM, including the child components of the parent component, in which we are running the tests.
shallow This renders only the individual components that we are testing. It does not render child components. This enables us to test components in isolation.
    
 
### Creating A Test File
How does Jest know what’s a test file and what isn’t? The first rule is that any files found in any directory with the name __test__ are considered a test. If you put a JavaScript file in one of these folders, Jest will try to run it when you call Jest, for better or for worse. The second rule is that Jest will recognize any file with the suffix .spec.js or .test.js. It will search the names of all folders and all files in your entire repository.

Sample App.Test.js Looks like
`
it("renders without crashing", () => {
  shallow(<App />);
});`

Run `npm run test`
