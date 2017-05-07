import React, {PropTypes} from 'react';
import ActivityButton from 'components/ActivityButton.jsx';

const getLockedPlacholder = id => {
  return (
    <ActivityButton
      key={id}
      onClick={() => {}}
      region={'placeholder'}
      isLocked={true}
      block={true}
    />
  );
};

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

    }).concat(getLockedPlacholder('placeholder1'))
      .concat(getLockedPlacholder('placeholder2'));

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