'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';
import { PlusIcon } from 'lucide-react';
import Title from './atoms/title';

function triggerResizeEvent() {
	const event = new Event('resize');
	window.dispatchEvent(event);
}

const FQA = ({ id, locale }: { id: string; locale: any }) => {
	const FAQS = [
		{
			title: '什么是落地页？',
			content:
				'落地页是为市场营销或广告活动专门创建的独立网页。访问者在点击电子邮件中的链接、Google、Bing、YouTube、Facebook、Instagram、Twitter或网络上类似位置的广告后“降落”到该页面上。与通常具有多个目标并鼓励探索的网页不同，落地页设计有单一焦点或目标，称为行动号召（CTA）。',
		},
		{
			title: '我如何创建一个落地页？',
			content:
				'创建落地页可以分几个步骤完成：1) 选择一个适合你活动需求的落地页模板，或从头开始。2) 确定你的落地页目标和CTA。3) 编写吸引访问者采取行动的引人注目的内容。4) 加入与你信息相符的设计元素，如图片、视频和表单。5) 测试你的页面的可用性和移动响应性。6) 使用SEO最佳实践帮助你的页面被发现。7) 发布你的落地页，并监控其性能以根据需要进行调整。',
		},
		{
			title: '为什么落地页很重要？',
			content:
				'落地页对于任何营销策略都至关重要，因为它们提供了一个针对性的平台，用于将访问者转化为潜在客户或客户。与通用网站不同，落地页将访问者的注意力集中在单一优惠上，最小化分心并引导他们向特定行动发展。这种集中的方法可以显著提高你的营销活动的有效性，改善广告性能，并通过为他们提供他们正在寻找的信息或解决方案来增强总体用户体验。',
		},
		{
			title: '为什么选择我们的落地页模板？',
			content:
				'我们的落地页模板是免费的、开源的且功能强大，非常适合各种项目和市场营销活动。它允许你在不到一小时内创建一个落地页，简化了开发过程，同时也提供了高度的自定义性和响应性。',
		},
		{
			title: '使用这个模板我需要哪些技能？',
			content:
				'使用我们的落地页模板，你只需要基本的网页编辑技能。该模板的设计旨在让非技术用户轻松上手，同时为有经验的开发者提供高度的自定义能力。',
		},
		{
			title: '我如何开始使用落地页模板？',
			content: '开始非常简单。只需从我们的GitHub仓库下载源代码，根据需要编辑文本和图片，然后将其部署到你的服务器上。',
		},
		{
			title: '落地页模板支持响应式设计吗？',
			content: '是的，我们的落地页模板支持响应式设计，确保你的网页在桌面、平板或智能手机等各种设备上完美显示。',
		},
		{
			title: '我可以将这个模板用于商业项目吗？',
			content:
				'绝对可以。我们的模板是开源的，你可以将其用于任何类型的项目，包括商业用途。我们鼓励用户利用这个模板来创建和优化他们的在线项目。',
		},
		{
			title: '你们提供定制服务吗？',
			content: '我们接受落地页的定制开发服务。请通过电子邮件weijunext@gmail.com或Twitter @weijunext与我们联系。',
		},
		{
			title: '使用这个模板有任何限制吗？',
			content: '没有。你可以自由使用和修改这个模板。同时，我们鼓励开发者提交PR来共同帮助改进这个落地页模板。',
		},
		{
			title: '这个模板包括SEO优化功能吗？',
			content: '是的，我们的模板包含基本的SEO优化功能，帮助你的网页在搜索引擎中获得更好的排名。',
		},
		{
			title: '如果我在使用模板时遇到问题该怎么办？',
			content: '如果你在使用模板时遇到任何问题，请通过Twitter @weijunext 与我们联系。',
		},
	];

	return (
		<section id={id} className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
			<Title locale={locale}></Title>
			<Accordion
				fullWidth
				keepContentMounted
				className='gap-3'
				itemClasses={{
					base: 'px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50',
					title: 'font-medium',
					trigger: 'py-6',
					content: 'pt-0 pb-6 text-base text-default-500',
				}}
				// selectionMode="multiple"
				variant="splitted"
				onSelectionChange={triggerResizeEvent}>
				{FAQS?.map((item) => (
					<AccordionItem key={item.title} aria-label={item.title} indicator={<PlusIcon />} title={item.title}>
						{item.content}
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};

export default FQA;
