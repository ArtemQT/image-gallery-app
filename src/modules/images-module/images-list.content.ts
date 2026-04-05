export interface IImagesListEmptyContent {
    firstLine: string;
    secondLine: string;
    thirdLineBeforeAccent: string;
    thirdLineAccent: string;
    thirdLineAfterAccent: string;
}

export const imagesListEmptyContent: IImagesListEmptyContent = {
    firstLine: "The search didn't ",
    secondLine: 'yield any results, ',
    thirdLineBeforeAccent: 'please try ',
    thirdLineAccent: 'again',
    thirdLineAfterAccent: '.',
};
