import styles from '@pages/favourites-page/favourites-page.module.scss';
import { ImageCard } from '@components/image-card/image-card.tsx';
import { useFavouritesContext } from '@modules/favourites-module/hooks/use-favourites-context.ts';
import { useSelectedImg } from '@hooks/use-selected-img.ts';
import { SelectedImage } from '@components/selected-image/selected-image.tsx';

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
                    <li
                        key={favouriteImg.id}
                        className={styles.favouritesListItem}
                        onClick={() => handleOpenSelectedImg(favouriteImg.id)}
                    >
                        <ImageCard
                            imageId={favouriteImg.id}
                            imageDescription={favouriteImg.description}
                            imageUrl={favouriteImg.imageUrl}
                        />
                    </li>
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
