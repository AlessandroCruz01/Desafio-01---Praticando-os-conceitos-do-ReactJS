import React from 'react';
import style from './Header.module.css'
import LogoRocket from '../assets/Logo.svg'

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
        <img src={LogoRocket} alt="Logo da rocket" />
    </header>
  );
}
