'use client'
import { ArrowDown, ArrowUp, LucideProps, Utensils, Receipt, BadgeEuro, Plus } from 'lucide-react'
import { ForwardRefExoticComponent, useState } from 'react'
import SingleTransactionEntry from '@/app/(dashboard)/dashboard/personal-finance/_components/SingleTransactionEntry'
import AddTransactionModal from '@/app/(dashboard)/dashboard/personal-finance/_components/AddTransactionModal'

export type TTransaction = {
	category: string
	logo: ForwardRefExoticComponent<LucideProps>
	description: string
	value: number
}
const transactions = [
	{
		category: 'Food',
		logo: Utensils,
		description: 'Nom nom nom',
		value: -50,
	},
	{
		category: 'Bills & Payments',
		logo: Receipt,
		description: '',
		value: -100,
	},
	{
		category: 'Income',
		logo: BadgeEuro,
		description: '',
		value: 1000,
	},
]

const	Finance = () => {
		const [transactionType, setTransactionType] = useState('')
		return (
			<div className='w-full p-3 h-[90vh] relative' >
				<div className='bg-blue-900 w-full text-center p-3 rounded'>
					<p className='text-accent text-2xl my-3'>Your Balance:</p>
					<p className='text-accent text-4xl my-3'>666 €</p>
					<div className='flex p-3 gap-3 flex-wrap'>
						<div className='flex-1 bg-green-500 py-5 pl-2 pr-4 rounded'>
							<div className='flex gap-2 items-center justify-center'>
								<ArrowUp size={50} />
								<div className='text-left'>
									<p className='font-bold'>Income:</p>
									<p className='font-bold'>420 €</p>
								</div>
							</div>
						</div>
						<div className='flex-1 bg-[#f57b42] py-5  pl-2 pr-4 rounded'>
							<div className='flex gap-2 items-center justify-center'>
								<ArrowDown size={50} />
								<div className='text-left'>
									<p className='font-bold'>Expenses:</p>
									<p className='font-bold'>69 €</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='p-6'>
					<div className='flex w-full justify-between mb-3'>
						<p>Recent transactions:</p>
						<p className='cursor-pointer hover:text-blue-600 hover:underline'>See all</p>
					</div>
					<div className='divide-y'>
						{transactions.map((transaction: TTransaction, index) => (
							<SingleTransactionEntry key={index} transaction={transaction}></SingleTransactionEntry>
						))}
					</div>
				</div>
				<div className='flex gap-3 justify-center p-5'>
					<div
						className='bg-green-500 p-5 rounded-full cursor-pointer'
						onClick={() => setTransactionType('income')}
					>
						<Plus size={50} />
					</div>
					<div
						className='bg-[#f57b42] p-5 rounded-full cursor-pointer'
						onClick={() => setTransactionType('expense')}
					>
						<Plus size={50} />
					</div>
				</div>
				{transactionType !== '' && <AddTransactionModal transactionType={transactionType} setTransactionType={setTransactionType} />}
			</div>
		)
	}
export default Finance


