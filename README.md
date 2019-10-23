# React Component Boilerplate

This repo is a boilerplate for single React components that are developed individually. You can isolate a component, develop it in an agnostic way, test it and then export it as an NPM package to reuse it in other repositories.

This is perfect if you want to contribute to the open source React community by developing reusable React components.

Please, don't hesitate to open an issue or open a PR with improvements.

react-component-boilerplate uses
* Storybook
* Jest
* React-testing-library
* Webpack

## Developing the component

Run `npm test:dev` to make **Jest** watch all files.

Run `npm run storybook` to see the component in every state. You can tell **Storybook** to render every state of the component in *MyComponent.stories.js* file.

## Building the package

Run `npm run build` to make a *dist* folder with the exported component.

### Testing the packaged component

Once you have run `npm run build` you can link the component by doing `npm link` in the root of the project, and then doing `npm link react-component-boilerplate` in the root of the app where you want to test this packaged component.
