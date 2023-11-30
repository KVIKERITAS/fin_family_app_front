import {
	LineChart,
	LocateFixed,
	LucideProps,
	Wallet,
	Warehouse,
} from 'lucide-react'
import { ForwardRefExoticComponent } from 'react'
import SingleAssetCard from './_components/SingleAssetCard'

export type TAsset = {
	name: string
	logo: ForwardRefExoticComponent<LucideProps>
}

const Portfolio = () => {
	const assets: TAsset[] = [
		{
			name: 'Cash',
			logo: Wallet,
		},
		{
			name: 'Equities',
			logo: LineChart,
		},
		{
			name: 'Fixed Income',
			logo: LocateFixed,
		},
		{
			name: 'Alternative Investments',
			logo: Warehouse,
		},
	]

	return (
		<div className='min-h-screen flex flex-col mt-10 items-center  '>
			<h1 className=' text-3xl sm:text-4xl lg:text-5xl text-center font-mono'>
				Assets Classes
			</h1>
			<h4 className='mt-5 text-lg sm:text-xl lg:text-2xl font-sans text-center'>
				Diversifying your portfolio by investing in different types of assets
				can help protect you from volatility.
			</h4>
			<div className='flex flex-wrap justify-center m-5 sm:m-10'>
				{assets.map((asset: TAsset, index) => (
					<SingleAssetCard key={index} asset={asset} />
				))}
			</div>
		</div>
	)
}

export default Portfolio
