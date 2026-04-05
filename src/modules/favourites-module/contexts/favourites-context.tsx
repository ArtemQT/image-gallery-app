import type { IImage } from '@api/unsplash-api/unsplash-api-types.ts';
import { SessionStorage } from '@shared/lib/session-storage.ts';
import {
    createContext,
    type FC,
    type PropsWithChildren,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';

interface IFavouritesContext {
    favouritesList: IImage[];
    isFavourite: (imageId: string) => boolean;
    toggleFavouriteImage: (image: IImage) => void;
}

export const FavouritesContext = createContext<IFavouritesContext | null>(null);

export const FavouritesContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const sessionStorageKey = 'favouritesList';

    const [favouritesList, setFavouritesList] = useState<IImage[]>(() => {
        const savedList = SessionStorage.get<IImage[]>(sessionStorageKey);
        return savedList ? savedList : [];
    });

    useEffect(() => {
        SessionStorage.set(sessionStorageKey, favouritesList);
    }, [favouritesList]);

    const isFavourite = useCallback(
        (imageId: string) => {
            return favouritesList.some((imgItem) => imgItem.id === imageId);
        },
        [favouritesList],
    );

    const toggleFavouriteImage = useCallback(
        (targetImg: IImage) => {
            const isExist = favouritesList.some(
                (imgItem) => imgItem.id === targetImg.id,
            );
            if (isExist) {
                const newFavouritesList = favouritesList.filter(
                    (imgItem) => imgItem.id !== targetImg.id,
                );
                setFavouritesList(newFavouritesList);
            } else {
                setFavouritesList([...favouritesList, targetImg]);
            }
        },
        [favouritesList],
    );

    const contextValue = useMemo<IFavouritesContext>(
        () => ({
            favouritesList,
            isFavourite,
            toggleFavouriteImage,
        }),
        [favouritesList, isFavourite, toggleFavouriteImage],
    );

    return (
        <FavouritesContext.Provider value={contextValue}>
            {children}
        </FavouritesContext.Provider>
    );
};
