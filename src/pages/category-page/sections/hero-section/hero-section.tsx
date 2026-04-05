import { categoryPageHeroContent } from './hero-section.content.ts';
import styles from './hero-section.module.scss';

export const HeroSection = () => {
    const { firstLine, titleAccent, lineAfterAccent } = categoryPageHeroContent;

    return (
        <section className={styles.heroSection}>
            <h1 className={styles.heroSectionTitle}>
                {firstLine}
                <br />
                <span className={styles.accent}>{titleAccent}</span>
                {lineAfterAccent}
            </h1>
        </section>
    );
};
