import '@styles/styles.scss';

import { queryClient } from '@app/query-client.ts';
import { router } from '@app/router.tsx';
import { FavouritesContextProvider } from '@modules/favourites-module';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

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
