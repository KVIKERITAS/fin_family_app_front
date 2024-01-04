import React from 'react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

function EditAsset() {
	return (
		<Dialog>
			<DialogTrigger className='p-1 md:p-2'>
				<Pencil />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='mb-2 text-center'>Edit Asset</DialogTitle>
					<DialogDescription className='flex flex-col gap-4'>
						<Input
							type='number'
							className='w-full text-2xl h-12'
							placeholder='Amount'
						/>
						<Select>
							<SelectTrigger className='w-full'>
								<SelectValue placeholder='Category' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='food'>Category 1</SelectItem>
								<SelectItem value='bills'>Category 2</SelectItem>
							</SelectContent>
						</Select>
						<Textarea placeholder='Description' />
						<span className='mt-4 flex gap-2 justify-center'>
							<DialogClose>
								<Button variant='outline'>Cancel</Button>
							</DialogClose>
							<Button>Save</Button>
						</span>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default EditAsset
