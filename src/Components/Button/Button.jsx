import PropTypes from 'prop-types';
import style from './Button.module.scss';

export const Button = ({ nextPage, loading, children }) => {
	return (
		<>
			{loading && <div className={style.ContainerLoader}>{children}</div>}
			<button type="button" className={style.Button} onClick={nextPage} disabled={loading}>
				{loading && <span>Loading...</span>}
				{!loading && <span>Load more</span>}
			</button>
		</>
	);
};

Button.propTypes = {
	nextPage: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
};
