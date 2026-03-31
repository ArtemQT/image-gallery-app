import styles from './image-card.module.scss';
import FavouriteIcon from '@assets/icons/favourite-icon.svg?react';

interface IImageCardProps {
    imageId: string;
    imageDescription: string;
    imageUrl: string;
    isSelected?: boolean;
}

export const ImageCard = ({
    imageDescription,
    imageUrl,
    isSelected,
}: IImageCardProps) => {
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
                        data-is-favourite-image="false"
                    >
                        <FavouriteIcon className={styles.favouriteIcon} />
                    </button>
                </figcaption>
            </figure>
        </article>
    );
};
