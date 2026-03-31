import styles from './footer.module.scss';

import logoImg from '@assets/icons/logo.svg';
import { socials } from '@shared/utils/footer-socials-list.ts';
import { footerColumns } from '@shared/utils/footer-columns-list.ts';
import { FooterColumn } from '@layouts/root-layout/footer/components/footer-column/footer-column.tsx';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContainer} footer-container`}>
                <div className={styles.footerBody}>
                    <div className={styles.footerSocials}>
                        <Link to="/">
                            <img
                                className={styles.logo}
                                src={logoImg}
                                alt="modsen-gallery logo"
                                width="267"
                                height="49"
                                loading="lazy"
                            />
                        </Link>
                        <p className={styles.companyDescription}>
                            We have images that capture every mood and inspire
                            every vision. From breathtaking landscapes to
                            vibrant portraits.
                        </p>
                        <ul className={styles.socialsList}>
                            {socials.map(({ ComponentImg, id }) => (
                                <li className={styles.socialsItem} key={id}>
                                    <a href="/" target="_blank">
                                        <ComponentImg
                                            className={styles.socialsImg}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerColumnList}>
                        {footerColumns.map((footerColumn) => (
                            <FooterColumn
                                key={footerColumn.columnTitle}
                                columnTitle={footerColumn.columnTitle}
                                links={footerColumn.links}
                            />
                        ))}
                    </div>
                </div>
                <p className={styles.footerCopyright}>
                    Modsen.gallery © 2000-2025, All Rights Reserved
                </p>
            </div>
        </footer>
    );
};
