'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

export default function DashboardPage() {
	const { user } = useUser()

	return <div>{JSON.stringify(user)}</div>
}
