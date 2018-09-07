import './Header.css';

import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { RootStore } from '../../../store/root';

export interface IHeaderProps {
  root?: RootStore;
}

@inject('root')
@observer
export default class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <div id="app-head">
        <div className="app-head-left" />

        <div id="app-head-center">
          <span style={{ fontSize: '1.6em' }}>{this.props.root!.appTitle}</span>
        </div>
        <div
          id="app-head-right"
          style={{ marginRight: 15, color: 'rgba(0,0,0,0.44)' }}
        />
      </div>
    );
  }
}
