import { Button } from '@/components/ui/button'
import { DollarSign, Flame, Layout } from 'lucide-react'
import Link from 'next/link'

export const NavItem = () => {
	return (
		<div className='flex flex-col w-full'>
			<Button type='button' variant='ghost' className='w-full' asChild>
				<Link href='/dashboard' replace>
					<span className='flex mr-auto items-center'>
						<Layout className='h-4 w-4 mr-2' />
						Dashboard
					</span>
				</Link>
			</Button>
			<Button type='button' variant='ghost' className='w-full' asChild>
				<Link href='/dashboard/personal-finance' replace>
					<span className='flex mr-auto items-center'>
						<DollarSign className='h-4 w-4 mr-2' />
						Personal Finance
					</span>
				</Link>
			</Button>

			<Button type='button' variant='ghost' className='w-full' asChild>
				<Link href='/dashboard/fire' replace>
					<span className='flex mr-auto items-center'>
						<Flame className='h-4 w-4 mr-2' />
						Fire
					</span>
				</Link>
			</Button>
		</div>
	)
}
