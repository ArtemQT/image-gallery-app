import { ErrorFetchContainer } from '@components/error-fetch-container/error-fetch-container.tsx';
import { ImageCard } from '@components/image-card/image-card.tsx';
import { SelectedImage } from '@components/selected-image/selected-image.tsx';
import { SkeletonItem } from '@components/skeleton-item/skeleton-item.tsx';
import { useSelectedImg } from '@hooks/use-selected-img.ts';
import { useImages } from '@modules/images-module/hooks/use-images.ts';

import { imagesListEmptyContent } from './images-list.content.ts';
import styles from './images-list.module.scss';

export const ImagesList = () => {
    const { data, isImagesLoading, imagesError, refetch } = useImages();
    const {
        selectedImg,
        handleChangeSelectedImg,
        handleOpenSelectedImg,
        handleCloseSelectedImg,
    } = useSelectedImg(data?.imagesList);

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
        const {
            firstLine,
            secondLine,
            thirdLineBeforeAccent,
            thirdLineAccent,
            thirdLineAfterAccent,
        } = imagesListEmptyContent;

        return (
            <p className={styles.emptyImagesListDescription}>
                {firstLine}
                <br />
                {secondLine}
                <br />
                {thirdLineBeforeAccent}
                <span className={styles.accent}>{thirdLineAccent}</span>
                {thirdLineAfterAccent}
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
                        onClick={() => handleOpenSelectedImg(image.id)}
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
            {selectedImg && (
                <SelectedImage
                    handleCloseSelectedImg={handleCloseSelectedImg}
                    handleChangeSelectedImg={handleChangeSelectedImg}
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
