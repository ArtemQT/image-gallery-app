import type {
    ICategoryDTO,
    ISearchDTO,
} from '@api/unsplash-api/unsplash-api-types.ts';
import { mapToCategory, mapToImages } from '@api/unsplash-api/unsplash-dto.ts';
import { unsplashApiInstance } from '@api/unsplash-api/unsplash-axios-instance.ts';
import type { TSortType } from '@shared/constants/sort-menu-list.ts';

export const unsplashApi = {
    async getCategories() {
        const response = await unsplashApiInstance.get<ICategoryDTO[]>(
            '/topics',
            {
                params: {
                    per_page: 12,
                },
            },
        );

        return response.data.map(mapToCategory);
    },

    async getImages(query: string, pageNumber: number, orderBy: TSortType) {
        const response = await unsplashApiInstance.get<ISearchDTO>(
            '/search/photos',
            {
                params: {
                    query: query,
                    order_by: orderBy,
                    page: pageNumber,
                    per_page: 12,
                },
            },
        );

        return mapToImages(response.data);
    },
};
