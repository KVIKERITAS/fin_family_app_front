'use server'

import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import * as z from 'zod'
import { SignInSchema } from '../../schemas'

export const login = async (formData: z.infer<typeof SignInSchema>) => {
	const validatedFields = SignInSchema.safeParse(formData)

	if (!validatedFields.success) return { error: 'Invalid fields!' }

	const { email, password } = validatedFields.data

	try {
		await signIn('credentials', {
			email,
			password,
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
