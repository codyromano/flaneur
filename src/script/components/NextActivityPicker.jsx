import React, {PropTypes} from 'react';
import Button from 'components/Button.jsx';

class NextActivityPicker extends React.Component {
  render() {
    const options = this.props.options.map((activity, i) => {
      const callback = () => this.props.pickNextActivity(activity);
      return <Button
        key={i}
        onClick={callback}
        subtitle={activity.region}
        >{activity.about}</Button>;
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