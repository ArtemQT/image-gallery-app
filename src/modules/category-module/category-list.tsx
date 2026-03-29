import styles from './category-list.module.scss';
import { useCategories } from '@modules/category-module/hooks/use-categories.ts';
import { CategoryItem } from '@modules/category-module/components/category-item/category-item.tsx';
import { CategoryItemSkeleton } from '@modules/category-module/components/category-item-skeleton/category-item-skeleton.tsx';

export const CategoryList = () => {
    const { categories, isCategoriesLoading, isCategoriesError, refetch } =
        useCategories();

    if (isCategoriesLoading) {
        return (
            <ul className={styles.categoryList}>
                {Array.from({ length: 12 }).map((_, index) => (
                    <li key={index} className={styles.categoryItem}>
                        <CategoryItemSkeleton />
                    </li>
                ))}
            </ul>
        );
    }

    if (isCategoriesError) {
        return (
            <div className={styles.errorContainer}>
                <p>Failed to load categories</p>
                <button onClick={() => refetch()}>Try again</button>
            </div>
        );
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
