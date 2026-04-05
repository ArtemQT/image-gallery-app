import { useDebounce } from '@hooks/use-debounce.ts';
import type { TSortType } from '@shared/constants/sort-menu-list.ts';
import type { FC, PropsWithChildren } from 'react';
import { createContext, useCallback, useMemo, useState } from 'react';

interface ISearchContext {
    page: number;
    searchQuery: string;
    debouncedSearchQuery: string;
    sortType: TSortType;

    updateSearchQuery: (searchQuery: string) => void;
    updateSortType: (sortType: TSortType) => void;
    updatePage: (page: number) => void;
}

export const SearchContext = createContext<ISearchContext | null>(null);

export const SearchContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortType, setSortType] = useState<TSortType>('relevant');

    const debouncedSearchQuery = useDebounce(searchQuery, 400);

    const updateSearchQuery = useCallback((nextSearchQuery: string) => {
        setSearchQuery(nextSearchQuery);
        setPage(1);
    }, []);

    const updateSortType = useCallback((nextSortType: TSortType) => {
        setSortType(nextSortType);
        setPage(1);
    }, []);

    const updatePage = useCallback((nextPage: number) => {
        setPage(nextPage);
    }, []);

    const contextValue = useMemo<ISearchContext>(
        () => ({
            page,
            searchQuery,
            debouncedSearchQuery,
            sortType,
            updateSearchQuery,
            updateSortType,
            updatePage,
        }),
        [
            page,
            searchQuery,
            debouncedSearchQuery,
            sortType,
            updateSearchQuery,
            updateSortType,
            updatePage,
        ],
    );

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};
