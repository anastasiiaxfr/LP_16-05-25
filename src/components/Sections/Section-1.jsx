import Img from '../../assets/img/img2.png';
import {Button} from '@/components/ui/button';

function Section1() {
	return (
		<section className="section">
			<div className="container">
				<div className="row_2">
					<div>
						<img src={Img} alt="ALT" className="mx-auto max-w-full" />
					</div>
					<div>
						<h2>Boost Productivity</h2>
						<p className="description">
							Ciatis unde omnis iste natus error sit voluptatem accusantium
							doloremque laudantium.Ciatis unde omnis iste natus error sit.
						</p>
						<Button className="py-6 px-10 min-w-[250px] cursor-pointer">
							Get Started
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Section1;
