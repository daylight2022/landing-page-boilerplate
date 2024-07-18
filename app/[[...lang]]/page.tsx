import CTA from '@/components/Home/CTA';
import Hero from '@/components/Home/Hero';
import ScoialProof from '@/components/Home/SocialProof';
import ScrollingLogos from '@/components/Home/ScrollingLogos';
import Pricing from '@/components/Home/Pricing';
import Feature from '@/components/Home/Feature';
import WallOfLove from '@/components/Home/WallOfLove';
import FAQ from '@/components/Home/FAQ';
import { defaultLocale, getDictionary } from '@/lib/i18n';

export default async function LangHome({ params: { lang } }: { params: { lang: string } }) {
	const langName = lang && lang[0] ? lang[0] : defaultLocale;
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
			<Feature id="Feature" locale={dict.Feature} langName={langName} />
			{/* Pricing */}
			<Pricing id="Pricing" locale={dict.Pricing} langName={langName} />
			{/* Testimonials / Wall of Love */}
			<WallOfLove id="WallOfLove" locale={dict.WallOfLove} />
			{/* FAQ (Frequently Asked Questions) */}
			<FAQ id="FAQ" locale={dict.FAQ} langName={langName} />
			{/* CTA (Call to Action) */}
			<CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
		</>
	);
}
