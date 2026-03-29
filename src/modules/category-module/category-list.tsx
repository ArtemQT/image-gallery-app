import styles from './category-list.module.scss';

import { useCategories } from '@modules/category-module/hooks/use-categories.ts';
import { CategoryItem } from '@modules/category-module/components/category-item/category-item.tsx';

export const CategoryList = () => {
    const { categories } = useCategories();

    console.log(categories);

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
