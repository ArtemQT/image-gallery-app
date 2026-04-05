import { useImages, useSearchContext } from '@modules/images-module';
import {
    sortOptionsList,
    type TSortType,
} from '@shared/constants/sort-menu-list.ts';
import { useCallback, useState } from 'react';

import { sortMenuContent } from './sort-menu.content.ts';
import styles from './sort-menu.module.scss';

interface ISortMenuOptionProps {
    option: TSortType;
    onSelect: (option: TSortType) => void;
}

const SortMenuOption = ({ option, onSelect }: ISortMenuOptionProps) => {
    const handleClick = useCallback(() => {
        onSelect(option);
    }, [option, onSelect]);

    return (
        <li className={styles.sortMenuItem}>
            <button type="button" onClick={handleClick}>
                {option}
            </button>
        </li>
    );
};

export const SortMenu = () => {
    const { sortType, updateSortType } = useSearchContext();
    const { data } = useImages();

    const [isOpenSortMenu, setIsOpenSortMenu] = useState(false);

    const handleToggleOpen = useCallback(() => {
        setIsOpenSortMenu((open) => !open);
    }, []);

    const handleSelectOption = useCallback(
        (option: TSortType) => {
            setIsOpenSortMenu(false);
            updateSortType(option);
        },
        [updateSortType],
    );

    return (
        <div
            className={styles.wrapper}
            data-is-empty-search={!!data?.totalImages}
        >
            <span>{sortMenuContent.label}</span>
            <div className={styles.sortMenu}>
                <button
                    type="button"
                    className={styles.selectedButton}
                    onClick={handleToggleOpen}
                    data-is-active-sort-menu={isOpenSortMenu}
                >
                    {sortType}
                </button>
                <ul
                    className={styles.sortMenuList}
                    data-is-active-sort-menu={isOpenSortMenu}
                >
                    {sortOptionsList.map((option) => (
                        <SortMenuOption
                            key={option}
                            option={option}
                            onSelect={handleSelectOption}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};
