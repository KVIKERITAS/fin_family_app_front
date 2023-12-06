import Image from 'next/image'

import { Payment, columns } from './_components/Columns'
import { DataTable } from './_components/DataTable'

import { Leasing, columnsTwo } from './_components/ColumnsTwo'

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

import { LeasingForm } from './_components/LeasingSchema'
import { SubscriptionForm } from './_components/SubscriptionSchema'

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

export default async function Commitments() {
	const data = await getData()
	const dataTwo = await getDataTwo()
	return (
		<div>
			<h1 className='text-lg text-center text-blue-900'>
				User username&#39;s commitment page
			</h1>
			<div className='flex justify-center flex-wrap mt-7 gap-6'>
				<div className='flex-1'>
					<h2>User&#39;s Subscriptions (TV/Streaming Services and etc.)</h2>
					<div className='h-[350px] w-[500px]'>
						<Image
							src='https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601_960_720.png'
							width={350}
							height={350}
							alt='tv image'
							className='object-contain h-full max-w-full'
						/>
					</div>
					<div className='sub-popovers flex gap-4'>
						<Popover>
							<PopoverTrigger>Click here for details</PopoverTrigger>
							<PopoverContent>
								{/* REMINDER TO CHECK HOW TO FORMATE DATE TO YYYY/MM/DD */}
								<DataTable columns={columns} data={data} />
							</PopoverContent>
						</Popover>
						<Popover>
							<PopoverTrigger>Add new subscription</PopoverTrigger>
							<PopoverContent>
								<SubscriptionForm />
							</PopoverContent>
						</Popover>
					</div>
				</div>
				<div className='flex-1'>
					<h2>User&#39;s Leasing (car&#39;s, house&#39;s and etc.)</h2>
					<div className='h-[350px] w-[500px]'>
						<Image
							src='https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663_640.png'
							height={350}
							width={350}
							alt='cars'
							className='object-contain h-auto max-w-full'
						/>
					</div>
					<div className='leasing-popover flex gap-4'>
						<Popover>
							<PopoverTrigger>Click here for details</PopoverTrigger>
							<PopoverContent>
								{/* REMINDER TO CHECK HOW TO FORMATE DATE TO YYYY/MM/DD */}
								<DataTable columns={columnsTwo} data={dataTwo} />
							</PopoverContent>
						</Popover>
						<Popover>
							<PopoverTrigger>Add new loan/leasing</PopoverTrigger>
							<PopoverContent>
								<LeasingForm />
							</PopoverContent>
						</Popover>
					</div>
				</div>
			</div>
		</div>
	)
}
