import { useState } from 'react';
import type { IImage } from '@api/unsplash-api/unsplash-api-types.ts';

export const useSelectedImg = (imagesList: IImage[] | undefined) => {
    const [selectedImgId, setSelectedImgId] = useState<string | null>(null);

    const handleOpenSelectedImg = (imgId: string) => setSelectedImgId(imgId);
    const handleCloseSelectedImg = () => setSelectedImgId(null);
    const handleChangeSelectedImg = (buttonType: 'prev' | 'next') => {
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
    };

    return {
        selectedImg: imagesList?.find((image) => image.id === selectedImgId),
        handleOpenSelectedImg,
        handleCloseSelectedImg,
        handleChangeSelectedImg,
    };
};
