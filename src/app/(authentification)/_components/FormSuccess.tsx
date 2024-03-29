import { CheckCircle } from 'lucide-react'

type TFormSuccessProps = {
	message?: string
}

export const FormSuccess = ({ message }: TFormSuccessProps) => {
	if (!message) return null

	return (
		<div className='bg-emerald-500/10 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
			<CheckCircle className='h-4 w-4' />
			<p>{message}</p>
		</div>
	)
}
