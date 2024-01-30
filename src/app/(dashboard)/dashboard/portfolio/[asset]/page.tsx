'use client'

import DeleteModal from '@/app/(dashboard)/_components/DeleteModal'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
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
	console.log('asset', asset)
	console.log('chosenAssets', chosenAssets)
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

					<div className='flex flex-wrap gap-3 py-5'>
						{chosenAssets &&
							chosenAssets.map((chosenAsset) => (
								<Card
									key={chosenAsset.Asset_ID}
									className={
										chosenAssets.length > 1
											? 'w-full md:flex-1'
											: 'w-full md:w-1/2'
									}
								>
									<CardHeader className='d-flex justify-between items-center flex-row'>
										<CardTitle>{chosenAsset.Category}</CardTitle>
										<DeleteModal itemToDelete='asset' />
									</CardHeader>
									<CardContent>
										{Object.keys(chosenAsset).map((value, index) => {
											if (index === 0 || index === 1) return
											return (
												<div
													key={index}
													className='flex justify-between py-4 gap-4 border border-0 border-b-2'
												>
													<b>{value}:</b> <div>{chosenAsset[value]}</div>
												</div>
											)
										})}
									</CardContent>
									<CardFooter className='flex justify-center'>
										<EditAsset />
									</CardFooter>
								</Card>
							))}
					</div>

					<div className='hover:bg-sky-500 p-3 rounded-full cursor-pointer transition m-auto w-fit'>
						<Plus size={50} />
					</div>
				</div>
			)}
		</>
	)
}

export default Asset
