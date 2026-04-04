import '@styles/styles.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/router.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@app/query-client.ts';
import { FavouritesContextProvider } from '@modules/favourites-module';
import { Toaster } from 'react-hot-toast';

export const App = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <FavouritesContextProvider>
                    <RouterProvider router={router} />
                    <Toaster position="top-right" reverseOrder={false} />
                </FavouritesContextProvider>
            </QueryClientProvider>
        </>
    );
};
