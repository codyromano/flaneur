export default function sortActivitiesByRandom() {
  return () => {
    return Math.random() >= 0.5 ? -1 : 1;
  };
}