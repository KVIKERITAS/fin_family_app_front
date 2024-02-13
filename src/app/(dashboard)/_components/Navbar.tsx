import { Logo } from '@/components/Logo'
import { MobileSideBar } from './MobileSideBar'
import { UserButton } from './UserButton'

export default function Navbar() {
	return (
		<nav className='h-[50px] w-full flex justify-between items-center px-6 shadow-sm fixed bg-white z-50'>
			<MobileSideBar />
			<Logo />

			<div className='flex gap-5 items-center'>
				<div>
					<UserButton />
				</div>
			</div>
		</nav>
	)
}
