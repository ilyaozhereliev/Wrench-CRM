import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Search } from '../Search';
import styles from './Adresses.module.scss';

const Adresses = () => {
  const [adresses, setAdress] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  const getAdress = async () => {
    try {
      const response = await axios.get(
        'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
        {
          headers: {
            Authorization: 'Token 40577cf16aaed08253566aaccfc29dd4200b80f0',
          },
          params: {
            query: search,
          },
        },
      );
      setAdress(response.data.suggestions);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    if (search.length > 2) {
      getAdress();
    } else {
      setAdress([]);
    }
  }, [search]);

  return (
    <div>
      <Search search={search} setSearch={setSearch} getAdress={getAdress} />
      {adresses.length > 0 && (
        <ul className={styles.container}>
          <h1>Адреса</h1>
          {adresses.map((adress) => (
            <li
              className={styles.items}
              onClick={() => setSearch(adress.value)}
            >
              <div className={styles.item}>{adress.value}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Adresses;
