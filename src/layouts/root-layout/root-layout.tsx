import { Header } from '@layouts/root-layout/header/header.tsx';
import { Outlet } from 'react-router-dom';
import { Footer } from '@layouts/root-layout/footer/footer.tsx';
import { useScrollToTop } from '@hooks/use-scroll-to-top.ts';
import { ErrorBoundary } from '@components/error-boundary/error-boundary.tsx';

export const RootLayout = () => {
    useScrollToTop();

    return (
        <ErrorBoundary>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </ErrorBoundary>
    );
};
