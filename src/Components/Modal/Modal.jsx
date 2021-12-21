import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import style from './Modal.module.scss';
const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, src, alt }) {
	useEffect(() => {
		window.addEventListener('keydown', closeModal);
		return () => {
			window.removeEventListener('keydown', closeModal);
		};
	});

	const closeModal = e => {
		if (e.code === 'Escape') {
			onClose();
		}
	};

	const handleClick = event => {
		if (event.currentTarget === event.target) {
			onClose();
		}
	};

	return createPortal(
		<div className={style.Overlay} onClick={handleClick}>
			<div className={style.Modal}>
				<img src={src} alt={alt} />
			</div>
		</div>,
		modalRoot,
	);
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};
