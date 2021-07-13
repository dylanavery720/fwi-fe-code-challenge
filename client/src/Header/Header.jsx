import React from 'react';
import { useDispatch } from 'react-redux';

import './Header.scss';
import { ReactComponent as CloudColor } from './cloud-color.svg';
import { ReactComponent as CloudEffects } from './cloud-effects.svg';
import { openCreatePlayerModal } from '../appState/actions';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header id="main-header" className="header">
      <div className="logo">
        <CloudColor className="logo__color" />
        <CloudEffects className="logo__effects" />
      </div>
      <h1 className="header__title">FWI Poker Challenge</h1>
      <span
        onClick={() => dispatch(openCreatePlayerModal(true))}
        className="header__title nav"
      >
        CREATE PLAYER
      </span>
    </header>
  );
};

export default Header;
