import React from 'react';
import Button from 'components/Button.jsx';

class CheckInButtonWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: this.props.mainText,
      flashing: false
    };
    this.onWrapperClick = this.onWrapperClick.bind(this);
  }
  flashState(propName, newValue, duration) {
    if (this.state.flashing) {
      return;
    }
    const originalValue = this.state[propName];

    this.setState({
      flashing: true,
      [propName]: newValue
    });

    setTimeout(() => {
      this.setState({
        flashing: false,
        [propName]: originalValue
      });
    }, duration);
  }

  onWrapperClick(event) {
    const {
      timeIsUp,
      distanceErrorMsg,
      errorDisplayTime,
      onClick
    } = this.props;

    if (timeIsUp) {
      // Activity check-in
      onClick(event);
    } else {
      this.flashState(
        'buttonText',
        distanceErrorMsg,
        errorDisplayTime
      );
    }
  }
  render() {
    const buttonProps = Object.assign({}, this.props, {
      onClick: this.onWrapperClick
    });

    return (
      <Button {...buttonProps}>
        {this.state.buttonText}
      </Button>
    );
  }
}

CheckInButtonWrapper.defaultProps = {
  mainText: `Check-in`,
  distanceErrorMsg: `You're too far away. Move closer`,
  errorDisplayTime: 5000
};

export default CheckInButtonWrapper;