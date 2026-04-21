import { RootLayout } from '@layouts/root-layout/root-layout.tsx';
import { CategoryPage } from '@pages/category-page/category-page.tsx';
import { FavouritesPage } from '@pages/favourites-page/favourites-page.tsx';
import { ImagesPage } from '@pages/images-page/images-page.tsx';
import { NotFoundPage } from '@pages/not-found-page/not-found-page.tsx';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <CategoryPage />,
                },
                {
                    path: 'category',
                    element: <CategoryPage />,
                },
                {
                    path: 'images',
                    element: <ImagesPage />,
                },
                {
                    path: 'images/:categoryName',
                    element: <ImagesPage />,
                },
                {
                    path: 'favourites',
                    element: <FavouritesPage />,
                },
                {
                    path: '*',
                    element: <NotFoundPage />,
                },
            ],
        },
    ],
    {
        basename: '/image-gallery-app/',
    },
);
