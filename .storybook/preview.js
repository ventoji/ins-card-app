//import '!style-loader!css-loader!sass-loader!../YOUR_LESS_FILE.scss';
//import '!style-loader!css-loader!sass-loader!../src/test.scss';

//import '../src/test.scss';
import { addDecorator } from '@storybook/react'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import results from '../.jest-test-results.json';
import '../src/app.css';

addDecorator(
  withTests({
    results
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
}