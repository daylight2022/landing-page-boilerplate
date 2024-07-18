import { TwitterX } from '@/components/scoial-icons/icons';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';
import { WALL_OF_LOVE } from '@/config/wallOfLove';

const WallOfLove = ({ id, locale }: { id: string; locale: any }) => {
	return (
		<section id={id} className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[88%]">
			<div className="flex flex-col text-center max-w-xl gap-4">
				<h2 className="text-center text-white">
					<RoughNotation type="highlight" show={true} color="#2563EB">
						{locale.title}
					</RoughNotation>
				</h2>
				<p className="text-large text-default-500">
					{/* Don't take our word for it. Here's what they have to say. */}
					{locale.description1}{' '}
					<Link
						href={siteConfig.authors[0].twitter as string}
						target="_blank"
						rel="noopener noreferrer nofollow"
						className="text-primary underline">
						{locale.description2}
					</Link>
					{locale.description3}
				</p>
			</div>
			<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 relative transition-all">
				{WALL_OF_LOVE?.map((testimonial, index) => (
					<div className="mb-4 z-0 break-inside-avoid-column" key={index}>
						<div className="border border-slate-800 rounded-lg p-4 flex flex-col items-start gap-3 h-fit">
							<div className="flex items-start justify-between w-full">
								<div className="flex items-center gap-2">
									<Image
										src={testimonial.user.image}
										alt="maker"
										height={40}
										width={40}
										className="w-12 h-12 rounded-full object-cover object-top"></Image>
									<div className="flex flex-col items-center">
										<p className="font-bold">{testimonial.user.name}</p>
										<p className="dark:text-zinc-400">@{testimonial.user.username}</p>
									</div>
								</div>
								<Link
									href={`https://twitter.com/${testimonial.user.username}`}
									target="_blank"
									rel="noopener noreferrer nofollow">
									<TwitterX className="dark:text-zinc-200 text-[14px]" />
								</Link>
							</div>
							<p className="dark:text-zinc-200 text-[14px]">{testimonial.content}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default WallOfLove;
