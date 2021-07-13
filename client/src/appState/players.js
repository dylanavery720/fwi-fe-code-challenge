import { FETCH_PLAYERS_SUCCESS, OPEN_CREATE_PLAYER_MODAL } from './constants';

function mergePlayers(state, { players }) {
  const newState = { ...state };
  players.forEach((player) => {
    newState[player.id] = player;
  });
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
