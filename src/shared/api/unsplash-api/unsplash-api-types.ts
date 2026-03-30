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

export interface ISearchDTO {
    total: number; // Общее количество найденных фото
    total_pages: number; // Общее количество страниц
    results: IImageDTO[]; // Массив самих объектов с фото
}

interface IImageDTO {
    id: string;
    alt_description: string;
    urls: {
        regular: string;
    };
}

export interface ISearch {
    totalPages: number;
    totalImages: number;
    imagesList: IImage[];
}

interface IImage {
    id: string;
    description: string;
    imageUrl: string;
}
