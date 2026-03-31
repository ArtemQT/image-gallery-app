import { useContext } from 'react';
import { FavouritesContext } from '@modules/favourites-module/contexts/favourites-context.tsx';

export const useFavouritesContext = () => {
    const context = useContext(FavouritesContext);
    if (!context) {
        throw new Error('useFavouritesContext must be used within the context');
    }
    return context;
};
