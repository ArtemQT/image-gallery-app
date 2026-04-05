import { ImagesList } from '@modules/images-module';
import { Pagination } from '@pages/images-page/sections/images-section/pagination/pagination.tsx';
import { SortMenu } from '@pages/images-page/sections/images-section/sort-menu/sort-menu.tsx';

import { imagesSectionContent } from './images-section.content.ts';
import styles from './images-section.module.scss';

export const ImagesSection = () => {
    return (
        <section className={styles.imagesSection}>
            <h2 className="visually-hidden">
                {imagesSectionContent.a11ySectionHeading}
            </h2>
            <div className="content-container">
                <SortMenu />
                <ImagesList />
                <Pagination />
            </div>
        </section>
    );
};
