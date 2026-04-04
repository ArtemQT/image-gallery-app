import { CategoryList } from '@modules/category-module';

import styles from './category-section.module.scss';

export const CategorySection = () => {
    return (
        <section className={styles.categorySection}>
            <h2 className="visually-hidden">Image categories</h2>
            <div className="content-container">
                <CategoryList />
            </div>
        </section>
    );
};
