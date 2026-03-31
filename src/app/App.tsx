import '@styles/styles.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/router.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@app/query-client.ts';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FavouritesContextProvider } from '@modules/favourites-module';
import { Toaster } from 'react-hot-toast';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@components/error-fallback/error-fallback.tsx';

export const App = () => {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
                window.location.href = '/';
            }}
        >
            <QueryClientProvider client={queryClient}>
                <FavouritesContextProvider>
                    <RouterProvider router={router} />
                    <Toaster position="top-right" reverseOrder={false} />
                    {/*<ReactQueryDevtools initialIsOpen={false} />*/}
                </FavouritesContextProvider>
            </QueryClientProvider>
        </ErrorBoundary>
    );
};
