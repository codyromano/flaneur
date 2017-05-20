import {makeEnum} from 'flaneur-utils';

const Actions = makeEnum([
  'CHANGE_EXPLORER_POINTS',
  'SET_INITIAL_STATE',
  'UPDATE_VISITED_MAP'
]);

export {Actions};