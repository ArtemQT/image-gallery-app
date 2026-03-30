import styles from './image-card.module.scss';
import FavouriteIcon from '@assets/icons/favourite-icon.svg?react';

interface IImageCardProps {
    imageId: string;
    imageDescription: string;
    imageUrl: string;
}

export const ImageCard = ({ imageDescription, imageUrl }: IImageCardProps) => {
    return (
        <article>
            <figure className={styles.imageCard}>
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
                        data-is-favourite-image="true"
                    >
                        <FavouriteIcon className={styles.favouriteIcon} />
                    </button>
                </figcaption>
            </figure>
        </article>
    );
};
