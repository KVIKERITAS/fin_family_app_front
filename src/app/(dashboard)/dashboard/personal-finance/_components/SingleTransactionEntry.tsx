import { TTransaction } from '../page'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import DeleteModal from '@/app/(dashboard)/_components/DeleteModal'

type TTransactionProp = {
	transaction: TTransaction
}

const SingleTransactionEntry = ({ transaction }: TTransactionProp) => {
	return (
		<div className='flex justify-between py-2 '>
			<div className='flex gap-3 items-center'>
				<transaction.logo size={40} className='border rounded p-1' />
				<div>
					<b>{transaction.category}</b>
					<p>{transaction.description}</p>
				</div>
			</div>
			<div className='text-2xl flex items-center'>
				<p
					className={transaction.value >= 0 ? 'text-green-700' : 'text-red-700'}
				>
					{transaction.value >= 0 ? '+' : ''}
					{transaction.value}€
				</p>
				<DeleteModal/>
			</div>
		</div>
	)
}

export default SingleTransactionEntry
