import { observable } from 'mobx';

import sandboxStore from '../features/sandbox/store/sandbox-store';

export class RootStore {
  @observable public appTitle = 'Project Explorer';

  @observable
  public features = {
    sandbox: sandboxStore,
  };
}

const store = new RootStore();

export default store;
