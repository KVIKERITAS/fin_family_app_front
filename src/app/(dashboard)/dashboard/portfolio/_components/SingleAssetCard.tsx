import { TAsset } from '../page'

type TAssetProp = {
	asset: TAsset
}

const SingleAsset = ({ asset }: TAssetProp) => {
	return (
		<div className='flex flex-col items-center mx-5 sm:mx-10 my-5'>
			<asset.logo className='w-12 h-12 sm:w-20 sm:h-20' />
			<p className='text-sm sm:text-lg my-2'>{asset.name}</p>
		</div>
	)
}
export default SingleAsset
