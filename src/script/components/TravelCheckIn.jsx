import React, {PropTypes} from 'react';

class TravelCheckIn extends React.Component {
  render() {
    const {about} = this.props.activity;
    const {checkIn, activity} = this.props;

    return <div>
      <h1>{about}</h1>
      <p>Check-in to unlock additional activities</p>

      <button onClick={() => checkIn(activity)}>Check-in</button>
    </div>;
  }
}

TravelCheckIn.propTypes = {
  checkIn: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired
};

export default TravelCheckIn;