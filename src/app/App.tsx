import '@styles/styles.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/router.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@app/query-client.ts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FavouritesContextProvider } from '@modules/favourites-module';

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <FavouritesContextProvider>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
            </FavouritesContextProvider>
        </QueryClientProvider>
    );
};
