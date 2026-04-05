import { useCallback } from 'react';

import { errorFetchContent } from './error-fetch-container.content.ts';
import styles from './error-fetch-container.module.scss';

interface IErrorFetchContainerProps {
    refetch: () => void;
}

export const ErrorFetchContainer = ({ refetch }: IErrorFetchContainerProps) => {
    const handleRefetch = useCallback(() => {
        refetch();
    }, [refetch]);

    return (
        <div className={styles.errorContainer}>
            <p>{errorFetchContent.message}</p>
            <button type="button" onClick={handleRefetch}>
                {errorFetchContent.tryAgain}
            </button>
        </div>
    );
};
