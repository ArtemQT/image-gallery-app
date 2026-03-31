import styles from './hero-section.module.scss';
import { SearchInput } from '@pages/images-page/sections/hero-section/search-input/search-input.tsx';

export const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <h1 className={styles.heroSectionTitle}>
                let's find some <span className={styles.accent}>Images</span>
                <br />
                here!
            </h1>
            <SearchInput />
        </section>
    );
};
