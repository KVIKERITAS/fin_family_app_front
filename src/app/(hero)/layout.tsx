import React from 'react'
import Navbar from './_components/Navbar'

export default function HeroLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	)
}
