import React, {PropTypes} from 'react';

class NextActivityPicker extends React.Component {
  render() {
    const options = this.props.options.map((activity, i) => {
      const callback = () => this.props.pickNextActivity(activity);
      return <button key={i} onClick={callback}>{activity.about}</button>;
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