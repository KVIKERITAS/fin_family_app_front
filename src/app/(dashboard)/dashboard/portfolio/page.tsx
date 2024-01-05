'use client'

import SingleAssetCard from './_components/SingleAssetCard'
import { TAsset, assets } from './data/assetData'

const Portfolio = () => {
	return (
		<div className='w-full min-h-screen flex flex-col my-10 items-center gap-5 '>
			<p className=' text-3xl md:text-4xl text-center '>Asset Classes</p>
			<div className='flex flex-col gap-10 w-4/5'>
				<p className='mt-5 text-lg lg:text-xl text-center'>
					Diversifying your portfolio by investing in different types of assets
					can help protect you from volatility.
				</p>
				<div className='w-full flex flex-col md:flex-row flex-wrap justify-center md:justify-between gap-5'>
					{assets.map((asset: TAsset, index) => (
						<SingleAssetCard key={index} asset={asset} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Portfolio
