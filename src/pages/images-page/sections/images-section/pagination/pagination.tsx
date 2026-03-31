import styles from './pagination.module.scss';
import { useImages, useSearchContext } from '@modules/images-module';
import PaginationNextIcon from '@assets/icons/pagination-next-icon.svg?react';
import { SkeletonItem } from '@components/skeleton-item/skeleton-item.tsx';

const getPaginationList = (page: number, totalPages: number | undefined) => {
    if (totalPages) {
        const paginationSize = 4;

        const startPage =
            Math.floor((page - 1) / paginationSize) * paginationSize + 1;

        const paginationList = Array.from(
            { length: paginationSize },
            (_, i) => startPage + i,
        );

        return paginationList.filter((pageNumber) => pageNumber <= totalPages);
    }
};

export const Pagination = () => {
    const { page, updatePage } = useSearchContext();
    const { data, isImagesLoading } = useImages();

    const totalPages = data?.totalPages;

    const paginationList = getPaginationList(page, totalPages);

    const handleNextPage = (page: number) => {
        if (totalPages) {
            if (page > totalPages) {
                updatePage(1);
            } else {
                updatePage(page);
            }
        }
    };

    if (isImagesLoading) {
        return (
            <div className={styles.paginationWrapper}>
                <ul className={styles.paginationList}>
                    {Array.from({ length: 4 }, (_, i) => (
                        <li key={i} className={styles.paginationItem}>
                            <SkeletonItem />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div
            className={styles.paginationWrapper}
            data-is-empty-search={!data?.totalImages}
        >
            <ul className={styles.paginationList}>
                {paginationList?.map((pageNumber) => (
                    <li
                        key={pageNumber}
                        className={styles.paginationItem}
                        data-is-active-page={page === pageNumber}
                    >
                        <button
                            className={styles.paginationButton}
                            onClick={() => updatePage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    </li>
                ))}
            </ul>
            <button
                className={styles.paginationNextButton}
                onClick={() => handleNextPage(page + 1)}
            >
                <PaginationNextIcon />
            </button>
        </div>
    );
};
