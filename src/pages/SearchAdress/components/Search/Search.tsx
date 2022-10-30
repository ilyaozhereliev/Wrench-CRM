import React, { FC } from 'react';

import search_icon from '../../../../assets/icons/search_icon.svg';
import styles from './Search.module.scss';

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
  getAdress: (value: string) => void;
}

const Search: FC<SearchProps> = ({ search, setSearch, getAdress }) => {
  const searchAdress = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    getAdress(search);
  };

  return (
    <div className={styles.content}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Введите интересующий вас адрес"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" onClick={searchAdress}>
          <img src={search_icon} alt="search" />
          Поиск
        </button>
      </div>
    </div>
  );
};

export default Search;
