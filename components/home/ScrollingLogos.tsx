'use client';
import { LOGOS } from '@/config/logos';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const ScrollingLogos = () => {
	const { theme } = useTheme();
	return (
		<section className="mx-auto w-full md:max-w-5xl lg:max-w-7xl px-0 md:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
			<Marquee direction="left" autoFill pauseOnHover>
				{LOGOS.map((logo, index) => (
					<div key={index} className="flex items-center justify-center mx-6 text-gray-600">
						<Image
							src={logo.image}
							alt={logo.name}
							width={50}
							height={50}
							className={`${
								theme === 'dark' ? 'dark:invert' : ''
							} grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer text-gray-500`}
						/>
					</div>
				))}
			</Marquee>
		</section>
	);
};

export default ScrollingLogos;
