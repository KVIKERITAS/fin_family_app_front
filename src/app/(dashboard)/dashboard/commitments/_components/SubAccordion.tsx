import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

import Subscriptions from './Subscriptions'

export default async function SubAccordion() {
	return (
		<div>
			<Accordion type='single' collapsible>
				<AccordionItem value='item-1'>
					<AccordionTrigger>(Expand for more info)</AccordionTrigger>
					<AccordionContent>
						<Subscriptions />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
