import { unsplashApi } from '@api/unsplash-api/unsplash-api.ts';
import { useSearchContext } from '@modules/images-module';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useImages = () => {
    const { categoryName } = useParams();
    const { debouncedSearchQuery, sortType, page } = useSearchContext();

    let query = '';

    if (debouncedSearchQuery) {
        query = debouncedSearchQuery;
    } else if (categoryName) {
        query = categoryName;
    } else {
        query = 'featured';
    }

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['images', query, sortType, page],
        queryFn: () => unsplashApi.getImages(query, page, sortType),
    });

    return {
        data,
        refetch,
        isImagesLoading: isLoading,
        imagesError: error,
    };
};
