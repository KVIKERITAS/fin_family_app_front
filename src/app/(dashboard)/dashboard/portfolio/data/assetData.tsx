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
	categories: string[]
}
export type TAssetProp = {
	asset: TAsset
}
export type TCashAsset = {
	'Asset_ID': number // relationship to Cash ID
	'Category': string
	'Currency': string
	'Location': string
	'Date (term ends)': Date | null
	'Interest rate (%)': number | null
	'Amount': number
}
export type TEquitiesAsset = {
	'Asset_ID': number // relationship to Equities ID
	'Category': string
	'Name': string
	'Initial Cost': number
	'Currency': string
	'Current Value': number
	'Net gain': number
	'ROI': number
}
export type TFixedIncomeAsset = {
	'Asset_ID': number // relationship to Fixed Income ID
	'Category': string
	'Name': string
	'Date (term ends)': string // needs to be a Date
	'Interest rate (%)': number
	'Amount': number
	'Currency': string
}
export type TAltInvAsset = {
	'Asset_ID': number // relationship to Alternative Investment ID
	'Category': string
	'Description': string | null
	'Paid Price': number
	'Currency': string
	'Quantity': number | null
	'Unit': string | null
	'Karat %': number | null
	'Current Price/ Estimate Value': number | null
	'ROI': number
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
		categories: [
			'Category',
			'Currency',
			'Location',
			'Date (term ends)',
			'Interest rate (%)',
			'Amount',
		],
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
		categories: [
			'Category',
			'Name',
			'Initial Cost',
			'Currency',
			'Current Value',
			'Net gain',
			'ROI',
		],
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
		categories: [
			'Category',
			'Name',
			'Date (term ends)',
			'Interest rate (%)',
			'Amount',
			'Currency',
		],
	},
	{
		id: 4,
		name: 'Alternative Investments',
		logo: Warehouse,
		description: ['Real Estate', 'Gold', 'Silver', 'Cryptocurrency'],
		risk: 'Varies',
		value: 1000,
		fullDescription:
			" Alternative investments is a catchall asset class for anything that's not cash, equities, or fixed income. Real estate, precious metals and cryptocurrency are alternative investments.",
		categories: [
			'Category',
			'Description',
			'Paid Price',
			'Currency',
			'Quantity',
			'Unit',
			'Karat (%)',
			'Estimate Value',
			'ROI',
		],
	},
]
export const CashAssets: TCashAsset[] = [
	{
		'Asset_ID': 1, // relationship to Cash ID
		'Category': 'Cash in bank',
		'Currency': 'Eur',
		'Location': 'SEB',
		'Date (term ends)': null,
		'Interest rate (%)': null,
		'Amount': 1000,
	},
	{
		'Asset_ID': 1, // relationship to Cash ID
		'Category': 'Cash',
		'Currency': 'Eur',
		'Location': 'Vault',
		'Date (term ends)': null,
		'Interest rate (%)': null,
		'Amount': 1000,
	},
]
export const EquitiesAssets: TEquitiesAsset[] = [
	{
		'Asset_ID': 2, // relationship to Equities ID
		'Category': 'Stock',
		'Name': 'T2',
		'Initial Cost': 10.5,
		'Currency': 'USD',
		'Current Value': 12.5,
		'Net gain': 11,
		'ROI': 7,
	},
]
export const FixedIncomeAssets: TFixedIncomeAsset[] = [
	{
		'Asset_ID': 3, // relationship to Fixed Income ID
		'Category': 'Bonds',
		'Name': 'Rich ass company',
		'Date (term ends)': '2026-01-16',
		'Interest rate (%)': 15,
		'Amount': 5000,
		'Currency': 'EUR',
	},
]
export const AltInvestAssets: TAltInvAsset[] = [
	{
		'Asset_ID': 4, // relationship to Alternative Investment ID
		'Category': 'Real Estate',
		'Description': 'Valakampiai',
		'Paid Price': 100000,
		'Currency': 'EUR',
		'Quantity': null,
		'Unit': null,
		'Karat %': null,
		'Current Price/ Estimate Value': 200000,
		'ROI': 200,
	},
	{
		'Asset_ID': 4, // relationship to Alternative Investment ID
		'Category': 'Gold',
		'Description': null,
		'Paid Price': 500,
		'Currency': 'EUR',
		'Quantity': 10,
		'Unit': 'g',
		'Karat %': 100,
		'Current Price/ Estimate Value': 60,
		'ROI': 50,
	},
]
