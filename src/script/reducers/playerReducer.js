import {Actions} from 'flaneur-constants';

const initState = {
  user: {
    explorerPoints: 0
  }
};

export default function(state = initState, action = {}) {
  switch (action.type) {
    case Actions.get('CHANGE_EXPLORER_POINTS'):
      if (Number.isInteger(action.points)) {
        state.user.explorerPoints+= action.points;
      } 
    break;
  }
  return state;
}