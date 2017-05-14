import React, {PropTypes} from 'react';
import Button from 'components/Button.jsx';
import RewardsTable from 'components/RewardsTable.jsx';
import Header from 'components/Header.jsx';

class TravelCheckIn extends React.Component {
  render() {
    const {about, pointsRewarded} = this.props.activity;
    const {checkIn, activity} = this.props;

    const rewards = [
      {
        label: 'Explorer Points',
        type: 'explorerPoints',
        quantity: pointsRewarded
      },
      {
        label: 'Surprise Locations',
        type: 'surpriseLocations',
        quantity: 2
      }
    ];

    return <div>
      <Header level={1}>{about}</Header>

      <RewardsTable rewards={rewards}/>
      <Button onClick={() => checkIn(activity)}>Check-in</Button>
    </div>;
  }
}

TravelCheckIn.propTypes = {
  checkIn: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired
};

export default TravelCheckIn;