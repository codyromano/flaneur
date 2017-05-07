import React, {PropTypes} from 'react';
import ActivityButton from 'components/ActivityButton.jsx';

class NextActivityPicker extends React.Component {
  render() {
    const options = this.props.options.map((activity, i) => {
      const callback = () => this.props.pickNextActivity(activity);
      return <ActivityButton
        key={i}
        onClick={callback}
        region={activity.region}
        isLocked={false}
        block={true}
        >{activity.about}</ActivityButton>;
    });

    return (<div className="next-activity-picker">
      <h1>Choose next activity</h1>
      {options}
    </div>);
  }
}

NextActivityPicker.propTypes = {
  pickNextActivity: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default NextActivityPicker;