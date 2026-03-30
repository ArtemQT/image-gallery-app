import styles from './images-section.module.scss';

import { SortMenu } from '@pages/images-page/sections/images-section/sort-menu/sort-menu.tsx';
import { ImagesList } from '@modules/images-module';

export const ImagesSection = () => {
    return (
        <section className={styles.imagesSection}>
            <h2 className="visually-hidden">Images collection</h2>
            <div className="content-container">
                <SortMenu />
                <ImagesList />
            </div>
        </section>
    );
};
