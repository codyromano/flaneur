import React from 'react';
import styles from 'styles/LandingPage.scss';
import {mainContainer} from 'styles/BasePage.scss';
import Button from 'components/Button.jsx';
import {routerRedirect} from 'flaneur-utils';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.onStartClick = this.onStartClick.bind(this);
  }
  onStartClick() {
    routerRedirect('pick-region');
  }
  render() {
    const landingContainer = [mainContainer, styles.content].join(' ');
    return (
      <div className={styles.background}>
        <div className={landingContainer}>
          <h1 className={styles.logo}>
            flâneur
          </h1>
          <h2 className={styles.subheading}>(Noun) A person who wanders through
          a city for the sake of exploring it.</h2>

          <Button onClick={this.onStartClick}
            block={false}>Start Exploring Seattle</Button>
        </div>
      {/* TODO: Automate version number display */}
        <span className={styles.version}>Version 1.2.0</span>
      </div>
    );
  }
}

export default LandingPage;