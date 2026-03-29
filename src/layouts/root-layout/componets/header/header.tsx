import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '@assets/icons/logo.svg';
import { ReactSVG } from 'react-svg';
import { links } from '@shared/utils/header-links-list.ts';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} header-container`}>
                <Link to="/">
                    <img src={logoImg} alt="modsen-gallery-logo" width="287" height="49" />
                </Link>
                <nav className={styles.navigation}>
                    <ul className={styles.navigationList}>
                        {links.map((link) => (
                            <li key={link.text} className={styles.navigationItem}>
                                <NavLink to={link.to} className={styles.navigationLink}>
                                    {({ isActive }) => (
                                        <>
                                            <ReactSVG src={link.iconSrc} className={styles.navigationItemIcon} data-is-active={isActive} />
                                            <span className={styles.navigationItemText} data-is-active={isActive}>
                                                {link.text}
                                            </span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
