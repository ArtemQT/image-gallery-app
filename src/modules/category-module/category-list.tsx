import styles from './category-list.module.scss';
import { useCategories } from '@modules/category-module/hooks/use-categories.ts';
import { CategoryItem } from '@modules/category-module/components/category-item/category-item.tsx';
import { SkeletonItem } from '@components/skeleton-item/skeleton-item.tsx';
import { ErrorFetchContainer } from '@components/error-fetch-container/error-fetch-container.tsx';

export const CategoryList = () => {
    const { categories, isCategoriesLoading, isCategoriesError, refetch } =
        useCategories();

    if (isCategoriesLoading) {
        return (
            <ul className={styles.categoryList}>
                {Array.from({ length: 12 }).map((_, index) => (
                    <li key={index} className={styles.categoryItem}>
                        <SkeletonItem />
                    </li>
                ))}
            </ul>
        );
    }

    if (isCategoriesError) {
        return <ErrorFetchContainer refetch={refetch} />;
    }

    return (
        <ul className={styles.categoryList}>
            {categories?.map((category) => (
                <li key={category.id} className={styles.categoryItem}>
                    <CategoryItem
                        categoryTitle={category.title}
                        categoryImg={category.imageUrl}
                        categoryName={category.categoryName}
                    />
                </li>
            ))}
        </ul>
    );
};
