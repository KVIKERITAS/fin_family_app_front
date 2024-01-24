import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Pencil } from 'lucide-react'
import { EditSubscriptionForm } from './EditSubsFormSchema'

const EditSubsModal = () => {
	return (
		<Dialog>
			<DialogTrigger>
				<Pencil />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='mb-2'>Edit subscription</DialogTitle>
					<DialogDescription>
						<EditSubscriptionForm />
						<br />
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default EditSubsModal
