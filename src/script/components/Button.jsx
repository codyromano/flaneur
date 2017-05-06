import React, {PropTypes} from 'react';
import styles from 'styles/Button.scss';

class Button extends React.Component {
  render() {
    const {subtitle} = this.props;
    const props = Object.assign({}, this.props);

    const className = this.props.block ? styles.blockButton : styles.button;
    props.className = (props.className || '').concat(className);

    let subtitleDisplay = '';
    if (subtitle) {
      subtitleDisplay = <span className={styles.subtitle}>{subtitle}</span>;
    }

    return <button {...props}>
      {this.props.children}
      {subtitleDisplay}
    </button>;
  }
}

Button.defaultProps = {
  block: true,
  subtitle: ''
};

export default Button;