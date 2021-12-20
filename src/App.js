import { useState, useEffect } from 'react';
import { Searchbar } from './Components/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './Components/ImageGallery';
import { Button } from './Components/Button';
import { Spinner } from './Components/Loader';
import { Modal } from './Components/Modal';
import style from './App.module.scss';

function App() {
	const [searchQuery, setSearchQuery] = useState('');
	const [page, setPage] = useState(1);
	const [images, setImages] = useState([]);
	const [status, setStatus] = useState('idle');
	const [load, setLoad] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [elementsModal, setElementsModal] = useState([]);

	useEffect(() => {
		if (!searchQuery) {
			return;
		}
		restApi(searchQuery, page);
	}, [searchQuery, page]);

	const restApi = (searchQuery, page) => {
		fetch(
			`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=24073340-1ef2f625ad6fbbc63b84a3aaa&image_type=photo&orientation=horizontal&per_page=12`,
		)
			.then(response => response.json())
			.then(({ hits }) => {
				if (hits.length === 0) {
					setStatus('rejected');
					return;
				}
				setImages(prevState => [...prevState, ...hits]);
				setStatus('resolved');
				setLoad(false);
			});
	};

	const handleClick = () => {
		setPage(prevState => prevState + 1);
		setLoad(true);
	};

	const getSearchQuery = search => {
		setSearchQuery(search);
		setPage(1);
		setImages([]);
		setStatus('pending');
	};

	const clickOnImage = event => {
		const bigImg = event.target.getAttribute('data-url');
		const alt = event.target.getAttribute('alt');

		setShowModal(true);
		setElementsModal({ bigImg, alt });
	};

	const closeModal = () => {
		setShowModal(prevState => !prevState);
	};
	const btn = !(images.length < 12);
	return (
		<div className={style.App}>
			<Searchbar onSubmit={getSearchQuery} />
			{status === 'pending' && <Spinner />}
			{status === 'rejected' && (
				<div>
					<h1>Images with the title {searchQuery} not found</h1>
				</div>
			)}

			{status === 'resolved' && (
				<>
					<ImageGallery images={images} clickImage={clickOnImage} />
					{btn && (
						<Button nextPage={handleClick} loading={load}>
							<Spinner />
						</Button>
					)}
				</>
			)}
			{showModal && (
				<Modal alt={elementsModal.alt} src={elementsModal.bigImg} onClose={closeModal} />
			)}
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
			/>
		</div>
	);
}

export default App;
