import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.scss';

export const ImageGalleryItem = ({ tags, src, imageClick, largeImageURL }) => {
	return (
		<li className={style.ImageGalleryItem}>
			<img
				src={src}
				alt={tags}
				data-url={largeImageURL}
				onClick={imageClick}
				className={style.Image}
			/>
		</li>
	);
};
ImageGalleryItem.propTypes = {
	images: PropTypes.shape({
		tags: PropTypes.string.isRequired,
		src: PropTypes.string.isRequired,
		largeImageURL: PropTypes.string.isRequired,
	}),
	imageClick: PropTypes.func.isRequired,
};
