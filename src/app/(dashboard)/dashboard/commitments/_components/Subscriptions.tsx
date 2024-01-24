import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Payment, columns } from './Columns'
import { DataTable } from './DataTable'
import { SubscriptionForm } from './SubscriptionSchema'

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: '728ed52f',
			amount: 26,
			subscription: 'Netflix',
			date: new Date(),
		},
		{
			id: '728ed52f',
			amount: 10,
			subscription: 'Hulu',
			date: new Date(),
		},
		{
			id: '728ed52f',
			amount: 5,
			subscription: 'Youtube Premium',
			date: new Date(),
		},
		{
			id: '728ed52f',
			amount: 36,
			subscription: 'Tele2',
			date: new Date(),
		},
		{
			id: '728ed52f',
			amount: 25,
			subscription: 'Bite',
			date: new Date(),
		},
	]
}

export default async function Subscriptions() {
	const data = await getData()
	return (
		<div>
			<Tabs defaultValue='subscriptions' className='p-2'>
				<TabsList>
					<TabsTrigger value='subscriptions'>
						Your subscription plans
					</TabsTrigger>
					<TabsTrigger value='add-subscription' className='font-bold'>
						+ Add new
					</TabsTrigger>
				</TabsList>
				<TabsContent value='subscriptions'>
					<ScrollArea className='w-full rounded-md'>
						<DataTable columns={columns} data={data} />
					</ScrollArea>
				</TabsContent>
				<TabsContent value='add-subscription'>
					<ScrollArea className='w-full rounded-md border p-2'>
						<SubscriptionForm />
					</ScrollArea>
				</TabsContent>
			</Tabs>
		</div>
	)
}
