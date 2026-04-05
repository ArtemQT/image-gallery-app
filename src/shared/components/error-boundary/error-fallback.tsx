import { useNavigate } from 'react-router-dom';

import { errorBoundaryContent } from './error-fallback.content.ts';
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
        error instanceof Error
            ? error.message
            : errorBoundaryContent.unknownError;

    const handleReset = () => {
        navigate('/', { replace: true });
        resetErrorBoundary();
    };

    return (
        <section className={styles.errorSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {errorBoundaryContent.titleBeforeAccent}
                    <span className={styles.accent}>
                        {errorBoundaryContent.titleAccent}
                    </span>
                </h1>
                <p className={styles.description}>
                    {errorBoundaryContent.description}
                </p>

                <div className={styles.errorDetails}>
                    <code>{errorMessage}</code>
                </div>

                <button className={styles.resetButton} onClick={handleReset}>
                    {errorBoundaryContent.tryAgain}
                </button>
            </div>
        </section>
    );
};
