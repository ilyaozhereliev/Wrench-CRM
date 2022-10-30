import React from 'react';

import { Wrapper } from '../../components';
import { Adresses } from './components/Adresses';

const SearchAdress = () => (
  <Wrapper
    pageName="Поиск адресов"
    pageDescription="Введите интересующий вас адрес"
  >
    <Adresses />
  </Wrapper>
);

export default SearchAdress;
