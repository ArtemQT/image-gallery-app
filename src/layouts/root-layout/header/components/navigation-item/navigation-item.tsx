import styles from './navigation-item.module.scss';
import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';
import type { ILinkItem } from '@shared/utils/header-links-list.ts';

interface INavigationItemProps {
    link: ILinkItem;
}

export const NavigationItem = ({ link }: INavigationItemProps) => {
    return (
        <NavLink to={link.to} className={styles.navigationLink}>
            {({ isActive }) => (
                <>
                    <ReactSVG src={link.iconSrc} className={styles.navigationLinkIcon} data-is-active={isActive} />
                    <span className={styles.navigationLinkText} data-is-active={isActive}>
                        {link.text}
                    </span>
                </>
            )}
        </NavLink>
    );
};
