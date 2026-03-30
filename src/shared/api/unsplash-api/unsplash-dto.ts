import type {
    ICategory,
    ICategoryDTO,
} from '@api/unsplash-api/unsplash-api-types.ts';

export const mapToCategory = (dto: ICategoryDTO): ICategory => ({
    id: dto.id,
    categoryName: dto.slug,
    title: dto.title,
    imageUrl: dto.cover_photo.urls.regular,
});
