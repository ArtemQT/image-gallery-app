import { useSearchContext } from '@modules/images-module';

import { searchInputContent } from './search-input.content.ts';
import styles from './search-input.module.scss';

export const SearchInput = () => {
    const { searchQuery, updateSearchQuery } = useSearchContext();
    const { label, placeholder } = searchInputContent;

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
                onChange={(e) => updateSearchQuery(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};
