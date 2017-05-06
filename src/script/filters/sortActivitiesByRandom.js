export default function sortActivitiesByRandom() {
  return (a, b) => {
    return Math.random() >= 0.5 ? -1 : 1;
  };
}