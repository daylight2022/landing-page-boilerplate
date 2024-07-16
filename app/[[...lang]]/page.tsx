import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import ScoialProof from '@/components/home/SocialProof';
import ScrollingLogos from '@/components/home/ScrollingLogos';
import Pricing from '@/components/home/Pricing';
import Feature from '@/components/home/Feature';
import WallOfLove from '@/components/home/WallOfLove';
import FQA from '@/components/home/FQA';
import { defaultLocale, getDictionary } from '@/lib/i18n';

export default async function LangHome({ params: { lang } }: { params: { lang: string } }) {
	const langName = lang && lang[0] && lang[0] !== 'index' ? lang[0] : defaultLocale;
	const dict = await getDictionary(langName);
	return (
		<>
			{/* Hero */}
			<Hero locale={dict.Hero} CTALocale={dict.CTAButton} />
			{/* Social Proof */}
			<ScoialProof locale={dict.SocialProof} />
			{/* User Purchase Avatar */}
			<ScrollingLogos />

			{/* USP (Unique Selling Proposition) */}
			<Feature id="Feature" locale={dict.Feature} langName={langName}/>
			{/* Pricing */}
			<Pricing id="Pricing" locale={dict.Pricing} langName={langName} />
			{/* Testimonials / Wall of Love */}
			<WallOfLove id="WallOfLove" locale={dict.WallOfLove} />
			{/* FQA (Frequently Asked Questions) */}
			<FQA id="FQA" locale={dict.FQA} langName={langName}/>
			{/* CTA (Call to Action) */}
			<CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
		</>
	);
}
