import {NavLink} from 'react-router';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';

import {MenuItems} from '../../constatns';

function Menu() {
	return (
		<NavigationMenu className="hidden sm:flex">
			<NavigationMenuList>
				{MenuItems.map((i, ind) => (
					<NavigationMenuItem key={ind}>
						<NavLink
							to={i.url}
							className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-sm"
						>
							{i.title}
						</NavLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export default Menu;
