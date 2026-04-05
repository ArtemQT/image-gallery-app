import {
    FavouritesList,
    useFavouritesContext,
} from '@modules/favourites-module';

import {
    favouritesEmptyStateContent,
    favouritesFilledHeaderContent,
} from './favourites-page.content.ts';
import styles from './favourites-page.module.scss';

export const FavouritesPage = () => {
    const { favouritesList } = useFavouritesContext();

    const isEmptyFavouritesList = favouritesList.length === 0;
    if (isEmptyFavouritesList) {
        const {
            titleBeforeHighlight,
            titleHighlight,
            titleAfterHighlight,
            emptySecondLine,
        } = favouritesEmptyStateContent;

        return (
            <section className={styles.emptySection}>
                <h2 className={styles.emptySectionTitle}>
                    {titleBeforeHighlight}
                    <span>{titleHighlight}</span>
                    {titleAfterHighlight}
                    <br />
                    {emptySecondLine}
                </h2>
            </section>
        );
    }

    const { accentLine, secondLine } = favouritesFilledHeaderContent;

    return (
        <section className={styles.favouritesSection}>
            <h2 className={styles.favouritesSectionTitle}>
                <span className={styles.accent}>{accentLine}</span>
                <br />
                {secondLine}
            </h2>
            <div className="content-container">
                <FavouritesList />
            </div>
        </section>
    );
};
