import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const AddTransactionModal = () => {
	return (
		<Dialog>
			<DialogTrigger>
				<div className='bg-green-500 p-5 rounded-full cursor-pointer'>
					<Plus size={50} />
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='mb-2 text-center'>Add Income</DialogTitle>
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
								<SelectItem value='food'>Salary</SelectItem>
								<SelectItem value='bills'>Bribes</SelectItem>
							</SelectContent>
						</Select>
						<Textarea placeholder='Description' />
						<Button className='bg-green-500 hover:bg-green-600'>
							Add Income
						</Button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default AddTransactionModal