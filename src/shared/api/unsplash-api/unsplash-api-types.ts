export interface ICategoryDTO {
    id: string;
    slug: string;
    title: string;
    cover_photo: {
        urls: {
            regular: string;
        };
    };
}

export interface ICategory {
    id: string;
    categoryName: string;
    title: string;
    imageUrl: string;
}
