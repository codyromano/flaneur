export default function filterActivitiesByRegion(region) {
  return (activity) => {
    return activity.region === region;
  };
}