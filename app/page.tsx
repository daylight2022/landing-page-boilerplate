import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import ScrollingLogos from '@/components/home/ScrollingLogos';
import Pricing from '@/components/home/Pricing';
import Feature from '@/components/home/Feature';
import WallOfLove from '@/components/home/WallOfLove';
import FQA from '@/components/home/FQA';

export default function LandingHome() {
	const dict = {
		hero: {
			title1: '快速构建',
			title2: '落地页',
			title3: '',
			description: '一个免费、开源且功能丰富的用于快速构建网站的工具',
		},
		feature: {
			title: 'Feature',
		},
		cta: {
			title: 'Build Your Landing Page Now',
			description1: 'Build',
			description2: 'your landing page,',
			description3: 'show',
			description4: 'your product, and',
			description5: 'start earning!',
			description6: '',
		},
		pricing: {
			title: "Pricing",
			title2: "Get unlimited access.",
			description: 'This page you are currently viewing is an open-source, free boilerplate.',
			doYouLike: "喜欢这个落地页模板吗？",
			follow: "联系我们。"
		}
	};
	return (
		<>
			{/* Hero */}
			<Hero locale={dict.hero} />
			{/* User Purchase Avatar */}
			<ScrollingLogos />

			{/* USP (Unique Selling Proposition) */}
			<Feature id="Feature" locale={dict.feature} />
			{/* Pricing */}
			<Pricing id="Pricing" locale={dict.pricing}/>
			{/* Testimonials / Wall of Love */}
			<WallOfLove id="WallOfLove" />
			{/* FQA (Frequently Asked Questions) */}
			<FQA />
			{/* CTA (Call to Action) */}
			<CTA locale={dict.cta} />
		</>
	);
}
