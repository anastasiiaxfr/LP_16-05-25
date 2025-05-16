import {Button} from '@/components/ui/button';
import {Link} from 'react-router';
import Logo from '../components/Layout/Logo';
function NotFound() {
	return (
		<div className="flex justify-center items-center min-h-screen text-center">
			<div>
				<div className="flex justify-center mb-4">
					<Logo />
				</div>
				<h1 className="text-2xl font-bold leading-none">Page Not Found</h1>
				<div
					className="text-[10em] font-bold text-primary"
					style={{lineHeight: '0.9'}}
				>
					404
				</div>

				<p className="text-xl mb-4">
					Sorry, the page you're looking for doesn't exist.
				</p>
				<Link to="/">
					<Button href="/" className="py-6 px-10 min-w-[250px] cursor-pointer">
						Go back to Home
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default NotFound;
