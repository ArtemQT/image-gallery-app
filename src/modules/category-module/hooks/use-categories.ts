import { unsplashApi } from '@api/unsplash-api/unsplash-api.ts';
import { useQuery } from '@tanstack/react-query';

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
