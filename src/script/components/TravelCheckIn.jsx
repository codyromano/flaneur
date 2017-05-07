import React, {PropTypes} from 'react';
import Button from 'components/Button.jsx';
import RewardsTable from 'components/RewardsTable.jsx';

class TravelCheckIn extends React.Component {
  render() {
    const {about} = this.props.activity;
    const {checkIn, activity} = this.props;

    return <div>
      <h1>{about}</h1>

      <RewardsTable rewards={[]}/>
      <Button onClick={() => checkIn(activity)}>Check-in</Button>
    </div>;
  }
}

TravelCheckIn.propTypes = {
  checkIn: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired
};

export default TravelCheckIn;