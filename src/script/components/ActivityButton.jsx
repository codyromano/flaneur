import React, {PropTypes} from 'react';
import Button from 'components/Button.jsx';
import styles from 'styles/Button.scss';

class ActivityButton extends React.Component {
  render() {
    const {isLocked, region, pointsRequired} = this.props;
    const subtitle = isLocked && 'Locked' || region;

    const props = Object.assign({}, this.props, {
      subtitle: `Earn ${pointsRequired} explorer points to unlock`
    });

    const className = this.props.block ? styles.blockButton : styles.button;
    props.className = (props.className || '').concat(className);

    if (isLocked) {
      return (
        <Button {...props}
        disabled block={true}>
        Undiscovered
        </Button>
      );
    }
    return <Button {...props} subtitle={subtitle} block={true}>
      {this.props.children}
    </Button>;
  }
}

ActivityButton.propTypes = {
  isLocked: PropTypes.bool.isRequired,
  pointsRequired: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired
};

export default ActivityButton;