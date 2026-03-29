import styles from './burger-button.module.scss';

interface IBurgerButtonProps {
    handleOpenModal: () => void;
}

export const BurgerButton = ({ handleOpenModal }: IBurgerButtonProps) => {
    return (
        <button className={`${styles.burgerMenu} mobile-visible`} onClick={handleOpenModal}>
            <span className={styles.burgerMenuLine}></span>
            <span className={styles.burgerMenuLine}></span>
            <span className={styles.burgerMenuLine}></span>
        </button>
    );
};
