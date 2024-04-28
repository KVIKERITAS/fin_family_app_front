import {
	Session,
	handleAuth,
	handleCallback,
	handleLogin,
} from '@auth0/nextjs-auth0'
import { NextRequest } from 'next/server'
const API_BASE_URL = process.env.API_BASE_URL

type CreateUserRequest = {
	auth0Id: string
	email: string
}

const createMyUserRequest = async (
	user: CreateUserRequest,
	accessToken: string | undefined,
) => {
	const response = await fetch(`${API_BASE_URL}/api/my/user`, {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${accessToken}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})

	if (!response.ok) throw new Error('Failed to create user')
}

const afterCallback = async (req: NextRequest, session: Session) => {
	const { user, accessToken } = session

	if (user?.sub && user.email)
		await createMyUserRequest(
			{ auth0Id: user.sub, email: user.email },
			accessToken,
		)

	return session
}

export const GET = handleAuth({
	login: handleLogin({
		returnTo: '/dashboard',
	}),
	callback: handleCallback({ afterCallback }),
})
