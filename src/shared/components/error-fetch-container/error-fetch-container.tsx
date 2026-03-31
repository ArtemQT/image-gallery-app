import styles from './error-fetch-container.module.scss';

interface IErrorFetchContainerProps {
    refetch: () => void;
}

export const ErrorFetchContainer = ({ refetch }: IErrorFetchContainerProps) => {
    return (
        <div className={styles.errorContainer}>
            <p>Failed to load resource</p>
            <button onClick={() => refetch()}>Try again</button>
        </div>
    );
};
