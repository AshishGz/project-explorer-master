import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Site from './Site';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Site />, div);
});
