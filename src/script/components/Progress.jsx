import React, {PropTypes} from 'react';
import styles from 'styles/Progress.scss';

export default class Progress extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.progress}></div>
        <div className={styles.text}>
          20/30 places discovered
        </div>
      </div>
    );
  }
}

Progress.defaultProps = {
  maxValue: 100,
  minValue: 0
};

Progress.propTypes = {
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  value: PropTypes.number.isRequired
};