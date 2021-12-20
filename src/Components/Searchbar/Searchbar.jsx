import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import style from './Searchbar.module.scss';

export function Searchbar({ onSubmit }) {
	const [searchQuery, setSearchQuery] = useState('');

	const handleInputChange = event => {
		setSearchQuery(event.currentTarget.value);
	};
	const handleSubmit = event => {
		event.preventDefault();
		if (searchQuery.trim() === '') {
			toast.warn('please enter name images', {
				theme: 'colored',
			});
			return;
		}
		onSubmit(searchQuery.toLowerCase());
		setSearchQuery('');
	};
	return (
		<header className={style.Searchbar}>
			<form className={style.SearchForm} onSubmit={handleSubmit}>
				<button type="submit" className={style.SearchFormButton}>
					<span className={style.SearchFormButtonLabel}></span>
				</button>

				<input
					className={style.Input}
					type="text"
					autoComplete="off"
					autoFocus
					value={searchQuery}
					placeholder="Search images and photos"
					onChange={handleInputChange}
				/>
			</form>
		</header>
	);
}

Searchbar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
