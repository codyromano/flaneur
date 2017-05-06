export default function filterActivitiesByVisited(visitedMap = {}) {
  return (activity) => {
    return !visitedMap[activity.id];
  };
}