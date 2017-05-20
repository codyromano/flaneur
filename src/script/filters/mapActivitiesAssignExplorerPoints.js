export default function mapActivitiesAssignExplorerPoints(/*activities*/) {
  return (activity) => {
    if (!isNaN(activity.difficulty)) {
      activity.pointsRewarded = Math.max(1,
        Math.round(activity.difficulty * 1000)
      );

      /* The tentative plan is to tier activities based on difficulty.
      The lowest 25% are available immediately. To unlock more difficult
      ones, you need to earn Explorer Points. */
      if (activity.difficulty <= 0.25) {
        activity.pointsRequired = 0;
      } else {
        activity.pointsRequired = activity.pointsRewarded;
      }

    } else {
      throw new Error(`Activity must have an assigned difficulty
        before explorer point values can be calculated.`);
    }
    return activity;
  };
}