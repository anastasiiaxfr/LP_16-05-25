import Img from '../../assets/img/logo.svg';
import {Link} from 'react-router';

function Logo() {
	return (
		<Link to="/" className="logo">
			<img src={Img} alt="Abci" />
		</Link>
	);
}

export default Logo;
