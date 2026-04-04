import type { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './category-item.module.scss';

interface ICategoryItemProps {
    categoryTitle: string;
    categoryImg: string;
    categoryName: string;
}

export const CategoryItem: FC<ICategoryItemProps> = ({
    categoryTitle,
    categoryName,
    categoryImg,
}) => {
    return (
        <Link to={`/images/${categoryName}`} className={styles.categoryLink}>
            <img
                className={styles.categoryImg}
                src={categoryImg}
                alt={categoryTitle}
                width="285"
                height="245"
            />
            <h3 className={styles.categoryTitle}>{categoryTitle}</h3>
        </Link>
    );
};
