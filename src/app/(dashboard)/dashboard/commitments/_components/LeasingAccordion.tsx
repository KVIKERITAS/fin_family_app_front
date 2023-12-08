import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import Leasings from './Leasings'

export default async function LeasingAccordion() {
	return (
		<div>
			<Accordion type='single' collapsible>
				<AccordionItem value='item-1'>
					<AccordionTrigger>(Expand for more info)</AccordionTrigger>
					<AccordionContent>
						<Leasings />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
