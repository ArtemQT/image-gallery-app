export interface INotFoundPageContent {
    errorCode: string;
    errorDescription: string;
    titleBeforeHighlight: string;
    titleHighlight: string;
    titleAfterHighlight: string;
}

export const notFoundPageContent: INotFoundPageContent = {
    errorCode: '404',
    errorDescription: 'NOT FOUND',
    titleBeforeHighlight: 'The page was ',
    titleHighlight: 'not found',
    titleAfterHighlight: ', please return to the main page.',
};
