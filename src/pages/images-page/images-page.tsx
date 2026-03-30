import { HeroSection } from '@pages/images-page/sections/hero-section/hero-section.tsx';
import { useParams } from 'react-router-dom';

export const ImagesPage = () => {
    const { categoryName } = useParams();
    console.log(categoryName);

    return (
        <>
            <HeroSection />
        </>
    );
};
