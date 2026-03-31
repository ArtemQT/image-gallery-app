import styles from './hero-section.module.scss';

export const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <h1 className={styles.heroSectionTitle}>
                let's find some <br />
                <span className={styles.accent}>Images</span> here!
            </h1>
        </section>
    );
};
