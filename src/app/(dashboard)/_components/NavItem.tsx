import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LucideProps } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ForwardRefExoticComponent } from 'react'

type TNavItemProps = {
	nav: {
		title: string
		path: string
		icon: ForwardRefExoticComponent<LucideProps>
	}
}

export const NavItem = ({ nav }: TNavItemProps) => {
	const pathname = usePathname()

	return (
		<Button
			type='button'
			variant='ghost'
			className={cn('w-full', pathname === nav.path && 'bg-accent')}
			asChild
		>
			<Link href={nav.path} replace>
				<span className='flex mr-auto items-center'>
					<nav.icon className='h-4 w-4 mr-2' />
					{nav.title}
				</span>
			</Link>
		</Button>
	)
}
