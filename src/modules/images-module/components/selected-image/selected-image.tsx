import styles from './selected-image.module.scss';
import { type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLockScroll } from '@hooks/use-lock-scroll.ts';

interface ISelectedImageProps {
    children: ReactNode;
    handleCloseSelectedCard: () => void;
    handleChangeSelectedCard: (buttonType: 'prev' | 'next') => void;
}

export const SelectedImage = ({
    children,
    handleCloseSelectedCard,
    handleChangeSelectedCard,
}: ISelectedImageProps) => {
    useLockScroll();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowLeft': {
                    handleChangeSelectedCard('prev');
                    break;
                }
                case 'ArrowRight': {
                    handleChangeSelectedCard('next');
                    break;
                }
                case 'Escape': {
                    handleCloseSelectedCard();
                    break;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleChangeSelectedCard]);

    return createPortal(
        <div className={styles.modal} onClick={handleCloseSelectedCard}>
            <div
                className={styles.modalInner}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.closeModalButton}
                    onClick={handleCloseSelectedCard}
                ></button>
                <div className={styles.selectedCard}>{children}</div>
                <button
                    className={styles.cardButtonPrev}
                    onClick={() => handleChangeSelectedCard('prev')}
                ></button>
                <button
                    className={styles.cardButtonNext}
                    onClick={() => handleChangeSelectedCard('next')}
                ></button>
            </div>
        </div>,
        document.body,
    );
};
