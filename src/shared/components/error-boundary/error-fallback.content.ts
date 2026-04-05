export interface IErrorBoundaryContent {
    titleBeforeAccent: string;
    titleAccent: string;
    description: string;
    tryAgain: string;
    unknownError: string;
}

export const errorBoundaryContent: IErrorBoundaryContent = {
    titleBeforeAccent: 'Oops! Something ',
    titleAccent: 'went wrong',
    description: "A technical error occurred. Don't worry, your data is safe.",
    tryAgain: 'Try again',
    unknownError: 'Unknown error',
};
