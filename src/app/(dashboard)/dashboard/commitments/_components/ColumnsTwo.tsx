'use client'

import { ColumnDef } from '@tanstack/react-table'

import DeleteModal from '@/app/(dashboard)/_components/DeleteModal'
import EditLeasingsModal from './EditLeasingsModal'

export type Leasing = {
	id: string
	amount: number
	type: string
	date: Date
}

export const columnsTwo: ColumnDef<Leasing>[] = [
	{
		accessorKey: 'date',
		header: 'Date',
		cell: ({ row }) => {
			const date = new Date(row.original.date)
			const formattedDate = date.toLocaleDateString()
			return <div>{formattedDate}</div>
		},
	},
	{
		accessorKey: 'type',
		header: 'Type',
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
					<EditLeasingsModal />
				</div>
			)
		},
	},
	{
		accessorKey: 'delete',
		header: '',
		cell: ({ row }) => {
			return (
				<div className="flex justify-center">
					<div className='bg-red-600 hover:bg-red-700 text-amber-50 rounded'>
						<DeleteModal itemToDelete='subscription(s)' />
					</div>
				</div>
			)
		},
	},
]
