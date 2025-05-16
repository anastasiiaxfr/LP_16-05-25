import b1 from '../../assets/img/brands/b1.svg';
import b2 from '../../assets/img/brands/b2.svg';
import b3 from '../../assets/img/brands/b3.svg';
import b4 from '../../assets/img/brands/b4.svg';
import b5 from '../../assets/img/brands/b5.svg';

function Brands() {
	return (
		<section className="section section_brands">
			<div className="container">
				<div className="brands">
					<img src={b1} alt="ALT" />
					<img src={b3} alt="ALT" />
					<img src={b4} alt="ALT" />
					<img src={b5} alt="ALT" />
					<img src={b2} alt="ALT" />
				</div>
			</div>
		</section>
	);
}

export default Brands;
