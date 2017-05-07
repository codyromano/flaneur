import React, {PropTypes} from 'react';
import Button from 'components/Button.jsx';
import styles from 'styles/RewardsTable.scss';
import {adjustFontSizeForInt} from 'flaneur-utils';

class RewardsTable extends React.Component {
  render() {
    const mockRewards = [
      {
        quantity: 5000,
        type: 'explorerPoints',
        label: 'Explorer Points'
      },
      {
        quantity: 2,
        type: 'surpriseLocations',
        label: 'Surprise Locations'
      }
    ];

    const rewardRows = mockRewards.map(reward => {
      const qtStyle = {
        fontSize: adjustFontSizeForInt(reward.quantity)
      };
      const rewardClass = [
        styles[reward.type],
        styles.quantityWrapper
      ].join('');

      return (<div className={styles.row}>
        <div className={rewardClass} style={qtStyle}>
          {reward.quantity}
        </div>
        <div className={styles.label}>
          {reward.label}
        </div>
      </div>);
    });

    return (<div>{rewardRows}</div>);
  }
}

RewardsTable.propTypes = {
  rewards: PropTypes.array.isRequired
};

export default RewardsTable;