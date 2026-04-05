import { notFoundPageContent } from './not-found-page.content.ts';
import styles from './not-found-page.module.scss';

export const NotFoundPage = () => {
    const {
        errorCode,
        errorDescription,
        titleBeforeHighlight,
        titleHighlight,
        titleAfterHighlight,
    } = notFoundPageContent;

    return (
        <section className={styles.notFoundSection}>
            <div className={styles.errorWrapper}>
                <span className={styles.errorCode}>{errorCode}</span>
                <span className={styles.errorDescription}>
                    {errorDescription}
                </span>
            </div>
            <h2 className={styles.notFoundTitle}>
                {titleBeforeHighlight}
                <span>{titleHighlight}</span>
                {titleAfterHighlight}
            </h2>
        </section>
    );
};
