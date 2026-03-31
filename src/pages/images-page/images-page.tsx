import { HeroSection } from '@pages/images-page/sections/hero-section/hero-section.tsx';
import { ImagesSection } from '@pages/images-page/sections/images-section/images-section.tsx';
import { SearchContextProvider } from '@modules/images-module';

export const ImagesPage = () => {
    return (
        <SearchContextProvider>
            <HeroSection />
            <ImagesSection />
        </SearchContextProvider>
    );
};
