'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export type Leasing = {
	id: string
	amount: number
	type: string
	date: Date
}

export const columnsTwo: ColumnDef<Leasing>[] = [
	{
		accessorKey: 'checkbox',
		header: '',
		cell: ({ row }) => {
			return (
				<div>
					<Checkbox />
				</div>
			)
		},
	},
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
		id: 'actions',
		cell: ({ row }) => {
			const payment = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>Edit info</DropdownMenuItem>
						<DropdownMenuSeparator />
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]
