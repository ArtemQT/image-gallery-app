import type { IUnsplashCategoryDTO } from '@api/unsplash-api/unsplash-api-types.ts';
import { mapToCategory } from '@api/unsplash-api/unsplash-dto.ts';
import { unsplashApiInstance } from '@api/unsplash-api/unsplash-axios-instance.ts';

export const unsplashApi = {
    async getCategories() {
        const response = await unsplashApiInstance.get<IUnsplashCategoryDTO[]>(
            '/topics',
            {
                params: {
                    per_page: 12,
                },
            },
        );

        return response.data.map(mapToCategory);
    },
};
