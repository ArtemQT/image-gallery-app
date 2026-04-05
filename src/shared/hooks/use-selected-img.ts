import type { IImage } from '@api/unsplash-api/unsplash-api-types.ts';
import { useCallback, useMemo, useState } from 'react';

export const useSelectedImg = (imagesList: IImage[] | undefined) => {
    const [selectedImgId, setSelectedImgId] = useState<string | null>(null);

    const handleOpenSelectedImg = useCallback((imgId: string) => {
        setSelectedImgId(imgId);
    }, []);

    const handleCloseSelectedImg = useCallback(() => {
        setSelectedImgId(null);
    }, []);

    const handleChangeSelectedImg = useCallback(
        (buttonType: 'prev' | 'next') => {
            if (selectedImgId && imagesList) {
                const imageIndex = imagesList.findIndex(
                    (image) => image.id === selectedImgId,
                );
                if (imageIndex !== -1) {
                    switch (buttonType) {
                        case 'prev': {
                            if (imageIndex === 0) {
                                setSelectedImgId(
                                    imagesList[imagesList.length - 1].id,
                                );
                            } else {
                                setSelectedImgId(imagesList[imageIndex - 1].id);
                            }
                            break;
                        }
                        case 'next': {
                            if (imageIndex === imagesList.length - 1) {
                                setSelectedImgId(imagesList[0].id);
                            } else {
                                setSelectedImgId(imagesList[imageIndex + 1].id);
                            }
                            break;
                        }
                    }
                }
            }
        },
        [selectedImgId, imagesList],
    );

    const selectedImg = useMemo(
        () => imagesList?.find((image) => image.id === selectedImgId),
        [imagesList, selectedImgId],
    );

    return {
        selectedImg,
        handleOpenSelectedImg,
        handleCloseSelectedImg,
        handleChangeSelectedImg,
    };
};
