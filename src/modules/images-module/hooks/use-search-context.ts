import { useContext } from 'react';
import { SearchContext } from '@modules/images-module/contexts/search-context.tsx';

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearchContext must be used within the context');
    }
    return context;
};
