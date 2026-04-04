import { ImagesList } from '@modules/images-module';
import { Pagination } from '@pages/images-page/sections/images-section/pagination/pagination.tsx';
import { SortMenu } from '@pages/images-page/sections/images-section/sort-menu/sort-menu.tsx';

import styles from './images-section.module.scss';

export const ImagesSection = () => {
    return (
        <section className={styles.imagesSection}>
            <h2 className="visually-hidden">Images collection</h2>
            <div className="content-container">
                <SortMenu />
                <ImagesList />
                <Pagination />
            </div>
        </section>
    );
};
