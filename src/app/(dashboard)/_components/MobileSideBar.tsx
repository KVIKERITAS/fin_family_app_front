'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'

export const MobileSideBar = () => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)

	const onOpen = () => {
		setIsOpen(true)
	}

	const onClose = () => {
		setIsOpen(false)
	}

	useEffect(() => {
		onClose()
	}, [pathname])

	return (
		<>
			<Button
				onClick={onOpen}
				className='block md:hidden mr-2'
				variant='ghost'
				size='sm'
			>
				<Menu className='h-4 w-4' />
			</Button>
			<Sheet open={isOpen} onOpenChange={onClose}>
				<SheetContent side='left' className='p-2 pt-10'>
					<Sidebar />
				</SheetContent>
			</Sheet>
		</>
	)
}
