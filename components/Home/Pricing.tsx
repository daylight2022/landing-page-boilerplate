import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { Link } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { RoughNotation } from 'react-rough-notation';

const pricing = [
	{
		key: 'free',
		title: 'Your call has been confirmed.',
		description: '1 hour ago',
		price: '免费',
		features: ['免费', '访问全部代码', '二次开发', 'MIT 许可证'],
		buttonText: '开始',
	},
	{
		key: 'customization',
		title: 'You have a new message!',
		description: '1 hour ago',
		price: '$199',
		features: ['访问全部代码', '二次开发', '更多风格样式', '一对一服务', '更精致的页面'],
		buttonText: '购买',
	},
];

const Pricing = ({ id, locale }: { id: string; locale: any }) => {
	return (
		<section className="flex flex-col justify-center items-center max-w-4xl pt-16">
			<div className="flex flex-col text-center max-w-xl">
				<h2 className="text-center text-white">
					<RoughNotation type="highlight" show color="#2563EB">
						{locale.title}
					</RoughNotation>
				</h2>
        <h3 className='my-2 text-4xl font-medium tracking-tight'>{locale.title2}</h3>
        <p className='my-4 text-lg text-slate-500'>{locale.description}</p>
			</div>
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 justify-items-center">
				{pricing?.map((p) => (
					<Card key={p.key} className="p-3 flex-1 w-[90%]">
						<CardHeader>
							<CardTitle>{p.title}</CardTitle>
							<CardDescription>{p.description}</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-4">
							<p></p>
							<ul>
								{p.features?.map((feature) => (
									<li key={feature} className="flex items-center gap-2">
										<FaCheck className="h-4 w-4 text-blue-500" />
										<p className="text-slate-500">{feature}</p>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Button className="w-full">{p.buttonText}</Button>
						</CardFooter>
					</Card>
				))}
			</div>
			<div className="flex py-2 justify-center">
				<p className="text-slate-400 text-center">
					{locale.doYouLike} {locale.follow}
				</p>
			</div>
		</section>
	);
};

export default Pricing;
