import styles from './images-list.module.scss';
import { useImages } from '@modules/images-module/hooks/use-images.ts';

export const ImagesList = () => {
    const { data } = useImages();

    console.log(data);

    return (
        <ul className={styles.imagesList}>
            {data?.results.map((image) => (
                <li key={image.id}>
                    <p style={{ color: 'black' }}>{image.description}</p>
                    <img src={image.imageUrl} alt="" width={200} height={200} />
                </li>
            ))}
        </ul>
    );
};
