import React from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

import Img from '../../assets/img/quote.svg';

function Testimonials() {
	return (
		<section className="section section_testimonials overflow-clip">
			<div className="container">
				<div className="hgroup">
					<h2>Trusted by Agencies & Store Owners</h2>
				</div>
				<div className="slider">
					<Carousel className=" max-w-md mx-auto">
						<CarouselContent>
							{Array.from({length: 5}).map((_, index) => (
								<CarouselItem key={index}>
									<div className="p-1">
										<Card className="border border-gray-100 shadow-none">
											<CardContent className="flex flex-col items-center justify-center p-6 rounded-lg">
												<img
													src={Img}
													alt="quote"
													className="relative transfrom translate-y-[50%] z-0 -mt-[5em]"
												/>
												<span className="text-xl text-center z-10 text-gray-500">
													Unde omnis iste natus error sit voluptatem accusantium
													doloremque laudantium, totam rem aperiam, eaque ipsa
													quae ab illo inventore veritatis et quasi architecto
													beatae vitae.
												</span>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
