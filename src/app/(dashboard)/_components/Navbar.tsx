import { signOut } from '@/auth'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { AvatarDemo } from './AvatarDemo'
import { MobileSideBar } from './MobileSideBar'

export default function Navbar() {
	return (
		<nav className='h-[50px] w-full flex justify-between items-center px-6 shadow-sm fixed bg-white z-50'>
			<MobileSideBar />
			<Logo />

			<div className='flex gap-5 items-center'>
				<div>
					<AvatarDemo />
				</div>
				<form
					action={async () => {
						'use server'
						await signOut()
					}}
				>
					<Button variant='ghost' type='submit'>
						<LogOut />
					</Button>
				</form>
			</div>
		</nav>
	)
}
