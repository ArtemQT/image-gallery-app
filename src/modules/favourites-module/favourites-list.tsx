import type { IImage } from '@api/unsplash-api/unsplash-api-types.ts';
import { ImageCard } from '@components/image-card/image-card.tsx';
import { SelectedImage } from '@components/selected-image/selected-image.tsx';
import { useSelectedImg } from '@hooks/use-selected-img.ts';
import { useFavouritesContext } from '@modules/favourites-module/hooks/use-favourites-context.ts';
import styles from '@pages/favourites-page/favourites-page.module.scss';
import { useCallback } from 'react';

interface IFavouritesListItemProps {
    favouriteImg: IImage;
    onOpen: (id: string) => void;
}

const FavouritesListItem = ({
    favouriteImg,
    onOpen,
}: IFavouritesListItemProps) => {
    const handleClick = useCallback(() => {
        onOpen(favouriteImg.id);
    }, [favouriteImg.id, onOpen]);

    return (
        <li className={styles.favouritesListItem} onClick={handleClick}>
            <ImageCard
                imageId={favouriteImg.id}
                imageDescription={favouriteImg.description}
                imageUrl={favouriteImg.imageUrl}
            />
        </li>
    );
};

export const FavouritesList = () => {
    const { favouritesList } = useFavouritesContext();

    const {
        selectedImg,
        handleCloseSelectedImg,
        handleOpenSelectedImg,
        handleChangeSelectedImg,
    } = useSelectedImg(favouritesList);

    return (
        <>
            <ul className={styles.favouritesList}>
                {favouritesList.map((favouriteImg) => (
                    <FavouritesListItem
                        key={favouriteImg.id}
                        favouriteImg={favouriteImg}
                        onOpen={handleOpenSelectedImg}
                    />
                ))}
            </ul>
            {selectedImg && (
                <SelectedImage
                    handleChangeSelectedImg={handleChangeSelectedImg}
                    handleCloseSelectedImg={handleCloseSelectedImg}
                >
                    <ImageCard
                        imageId={selectedImg.id}
                        imageDescription={selectedImg.description}
                        imageUrl={selectedImg.imageUrl}
                        isSelected={true}
                    />
                </SelectedImage>
            )}
        </>
    );
};
