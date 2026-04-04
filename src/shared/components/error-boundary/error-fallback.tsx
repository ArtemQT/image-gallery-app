import { useNavigate } from 'react-router-dom';

import styles from './error-fallback.module.scss';

interface IFallbackProps {
    error: Error | null;
    resetErrorBoundary: () => void;
}

export const ErrorFallback = ({
    error,
    resetErrorBoundary,
}: IFallbackProps) => {
    const navigate = useNavigate();

    const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';

    const handleReset = () => {
        navigate('/', { replace: true });
        resetErrorBoundary();
    };

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

                <button className={styles.resetButton} onClick={handleReset}>
                    Try again
                </button>
            </div>
        </section>
    );
};
