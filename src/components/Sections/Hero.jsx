import Img from '../../assets/img/img1.png';
import {Button} from '@/components/ui/button';

function Hero() {
	return (
		<section className="section section_hero">
			<div className="container">
				<div className="row_1">
					<div>
						<h1>Every transaction is special for us.</h1>
						<p className="description">
							Aiciatis unde omnis iste natus error sit voluptatem accusantium
							doloremque laudan.
						</p>
						<Button className="py-6 px-10 min-w-[250px] cursor-pointer">
							Get Started
						</Button>
					</div>
					<div>
						<img src={Img} alt="ALT" className="mx-auto" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
