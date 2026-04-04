import type { TSortType } from '@shared/utils/sort-menu-list.ts';
import { createContext, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { useDebounce } from '@hooks/use-debounce.ts';

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

    const updateSearchQuery = (searchQuery: string) => {
        setSearchQuery(searchQuery);
        setPage(1);
    };
    const updateSortType = (sortType: TSortType) => {
        setSortType(sortType);
        setPage(1);
    };
    const updatePage = (page: number) => {
        setPage(page);
    };

    const contextValue: ISearchContext = {
        page,
        searchQuery,
        debouncedSearchQuery,
        sortType,
        updateSearchQuery,
        updateSortType,
        updatePage,
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};
