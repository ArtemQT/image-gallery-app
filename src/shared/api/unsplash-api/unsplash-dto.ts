import type {
    ICategory,
    ICategoryDTO,
    ISearch,
    ISearchDTO,
} from '@api/unsplash-api/unsplash-api-types.ts';

export const mapToCategory = (dto: ICategoryDTO): ICategory => ({
    id: dto.id,
    categoryName: dto.slug,
    title: dto.title,
    imageUrl: dto.cover_photo.urls.regular,
});

export const mapToImages = (dto: ISearchDTO): ISearch => ({
    totalImages: dto.total,
    totalPages: dto.total_pages,
    results: dto.results.map((image) => ({
        id: image.id,
        description: image.description,
        imageUrl: image.urls.regular,
    })),
});
