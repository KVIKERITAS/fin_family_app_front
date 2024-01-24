import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Leasing, columnsTwo } from './ColumnsTwo'
import { DataTable } from './DataTable'
import { LeasingForm } from './LeasingSchema'

async function getDataTwo(): Promise<Leasing[]> {
	return [
		{
			id: '464ok85f',
			amount: 200,
			type: 'House',
			date: new Date(),
		},
		{
			id: '464ok85f',
			amount: 100,
			type: 'Car',
			date: new Date(),
		},
	]
}

export default async function Leasings() {
	const dataTwo = await getDataTwo()
	return (
		<div>
			<Tabs defaultValue='leasing' className='p-2'>
				<TabsList>
					<TabsTrigger value='leasing'>Your current leasings</TabsTrigger>
					<TabsTrigger value='add-leasing' className='font-bold'>
						+ Add new
					</TabsTrigger>
				</TabsList>
				<TabsContent value='leasing'>
					<ScrollArea className='w-full rounded-md'>
						<DataTable columns={columnsTwo} data={dataTwo} />
					</ScrollArea>
				</TabsContent>
				<TabsContent value='add-leasing'>
					<ScrollArea className='w-full rounded-md border p-2'>
						<LeasingForm />
					</ScrollArea>
				</TabsContent>
			</Tabs>
		</div>
	)
}
