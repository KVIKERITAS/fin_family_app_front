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
	description: string[]
	value: number
}

const Portfolio = () => {
	const assets: TAsset[] = [
		{
			name: 'Cash',
			logo: Wallet,
			description: ['Cash', 'Cash in bank', 'Deposit'],
			value: 1000,
		},
		{
			name: 'Equities',
			logo: LineChart,
			description: ['Stocks', 'Dividend payments'],
			value: 1000,
		},
		{
			name: 'Fixed Income',
			logo: LocateFixed,
			description: ['Bonds'],
			value: 1000,
		},
		{
			name: 'Alternative Investments',
			logo: Warehouse,
			description: ['Real Estate', 'Gold', 'Cryptocurrency'],
			value: 1000,
		},
	]

	return (
		<div className='w-full min-h-screen flex flex-col mt-10 items-center gap-5 '>
			<h1 className=' text-3xl sm:text-4xl lg:text-5xl text-center font-mono'>
				Assets Classes vgefrtshsj
			</h1>
			<h4 className='mt-5 text-lg sm:text-xl lg:text-2xl font-sans text-center'>
				Diversifying your portfolio by investing in different types of assets
				can help protect you from volatility.
			</h4>
			<div className='w-full flex flex-wrap justify-center gap-5'>
				{assets.map((asset: TAsset, index) => (
					<SingleAssetCard key={index} asset={asset} />
				))}
			</div>
		</div>
	)
}

export default Portfolio
