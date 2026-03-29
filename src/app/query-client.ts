import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1 * 1000 * 60 * 20,
            gcTime: 1 * 1000 * 60 * 60,
        },
    },
});
