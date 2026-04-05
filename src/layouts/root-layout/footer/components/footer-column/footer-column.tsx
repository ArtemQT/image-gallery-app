import type { MouseEventHandler } from 'react';

import styles from './footer-column.module.scss';

interface IFooterColumnProps {
    columnTitle: string;
    links: string[];
}

const handleInactiveLinkClick: MouseEventHandler<HTMLAnchorElement> = (
    event,
) => {
    event.preventDefault();
};

export const FooterColumn = ({ columnTitle, links }: IFooterColumnProps) => {
    return (
        <div className={styles.column}>
            <h3 className={styles.columnTitle}>{columnTitle}</h3>
            <ul className={styles.linkList}>
                {links.map((linkText) => (
                    <li key={linkText} className={styles.linkItem}>
                        <a href="#!" onClick={handleInactiveLinkClick}>
                            {linkText}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
