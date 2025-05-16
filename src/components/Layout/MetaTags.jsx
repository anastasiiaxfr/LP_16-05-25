import {Helmet} from 'react-helmet';

export default function SEO({
	title = 'Abci',
	description = 'Every transaction is special for us. Aiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan.',
	image = '/seo.jpg',
	name = 'Abci',
}) {
	return (
		<Helmet>
			<title>{title}</title>
			<link rel="canonical" href={window.location.href} />
			<meta name="description" content={description} />
			<meta name="author" content="Anastasiia Berest" />

			{/* Open Graph tags (OG) */}
			<meta property="og:url" content={window.location.href} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{/* OG image tags */}
			<meta property="og:image" content={image} />
			<meta property="og:image:secure_url" content={image} />
			<meta property="og:image:type" content="image/jpeg" />
			<meta property="og:image:width" content="200" />
			<meta property="og:image:alt" content={`Image of ${title} site`} />
			{/* Twitter tags */}
			<meta name="twitter:creator" content={name} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta itemprop="name" content={'Abci'} />
			<meta itemprop="description" content={description} />
			<meta itemprop="image" content={image} />

			<link
				rel="icon"
				type="image/png"
				href="/fav/favicon-96x96.png"
				sizes="96x96"
			/>
			<link rel="icon" type="image/svg+xml" href="/fav/favicon.svg" />
			<link rel="shortcut icon" href="/fav/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/fav/apple-touch-icon.png"
			/>
			<link rel="manifest" href="/fav/site.webmanifest" />
			<link rel="manifest" href="/manifest.json" />
		</Helmet>
	);
}
