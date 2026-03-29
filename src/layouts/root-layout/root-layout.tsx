import { Header } from '@layouts/root-layout/header/header.tsx';
import { Outlet } from 'react-router-dom';
import { Footer } from '@layouts/root-layout/footer/footer.tsx';

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
