export default function filterActivitiesByLocked(user) {
  return activity => {
    const {explorerPoints} = user;
    const {pointsRequired} = activity;

    if ([explorerPoints, pointsRequired].every(Number.isInteger)) {
      return explorerPoints < pointsRequired;
    } else {
      throw new Error(`Explorer points or points required is
        not availability for activity: `, activity);
    }
  };
}