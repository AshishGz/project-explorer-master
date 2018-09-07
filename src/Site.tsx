import './Site.css';

import { Provider } from 'mobx-react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import * as React from 'react';

import Sandbox from './features/sandbox/Sandbox';
import Header from './sdk/components/Header/Header';
import rootStore from './store/root';

const stores = {
  root: rootStore,
};

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Fabric id="app" className="horizontal-nav">
          <Header />
          <Sandbox />
        </Fabric>
      </Provider>
    );
  }
}

export default App;
