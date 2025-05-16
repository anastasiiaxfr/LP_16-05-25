import i1 from '../../assets/img/icons/fi_briefcase.svg';
import i2 from '../../assets/img/icons/fi_gift.svg';
import i3 from '../../assets/img/icons/fi_globe.svg';
import i4 from '../../assets/img/icons/fi_send.svg';
import i5 from '../../assets/img/icons/fi_trello.svg';
import i6 from '../../assets/img/icons/fi_wifi-off.svg';

const features = [
	{
		icon: i1,
		title: 'Share your Insights',
		desc: 'Unde omnis iste natus error sit volu ptatem accusantium dolor.',
	},
	{
		icon: i5,
		title: 'Track your Leads',
		desc: 'Unde omnis iste natus error sit volu ptatem accusantium dolor.',
	},
	{
		icon: i6,
		title: 'Go Offline Mode',
		desc: 'Unde omnis iste natus error sit volu ptatem accusantium dolor.',
	},
	{
		icon: i2,
		title: 'Know Kanban Mode',
		desc: 'Unde omnis iste natus error sit volu ptatem accusantium dolor.',
	},
	{
		icon: i4,
		title: 'Reward System Available',
		desc: 'Unde omnis iste natus error sit volu ptatem accusantium dolor.',
	},
	{
		icon: i3,
		title: 'Over 120 Country',
		desc: 'Unde omnis iste natus error sit volu ptatem accusantium dolor.',
	},
];

function FeaturesSection() {
	return (
		<section className="section section_features" id="features">
			<div className="container">
				<div className="hgroup">
					<h2>For Your Business</h2>
					<p className="description">
						Weiciatis unde omnis iste natus error sit voluptatem accusantium
						doloremque laudantium, totam rem aperiam, eaqu
					</p>
				</div>

				<div className="features">
					{features.map((i, ind) => (
						<div className="feature group" key={ind}>
							<div className="feature_icon">
								<img src={i.icon} alt={i.title} />
							</div>
							<div className="feature_content">
								<p className="feature_title">
									<b>{i.title}</b>
								</p>
								<p>{i.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default FeaturesSection;
