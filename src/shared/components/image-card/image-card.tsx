import styles from './image-card.module.scss';
import FavouriteIcon from '@assets/icons/favourite-icon.svg?react';
import { useFavouritesContext } from '@modules/favourites-module';

interface IImageCardProps {
    imageId: string;
    imageDescription: string;
    imageUrl: string;
    isSelected?: boolean;
}

export const ImageCard = ({
    imageId,
    imageDescription,
    imageUrl,
    isSelected,
}: IImageCardProps) => {
    const { toggleFavouriteImage, isFavourite } = useFavouritesContext();

    return (
        <article className={styles.imageArticle}>
            <figure
                className={styles.imageCard}
                data-is-selected-image={isSelected}
            >
                <img
                    src={imageUrl}
                    alt={imageDescription}
                    width={285}
                    height={175}
                />
                <figcaption>
                    <span className={styles.imageDescription}>
                        {imageDescription}
                    </span>
                    <button
                        className={styles.imageToggleFavoriteButton}
                        data-is-favourite-image={isFavourite(imageId)}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFavouriteImage({
                                id: imageId,
                                imageUrl,
                                description: imageDescription,
                            });
                        }}
                    >
                        <FavouriteIcon className={styles.favouriteIcon} />
                    </button>
                </figcaption>
            </figure>
        </article>
    );
};
