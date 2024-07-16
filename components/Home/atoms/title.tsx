import { RoughNotation } from 'react-rough-notation';

const Title = ({ locale }: { locale: { title: string; description: string } }) => {
	return (
		<div className="flex flex-col text-center max-w-xl gap-4">
			<h2 className="text-center text-white">
				<RoughNotation type="highlight" show color="#2563EB">
					{locale.title}
				</RoughNotation>
			</h2>
			<p className="text-lg text-slate-500">{locale.description}</p>
		</div>
	);
};

export default Title;
