import {bindToRange, average} from 'flaneur-utils';

function getCostScore(cost, mostExpensive) {
  return bindToRange(cost / mostExpensive, 0, 1);
}

export default function mapActivitiesAssignDifficulty(activities) {
  const costs = activities.map(activity => activity.cost),
    times = activities.map(activity => activity.minutesRequired);

  const mostExpensive = Math.max(...costs),
    mostTimeConsuming = Math.max(...times);

  return (activity) => {
    const {cost, minutesRequired} = activity;
    const costScore = bindToRange(cost / mostExpensive, 0, 1),
          timeScore = bindToRange(minutesRequired / mostTimeConsuming, 0, 1);

    activity.costDifficulty = costScore;
    activity.timeDifficulty = timeScore;
    activity.difficulty = average([costScore, timeScore]);

    return activity;
  };
}