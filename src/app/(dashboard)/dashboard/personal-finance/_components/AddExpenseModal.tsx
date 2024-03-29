'use client'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Minus } from 'lucide-react'
import { useState } from 'react'

const AddExpenseModal = () => {
	const [sum, setSum] = useState(0)
	const [category, setCategory] = useState('')
	const [description, setDescription] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	async function addIncome() {
		if (sum <= 0) {
			setErrorMessage('Sum should be more than 0')
			return
		}
		if (category === '') {
			setErrorMessage('Choose category')
			return
		}
		setErrorMessage('')
		const transaction = {
			sum: sum,
			type: 'expense',
			category: category,
			description: description,
		}

		console.log(transaction)

		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(transaction),
		}
		try {
			const res = await fetch(
				'http://localhost:8080/api/finances/createTransaction',
				options,
			)
			const data = await res.json()
			console.log('data', data)
		} catch (err) {
			setErrorMessage('Server Error')
		}
	}
	return (
		<Dialog>
			<DialogTrigger>
				<div className='bg-[#f57b42] p-5 rounded-full cursor-pointer'>
					<Minus size={50} />
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='mb-2 text-center'>Add Expense</DialogTitle>
					<DialogDescription className='flex flex-col gap-4'>
						<Input
							type='number'
							className='w-full text-2xl h-12'
							placeholder='Sum'
							value={sum}
							onChange={(e) => setSum(Number(e.target.value))}
						/>
						<Select onValueChange={(value) => setCategory(value)}>
							<SelectTrigger className='w-full'>
								<SelectValue placeholder='Category' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='Food'>Food</SelectItem>
								<SelectItem value='Bills & Payments'>
									Bills & Payments
								</SelectItem>
							</SelectContent>
						</Select>
						<Textarea
							placeholder='Description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						<span className='text-center text-red-500'>{errorMessage}</span>
						<Button
							className='bg-[#f57b42] hover:bg-red-600'
							onClick={addIncome}
						>
							Add Expense
						</Button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default AddExpenseModal
