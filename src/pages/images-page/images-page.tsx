import { HeroSection } from '@pages/images-page/sections/hero-section/hero-section.tsx';
import { useParams } from 'react-router-dom';
import { ImagesSection } from '@pages/images-page/sections/images-section/images-section.tsx';

export const ImagesPage = () => {
    const { categoryName } = useParams();
    console.log(categoryName);

    return (
        <>
            <HeroSection />
            <ImagesSection />
        </>
    );
};
