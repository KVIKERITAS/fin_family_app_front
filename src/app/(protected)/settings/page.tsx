'use client'

import { useCurrentUser } from '@/hooks/useCurrentUser'
import { signOut } from 'next-auth/react'

const SettingsPage = () => {
	const user = useCurrentUser()

	return (
		<div>
			{JSON.stringify(user)}
			<button type='submit' onClick={() => signOut()}>
				Logout
			</button>
		</div>
	)
}

export default SettingsPage
