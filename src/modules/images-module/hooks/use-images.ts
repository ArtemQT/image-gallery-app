import { useQuery } from '@tanstack/react-query';
import { unsplashApi } from '@api/unsplash-api/unsplash-api.ts';
import { useSearchContext } from '@modules/images-module';
import { useParams } from 'react-router-dom';

export const useImages = () => {
    const { categoryName } = useParams();
    const { debouncedSearchQuery, sortType, page } = useSearchContext();

    const { data, isLoading, error, refetch } = useQuery({
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
    });

    return {
        data,
        refetch,
        isImagesLoading: isLoading,
        imagesError: error,
    };
};
