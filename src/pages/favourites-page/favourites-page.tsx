import styles from './favourites-page.module.scss';
import {
    FavouritesList,
    useFavouritesContext,
} from '@modules/favourites-module';

export const FavouritesPage = () => {
    const { favouritesList } = useFavouritesContext();

    const isEmptyFavouritesList = favouritesList.length === 0;
    if (isEmptyFavouritesList) {
        return (
            <section className={styles.emptySection}>
                <h2 className={styles.emptySectionTitle}>
                    Your <span>favorites</span> list
                    <br />
                    is empty
                </h2>
            </section>
        );
    }

    return (
        <section className={styles.favouritesSection}>
            <h2 className={styles.favouritesSectionTitle}>
                <span className={styles.accent}>Saved by you</span>
                <br />
                Your favorites list
            </h2>
            <div className="content-container">
                <FavouritesList />
            </div>
        </section>
    );
};
