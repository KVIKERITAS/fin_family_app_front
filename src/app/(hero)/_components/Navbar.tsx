import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='h-[100px] flex justify-between items-center px-6 container'>
			<div>
				<Image src='/logo.svg' alt='logo' width={100} height={100} />
			</div>

			<div className='flex gap-2'>
				<Button variant='outline' asChild>
					<Link href='/api/auth/login'>Login</Link>
				</Button>
				{/* <Button asChild>
					<Link href='/sign-up'>Sign Up</Link>
				</Button> */}
			</div>
		</nav>
	)
}
