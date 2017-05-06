import sortByProximity from 'filters/sortActivitiesByProximity';
import sortByRandom from 'filters/sortActivitiesByRandom';
import filterByRegion from 'filters/filterActivitiesByRegion';
import mapActivitiesAssignId from 'filters/mapActivitiesAssignId';

import rawActivitiesData from 'data/activities.json';

const activities = rawActivitiesData.map(mapActivitiesAssignId());

export function getActivities() {
  return activities;
}

export function getInitialActivity(selectedRegion) {
  const options = activities
    .filter(filterByRegion(selectedRegion))
    .sort(sortByRandom());

  return options.length ? options[0] : null;
}

export function getNextActivities(currentActivity, limit) {
  const latitude = currentActivity.location[0],
        longitude = currentActivity.location[1];

  const proxSort = sortByProximity(latitude, longitude);
  const options = activities
    .sort(proxSort)
    .slice(0, limit);

  return options.length ? options : null;
}