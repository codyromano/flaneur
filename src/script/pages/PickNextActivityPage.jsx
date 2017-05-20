import React, {PropTypes} from 'react';
import NextActivityPicker from 'components/NextActivityPicker.jsx';
import {routerRedirect} from 'flaneur-utils';
import {getNextActivities, getCurrentActivity} from 'data/activitiesGraph';

class PickNextActivityPage extends React.Component {
  constructor() {
    super();
    this.pickNextActivity = this.pickNextActivity.bind(this);
  }
  componentWillMount() {
    this.currentActivity = getCurrentActivity();
    if (this.currentActivity) {
      this.options = getNextActivities(
        this.currentActivity,
        4,
        this.props.user
      );
    } else {
      // No current activity available
      routerRedirect('/');
    }
  }
  pickNextActivity(activity) {
    routerRedirect(`travel/${activity.id}`);
  }
  render() {
    const childProps = {
      user: this.props.user,
      options: this.options || [],
      pickNextActivity: this.pickNextActivity
    };
    return <div>
      <NextActivityPicker {...childProps}/>
    </div>;
  }
}

PickNextActivityPage.propTypes = {
  user: PropTypes.object.isRequired
};

export default PickNextActivityPage;