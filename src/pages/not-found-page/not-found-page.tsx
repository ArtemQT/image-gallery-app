import styles from './not-found-page.module.scss';

export const NotFoundPage = () => {
    return (
        <section className={styles.notFoundSection}>
            <div className={styles.errorWrapper}>
                <span className={styles.errorCode}>404</span>
                <span className={styles.errorDescription}>NOT FOUND</span>
            </div>
            <h2 className={styles.notFoundTitle}>
                The page was <span>not found</span>, please return to the main
                page.
            </h2>
        </section>
    );
};
