import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPlayersSuccess } from '../appState/actions';

import './PlayerTable.scss';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import CreatePlayerModal from './CreatePlayerModal';

const getPlayers = (state) => state.playerIds.map((id) => state.players[id]);
const openModal = (state) => state.players.createPlayerModalOpen;
const getStart = (state) => state.players.start;
const getSize = (state) => state.players.size;

const PlayerTable = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    (async function fetchPlayers() {
      const response = await fetch('http://localhost:3001/players', {
        headers: {
          Accept: 'application/json',
        },
      });

      const json = await response.json();
      dispatch(fetchPlayersSuccess(json));
    })();
  }, [dispatch]);

  async function deletePlayer(playerId) {
    const response = await fetch(`http://localhost:3001/players/${playerId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
      },
    });
    if (response.ok) {
      fetchPagination();
    } else {
      alert('user not found');
    }
  }

  async function createPlayer(body) {
    const response = await fetch(`http://localhost:3001/players`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (response.ok) {
      await fetchPagination();
    } else {
      alert(`error: ${response.statusText}`);
    }
  }

  async function fetchPagination(size = 24, newStart) {
    const response = await fetch(
      `http://localhost:3001/players?size=${size}&from=${newStart}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const json = await response.json();
    dispatch(fetchPlayersSuccess(json));
  }

  const players = useSelector(getPlayers);
  const createPlayerModalOpen = useSelector(openModal);
  const start = useSelector(getStart);
  const size = useSelector(getSize);

  async function nextPage() {
    setPage(page + 1);
    await fetchPagination(24, start + 24);
  }

  async function backPage() {
    setPage(page - 1);
    await fetchPagination(24, start - 24);
  }

  return (
    <div
      id="player-table-grid"
      role="grid"
      aria-label="Poker Players"
      className="player-table"
    >
      <TableHeader nextPage={nextPage} backPage={backPage} page={page} />
      <TableBody players={players} deletePlayer={deletePlayer} />
      <CreatePlayerModal
        createPlayer={createPlayer}
        isModalVisible={createPlayerModalOpen}
      />
    </div>
  );
};

export default PlayerTable;
