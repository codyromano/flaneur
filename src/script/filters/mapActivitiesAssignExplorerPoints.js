export default function mapActivitiesAssignExplorerPoints(activities) {
  return (activity) => {
    if (!isNaN(activity.difficulty)) {
      activity.pointsRewarded = Math.max(1, Math.round(activity.difficulty * 1000));
    } else {
      throw new Error(`Activity must have an assigned difficulty
        before explorer point values can be calculated.`);
    }
    return activity;
  };
}