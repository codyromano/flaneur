import React, {PropTypes} from 'react';
import styles from 'styles/Button.scss';

class Button extends React.Component {
  render() {
    const props = Object.assign({}, this.props);

    const className = this.props.block ? styles.blockButton : styles.button;
    props.className = (props.className || '').concat(className);

    return <button {...props}>{this.props.children}</button>;
  }
}

Button.defaultProps = {
  block: PropTypes.bool.isRequired
};

export default Button;