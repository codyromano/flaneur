import React, {PropTypes} from 'react';
import styles from 'styles/Footer.scss';
import {mainContainer} from 'styles/BasePage.scss';

class Footer extends React.Component {
  render() {
    const containerClass = [mainContainer, styles.container].join(' ');
    const {explorerPoints} = this.props.user;

    return (<footer className={styles.footer}>
      <div className={containerClass}>
        <div className={styles.explorerPoints}>
          <span>{explorerPoints}</span>
        </div>
      </div>
    </footer>);
  }
}

Footer.propTypes = {
  user: PropTypes.object.isRequired
};

export default Footer;