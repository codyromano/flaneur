import React from 'react';
import styles from 'styles/Button.scss';

class Button extends React.Component {
  render() {
    const {href, subtitle, secondaryAction} = this.props;
    const props = Object.assign({}, this.props);

    const className = this.props.block ? styles.blockButton : styles.button;
    props.className = (props.className || '').concat(className);

    if (secondaryAction) {
      props.className+= ` ${styles.secondaryAction}`;
    }

    let subtitleDisplay = '';
    if (subtitle) {
      subtitleDisplay = <span className={styles.subtitle}>{subtitle}</span>;
    }

    const button = (
      <button {...props}>
        {this.props.children}
        {subtitleDisplay}
      </button>
    );

    if (href.length) {
      return (
        <a href={href} className={styles.linkWrapper} target={'_blank'}>
          {button}
        </a>
      );
    }
    return button;
  }
}

Button.defaultProps = {
  block: true,
  secondaryAction: false,
  subtitle: '',
  href: ''
};

export default Button;