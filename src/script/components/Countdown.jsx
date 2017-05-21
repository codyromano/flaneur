import React from 'react';
import styles from 'styles/shared/infoBox.scss';

export default class Countdown extends React.Component {
  render() {
    if (this.props.timeIsUp) {
      return (
        <div></div>
      );
    }
    return (
      <div className={styles.infoBox}>Arrive within <b>{this.props.humanTime}</b> to
        earn a bonus</div>
    );
  }
}