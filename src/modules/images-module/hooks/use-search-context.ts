import { SearchContext } from '@modules/images-module/contexts/search-context.tsx';
import { useContext } from 'react';

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearchContext must be used within the context');
    }
    return context;
};
