import { CategoryList } from '@modules/category-module';

import { categorySectionContent } from './category-section.content.ts';
import styles from './category-section.module.scss';

export const CategorySection = () => {
    return (
        <section className={styles.categorySection}>
            <h2 className="visually-hidden">
                {categorySectionContent.a11ySectionHeading}
            </h2>
            <div className="content-container">
                <CategoryList />
            </div>
        </section>
    );
};
