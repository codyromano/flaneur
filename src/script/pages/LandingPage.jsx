import React, {PropTypes} from 'react';
import styles from 'styles/LandingPage.scss';

class LandingPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={styles.mainContainer}>
        Landing Page
      </div>
    );
  }
}

export default LandingPage;