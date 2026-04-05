import { useSearchContext } from '@modules/images-module';
import { type ChangeEventHandler, useCallback } from 'react';

import { searchInputContent } from './search-input.content.ts';
import styles from './search-input.module.scss';

export const SearchInput = () => {
    const { searchQuery, updateSearchQuery } = useSearchContext();
    const { label, placeholder } = searchInputContent;

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            updateSearchQuery(e.target.value);
        },
        [updateSearchQuery],
    );

    return (
        <div className={styles.searchWrapper}>
            <label className="visually-hidden" htmlFor="search-input">
                {label}
            </label>
            <input
                className={styles.searchInput}
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );
};
