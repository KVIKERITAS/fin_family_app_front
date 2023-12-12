import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Pencil } from 'lucide-react'
import { EditLeasingForm } from './EditLeasingsSchema'

const EditLeasingsModal = () => {
	return (
		<Dialog>
			<DialogTrigger className='p-2'>
				<Pencil />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='mb-2'>Edit leasing</DialogTitle>
					<DialogDescription>
						<EditLeasingForm />
						<br />
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default EditLeasingsModal
