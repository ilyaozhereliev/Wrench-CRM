import calendar from '../assets/icons/sb_calendar.svg';
import exit from '../assets/icons/sb_exit.svg';
import main from '../assets/icons/sb_main.svg';
import maps from '../assets/icons/sb_maps.svg';
import search from '../assets/icons/sb_search.svg';
import settings from '../assets/icons/sb_settings.svg';
import tables from '../assets/icons/sb_tables.svg';
import vidgets from '../assets/icons/sb_vidgets.svg';

export const sideBarData = [
  {
    title: 'Главная',
    path: '/',
    icon: main,
    index: 1,
    type: 'item',
  },
  {
    title: 'Поиск адресов',
    path: '/adress',
    icon: search,
    index: 2,
    type: 'item',
  },
  {
    title: 'Таблицы',
    icon: tables,
    index: 3,
    type: 'item',
  },
  {
    title: 'Календарь',
    icon: calendar,
    index: 4,
    type: 'item',
  },
  {
    title: 'Карты',
    icon: maps,
    index: 5,
    type: 'item',
  },
  {
    title: 'Виджеты',
    icon: vidgets,
    index: 6,
    type: 'item',
  },
  {
    title: 'Настройки',
    icon: settings,
    index: 7,
    type: 'dropdown',
  },

  {
    title: 'Выход',
    icon: exit,
    index: 8,
    type: 'item',
  },
];
