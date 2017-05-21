import {makeEnum} from 'flaneur-utils';

const Actions = makeEnum([
  'CHANGE_EXPLORER_POINTS',
  'SET_INITIAL_STATE',
  'UPDATE_VISITED_MAP'
]);

export const GameplaySettings = {
  // 30 minutes
  CheckinBonusTimeLimit: 1000 * 60 * 30
};

export {Actions};