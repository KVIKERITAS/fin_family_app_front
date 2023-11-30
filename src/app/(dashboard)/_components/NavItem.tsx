import { Button } from '@/components/ui/button'
import { LucideProps } from 'lucide-react'
import Link from 'next/link'
import { ForwardRefExoticComponent } from 'react'

type TNavItemProps = {
	nav: {
		title: string
		path: string
		icon: ForwardRefExoticComponent<LucideProps>
	}
}

export const NavItem = ({ nav }: TNavItemProps) => {
	return (
		<Button type='button' variant='ghost' className='w-full' asChild>
			<Link href={nav.path} replace>
				<span className='flex mr-auto items-center'>
					<nav.icon className='h-4 w-4 mr-2' />
					{nav.title}
				</span>
			</Link>
		</Button>
	)
}
