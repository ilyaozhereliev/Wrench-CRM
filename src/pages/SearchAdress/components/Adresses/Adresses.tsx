import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { token } from '../../../../env';
import { Search } from '../Search';
import styles from './Adresses.module.scss';

// interface Adress {}

const Adresses = () => {
  const [adresses, setAdress] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  const getAdress = async () => {
    try {
      const response = await axios.get(
        'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
        {
          headers: {
            Authorization: `Token ${token}`,
          },
          params: {
            query: search,
          },
        },
      );
      setAdress(response.data.suggestions);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (search.length > 2) {
      getAdress();
    } else {
      setAdress([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div>
      <Search search={search} setSearch={setSearch} getAdress={getAdress} />
      {adresses.length > 0 && (
        <ul className={styles.container}>
          <h1>Адреса</h1>
          {adresses.map((adress) => (
            <li
              key={adress.geoname_id}
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
