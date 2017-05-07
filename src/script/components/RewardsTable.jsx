import React, {PropTypes} from 'react';
import Button from 'components/Button.jsx';
import Header from 'components/Header.jsx';
import styles from 'styles/RewardsTable.scss';
import {adjustFontSizeForInt} from 'flaneur-utils';

class RewardsTable extends React.Component {
  render() {
    const mockRewards = [
      {
        quantity: 50,
        type: 'explorerPoints',
        label: 'Explorer Points'
      },
      {
        quantity: 2,
        type: 'surpriseLocations',
        label: 'Surprise Locations'
      }
    ];

    // TODO: Create separate component for reward row
    const rewardRows = mockRewards.map((reward, i) => {
      const qtStyle = {
        fontSize: adjustFontSizeForInt(reward.quantity)
      };
      const rewardClass = [
        styles[reward.type],
        styles.quantityWrapper
      ].join('');

      return (<div className={styles.row} key={i}>
        <div className={rewardClass} style={qtStyle}>
          {reward.quantity}
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