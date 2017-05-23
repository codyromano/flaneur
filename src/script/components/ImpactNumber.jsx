import React, {PropTypes} from 'react';

export default class ImpactNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      startTime: new Date().getTime()
    };
    this.updateNumberCycle = this.updateNumberCycle.bind(this);
  }
  updateNumberCycle() {
    const timeElapsed = new Date().getTime() - this.state.startTime;
    const currentValue = this.state.value;
    const targetValue = this.props.value;
    const {animationDuration} = this.props;

    const displayValue = this.props.easeFn(
      currentValue,
      targetValue,
      timeElapsed,
      animationDuration
    );

    this.setState({value: displayValue});

    if (timeElapsed < this.props.animationDuration) {
      window.requestAnimationFrame(this.updateNumberCycle);
    }
  }
  componentDidMount() {
    window.requestAnimationFrame(this.updateNumberCycle);
  }
  componentWillUnmount() {
    clearInterval(this.updateNumber);
  }
  render() {
    return (
      <span {...this.props}>{this.state.value}</span>
    );
  }
}

const defaultEaseFn = (
  currentValue,
  targetValue,
  timeElapsed,
  timeAllowed
) => {
  if (timeElapsed >= timeAllowed) {
    return targetValue;
  } else {
    return Math.round(targetValue * (timeElapsed / timeAllowed));
  }
};

ImpactNumber.defaultProps = {
  animationDuration: 1500,
  easeFn: defaultEaseFn
};

ImpactNumber.propTypes = {
  easeFn: PropTypes.func,
  value: PropTypes.number.isRequired,
  animationDuration: PropTypes.number
};