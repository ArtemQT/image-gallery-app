import styles from './sort-menu.module.scss';
import { useState } from 'react';
import {
    sortOptionsList,
    type TSortType,
} from '@shared/utils/sort-menu-list.ts';

export const SortMenu = () => {
    const [sortedType, setSortedType] = useState<TSortType>('relevant');
    const [isOpenSortMenu, setIsOpenSortMenu] = useState(false);

    return (
        <div className={styles.wrapper}>
            <span>Sort by</span>
            <div className={styles.sortMenu}>
                <button
                    className={styles.selectedButton}
                    onClick={() => setIsOpenSortMenu(!isOpenSortMenu)}
                    data-is-active-sort-menu={isOpenSortMenu}
                >
                    {sortedType}
                </button>
                <ul
                    className={styles.sortMenuList}
                    data-is-active-sort-menu={isOpenSortMenu}
                >
                    {sortOptionsList.map((option) => (
                        <li className={styles.sortMenuItem} key={option}>
                            <button
                                onClick={() => {
                                    setIsOpenSortMenu(false);
                                    setSortedType(option);
                                }}
                            >
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
