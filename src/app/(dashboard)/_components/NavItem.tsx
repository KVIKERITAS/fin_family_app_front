import { Button } from '@/components/ui/button'
import { DollarSign, Flame, Layout, GitCommitHorizontal, ClipboardCheck, CircleDollarSign, Annoyed, Goal } from 'lucide-react'
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

			<Button type='button' variant='ghost' className='w-full' asChild>
				<Link href='/dashboard/commitments' replace>
					<span className='flex mr-auto items-center'>
						<GitCommitHorizontal className='h-4 w-4 mr-2' />
						Commitments
					</span>
				</Link>
			</Button>

			<Button type='button' variant='ghost' className='w-full' asChild>
				<Link href='/dashboard/bucket' replace>
					<span className='flex mr-auto items-center'>
						<ClipboardCheck className='h-4 w-4 mr-2' />
						Bucket-list
					</span>
				</Link>
			</Button>

			<Button type='button' variant='ghost' className='w-full' asChild>
				<Link href='/dashboard/goals' replace>
					<span className='flex mr-auto items-center'>
						<Goal className='h-4 w-4 mr-2' />
						New-Year-Goals
					</span>
				</Link>
			</Button>

			<Button type='button' variant='ghost' className='w-full' asChild>
				<Link href='/dashboard/portfolio' replace>
					<span className='flex mr-auto items-center'>
						<CircleDollarSign className='h-4 w-4 mr-2' />
						Portfolio
					</span>
				</Link>
			</Button>

			<Button type='button' variant='ghost' className='w-full' asChild>
				<Link href='/dashboard/profile' replace>
					<span className='flex mr-auto items-center'>
						<Annoyed className='h-4 w-4 mr-2' />
						<span className="font-bold ">Profile</span>
					</span>
				</Link>
			</Button>


		</div>
	)
}
