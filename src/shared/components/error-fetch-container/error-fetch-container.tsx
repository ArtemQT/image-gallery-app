import { errorFetchContent } from './error-fetch-container.content.ts';
import styles from './error-fetch-container.module.scss';

interface IErrorFetchContainerProps {
    refetch: () => void;
}

export const ErrorFetchContainer = ({ refetch }: IErrorFetchContainerProps) => {
    return (
        <div className={styles.errorContainer}>
            <p>{errorFetchContent.message}</p>
            <button onClick={() => refetch()}>
                {errorFetchContent.tryAgain}
            </button>
        </div>
    );
};
