import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import style from './Loader.module.scss';

export const Spinner = () => {
	return (
		<div className={style.Spinner}>
			<Loader type="Puff" color="maroon" height={30} width={30} />
		</div>
	);
};
