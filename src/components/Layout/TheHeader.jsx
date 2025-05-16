import Logo from './Logo';
import {Button} from '@/components/ui/button';
import Menu from './NavigationMenu';
import Drawer from './Drawer';

function Header() {
	return (
		<>
			<header className="header">
				<div className="container">
					<Logo />
					<Menu />

					<div className="flex gap-2">
						<Button variant="secondary" className="cursor-pointer">
							Sign In
						</Button>
						<div className="sm:hidden">
							<Drawer />
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
