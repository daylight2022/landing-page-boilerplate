import CTAButton from './CTAButton';
import { RoughNotation } from 'react-rough-notation';

const CTA = ({ locale }: { locale: any }) => {
	return (
		<section className="flex flex-col items-center justify-center max-w-[88%] py-16 gap-12">
			<div className="flex flex-col text-center gap-4">
				<h2 className="text-center">{locale.title}</h2>
				<p className="text-lg text-slate-500">
					<RoughNotation type="box" color="#b71c1c" show={true}>
						{locale.description1}
					</RoughNotation>{' '}
					{locale.description2}{' '}
					<RoughNotation type="box" color="#b71c1c" show={true}>
						{locale.description3}
					</RoughNotation>{' '}
					{locale.description4}{' '}
					<RoughNotation type="box" color="#b71c1c" show={true}>
						{locale.description5}
					</RoughNotation>{' '}
					{locale.description6}{' '}
				</p>
			</div>

			<CTAButton></CTAButton>
		</section>
	);
};
export default CTA;
