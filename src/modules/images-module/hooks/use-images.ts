import { useQuery } from '@tanstack/react-query';
import { unsplashApi } from '@api/unsplash-api/unsplash-api.ts';
import { useSearchContext } from '@modules/images-module';
import { useParams } from 'react-router-dom';

export const useImages = () => {
    const { categoryName } = useParams();
    const { debouncedSearchQuery, sortType, page } = useSearchContext();

    console.log(debouncedSearchQuery);

    const { data, isLoading, error } = useQuery({
        queryKey: [
            'images',
            debouncedSearchQuery,
            sortType,
            page,
            categoryName,
        ],
        queryFn: () =>
            unsplashApi.getImages(
                categoryName,
                debouncedSearchQuery,
                page,
                sortType,
            ),
        placeholderData: (previousData) => previousData,
    });

    return {
        data,
        isLoading,
        error,
    };
};
