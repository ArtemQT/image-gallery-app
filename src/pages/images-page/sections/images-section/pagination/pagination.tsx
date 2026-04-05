import PaginationNextIcon from '@assets/icons/pagination-next-icon.svg?react';
import { SkeletonItem } from '@components/skeleton-item/skeleton-item.tsx';
import { useImages, useSearchContext } from '@modules/images-module';
import { useCallback } from 'react';

import styles from './pagination.module.scss';

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

interface IPaginationNumberButtonProps {
    pageNumber: number;
    isActive: boolean;
    onSelect: (pageNumber: number) => void;
}

const PaginationNumberButton = ({
    pageNumber,
    isActive,
    onSelect,
}: IPaginationNumberButtonProps) => {
    const handleClick = useCallback(() => {
        onSelect(pageNumber);
    }, [pageNumber, onSelect]);

    return (
        <li className={styles.paginationItem} data-is-active-page={isActive}>
            <button
                type="button"
                className={styles.paginationButton}
                onClick={handleClick}
            >
                {pageNumber}
            </button>
        </li>
    );
};

export const Pagination = () => {
    const { page, updatePage } = useSearchContext();
    const { data, isImagesLoading } = useImages();

    const totalPages = data?.totalPages;

    const paginationList = getPaginationList(page, totalPages);

    const handleSelectPage = useCallback(
        (nextPage: number) => {
            updatePage(nextPage);
        },
        [updatePage],
    );

    const handleNextPage = useCallback(() => {
        const targetPage = page + 1;
        if (totalPages) {
            if (targetPage > totalPages) {
                updatePage(1);
            } else {
                updatePage(targetPage);
            }
        }
    }, [page, totalPages, updatePage]);

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
                    <PaginationNumberButton
                        key={pageNumber}
                        pageNumber={pageNumber}
                        isActive={page === pageNumber}
                        onSelect={handleSelectPage}
                    />
                ))}
            </ul>
            <button
                type="button"
                className={styles.paginationNextButton}
                onClick={handleNextPage}
            >
                <PaginationNextIcon />
            </button>
        </div>
    );
};
