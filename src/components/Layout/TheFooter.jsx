import Img from '../../assets/img/map.svg';
import {Clock7, Headset, AtSign, Phone} from 'lucide-react';
import {Link} from 'react-router';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer_top">
				<div className="container">
					<div>
						<h3 className="text-xl">COMPANY INFO</h3>
						<p className="mt-5 opacity-70">
							Reach out to us anytime and lets create a better future for all
							technology users together, forever. We are open to all types of
							collab offers and tons more.
						</p>
						<div className="flex flex-col gap-4 mt-10 ">
							<div className="flex gap-2 ">
								<Clock7 />
								<div className="opacity-70">
									<p>Office Hours </p>
									<p>Monday-Friday 9 AM-5 PM PST</p>
								</div>
							</div>
							<div className="flex gap-2 ">
								<Headset />
								<div className="opacity-70">
									<p>Support Hours </p>
									<p>24/7 365</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<h3 className="text-xl">CONTACT INFO</h3>
						<div className="flex flex-col gap-4 mt-5 group">
							<div className="flex gap-2">
								<AtSign />
								<a
									className="opacity-70 hover:opacity-100"
									href="mailto:info@techyessolutions.com"
								>
									info@techyessolutions.com
								</a>
							</div>
							<div className="flex gap-2">
								<Phone />
								<a
									className="opacity-70 hover:opacity-100"
									href="tel:858-227-4878"
								>
									858-227-4878
								</a>
							</div>
							<div className="flex flex-col gap-3 mt-5">
								<Link to="/terms" className="opacity-70 hover:opacity-100">
									Terms of Services
								</Link>
								<Link to="/policy" className="opacity-70 hover:opacity-100">
									Privacy Policy
								</Link>
							</div>
						</div>
					</div>
					<div>
						<h3 className="text-xl">OUR SERVICES</h3>
						<div className="flex flex-col gap-3 mt-5">
							<Link to="/" className="opacity-70 hover:opacity-100">
								Information Systems Strategy
							</Link>
							<Link to="/" className="opacity-70 hover:opacity-100">
								Custom Software
							</Link>
							<Link to="/" className="opacity-70 hover:opacity-100">
								Integration Services
							</Link>
							<Link to="/" className="opacity-70 hover:opacity-100">
								Business Automation
							</Link>
							<Link to="/" className="opacity-70 hover:opacity-100">
								Web, Ecommerce & Mobiel Apps
							</Link>
							<Link to="/" className="opacity-70 hover:opacity-100">
								Creative
							</Link>
						</div>
					</div>
					<div>
						<h3 className="text-xl">OUR LOCATIONS</h3>
						<img src={Img} alt="Map" />
					</div>
				</div>
			</div>
			<div className="footer_btm">
				<div className="container">
					&copy; 2025 UIDesign.to - All rights reserved - Powered by Xforeal
				</div>
			</div>
		</footer>
	);
}
