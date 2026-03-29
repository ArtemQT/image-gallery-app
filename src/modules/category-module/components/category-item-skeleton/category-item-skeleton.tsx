import styles from './category-item-skeleton.module.scss';
import type { FC } from 'react';

export const CategoryItemSkeleton: FC = () => {
    return <div className={styles.skeletonCategory}></div>;
};
