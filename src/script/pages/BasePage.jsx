import React, {PropTypes} from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import PickRegionPage from 'pages/PickRegionPage.jsx';
import PickNextActivityPage from 'pages/PickNextActivityPage.jsx';
import TravelPage from 'pages/TravelPage.jsx';
import styles from 'styles/BasePage.css';

class BasePage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={styles.mainContainer}>
        <Switch>
          <Route path="/travel/:activityId" component={TravelPage}/>
          <Route path="/pick-next-activity" component={PickNextActivityPage}/>
          <Route path="/" component={PickRegionPage}/>
        </Switch>
      </div>
    );
  }
}

export default BasePage;