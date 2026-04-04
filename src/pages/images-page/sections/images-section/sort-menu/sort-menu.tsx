import { useImages, useSearchContext } from '@modules/images-module';
import { sortOptionsList } from '@shared/constants/sort-menu-list.ts';
import { useState } from 'react';

import styles from './sort-menu.module.scss';

export const SortMenu = () => {
    const { sortType, updateSortType } = useSearchContext();
    const { data } = useImages();

    const [isOpenSortMenu, setIsOpenSortMenu] = useState(false);

    return (
        <div
            className={styles.wrapper}
            data-is-empty-search={!!data?.totalImages}
        >
            <span>Sort by</span>
            <div className={styles.sortMenu}>
                <button
                    className={styles.selectedButton}
                    onClick={() => setIsOpenSortMenu(!isOpenSortMenu)}
                    data-is-active-sort-menu={isOpenSortMenu}
                >
                    {sortType}
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
                                    updateSortType(option);
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
