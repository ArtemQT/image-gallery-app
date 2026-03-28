import '@styles/styles.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/router.tsx';

export const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};
