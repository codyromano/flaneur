import React, {PropTypes} from 'react';
import styles from 'styles/Header.scss';

class Header extends React.Component {
  render() {
    const {level, noGapBottom} = this.props;
    const className = [
      styles.header,
      styles[`headerLevel${level}`],
      noGapBottom ? styles.noGapBottom : ''
    ].join(' ');
    return <div className={className}>{this.props.children}</div>;
  }
}

Header.propTypes = {
  noGapBottom: PropTypes.bool,
  level: PropTypes.oneOf([1,2,3,4,5]).isRequired
};

export default Header;