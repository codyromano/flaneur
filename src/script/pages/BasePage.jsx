import React, {PropTypes} from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import PickRegionPage from 'pages/PickRegionPage.jsx';
import PickNextPage from 'pages/PickNextActivityPage.jsx';
import LandingPage from 'pages/LandingPage.jsx';
import TravelPage from 'pages/TravelPage.jsx';
import Footer from 'components/Footer.jsx';
import styles from 'styles/BasePage.scss';

import {isObject} from 'flaneur-utils';
import {Actions} from 'flaneur-constants';

import flaneurStore from 'stores/flaneurStore';
import DatabaseFactory from 'stores/DatabaseFactory';

const db = DatabaseFactory({});
db.get('state').then(initState => {
  console.log(`is: `, initState);
  flaneurStore.dispatch({
    type: Actions.get('SET_INITIAL_STATE'),
    initState
  });
});

const withContainer = function(Page, state = {}) {
  return props => {
    const propsWithBasePageState = Object.assign({}, props, state);
    return (<div className={styles.mainContainer}>
      <Page {...propsWithBasePageState}/>
      <Footer {...propsWithBasePageState}/>
    </div>);
  };
};

class BasePage extends React.Component {
  constructor() {
    super();
    this.state = flaneurStore.getState();
  }
  componentDidMount() {
    flaneurStore.subscribe(() => {
      const newState = flaneurStore.getState();

      if (newState.network.initStateSetFromServer) {
        this.setState(newState);

        db.save('state', newState).then(result => {
          console.info('saved');
        });
      }
    });
  }
  render() {
    const {state} = this;

    if (!state.network.initStateSetFromServer) {
      return <div>Loading</div>;
    }
    return (
      <Switch>
        <Route path="/travel/:activityId"
          component={withContainer(TravelPage, state)}/>

        <Route path="/pick-next-activity" 
          component={withContainer(PickNextPage, state)}/>

        <Route path="/pick-region"
          component={withContainer(PickRegionPage, state)}/>

        <Route path="/" component={LandingPage}/>
      </Switch>
    );
  }
}

export default BasePage;