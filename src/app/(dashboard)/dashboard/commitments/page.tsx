import Image from 'next/image'

import { Payment, columns } from './_components/Columns'
import { DataTable } from './_components/DataTable'

import { Leasing, columnsTwo } from './_components/ColumnsTwo'

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: '728ed52f',
			amount: 26,
			status: 'pending',
			provider: 'Netflix',
		},
		{
			id: '728ed52f',
			amount: 10,
			status: 'success',
			provider: 'Hulu',
		},
		{
			id: '728ed52f',
			amount: 5,
			status: 'failed',
			provider: 'Youtube Premium',
		},
		{
			id: '728ed52f',
			amount: 36,
			status: 'pending',
			provider: 'Tele2',
		},
		{
			id: '728ed52f',
			amount: 25,
			status: 'pending',
			provider: 'Bite',
		},
	]
}

async function getDataTwo(): Promise<Leasing[]> {
	return [
		{
			id: '464ok85f',
			amount: 200,
			status: 'pending',
			type: 'House',
		},
		{
			id: '464ok85f',
			amount: 100,
			status: 'pending',
			type: 'Car',
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
			<div className='flex flex-wrap mt-7 gap-4'>
				<div>
					<h2>User&#39;s Subscriptions (TV/Streaming Services and etc.)</h2>
					<div className='h-[350px] w-[350px]'>
						<Image
							src='https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601_960_720.png'
							width={450}
							height={450}
							alt='tv image'
							className='object-contain h-full max-w-full'
						/>
					</div>

					<Popover>
						<PopoverTrigger>Click here for details</PopoverTrigger>
						<PopoverContent>
							<DataTable columns={columns} data={data} />
						</PopoverContent>
					</Popover>
				</div>
				<div>
					<h2>User&#39;s Leasing (car&#39;s, house&#39;s and etc.)</h2>
					<div className='h-[350px] w-[350px]'>
						<Image
							src='https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663_640.png'
							height={350}
							width={450}
							alt='cars'
							className='object-contain h-auto max-w-full'
						/>
					</div>
					<Popover>
						<PopoverTrigger>Click here for details</PopoverTrigger>
						<PopoverContent>
							<DataTable columns={columnsTwo} data={dataTwo} />
						</PopoverContent>
					</Popover>
				</div>
				<div>
					<h2>User&#39;s Debts (study, apartment and etc.)</h2>
					<div className='h-[350px] w-[350px]'>
						<Image
							src='https://cdn.pixabay.com/photo/2018/03/01/17/36/room-3191241_640.jpg'
							height={350}
							width={450}
							alt='apartments'
							className='object-contain h-auto max-w-full'
						/>
					</div>
					<Popover>
						<PopoverTrigger>Click here for details</PopoverTrigger>
						<PopoverContent>Place content for the popover here.</PopoverContent>
					</Popover>
				</div>
			</div>
		</div>
	)
}
