"use client"
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link, Spacer } from '@nextui-org/react';
import { siteConfig } from '@/config/site';
import { ALL_TIERS } from '@/config/tiers';
import { FaCheck } from 'react-icons/fa';
import { RoughNotation } from 'react-rough-notation';

const Pricing = ({ id, locale, langName }: { id: string; locale: any; langName: any }) => {
	const TIERS = ALL_TIERS[`TIERS_${langName.toUpperCase()}`];
	return (
		<section id={id} className="flex flex-col justify-center items-center max-w-4xl pt-16">
			<div className="flex flex-col text-center max-w-xl">
				<h2 className="text-center text-white">
					<RoughNotation type="highlight" show={true} color="#2563EB">
						{locale.title}
					</RoughNotation>
				</h2>
				<h3 className="text-4xl font-medium tracking-tight">{locale.title2}</h3>
				<Spacer y={4} />
				<p className="text-large text-default-500">{locale.description}</p>
			</div>
			<Spacer y={8} />
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 justify-items-center">
				{TIERS?.map((tier) => (
					<Card key={tier.key} className="p-3 flex-1 w-[90%]">
						<CardHeader className="flex flex-col items-start gap-2 pb-6">
							<h2 className="text-lg font-medium">{tier.title}</h2>
							<p className="text-medium text-slate-500">{tier.description}</p>
						</CardHeader>
						<Divider></Divider>
						<CardBody className="gap-8">
							<p className="flex items-baseline pt-2">
								<span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-2xl font-semibold leading-7 tracking-tight text-transparent">
									{tier.price}
								</span>
							</p>
							<ul>
								{tier.features?.map((feature) => (
									<li key={feature} className="flex items-center gap-2">
										<FaCheck className="text-blue-500" />
										<p className="text-slate-500">{feature}</p>
									</li>
								))}
							</ul>
						</CardBody>
						<CardFooter>
							<Button
								fullWidth
								as={Link}
								href={tier.href}
								color={tier.buttonColor}
								variant={tier.buttonVariant}
								target="_blank"
								rel="noopener noreferrer nofollow">
								{tier.buttonText}
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
			<Spacer y={12} />
			<div className="flex py-2">
				<p className="text-slate-400 text-center">
					{locale.doYouLike}{' '}
					<Link
						color="foreground"
						href={siteConfig.authors[0].twitter}
						underline="always"
						rel="noopener noreferrer nofollow">
						{locale.follow}
					</Link>
				</p>
			</div>
		</section>
	);
};

export default Pricing;
