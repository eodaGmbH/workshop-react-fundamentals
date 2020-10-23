import * as React from 'react';

const name = 'Josh Perez';

// We create a new JSX Element here
const elementJSX = <h1 className="greeting">Hello, {name}</h1>;

const JSXGreeting: React.FC = () => {
  // JSX Elements can be returned by React Components!
  return elementJSX;
};

const element = React.createElement(
  // Element Type - `string` for HTML elements or a class/function of the React Component
  'h1',
  // Properties that should be passed to the HTML element or the React Component
  { className: 'greeting' },
  // The `children` property. Can be one of the following:
  // - null
  // - JSX-Element
  // - String
  `Hello ${name}`
);

const CreateElementGreeting: React.FC = () => {
  return element;
};

export { JSXGreeting, CreateElementGreeting as default };
