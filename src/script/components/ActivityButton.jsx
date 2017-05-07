import React, {PropTypes} from 'react';
import Button from 'components/Button.jsx';
import styles from 'styles/Button.scss';

class ActivityButton extends React.Component {
  render() {
    const {isLocked, region} = this.props;
    const subtitle = isLocked && 'Locked' || region;

    const props = Object.assign({}, this.props);

    const className = this.props.block ? styles.blockButton : styles.button;
    props.className = (props.className || '').concat(className);

    if (isLocked) {
      // TODO: Source required points from activity
      const required = Math.round(100 + Math.random() * 3000);
      return <Button {...props} subtitle={`Requires ${required} Explorer Points`}
        disabled block={true}>
        Locked
      </Button>;
    }
    return <Button {...props} subtitle={subtitle} block={true}>
      {this.props.children}
    </Button>;
  }
}

ActivityButton.propTypes = {
  isLocked: PropTypes.bool.isRequired,
  region: PropTypes.string.isRequired
};

export default ActivityButton;