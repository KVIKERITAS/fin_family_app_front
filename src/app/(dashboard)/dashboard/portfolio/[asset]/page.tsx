'use client'

import DeleteModal from '@/app/(dashboard)/_components/DeleteModal'
import { Button } from '@/components/ui/button'
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { ArrowLeft, Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import EditAsset from '../_components/EditAsset'
import {
	AltInvestAssets,
	CashAssets,
	EquitiesAssets,
	FixedIncomeAssets,
	TAltInvAsset,
	TAsset,
	TCashAsset,
	TEquitiesAsset,
	TFixedIncomeAsset,
	assets,
} from '../data/assetData'

function Asset() {
	const router = useRouter()
	const params = useParams()
	const [asset, setAsset] = useState<TAsset>()
	let [chosenAssets, setChosenAssets] = useState<
		| TCashAsset[]
		| TEquitiesAsset[]
		| TFixedIncomeAsset[]
		| TAltInvAsset[]
		| null
	>()

	useEffect(() => {
		// code to fetch info from backend using params

		let findAsset = assets.find((asset) => asset.id === Number(params.asset))
		if (findAsset) setAsset(findAsset)
		if (params.asset === '1') setChosenAssets(CashAssets)
		if (params.asset === '2') setChosenAssets(EquitiesAssets)
		if (params.asset === '3') setChosenAssets(FixedIncomeAssets)
		if (params.asset === '4') setChosenAssets(AltInvestAssets)
	}, [])

	return (
		<>
			{asset && (
				<div className='w-full min-h-screen my-10 '>
					<ArrowLeft
						className='cursor-pointer hover:scale-125 transition'
						onClick={() => router.push('/dashboard/portfolio')}
					/>
					<div className='flex justify-between mt-5'>
						<p className=' text-3xl md:text-4xl '>{asset.name}</p>
						<Button>ADD NEW ASSET</Button>
					</div>
					<div className='mt-5 text-lg lg:text-base'>
						<b>WHAT IS IT? </b>
						{asset.fullDescription}
					</div>
					<div className='mt-5 text-lg lg:text-base'>
						<b>RISK OF LOSS: </b>
						<span
							className={` ${
								asset.risk === 'High'
									? 'text-red-500'
									: asset.risk === 'Low' || asset.risk === 'Very low'
									? 'text-green-500'
									: 'text-blue-500'
							}`}
						>
							{' '}
							{asset.risk}
						</span>
					</div>

					<Table className='my-5'>
						<TableHeader>
							<TableRow>
								{asset.categories.map((category, index) => (
									<TableHead key={index} className='w-[100px]'>
										{category}
									</TableHead>
								))}
								<TableHead></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{chosenAssets ? (
								chosenAssets.map((chosenAsset, index) => (
									<TableRow key={index}>
										{Object.keys(chosenAsset).map((value, index) => {
											if (index === 0) return
											return (
												<TableCell key={index}>{chosenAsset[value]}</TableCell>
											)
										})}
										<TableCell>
											{' '}
											<EditAsset />
											<DeleteModal itemToDelete='asset' />
										</TableCell>
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell className='font-medium'>
										{asset.description[0]}
									</TableCell>

									<TableCell>$250.00</TableCell>
									<TableCell>$250.00</TableCell>
									<TableCell>$250.00</TableCell>
									<TableCell>$250.00</TableCell>
									<TableCell>$250.00</TableCell>
									<TableCell>
										{' '}
										<EditAsset />
										<DeleteModal itemToDelete='asset' />
									</TableCell>
								</TableRow>
							)}

							<TableRow>
								<TableCell
									colSpan={asset.categories.length + 1}
									className='text-gray-300 hover:text-gray-500'
								>
									<Plus />
								</TableCell>
							</TableRow>
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell colSpan={asset.categories.length}>Total</TableCell>
								<TableCell className='text-right'>$2,500.00</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
					<div className='hover:bg-sky-500 p-3 rounded-full cursor-pointer transition m-auto w-fit'>
						<Plus size={50} />
					</div>
				</div>
			)}
		</>
	)
}

export default Asset
