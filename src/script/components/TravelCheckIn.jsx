import React, {PropTypes} from 'react';
import Button from 'components/Button.jsx';
import RewardsTable from 'components/RewardsTable.jsx';
import Header from 'components/Header.jsx';
import CountdownContainer from 'components/CountdownContainer.jsx';
import Countdown from 'components/Countdown.jsx';
import {GameplaySettings} from 'flaneur-constants';

class TravelCheckIn extends React.Component {
  constructor() {
    super();
    this.state = {
      startTime: new Date().getTime()
    };
  }
  render() {
    const {about, pointsRewarded} = this.props.activity;
    const {checkIn, activity} = this.props;
    const [latitude, longitude] = activity.location;

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

    const mapLink = `https://www.google.com/maps/place/` +
      `${latitude},${longitude}`;
    const countdownProps = {
      startTime: this.state.startTime,
      duration: GameplaySettings.CheckinBonusTimeLimit
    };

    return <div>
      <Header level={1}>{about}</Header>

      <CountdownContainer {...countdownProps}>
        <Countdown/>
      </CountdownContainer>

      <RewardsTable rewards={rewards}/>

      <Button secondaryAction={true}
      href={mapLink}
      >Map &amp; Directions</Button>
      <Button onClick={() => checkIn(activity)}>Check-in</Button>
    </div>;
  }
}

TravelCheckIn.propTypes = {
  checkIn: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired
};

export default TravelCheckIn;