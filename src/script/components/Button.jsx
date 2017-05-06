import React, {PropTypes} from 'react';
import styles from 'styles/Button.scss';

class Button extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    props.className = (props.className || '').concat(styles.button);
    return <button {...props}>{this.props.children}</button>;
  }
}

export default Button;