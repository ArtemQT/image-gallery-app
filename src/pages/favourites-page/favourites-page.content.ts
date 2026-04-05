export interface IFavouritesEmptyStateContent {
    titleBeforeHighlight: string;
    titleHighlight: string;
    titleAfterHighlight: string;
    emptySecondLine: string;
}

export interface IFavouritesFilledHeaderContent {
    accentLine: string;
    secondLine: string;
}

export const favouritesEmptyStateContent: IFavouritesEmptyStateContent = {
    titleBeforeHighlight: 'Your ',
    titleHighlight: 'favorites',
    titleAfterHighlight: ' list',
    emptySecondLine: 'is empty',
};

export const favouritesFilledHeaderContent: IFavouritesFilledHeaderContent = {
    accentLine: 'Saved by you',
    secondLine: 'Your favorites list',
};
