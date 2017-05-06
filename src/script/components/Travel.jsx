import React, {PropTypes} from 'react';

class Travel extends React.Component {
  render() {
    const {about} = this.props.activity;

    return <div>
      <h1>{about}</h1>
      <p>Check-in to unlock additional activities</p>

      <button onClick={this.props.checkIn}>Check-in</button>
    </div>;
  }
}

Travel.propTypes = {
  checkIn: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired
};

export default Travel;