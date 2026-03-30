import styles from './images-list.module.scss';
import { useImages } from '@modules/images-module/hooks/use-images.ts';
import { ImageCard } from '@modules/images-module/components/image-card/image-card.tsx';
import { SkeletonItem } from '@components/skeleton-item/skeleton-item.tsx';
import { ErrorFetchContainer } from '@components/error-fetch-container/error-fetch-container.tsx';

export const ImagesList = () => {
    const { data, isImagesLoading, imagesError, refetch } = useImages();

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
        <ul className={styles.imagesList}>
            {imagesList?.map((image) => (
                <li key={image.id}>
                    <ImageCard
                        imageId={image.id}
                        imageDescription={image.description}
                        imageUrl={image.imageUrl}
                    />
                </li>
            ))}
        </ul>
    );
};
