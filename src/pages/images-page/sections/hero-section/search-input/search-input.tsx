import { useSearchContext } from '@modules/images-module';

import styles from './search-input.module.scss';

export const SearchInput = () => {
    const { searchQuery, updateSearchQuery } = useSearchContext();

    return (
        <div className={styles.searchWrapper}>
            <label className="visually-hidden" htmlFor="search-input">
                Search input
            </label>
            <input
                className={styles.searchInput}
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => updateSearchQuery(e.target.value)}
                placeholder="Search..."
            />
        </div>
    );
};
