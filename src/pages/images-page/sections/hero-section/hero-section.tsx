import { SearchInput } from '@pages/images-page/sections/hero-section/search-input/search-input.tsx';

import { imagesPageHeroContent } from './hero-section.content.ts';
import styles from './hero-section.module.scss';

export const HeroSection = () => {
    const { titleBeforeAccent, titleAccent, secondLine } =
        imagesPageHeroContent;

    return (
        <section className={styles.heroSection}>
            <h1 className={styles.heroSectionTitle}>
                {titleBeforeAccent}
                <span className={styles.accent}>{titleAccent}</span>
                <br />
                {secondLine}
            </h1>
            <SearchInput />
        </section>
    );
};
