
## Coding exercise

This is a simple app in react/js that allow us to add, remove or delete cards.

## Docs
Every component in the application is detailed in the storybook documentation.


## How to use it
Just click (+) button placed in the rigth side on the screen, add title, description and url for card image, in just click add. All cards ara stored in `localStorage`. If you want to edit or remove a card just pass the mouse over the card and options will be displayed. 

[Storybook documentation](https://ventoji.github.io/ins-card-app/?path=/story/example-introduction--page)


## Development server

### Detailed scripts

* `npm run start` – start development with node at port 3000.
* `npm run build:dev` – build static site for develeopment with webpack + options
* `npm run build:dev` – build static site for production with webpack + options
* `npm run dev-server` – starts development server with webpack-dev-server at port 9000
* `npm run test` – Run unitary test designed for components.
* `npm run test:coverage` – Review the test coverage for the whole app.
* `npm run test:generated-output`
* `npm run test:generate-watch`
* `npm run storybook` – start development for storybook for all components
* `npm run build:storybook`
* `npm run predeploy:storybook`
* `npm run deploy:storybook`
* `npm run lint` – check code formatting and rules for react code and JS.
* `npm run lint:fix` – fix all problems found on the code 
* `npm run prettier` – check code formatting rules defined on .prettierrc file
* `npm run ncu` – check which dependencies are not up to date.
* `npm run ncu:updated`
* `npm run release` – handle version of the app.


### Commit changes
Add your files and commit your changes following convention of commit. Before pushing any changes make sure you update all the packages running `npm run ncu`. To include new changes in the master branch all tests and linters have to pass. All tests and checking linters are execute automatically running the configured jobs (see .github folder) every time you push some code. Additionally to that travis.ci performs the sames tasks.  

### Release version
After changes `run npm release` to automatically increase the control of version according to the changes applied (major, minor or patch). You can use `npm version OPTION` as well to generate the new version.

## Pending tasks

- Review all egde cases.
- Update UI when a card is created, deleted or edited. You have to refresh page to see changes
- Review validation for description and url.
- Add stories for modal window.
- Isolate some components (Special Buttons, error messages, successful messages).
- Design test cases for modal window and complete some test cases.
- Check responsive design.
- Deploy in a host service.
