import React, {PropTypes} from 'react';
import {routerRedirect} from 'flaneur-utils';

import {Link} from 'react-router-dom';
import LocationPicker from 'components/LocationPicker.jsx';

import {getRegions, getInitialActivity, getNextActivities} from 'data/activitiesGraph';

const regions = getRegions();

class PickRegionPage extends React.Component {
  constructor() {
    super();
    this.setLocation = this.setLocation.bind(this);
  }
  setLocation(selectedRegion) {
    const currentActivity = getInitialActivity(selectedRegion);
    if (currentActivity) {
      const id = currentActivity.id;
      routerRedirect(`travel/${id}`);
    } else {
      throw new Error(`There must be at least one activity in the
        "${selectedRegion}" region. Check your activities JSON file.`);
    }
  }
  render() {
    return <div>
      <LocationPicker
        setLocation={this.setLocation}
        regions={regions}
      />
    </div>;
  }
}

export default PickRegionPage;