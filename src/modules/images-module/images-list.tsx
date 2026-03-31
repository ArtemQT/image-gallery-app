import styles from './images-list.module.scss';
import { useImages } from '@modules/images-module/hooks/use-images.ts';
import { ImageCard } from '@modules/images-module/components/image-card/image-card.tsx';
import { SkeletonItem } from '@components/skeleton-item/skeleton-item.tsx';
import { ErrorFetchContainer } from '@components/error-fetch-container/error-fetch-container.tsx';
import { useState } from 'react';
import type { IImage } from '@api/unsplash-api/unsplash-api-types.ts';
import { SelectedImage } from '@modules/images-module/components/selected-image/selected-image.tsx';

export const ImagesList = () => {
    const { data, isImagesLoading, imagesError, refetch } = useImages();
    const [selectedCard, setSelectedCard] = useState<IImage | null>(null);

    const handleCloseSelectedCard = () => setSelectedCard(null);
    const handleChangeSelectedCard = (buttonType: 'prev' | 'next') => {
        if (selectedCard && data) {
            const imageIndex = data.imagesList.indexOf(selectedCard);
            if (imageIndex !== -1) {
                switch (buttonType) {
                    case 'prev': {
                        if (imageIndex === 0) {
                            setSelectedCard(
                                data.imagesList[data.imagesList.length - 1],
                            );
                        } else {
                            setSelectedCard(data.imagesList[imageIndex - 1]);
                        }
                        break;
                    }
                    case 'next': {
                        if (imageIndex === data.imagesList.length - 1) {
                            setSelectedCard(data.imagesList[0]);
                        } else {
                            setSelectedCard(data.imagesList[imageIndex + 1]);
                        }
                        break;
                    }
                }
            }
        }
    };

    if (isImagesLoading) {
        return (
            <ul className={styles.imagesList}>
                {Array.from({ length: 12 }, (_, i) => (
                    <li key={i} className={styles.imagesListItem}>
                        <SkeletonItem />
                    </li>
                ))}
            </ul>
        );
    }

    if (imagesError) {
        return <ErrorFetchContainer refetch={refetch} />;
    }

    if (data?.totalImages === 0) {
        return (
            <p className={styles.emptyImagesListDescription}>
                The search didn't <br />
                yield any results, <br />
                please try <span className={styles.accent}>again</span>.
            </p>
        );
    }

    const imagesList = data?.imagesList;

    return (
        <>
            <ul className={styles.imagesList}>
                {imagesList?.map((image) => (
                    <li
                        key={image.id}
                        onClick={() => setSelectedCard(image)}
                        className={styles.imagesListItem}
                    >
                        <ImageCard
                            imageId={image.id}
                            imageDescription={image.description}
                            imageUrl={image.imageUrl}
                        />
                    </li>
                ))}
            </ul>
            {selectedCard && (
                <SelectedImage
                    handleCloseSelectedCard={handleCloseSelectedCard}
                    handleChangeSelectedCard={handleChangeSelectedCard}
                >
                    <ImageCard
                        imageId={selectedCard.id}
                        imageDescription={selectedCard.description}
                        imageUrl={selectedCard.imageUrl}
                        isSelected={true}
                    />
                </SelectedImage>
            )}
        </>
    );
};
