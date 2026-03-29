import { useQuery } from '@tanstack/react-query';
import { unsplashApi } from '@api/unsplash-api/unsplash-api.ts';

export const useCategories = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['categories'],
        queryFn: unsplashApi.getCategories,
    });

    return {
        categories: data,
        isCategoriesLoading: isLoading,
        isCategoriesError: error,
    };
};
