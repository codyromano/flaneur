import {Actions} from 'flaneur-constants';
import {isObject} from 'flaneur-utils';

const initState = {
  user: {
    explorerPoints: 0
  },
  network: {
    initStateSetFromServer: false
  },
  visited: {}
};

export default function(state = initState, action = {}) {
  switch (action.type) {
    // TODO: Move to general app reducer
  case Actions.get('SET_INITIAL_STATE'):
    if (isObject(action.initState)) {
      Object.assign(state, action.initState);
      state.network = Object.assign(state.network || {}, {
        initStateSetFromServer: true
      });
    }
    break;
  case Actions.get('CHANGE_EXPLORER_POINTS'):
    if (Number.isInteger(action.points)) {
      state.user.explorerPoints+= action.points;
    } 
    break;
  case Actions.get('UPDATE_VISITED_MAP'):
    if (isObject(action.visited)) {
      Object.assign(state.visited, action.visited);
    }
    break;
  }
  return state;
}