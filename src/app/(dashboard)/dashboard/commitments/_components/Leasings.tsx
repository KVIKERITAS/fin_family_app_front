import DeleteModal from '@/app/(dashboard)/_components/DeleteModal'
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

export default async function CLeasings() {
	const dataTwo = await getDataTwo()
	return (
		<div>
			<Tabs defaultValue='leasing' className='p-2'>
				<TabsList>
					<TabsTrigger value='leasing'>Your current leasings</TabsTrigger>
					<TabsTrigger value='add-leasing'>
						Add new subscription services
					</TabsTrigger>
				</TabsList>
				<TabsContent value='leasing'>
					<ScrollArea className='h-[300px] w-[100%] rounded-md border p-4'>
						<div className='bg-red-600 hover:bg-red-700 text-amber-50 mt-2 mb-2 w-10'>
							<DeleteModal itemToDelete='leasing(s)' />
						</div>
						<DataTable columns={columnsTwo} data={dataTwo} />
					</ScrollArea>
				</TabsContent>
				<TabsContent value='add-leasing'>
					<ScrollArea className='h-[300px] w-[100%] rounded-md border p-4'>
						<LeasingForm />
					</ScrollArea>
				</TabsContent>
			</Tabs>
		</div>
	)
}
