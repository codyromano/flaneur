import React, {PropTypes} from 'react';
import styles from 'styles/Footer.scss';
import {mainContainer} from 'styles/BasePage.scss';

class Footer extends React.Component {
  render() {
    const containerClass = [mainContainer, styles.container].join(' ');
    return (<footer className={styles.footer}>
      <div className={containerClass}>
        <div className={styles.explorerPoints}>
          <span>{this.props.explorerPoints}</span>
        </div>
      </div>
    </footer>);
  }
}

Footer.propTypes = {
  explorerPoints: PropTypes.number.isRequired
};

export default Footer;