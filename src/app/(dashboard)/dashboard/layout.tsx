'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'
import React from 'react'
import Navbar from '../_components/Navbar'
import { Sidebar } from '../_components/Sidebar'

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { user, isLoading, error } = useUser()

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>{error.message}</div>
	if (!user) return <Link href='/api/auth/login'>Login</Link>

	return (
		<>
			<Navbar />
			<main className='px-4 mx-auto'>
				<div className='flex gap-x-7 pt-[50px]'>
					<div className='w-64 shrink-0 hidden md:block fixed'>
						<Sidebar />
					</div>
					<div className='md:ml-64 w-full'>{children}</div>
				</div>
			</main>
		</>
	)
}
