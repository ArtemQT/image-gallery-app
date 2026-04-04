import FavouriteIcon from '@assets/icons/favourite-icon.svg?react';
import { useFavouritesContext } from '@modules/favourites-module';
import type { CSSProperties, MouseEventHandler } from 'react';
import toast from 'react-hot-toast';

import styles from './image-card.module.scss';

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

    const handleToggleFavouriteImage: MouseEventHandler<HTMLButtonElement> = (
        e,
    ) => {
        e.stopPropagation();

        toggleFavouriteImage({
            id: imageId,
            imageUrl,
            description: imageDescription,
        });

        const styleObj: CSSProperties = {
            fontSize: '14px',
            padding: '12px 20px',
            borderRadius: '8px',
            width: '250px',
        };
        if (!isFavourite(imageId)) {
            toast.success('Added to favorites', {
                style: styleObj,
            });
        } else {
            toast.success('Removed from favourites', {
                style: styleObj,
            });
        }
    };

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
                        onClick={handleToggleFavouriteImage}
                    >
                        <FavouriteIcon className={styles.favouriteIcon} />
                    </button>
                </figcaption>
            </figure>
        </article>
    );
};
