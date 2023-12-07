import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const EditTransaction = () => {
	return (
		<Dialog>
			<DialogTrigger className='px-2'><Pencil /></DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='mb-2 text-center'>Edit Transaction</DialogTitle>
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
						<span className='mt-4 flex gap-2 justify-center'>
							<Button variant='outline'>Cancel</Button>
							<Button>Save</Button>
						</span>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default EditTransaction