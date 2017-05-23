import React, {PropTypes} from 'react';
import Header from 'components/Header.jsx';
import ImpactNumber from 'components/ImpactNumber.jsx';
import styles from 'styles/RewardsTable.scss';
import {adjustFontSizeForInt} from 'flaneur-utils';

class RewardsTable extends React.Component {
  render() {
    // TODO: Create separate component for reward row
    const rewardRows = this.props.rewards.map((reward, i) => {
      const qtStyle = {
        fontSize: adjustFontSizeForInt(reward.quantity)
      };
      const rewardClass = [
        styles[reward.type],
        styles.quantityWrapper
      ].join('');

      return (<div className={styles.row} key={i}>
        <div className={rewardClass} style={qtStyle}>
          <ImpactNumber value={reward.quantity}/>
        </div>
        <div className={styles.label}>
          {reward.label}
        </div>
      </div>);
    });

    return (<div className={styles.table}>
      <Header noGapBottom={true} level={2}>Rewards</Header>
      {rewardRows}
    </div>);
  }
}

RewardsTable.propTypes = {
  rewards: PropTypes.array.isRequired
};

export default RewardsTable;