import type { ILinkItem } from '@shared/constants/header-links-list.ts';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import styles from './navigation-item.module.scss';

interface INavigationItemProps {
    link: ILinkItem;
}

export const NavigationItem = ({ link }: INavigationItemProps) => {
    return (
        <NavLink to={link.to} className={styles.navigationLink}>
            {({ isActive }) => (
                <>
                    <ReactSVG
                        src={link.iconSrc}
                        className={styles.navigationLinkIcon}
                        data-is-active={isActive}
                    />
                    <span
                        className={styles.navigationLinkText}
                        data-is-active={isActive}
                    >
                        {link.text}
                    </span>
                </>
            )}
        </NavLink>
    );
};
