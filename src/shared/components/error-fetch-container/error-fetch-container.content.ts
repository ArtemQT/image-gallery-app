export interface IErrorFetchContent {
    message: string;
    tryAgain: string;
}

export const errorFetchContent: IErrorFetchContent = {
    message: 'Failed to load resource',
    tryAgain: 'Try again',
};
