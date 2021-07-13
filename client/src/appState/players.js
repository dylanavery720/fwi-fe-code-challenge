import { FETCH_PLAYERS_SUCCESS, OPEN_CREATE_PLAYER_MODAL } from './constants';

function mergePlayers(state, { players, size, from }) {
  console.log(from, 'from', size, 'size');
  const newState = { ...state, start: from };
  players.forEach((player) => {
    newState[player.id] = player;
  });
  console.log(newState, 'n');
  return newState;
}

export default function players(state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return mergePlayers(state, action.payload.data);
    case OPEN_CREATE_PLAYER_MODAL:
      return { ...state, createPlayerModalOpen: action.payload.data };
    default:
      return state;
  }
}
