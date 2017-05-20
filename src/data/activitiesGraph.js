import sortByProximity from 'filters/sortActivitiesByProximity';
import sortByRandom from 'filters/sortActivitiesByRandom';
import filterByRegion from 'filters/filterActivitiesByRegion';
import filterByVisited from 'filters/filterActivitiesByVisited';
import filterByLocked from 'filters/filterActivitiesByLocked';
import mapActivitiesAssignId from 'filters/mapActivitiesAssignId';
import mapAssignDifficulty from 'filters/mapActivitiesAssignDifficulty';
import mapAssignExplorerPoints from 'filters/mapActivitiesAssignExplorerPoints';

import {clone, negate, dedupe} from 'flaneur-utils';
import rawActivitiesData from 'data/activities.json';

let activities = rawActivitiesData;

activities = activities
  .map(mapActivitiesAssignId())
  .map(mapAssignDifficulty(activities))
  .map(mapAssignExplorerPoints(activities));

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
  const regions = activities.map(a => a.region);
  return dedupe(regions);
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

export function getNextActivities(currentActivity, limit, user) {
  const [latitude, longitude] = currentActivity.location;

  // All unvisited activities nearby
  const allOptions = activities
    .filter(filterByVisited(visited))
    .sort(sortByProximity(latitude, longitude));

  // To tease the user, we'll always include some options that are
  // locked. This incentivizes them to keep playing.
  const totalLocked = 1;

  if (limit - totalLocked < 1) {
    throw new Error(`next activities limit must be at least ${totalLocked}`);
  }

  const lockedFilter = filterByLocked(user);
  const unlockedFilter = negate(lockedFilter);

  let unlockedOptions = clone(
    allOptions.filter(unlockedFilter)
  );
  let lockedOptions = clone(
    allOptions.filter(lockedFilter)
  );
  
  // Populate the results array with nearby, unlocked activities,
  // but leave some room for "teaser" activities
  let results = unlockedOptions.splice(0, limit - totalLocked);

  while (results.length < limit &&
    (unlockedOptions.length || lockedOptions.length)) {

    // Use "teaser" activities if they exist. Otherwise, fall back
    // to display activities that are unlocked.
    if (lockedOptions.length) {
      results.push(
        lockedOptions.shift()
      );
    } else {
      results.push(
        unlockedOptions.shift()
      );
    }
  }

  return results.length && results || null;
}