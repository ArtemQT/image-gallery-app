import styles from './footer-column.module.scss';

interface IFooterColumnProps {
    columnTitle: string;
    links: string[];
}

export const FooterColumn = ({ columnTitle, links }: IFooterColumnProps) => {
    return (
        <div className={styles.column}>
            <h3 className={styles.columnTitle}>{columnTitle}</h3>
            <ul className={styles.linkList}>
                {links.map((linkText) => (
                    <li key={linkText} className={styles.linkItem}>
                        <a href="/">{linkText}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
