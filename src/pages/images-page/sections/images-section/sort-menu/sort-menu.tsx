import styles from './sort-menu.module.scss';
import { useState } from 'react';
import { sortOptionsList } from '@shared/utils/sort-menu-list.ts';
import { useImages, useSearchContext } from '@modules/images-module';

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
