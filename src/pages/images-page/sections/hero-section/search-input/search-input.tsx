import styles from './search-input.module.scss';
import { type ChangeEventHandler, useState } from 'react';

export const SearchInput = () => {
    const [searchValue, setSearchValue] = useState('');
    const onChangeSearch: ChangeEventHandler<HTMLInputElement> = (e) =>
        setSearchValue(e.target.value);

    return (
        <div className={styles.searchWrapper}>
            <label className="visually-hidden" htmlFor="search-input">
                Search input
            </label>
            <input
                className={styles.searchInput}
                id="search-input"
                type="text"
                value={searchValue}
                onChange={onChangeSearch}
                placeholder="Search..."
            />
        </div>
    );
};
