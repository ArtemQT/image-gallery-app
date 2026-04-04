import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import logoImg from '@assets/icons/logo.svg';
import { links } from '@shared/constants/header-links-list.ts';
import { NavigationItem } from '@layouts/root-layout/header/components/navigation-item/navigation-item.tsx';
import { BurgerButton } from '@layouts/root-layout/header/components/burger-menu/burger-button.tsx';
import { useState } from 'react';
import { NavigationModal } from '@layouts/root-layout/header/components/navigation-modal/navigation-modal.tsx';

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} header-container`}>
                <Link to="/">
                    <img
                        src={logoImg}
                        alt="modsen-gallery-logo"
                        width="287"
                        height="49"
                        className={styles.headerLogo}
                    />
                </Link>
                <nav className={'mobile-hidden'}>
                    <ul className={styles.navigationList}>
                        {links.map((link) => (
                            <li key={link.text}>
                                <NavigationItem link={link} />
                            </li>
                        ))}
                    </ul>
                </nav>
                <BurgerButton handleOpenModal={handleOpenModal} />
                <NavigationModal
                    isOpen={isModalOpen}
                    handleCloseModal={handleCloseModal}
                />
            </div>
        </header>
    );
};
