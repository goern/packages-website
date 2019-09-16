import React from 'react';
import { App } from '@app/index';
import { mount, shallow } from 'enzyme';
import { Button } from '@patternfly/react-core';

describe('Package Background Check Results', () => {
  test('should render default App component', () => {
    const view = shallow(<App />);
    expect(view).toMatchSnapshot();
  });
});
