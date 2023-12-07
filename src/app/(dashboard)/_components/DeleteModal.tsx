import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

const DeleteModal = () => {
	return (
		<Dialog>
			<DialogTrigger className="px-2"><Trash2 /></DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="mb-2">Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your shit.
						<div className="mt-4 flex gap-2 justify-center">
							<Button variant='outline'>Cancel</Button>
							<Button>Delete</Button>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default DeleteModal