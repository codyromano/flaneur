import React, {PropTypes} from 'react';

class LocationPicker extends React.Component {
  render() {
    const regions = this.props.regions.map((regionName, i) => {
      const callback = () => this.props.setLocation(regionName);
      return (<button key={i} onClick={callback}>{regionName}</button>);
    });
    return (<div className="loc-picker">
      <strong>Current region:</strong>
      <menu>
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