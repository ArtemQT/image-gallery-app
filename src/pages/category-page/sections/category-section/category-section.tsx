import styles from './category-section.module.scss';
import { CategoryList } from '@modules/category-module';

export const CategorySection = () => {
    return (
        <section className={styles.categorySection}>
            <h2 className="visually-hidden">Image categories</h2>
            <div className="category-container">
                <CategoryList />
            </div>
        </section>
    );
};
