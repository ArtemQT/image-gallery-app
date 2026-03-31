import { Header } from '@layouts/root-layout/header/header.tsx';
import { Outlet } from 'react-router-dom';
import { Footer } from '@layouts/root-layout/footer/footer.tsx';
import { useScrollToTop } from '@hooks/use-scroll-to-top.ts';

export const RootLayout = () => {
    useScrollToTop();

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
