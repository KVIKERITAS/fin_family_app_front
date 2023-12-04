import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const Goals = () => {
	return (
		<div className='w-full'>
			<div className='flex justify-end p-2 border-b'>
				<Button>Add goal</Button>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='w-1/2'>Goal</TableHead>
						<TableHead>Progress fdfsfsfsdfd fdfsdf</TableHead>
					</TableRow>
				</TableHeader>
			</Table>
			<Accordion className='w-full' type='single' collapsible>
				<AccordionItem value='item-1'>
					<AccordionTrigger>
						<div className='grid grid-cols-2 gap-4 w-full items-center'>
							<p className='flex justify-start px-4'>Buy new MacBook</p>
							<Progress value={50} className='w-[200px] px-4' />
						</div>
					</AccordionTrigger>
					<AccordionContent>Sub. goal 1.</AccordionContent>
					<AccordionContent>Sub. goal 2.</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
export default Goals
