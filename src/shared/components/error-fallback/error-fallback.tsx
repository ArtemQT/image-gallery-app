import { type FallbackProps } from 'react-error-boundary';
import styles from './error-fallback.module.scss';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';

    return (
        <section className={styles.errorSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Oops! Something{' '}
                    <span className={styles.accent}>went wrong</span>
                </h1>
                <p className={styles.description}>
                    A technical error occurred. Don't worry, your data is safe.
                </p>

                <div className={styles.errorDetails}>
                    <code>{errorMessage}</code>
                </div>

                <button
                    className={styles.resetButton}
                    onClick={resetErrorBoundary}
                >
                    Try again
                </button>
            </div>
        </section>
    );
};
