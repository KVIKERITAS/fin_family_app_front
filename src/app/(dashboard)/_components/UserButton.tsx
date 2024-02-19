'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { LogOut, Settings, User } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

export const UserButton = () => {
	const user = useCurrentUser()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={user?.image || undefined} />
					<AvatarFallback className='bg-sky-950 text-white'>
						<User />
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem>
					<Link
						href={'/dashboard/profile'}
						className='flex items-center gap-2'
						replace
					>
						<Settings className='w-4 h-4' />
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem
					className='flex items-center gap-2 cursor-pointer'
					onClick={() => signOut()}
				>
					<LogOut className='w-4 h-4' /> Sign out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
