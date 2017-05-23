import React from 'react';
import styles from 'styles/Button.scss';

class Button extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  renderSubtitle() {
    if (this.props.subtitle) {
      return (
        <span className={styles.subtitle}>{this.props.subtitle}</span>
      );
    }
  }
  onClick(callback) {
    return event => {
      if (!this.props.href.length || this.props.href === '#') {
        event.preventDefault();
      }
      if (typeof callback === 'function') {
        return callback(event);
      }
    };
  }
  getLinkClassName() {
    const {secondaryAction, block} = this.props;
    let classList = [];
    if (block) {
      classList.push(styles.blockButton);
    } else {
      classList.push(styles.button);
    }
    if (secondaryAction) {
      classList.push(styles.secondaryAction);
    }
    return classList.join(' ');
  }
  render() {
    const {
      href,
      target,
      onClick,
      disabled
    } = this.props;

    const linkProps = {
      href,
      target,
      disabled,
      onClick: this.onClick(onClick)
    };

    return (
      <a {...linkProps} className={this.getLinkClassName()}>
        {this.props.children}
        {this.renderSubtitle()}
      </a>
    );
  }
}

Button.defaultProps = {
  block: true,
  secondaryAction: false,
  subtitle: '',
  href: '#',
  target: ''
};

export default Button;