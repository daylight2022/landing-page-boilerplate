import { Button } from '@/components/ui/button';
import { RocketIcon } from 'lucide-react';
import Link from 'next/link';

const CTAButton = () => {
	return (
		<>
			<Link href="http://github.com/daylight2022/landing-page-boilerplate" rel="noopener noreferrer nofollow">
				<Button
					variant="default"
					className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
					aria-label="Get Boilerplate">
					<RocketIcon className="w-5 h-5" />
					CTAButton
				</Button>
			</Link>
		</>
	);
};

export default CTAButton;
