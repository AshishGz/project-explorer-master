import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Site from './Site';

ReactDOM.render(<Site />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
