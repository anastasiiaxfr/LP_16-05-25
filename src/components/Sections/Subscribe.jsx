import React from 'react';
import {Button} from '@/components/ui/button';

function Subscribe() {
	return (
		<section className="section_subscribe">
			<div className="subscribe">
				<h2>Move even faster with Your guide in the digital age.</h2>
				<div className="flex flex-wrap justify-center gap-4 mx-auto mt-10">
					<Button className="w-full sm:w-auto py-6 px-10 cursor-pointer bg-white text-primary hover:bg-blue-700 hover:text-white">
						Let’s Talk
					</Button>
					<Button
						className="w-full sm:w-auto py-6 px-10 cursor-pointer bg-transparent text-white border-white hover:bg-blue-700 hover:text-white hover:border-blue-700"
						variant="outline"
					>
						Book Your Consultation
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Subscribe;
