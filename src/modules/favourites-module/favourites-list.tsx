import styles from '@pages/favourites-page/favourites-page.module.scss';
import { ImageCard } from '@components/image-card/image-card.tsx';
import { useFavouritesContext } from '@modules/favourites-module/hooks/use-favourites-context.ts';

export const FavouritesList = () => {
    const { favouritesList } = useFavouritesContext();

    return (
        <ul className={styles.favouritesList}>
            {favouritesList.map((favouriteImg) => (
                <li key={favouriteImg.id} className={styles.favouritesListItem}>
                    <ImageCard
                        imageId={favouriteImg.id}
                        imageDescription={favouriteImg.description}
                        imageUrl={favouriteImg.imageUrl}
                    />
                </li>
            ))}
        </ul>
    );
};
