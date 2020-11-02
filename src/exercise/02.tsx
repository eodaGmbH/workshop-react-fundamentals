import * as React from 'react';

const name = 'Josh Perez';

// We create a new JSX Element here
const elementJSX = <h1 className="greeting">Hello, {name}</h1>;

const JSXGreeting: React.FC = () => {
  // JSX Elements can be returned by React Components!
  return elementJSX;
};

/*
const element = React.createElement(
  // Exercise fill out
);

const CreateElementGreeting: React.FC = () => {
  return element;
};

export { CreateElementGreeting as default }
*/

export { JSXGreeting as default };
