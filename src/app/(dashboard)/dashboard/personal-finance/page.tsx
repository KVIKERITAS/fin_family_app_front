import { ArrowDown, ArrowUp, LucideProps, Utensils, Receipt, BadgeEuro, PlusCircle, MinusCircle, Circle } from 'lucide-react'
import { ForwardRefExoticComponent } from 'react'
import SingleTransactionEntry from '@/app/(dashboard)/dashboard/personal-finance/_components/SingleTransactionEntry'
import AddIncomeModal from '@/app/(dashboard)/dashboard/personal-finance/_components/AddIncomeModal'
import AddExpenseModal from '@/app/(dashboard)/dashboard/personal-finance/_components/AddExpenseModal'

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
]

const Finance = () => {
	return (
		<div className='w-full h-[90vh] relative'>
			<div className='bg-blue-200 w-full text-center p-3 rounded'>
				<p className='text-2xl my-3'>Your Balance:</p>
				<p className='text-4xl my-3'>666 €</p>
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
			<div className='py-6'>
				<div className='flex w-full justify-between mb-3'>
					<p>Recent transactions:</p>
					<div className="flex gap-1">
						<span className='cursor-pointer hover:text-blue-600 hover:underline flex'>
							<Circle className="md:w-0" />
							<span className="w-0 overflow-hidden md:w-full">All</span>
						</span>
						<span>|</span>
						<span className='cursor-pointer hover:text-blue-600 hover:underline flex'>
							<PlusCircle className="md:w-0" />
							<span className="w-0 overflow-hidden md:w-full">Income</span>
						</span>
						<span>|</span>
						<span className='cursor-pointer hover:text-blue-600 hover:underline flex'>
							<MinusCircle className="md:w-0" />
							<span className="w-0 overflow-hidden md:w-full">Expense</span>
						</span>
					</div>
				</div>
				<div className='divide-y'>
					{transactions.map((transaction: TTransaction, index) => (
						<SingleTransactionEntry key={index} transaction={transaction}></SingleTransactionEntry>
					))}
				</div>
				<div className="w-full text-center font-bold underline cursor-pointer hover:text-blue-600">Load More</div>
			</div>
			<div className='flex gap-3 justify-center pb-5 pt-2'>
				<AddIncomeModal />
				<AddExpenseModal />
			</div>
		</div>
	)
}
export default Finance


