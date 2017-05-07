import sortByProximity from 'filters/sortActivitiesByProximity';
import sortByRandom from 'filters/sortActivitiesByRandom';
import filterByRegion from 'filters/filterActivitiesByRegion';
import filterByVisited from 'filters/filterActivitiesByVisited';
import mapActivitiesAssignId from 'filters/mapActivitiesAssignId';
import mapAssignDifficulty from 'filters/mapActivitiesAssignDifficulty';

import rawActivitiesData from 'data/activities.json';

const activities = rawActivitiesData.map(mapActivitiesAssignId());
const visited = {};

// TODO: Need to manage this differently. Graph shouldn't be a singleton
let currentActivity = null;

export function getCurrentActivity() {
  return currentActivity;
}

export function markCurrent(activity) {
  currentActivity = activity;
}

export function markVisited(activity) {
  visited[activity.id] = true;
}

export function getRegions() {
  return [
    'Eastlake',
    'Downtown',
    'Capitol Hill'
  ];
}

export function getActivities() {
  return activities;
}

export function getActivityById(id) {
  const matches = activities.filter(activity => activity.id === id);
  return matches.length === 1 ? matches[0] : null;
}

export function getInitialActivity(selectedRegion) {
  const options = activities
    .filter(filterByRegion(selectedRegion))
    .sort(sortByRandom());

  return options.length ? options[0] : null;
}

export function getNextActivities(currentActivity, limit) {
  // TODO: Filter by not visited
  const latitude = currentActivity.location[0],
        longitude = currentActivity.location[1];

  const options = activities
    .filter(filterByVisited(visited))
    .sort(sortByProximity(latitude, longitude))
    .map(mapAssignDifficulty(activities))
    .slice(0, limit);

  return options.length ? options : null;
}