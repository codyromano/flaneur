import React, {Component, PropTypes} from 'react';
import moment from 'moment';

export default class CountdownContainer extends Component {
  constructor(props) {
    super(props);

    this.updateDuration = this.updateDuration.bind(this);
    this.state = {
      duration: moment.duration(
        this.getTimeRemaining()
      )
    };
  }
  getTimeRemaining() {
    const endTime = this.props.startTime + this.props.duration;
    return Math.max(0, endTime - new Date().getTime());
  }
  updateDuration() {
    this.setState({
      duration: moment.duration(
        this.getTimeRemaining()
      )
    });
  }
  componentWillUnmount() {
    window.clearInterval(this.counterInterval);
  }
  componentDidMount() {
    this.counterInterval = window.setInterval(this.updateDuration, 1000);
  }
  render() {
    const {duration} = this.state;
    const timeProps = {
      humanTime: duration.humanize(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
      timeIsUp: duration.seconds() === 0
    };

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, timeProps)
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

CountdownContainer.defaultProps = {
  startTime: new Date().getTime()
};

CountdownContainer.propTypes = {
  // Countdown time in milliseconds
  duration: PropTypes.number.isRequired,
  startTime: PropTypes.number,
  customRenderTime: PropTypes.func
};