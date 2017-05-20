import React from 'react';
import DatabaseFactory from 'stores/DatabaseFactory';
import {routerRedirect} from 'flaneur-utils';

const db = DatabaseFactory({});

class DebugConsole extends React.Component {
  constructor() {
    super();
    this.resetLocalStorage = this.resetLocalStorage.bind(this);
  }
  resetLocalStorage() {
    db.save('state', {});
    routerRedirect('');
  }
  render() {
    return (
      <div>
        <button onClick={this.resetLocalStorage}>Reset Local Storage</button>
      </div>
    );
  }
}

export default DebugConsole;