'use client'

import { ColumnDef } from '@tanstack/react-table'

import DeleteModal from '@/app/(dashboard)/_components/DeleteModal'
import EditSubsModal from './EditSubsModal'
export type Payment = {
	id: string
	amount: number
	subscription: string
	date: Date
}

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: 'date',
		header: 'Date',
		cell: ({ row }) => {
			const date = new Date()
			const formattedDate = date.toLocaleDateString()
			return <div>{formattedDate}</div>
		},
	},
	{
		accessorKey: 'subscription',
		header: 'Subscription',
	},
	{
		accessorKey: 'amount',
		header: () => <div className='text-right'>Amount per month</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue('amount'))
			const formatted = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'EUR',
			}).format(amount)

			return <div className='text-right font-medium'>{formatted}</div>
		},
	},
	{
		accessorKey: 'action',
		header: '',
		cell: ({ row }) => {
			return (
				<div className='flex items-center justify-center'>
					<EditSubsModal />
				</div>
			)
		},
	},
	{
		accessorKey: 'delete',
		header: '',
		cell: ({ row }) => {
			return (
				<DeleteModal itemToDelete='subscription(s)' />
			)
		},
	},
]
