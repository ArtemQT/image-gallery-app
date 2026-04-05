import { NavigationItem } from '@layouts/root-layout/header/components/navigation-item/navigation-item.tsx';
import { links } from '@shared/constants/header-links-list.ts';
import { createPortal } from 'react-dom';

import styles from './navigation-modal.module.scss';

interface INavigationModalProps {
    isOpen: boolean;
    handleCloseModal: () => void;
}

export const NavigationModal = ({
    isOpen,
    handleCloseModal,
}: INavigationModalProps) => {
    return createPortal(
        <div className={styles.navigationModal} data-is-open={isOpen}>
            <nav>
                <button
                    className={styles.closeButton}
                    onClick={handleCloseModal}
                ></button>
                <ul className={styles.navigationList}>
                    {links.map((link) => (
                        <li
                            className={styles.navigationItem}
                            key={link.text}
                            onClick={handleCloseModal}
                        >
                            <NavigationItem link={link} />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>,
        document.body,
    );
};
