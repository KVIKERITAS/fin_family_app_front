'use client'
import { LucideProps, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

type transactionTypeProps = {
	transactionType: string
	setTransactionType: (newType: string) => void
}

const AddTransactionModal = ({transactionType, setTransactionType} : transactionTypeProps) => {
	return (
		<div className='absolute left-0 top-0 w-full h-full flex items-center justify-center'>
			<div className='bg-gray-50 p-5 border rounded flex flex-col gap-4'>
				<div className='flex justify-end'>
					<X className='cursor-pointer' onClick={() => setTransactionType('')} />
				</div>
				<Input
					type='number'
					className='w-full text-2xl h-12'
					placeholder='Sum'
				/>
				<Select>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Category' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='food'>Food</SelectItem>
						<SelectItem value='bills'>Bills & Payments</SelectItem>
					</SelectContent>
				</Select>
				<Textarea placeholder='Description' />
				{transactionType === 'income' ?
					<Button
						className='bg-green-500 hover:bg-green-600'
						onClick={() => setTransactionType('')}
					>
						Add Income
					</Button> :
					<Button
						className='bg-[#f57b42] hover:bg-red-600'
						onClick={() => setTransactionType('')}
					>
						Add Expense
					</Button>
				}
			</div>
		</div>
	)
}

export default AddTransactionModal