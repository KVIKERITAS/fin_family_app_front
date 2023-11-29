import React from 'react'
import Navbar from '../_components/Navbar'
import { Sidebar } from '../_components/Sidebar'

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Navbar />
			<main className='px-4 mx-auto'>
				<div className='flex gap-x-7'>
					<div className='w-64 shrink-0 hidden md:block'>
						<Sidebar />
					</div>
					{children}
				</div>
			</main>
		</>
	)
}
