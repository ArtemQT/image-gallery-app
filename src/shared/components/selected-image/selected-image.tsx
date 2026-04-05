import { useLockScroll } from '@hooks/use-lock-scroll.ts';
import {
    type MouseEventHandler,
    type ReactNode,
    useCallback,
    useEffect,
} from 'react';
import { createPortal } from 'react-dom';

import styles from './selected-image.module.scss';

const handleModalInnerClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
};

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

    const handlePrev = useCallback(() => {
        handleChangeSelectedImg('prev');
    }, [handleChangeSelectedImg]);

    const handleNext = useCallback(() => {
        handleChangeSelectedImg('next');
    }, [handleChangeSelectedImg]);

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
    }, [handleChangeSelectedImg, handleCloseSelectedImg]);

    return createPortal(
        <div className={styles.modal} onClick={handleCloseSelectedImg}>
            <div className={styles.modalInner} onClick={handleModalInnerClick}>
                <button
                    type="button"
                    className={styles.closeModalButton}
                    onClick={handleCloseSelectedImg}
                ></button>
                <div className={styles.selectedCard}>{children}</div>
                <button
                    type="button"
                    className={styles.cardButtonPrev}
                    onClick={handlePrev}
                ></button>
                <button
                    type="button"
                    className={styles.cardButtonNext}
                    onClick={handleNext}
                ></button>
            </div>
        </div>,
        document.body,
    );
};
