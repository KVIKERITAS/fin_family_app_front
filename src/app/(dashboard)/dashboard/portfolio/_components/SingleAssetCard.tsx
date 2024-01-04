import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { TAssetProp } from '../data/assetData'

const SingleAsset = ({ asset }: TAssetProp) => {
	const router = useRouter()
	const [isHovering, setIsHovering] = useState(false)

	const handleMouseOver = () => {
		setIsHovering(true)
	}

	const handleMouseOut = () => {
		setIsHovering(false)
	}
	const handleCardClick = () => {
		console.log(asset.id)
	}
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<div className='flex flex-col items-center gap-5 cursor-pointer'>
						<Card
							className='w-full md:w-44 h-auto md:h-80 flex md:flex-col items-center'
							onMouseOver={handleMouseOver}
							onMouseOut={handleMouseOut}
							onClick={() => router.push(`/dashboard/portfolio/${asset.id}`)}
						>
							<CardHeader className='flex-1'>
								<CardTitle>
									<asset.logo className='w-12 h-12 md:w-20 md:h-20 m-auto' />
									<p className='text-center text-sm sm:text-lg my-2'>
										{asset.name}
									</p>
								</CardTitle>
							</CardHeader>
							<CardContent className='flex-1'>
								<ul className='list-disc list-inside text-left w-fit m-auto'>
									{asset.description.map((listItem, index) => (
										<li className='text-xs' key={index}>
											{listItem}
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter className='hidden md:block h-auto text-end'>
								{isHovering && (
									<p className='hidden md:block m-auto font-bold'>LEARN MORE</p>
								)}
							</CardFooter>
						</Card>
					</div>
				</TooltipTrigger>
				<TooltipContent className='text-center'>
					<p className='font-bold'>RISK OF LOSS: {asset.risk}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
export default SingleAsset
