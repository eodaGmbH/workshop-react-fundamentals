/**
 * Exercise 01 - Different kinds of React Components
 */

import * as React from 'react';

/**
 * Class Component
 *
 * Has state & lifecycle methods included:
 * - this.state (State)
 * - componentDidMount()
 * - componentWillUnmount()
 */
class FirstReactComponent extends React.Component {
  render() {
    return null;
  }
}

/**
 * Functional Component (1)
 */
function FirstReactFunctionalComponent() {
  return null;
}

/**
 * Functional Component (2)
 */
const SecondReactFunctionalComponent: React.FC = () => {
  return null;
};

export {
  FirstReactComponent as default,
  FirstReactFunctionalComponent,
  SecondReactFunctionalComponent,
};
