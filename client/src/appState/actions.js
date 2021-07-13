import { FETCH_PLAYERS_SUCCESS, OPEN_CREATE_PLAYER_MODAL } from './constants';

export function fetchPlayersSuccess(data) {
  return { type: FETCH_PLAYERS_SUCCESS, payload: { data } };
}

export function openCreatePlayerModal(data) {
  return { type: OPEN_CREATE_PLAYER_MODAL, payload: { data } };
}
