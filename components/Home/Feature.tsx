import { RoughNotation } from 'react-rough-notation';
import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Feature = ({ id, locale }: { id: string; locale: any }) => {
	return (
		<section id={id} className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6">
			<h2 className="text-center text-white">
				<RoughNotation type="highlight" show color="#2563EB">
					{locale.title}
				</RoughNotation>
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<div className="flex flex-col items-center text-center px-8 py-6 border-b">
					<BsGithub className="text-2xl" />
					<h2 className="text-xl font-semibold mb-2">Open Source Advantage</h2>
					<p className="text-slate-700 dark:text-slate-400">Completely free with a wealth of customization options.</p>
				</div>
				<div className="flex flex-col items-center text-center px-8 py-6 border-b">
					<BsGithub className="text-2xl" />
					<h2 className="text-xl font-semibold mb-2">Open Source Advantage</h2>
					<p className="text-slate-700 dark:text-slate-400">Completely free with a wealth of customization options.</p>
				</div>
				<div className="flex flex-col items-center text-center px-8 py-6 border-b">
					<BsGithub className="text-2xl" />
					<h2 className="text-xl font-semibold mb-2">Open Source Advantage</h2>
					<p className="text-slate-700 dark:text-slate-400">Completely free with a wealth of customization options.</p>
				</div>
				<div className="flex flex-col items-center text-center px-8 py-6 border-b">
					<BsGithub className="text-2xl" />
					<h2 className="text-xl font-semibold mb-2">Open Source Advantage</h2>
					<p className="text-slate-700 dark:text-slate-400">Completely free with a wealth of customization options.</p>
				</div>
			</div>
		</section>
	);
};

export default Feature;
