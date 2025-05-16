import {Outlet} from 'react-router';
import Header from './TheHeader';
import Footer from './TheFooter';
import MetaTags from './MetaTags';

function Layout() {
	return (
		<>
			<MetaTags />
			<div className="page_wrap">
				<div className="page">
					<Header />
					<main>
						<Outlet />
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Layout;
