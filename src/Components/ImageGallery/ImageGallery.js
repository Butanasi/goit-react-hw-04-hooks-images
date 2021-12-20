import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem';
import style from './ImageGallery.module.scss';

export const ImageGallery = ({ images, clickImage }) => {
	return (
		<>
			<ul className={style.ImageGallery}>
				{images.map(({ id, webformatURL, largeImageURL, tags }) => (
					<ImageGalleryItem
						key={id}
						src={webformatURL}
						largeImageURL={largeImageURL}
						imageClick={clickImage}
						tags={tags}
					/>
				))}
			</ul>
		</>
	);
};
ImageGallery.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			webformatURL: PropTypes.string.isRequired,
			largeImageURL: PropTypes.string.isRequired,
		}),
	),
	clickImage: PropTypes.func.isRequired,
};
