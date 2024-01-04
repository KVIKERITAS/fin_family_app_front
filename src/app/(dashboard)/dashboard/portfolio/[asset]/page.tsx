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
import { TAsset, assets } from '../data/assetData'

function Asset() {
	const router = useRouter()
	const params = useParams()
	const [asset, setAsset] = useState<TAsset>()

	useEffect(() => {
		// code to fetch info from backend using params

		let findAsset = assets.find((asset) => asset.id === Number(params.asset))
		if (findAsset) setAsset(findAsset)
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
						{asset.risk}
					</div>
					<Table className='my-5'>
						<TableHeader>
							<TableRow>
								<TableHead className='w-[100px]'>Category</TableHead>
								<TableHead className='text-right'>Amount</TableHead>
								<TableHead></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className='font-medium'>
									{asset.description[0]}
								</TableCell>
								<TableCell className='text-right'>$250.00</TableCell>
								<TableCell>
									{' '}
									<EditAsset />
									<DeleteModal itemToDelete='asset' />
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='font-medium'>
									{asset.description[0]}
								</TableCell>
								<TableCell className='text-right'>$250.00</TableCell>
								<TableCell className='w-1/6'>
									{' '}
									<EditAsset />
									<DeleteModal itemToDelete='asset' />
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									colSpan={3}
									className='text-gray-300 hover:text-gray-500'
								>
									<Plus />
								</TableCell>
							</TableRow>
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell colSpan={2}>Total</TableCell>
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
