import { useLockScroll } from '@hooks/use-lock-scroll.ts';
import { type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './selected-image.module.scss';

interface ISelectedImageProps {
    children: ReactNode;
    handleCloseSelectedImg: () => void;
    handleChangeSelectedImg: (buttonType: 'prev' | 'next') => void;
}

export const SelectedImage = ({
    children,
    handleCloseSelectedImg,
    handleChangeSelectedImg,
}: ISelectedImageProps) => {
    useLockScroll();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowLeft': {
                    handleChangeSelectedImg('prev');
                    break;
                }
                case 'ArrowRight': {
                    handleChangeSelectedImg('next');
                    break;
                }
                case 'Escape': {
                    handleCloseSelectedImg();
                    break;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleChangeSelectedImg]);

    return createPortal(
        <div className={styles.modal} onClick={handleCloseSelectedImg}>
            <div
                className={styles.modalInner}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.closeModalButton}
                    onClick={handleCloseSelectedImg}
                ></button>
                <div className={styles.selectedCard}>{children}</div>
                <button
                    className={styles.cardButtonPrev}
                    onClick={() => handleChangeSelectedImg('prev')}
                ></button>
                <button
                    className={styles.cardButtonNext}
                    onClick={() => handleChangeSelectedImg('next')}
                ></button>
            </div>
        </div>,
        document.body,
    );
};
