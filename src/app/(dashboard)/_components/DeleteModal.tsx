import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'
import {Trash2} from 'lucide-react'

const DeleteModal = ({ itemToDelete }: { itemToDelete: string }) => {
    return (
        <Dialog>
            <DialogTrigger className='p-2'><Trash2/></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='mb-2'>Are you sure you want to delete {itemToDelete}?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your selected {itemToDelete}.
                        <span className='mt-4 flex gap-2 justify-center'>
                            <DialogClose><Button variant='outline'>Cancel</Button></DialogClose>
							<Button className='bg-red-600 hover:bg-red-700'>Delete</Button>
						</span>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteModal