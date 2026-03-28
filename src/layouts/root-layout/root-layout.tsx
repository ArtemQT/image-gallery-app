import { Header } from '@layouts/root-layout/componets/header/header.tsx';
import { Outlet } from 'react-router-dom';
import { Footer } from '@layouts/root-layout/componets/footer/footer.tsx';

export const RootLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
