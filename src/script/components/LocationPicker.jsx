import React, {PropTypes} from 'react';
import Button from 'components/Button.jsx';
import styles from 'styles/LocationPicker.scss';

class LocationPicker extends React.Component {
  render() {
    const regions = this.props.regions.sort((a, b) => {
      return a > b ? 1 : -1;
    }).map((regionName, i) => {
      const callback = () => this.props.setLocation(regionName);
      return (
        <Button key={i} onClick={callback}>{regionName}</Button>
      );
    });
    return (<div className="loc-picker">
      <strong className={styles.regionLabel}>Current region:</strong>
      <menu className={styles.regionMenu}>
      {regions}
      </menu>
    </div>);
  }
}

LocationPicker.propTypes = {
  regions: PropTypes.array.isRequired,
  setLocation: PropTypes.func.isRequired
};

export default LocationPicker;