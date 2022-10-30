import sb_calendar from '../assets/icons/sb_calendar.svg';
import sb_exit from '../assets/icons/sb_exit.svg';
import sb_main from '../assets/icons/sb_main.svg';
import sb_maps from '../assets/icons/sb_maps.svg';
import sb_search from '../assets/icons/sb_search.svg';
import sb_settings from '../assets/icons/sb_settings.svg';
import sb_tables from '../assets/icons/sb_tables.svg';
import sb_vidgets from '../assets/icons/sb_vidgets.svg';

export const sideBarData = [
  {
    title: 'Главная',
    path: '/',
    icon: sb_main,
    index: 1,
    type: 'item',
  },
  {
    title: 'Поиск адресов',
    path: '/adress',
    icon: sb_search,
    index: 2,
    type: 'item',
  },
  {
    title: 'Таблицы',
    icon: sb_tables,
    index: 3,
    type: 'item',
  },
  {
    title: 'Календарь',
    icon: sb_calendar,
    index: 4,
    type: 'item',
  },
  {
    title: 'Карты',
    icon: sb_maps,
    index: 5,
    type: 'item',
  },
  {
    title: 'Виджеты',
    icon: sb_vidgets,
    index: 6,
    type: 'item',
  },
  {
    title: 'Настройки',
    icon: sb_settings,
    index: 7,
    type: 'dropdown',
  },

  {
    title: 'Выход',
    icon: sb_exit,
    index: 8,
    type: 'item',
  },
];
