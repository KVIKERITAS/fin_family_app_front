import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import * as z from 'zod'
import { SignInSchema } from '../../schemas'

export const login = async (formData: z.infer<typeof SignInSchema>) => {
	try {
		await signIn('credentials', {
			...formData,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		})
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Invalid credentials!' }
				default:
					return { error: 'Something went wrong!' }
			}
		}

		throw error
	}
}
