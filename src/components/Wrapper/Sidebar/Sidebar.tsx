import cn from 'classnames';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import sb_dropdown from '../../../assets/icons/sb_dropdown.svg';
import { sideBarData } from '../../../data/sidebarData';
import { subsettingsData } from '../../../data/subsettingsData';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const [subsettingsIsOpen, setSubsettingsIsOpen] = useState(false);
  const { pathname } = useLocation();

  const changeSubsettingsVisible = (type: string) => {
    if (type === 'dropdown') {
      setSubsettingsIsOpen(!subsettingsIsOpen);
    }
  };

  return (
    <section>
      <div className={styles.sidebar}>
        <div className={styles.title}>Меню</div>
        {sideBarData.map((item) => (
          <ul
            key={item.index}
            onClick={() => {
              changeSubsettingsVisible(item.type);
            }}
          >
            {item.path ? (
              <NavLink
                className={cn(
                  styles.sidebar__item,
                  item.path === pathname && styles.sidebar__item_active,
                )}
                to={item.path}
              >
                <div className={styles.sidebar__item_content}>
                  <img
                    className={styles.sb_icon}
                    src={item.icon}
                    alt={item.title}
                  />
                  <span>{item.title}</span>
                </div>
                {item.path === pathname && (
                  <div className={styles.border__active} />
                )}
              </NavLink>
            ) : (
              // </div>
              <li className={styles.sidebar__item}>
                <div className={styles.sidebar__item_content}>
                  <img
                    className={styles.sb_icon}
                    src={item.icon}
                    alt={item.title}
                  />
                  <span>{item.title}</span>
                </div>
                {!subsettingsIsOpen && item.type === 'dropdown' && (
                  <img
                    className={styles.dropdown}
                    src={sb_dropdown}
                    alt="dropdowns"
                  />
                )}
                {subsettingsIsOpen && item.type === 'dropdown' && (
                  <img
                    className={cn(styles.dropdown, styles.dropdown_active)}
                    src={sb_dropdown}
                    alt="dropdowns"
                  />
                )}
              </li>
            )}

            {subsettingsIsOpen && item.type === 'dropdown' && (
              <li
                className={styles.subsettings}
                onClick={(e) => e.stopPropagation()}
              >
                {subsettingsData.map((sub_item) => (
                  <li key={sub_item.index} className={styles.sidebar__item}>
                    <img
                      className={styles.sb_icon}
                      src={sub_item.icon}
                      alt={item.title}
                    />
                    <span>{sub_item.title}</span>
                  </li>
                ))}
              </li>
            )}
          </ul>
        ))}
      </div>
    </section>
  );
};
export default Sidebar;
