import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Minus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const AddExpenseModal = () => {
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
						<Button className='bg-[#f57b42] hover:bg-red-600'>
							Add Expense
						</Button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default AddExpenseModal