import React, {PropTypes} from 'react';

import LocationPicker from 'components/LocationPicker.jsx';
import Travel from 'components/Travel.jsx';
import NextActivityPicker from 'components/NextActivityPicker.jsx';

import {getInitialActivity, getNextActivities} from 'data/activitiesGraph';

// TODO: Use Redux
const regions = [
  'Eastlake',
  'Downtown',
  'Capitol Hill'
];

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedRegion: null,
      currentActivity: null,
      mustPickNextActivity: false,
      nextActivityOptions: []
    };
    this.setLocation = this.setLocation.bind(this);
    this.checkIn = this.checkIn.bind(this);
    this.pickNextActivity = this.pickNextActivity.bind(this);
  }
  setLocation(selectedRegion) {
    const currentActivity = getInitialActivity(selectedRegion);
    if (currentActivity) {
      this.setState({
        selectedRegion,
        currentActivity
      });
    } else {
      throw new Error(`There must be at least one activity in the
        "${selectedRegion}" region. Check your activities JSON file.`);
    }
  }
  pickNextActivity(activity) {
    this.setState({
      currentActivity: activity,
      mustPickNextActivity: false
    });
  }
  checkIn() {
    const next = getNextActivities(this.state.currentActivity, 2);

    this.setState({
      nextActivityOptions: next,
      mustPickNextActivity: true
    });
  }
  getLocationPicker() {
    if (this.state.selectedRegion) {
      return null;
    } else {
      return <LocationPicker
        setLocation={this.setLocation}
        regions={regions}
      />;
    }
  }
  getNextActivityPicker() {
    const {nextActivityOptions, mustPickNextActivity} = this.state;
    if (mustPickNextActivity) {
      return <NextActivityPicker
        options={nextActivityOptions}
        pickNextActivity={this.pickNextActivity}
      />;
    }
    return null;
  }
  getTravel() {
    const {currentActivity} = this.state;
    if (currentActivity && !this.state.mustPickNextActivity) {
      return <Travel
        checkIn={this.checkIn}
        activity={currentActivity}
      />;
    }
    return null;
  }
  render() {
    return <div>
      {this.getLocationPicker()}
      {this.getTravel()}
      {this.getNextActivityPicker()}
    </div>;
  }
}

export default Landing;