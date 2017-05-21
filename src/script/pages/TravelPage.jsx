import React from 'react';
import TravelCheckIn from 'components/TravelCheckIn.jsx';

import {markCurrent, markVisited, getActivityById} from 'data/activitiesGraph';
import {routerRedirect} from 'flaneur-utils';
import store from 'stores/flaneurStore';
import {Actions} from 'flaneur-constants';

class TravelPage extends React.Component {
  constructor({match}) {
    super();
    this.state = {
      startTime: new Date().getTime(),
      activity: getActivityById(match.params.activityId)
    };
    this.checkIn = this.checkIn.bind(this);
    markCurrent(this.state.activity);
  }
  checkIn(activity) {
    markVisited(activity);
    store.dispatch({
      type: Actions.get('CHANGE_EXPLORER_POINTS'),
      points: activity.pointsRewarded
    });
    routerRedirect('pick-next-activity');
  }
  render() {
    const {activity} = this.state;

    if (activity) {
      return <div>
        <TravelCheckIn
          activity={activity}
          checkIn={this.checkIn}
        />
      </div>;
    } else {
      return <div>Activity not found</div>;
    }
  }
}

export default TravelPage;