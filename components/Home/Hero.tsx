'use client';

import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { LineText } from '../LineText';

const Hero = ({ locale }: { locale: any }) => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.3,
					ease: [0, 0.71, 0.2, 1],
					scale: {
						type: 'tween', // tween spring 
						// damping: 10, // if spring
						// stiffness: 50, // if spring
						// restDelta: 0.001, // if spring
					},
				}}>
				<section className="mx-auto max-w-7xl px-4 sm:px-6 lg: px-8 py-16 md:pt-24 text-center">
					<h1>
						{locale.title1} <LineText>{locale.title2}</LineText>
						{locale.title3}
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
						{locale.description}
					</p>
				</section>
			</motion.div>
			<CTAButton />
		</>
	);
};

export default Hero;
