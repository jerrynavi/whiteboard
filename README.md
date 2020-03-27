# Whiteboard - A real-time collaborative whiteboard application

[![Total alerts](https://img.shields.io/lgtm/alerts/g/jerrynavi/react-redux-template.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/jerrynavi/react-redux-template/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/jerrynavi/react-redux-template.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/jerrynavi/react-redux-template/context:javascript)

## Features

- And more...

## Contributing

There are a few things to note before you get started:

- This is a Create-React-App project (with Typescript)
- I am using [Ant Design](https://ant.design) components for the app
- Project structure
  
  ```bash
    ├── README.md
    ├── THEMING.md
    ├── config-overrides.js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └──assets
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── store
    │   └── utils
    └── tsconfig.json
  ```

---

All components (custom buttons, cards, etc) are under the `src/components` directory, while pages accessible via a route are under the `src/pages` directory.
I'm using Redux with the [Redux Toolkit](https://redux-toolkit.js.org/) package and the store is set up under `src/store`
Reusable functions and other utilities are under the `src/utils` directory.

---

## Available Scripts

All of the following commands can also be run using the yarn package manager. Make sure to run `npm install` or `yarn install` before you start using this project.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `yarn serve` (Optional)

Enables you use server-side rendering (SSR) using the production build of your app. Make sure to run `yarn build` first.
