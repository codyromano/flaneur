import React, {PropTypes} from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import PickRegionPage from 'pages/PickRegionPage.jsx';
import PickNextPage from 'pages/PickNextActivityPage.jsx';
import LandingPage from 'pages/LandingPage.jsx';
import TravelPage from 'pages/TravelPage.jsx';
import Footer from 'components/Footer.jsx';
import styles from 'styles/BasePage.scss';

import flaneurStore from 'stores/flaneurStore';

console.log(flaneurStore);

const withContainer = function(Page) {
  return props => {
    return (<div className={styles.mainContainer}>
      <Page {...props}/>
      <Footer explorerPoints={200}/>
    </div>);
  };
};

class BasePage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Switch>
        <Route path="/travel/:activityId"
          component={withContainer(TravelPage)}/>

        <Route path="/pick-next-activity" 
          component={withContainer(PickNextPage)}/>

        <Route path="/pick-region"
          component={withContainer(PickRegionPage)}/>

        <Route path="/" component={LandingPage}/>
      </Switch>
    );
  }
}

export default BasePage;