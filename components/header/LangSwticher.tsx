'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useParams, useRouter } from 'next/navigation';
import { defaultLocale, localeNames } from '@/lib/i18n';

export const LangSwticher = () => {
	const params = useParams();
	const lang = params.lang;

	let langName = lang && lang[0] !== 'index' ? lang[0] : defaultLocale;
	const router = useRouter();

	const handleSwtchLanguage = (lang: string) => {
		if (lang === defaultLocale) {
			router.push(`/`);
			return;
		}
		router.push(`/${lang}`);
	};
	return (
		<Select value={langName} onValueChange={handleSwtchLanguage}>
			<SelectTrigger className="w-fit">
				<SelectValue placeholder="Language" />
			</SelectTrigger>
			<SelectContent>
				{Object.keys(localeNames).map((locale: string) => {
					const name = localeNames[locale];
					return (
						<SelectItem key={locale} value={locale}>
							{name}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
};
