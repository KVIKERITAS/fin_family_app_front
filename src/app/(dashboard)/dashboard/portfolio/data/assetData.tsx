import {
	LineChart,
	LocateFixed,
	LucideIcon,
	Wallet,
	Warehouse,
} from 'lucide-react'

export type TAsset = {
	id: number
	name: string
	logo: LucideIcon
	description: string[]
	risk: string
	value: number
	fullDescription: string
}
export type TAssetProp = {
	asset: TAsset
}

export const assets: TAsset[] = [
	{
		id: 1,
		name: 'Cash',
		logo: Wallet,
		description: ['Cash', 'Cash in bank', 'Deposit'],
		risk: 'Very low',
		value: 1000,
		fullDescription:
			'You know what cash is — the legal tender we use to buy goods and pay debts. Cash equivalents are investments that can easily be converted into cash. ',
	},
	{
		id: 2,
		name: 'Equities',
		logo: LineChart,
		description: ['Stocks', 'Dividend payments'],
		risk: 'High',
		value: 1000,
		fullDescription:
			"Equities are shares of ownership in a company, also known as stock. The value of equities can rise or fall based on the company's performance, investor demand, and other factors. Ideally, stocks increase in value over time, creating returns for investors. Some stocks also result in dividend payments.",
	},
	{
		id: 3,
		name: 'Fixed Income',
		logo: LocateFixed,
		description: ['Bonds'],
		risk: 'Low',
		value: 1000,
		fullDescription:
			'Fixed-income securities, or bonds, are loans that are split up into units and sold to investors. Investors provide the principal up front and then receive interest payments until the security matures. At maturity, investors are repaid the principal. The principal does not increase in value over time the way a stock would, but fixed-income securities should provide predictable income.',
	},
	{
		id: 4,
		name: 'Alternative Investments',
		logo: Warehouse,
		description: ['Real Estate', 'Gold', 'Cryptocurrency'],
		risk: 'Varies',
		value: 1000,
		fullDescription:
			" Alternative investments is a catchall asset class for anything that's not cash, equities, or fixed income. Real estate, precious metals and cryptocurrency are alternative investments.",
	},
]
