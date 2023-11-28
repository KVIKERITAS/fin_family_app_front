import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { MobileSideBar } from './MobileSideBar'

export default function Navbar() {
	return (
		<nav className='h-[100px] flex justify-between items-center px-6 shadow-sm'>
			<MobileSideBar />
			<Logo />

			<div className='flex gap-5 items-center'>
				<div>UN</div>
				<Button variant='ghost'>
					<Link href='/'>
						<LogOut />
					</Link>
				</Button>
			</div>
		</nav>
	)
}
