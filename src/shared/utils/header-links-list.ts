import categoryIcon from '@assets/icons/category-icon.svg';
import imagesIcon from '@assets/icons/images-icon.svg';
import favouritesIcon from '@assets/icons/favourites.svg';

interface ILinkItem {
    iconSrc: string;
    to: string;
    text: string;
}

export const links: ILinkItem[] = [
    {
        iconSrc: categoryIcon,
        text: 'Category',
        to: '/',
    },
    {
        iconSrc: imagesIcon,
        text: 'Images',
        to: '/images',
    },
    {
        iconSrc: favouritesIcon,
        text: 'Favourites',
        to: '/favourites',
    },
];
