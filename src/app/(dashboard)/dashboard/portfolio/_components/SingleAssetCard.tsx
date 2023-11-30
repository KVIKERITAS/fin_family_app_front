import { TAsset } from '../page'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type TAssetProp = {
	asset: TAsset
}

const SingleAsset = ({ asset }: TAssetProp) => {
	return (
		<div className='flex flex-col items-center gap-5'>
			<Card className='w-44 h-72'>
				<CardHeader>
					<CardTitle>
						<asset.logo className='w-12 h-12 sm:w-20 sm:h-20 m-auto' />
						<p className='text-center text-sm sm:text-lg my-2'>{asset.name}</p>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<ul className='list-disc list-inside'>
						{asset.description.map((listItem, index) => (
							<li className='text-xs' key={index}>
								{listItem}
							</li>
						))}
					</ul>
				</CardContent>
			</Card>
			<h4>{asset.value} EUR</h4>
		</div>
	)
}
export default SingleAsset
