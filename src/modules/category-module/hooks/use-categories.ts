import { useQuery } from '@tanstack/react-query';
import { unsplashApi } from '@api/unsplash-api/unsplash-api.ts';

export const useCategories = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: unsplashApi.getCategories,
    });

    return {
        categories: data,
        refetch,
        isCategoriesLoading: isLoading,
        isCategoriesError: error,
    };
};
