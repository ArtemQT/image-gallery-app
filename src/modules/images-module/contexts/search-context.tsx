import type { TSortType } from '@shared/utils/sort-menu-list.ts';
import { createContext, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';

interface ISearchContext {
    page: number;
    searchQuery: string;
    sortType: TSortType;

    updateSearchQuery: (searchQuery: string) => void;
    updateSortType: (sortType: TSortType) => void;
    updatePage: (page: number) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext<ISearchContext | null>(null);

export const SearchContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortType, setSortType] = useState<TSortType>('relevant');

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
