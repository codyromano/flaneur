import React, {PropTypes} from 'react';
import Button from 'components/Button.jsx';

class TravelCheckIn extends React.Component {
  render() {
    const {about} = this.props.activity;
    const {checkIn, activity} = this.props;

    return <div>
      <h1>{about}</h1>
      <p>Check-in to unlock additional activities</p>

      <Button onClick={() => checkIn(activity)}>Check-in</Button>
    </div>;
  }
}

TravelCheckIn.propTypes = {
  checkIn: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired
};

export default TravelCheckIn;