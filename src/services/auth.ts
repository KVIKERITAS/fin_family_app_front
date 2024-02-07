import axios from 'axios'
import { z } from 'zod'
import { SignInSchema, SignUpSchema } from '../../schemas'

const BASE_URL = 'http://localhost:8080/api/auth'

export const authApi = axios.create({
	baseURL: BASE_URL,
})

export const signUpUserFn = async (formData: z.infer<typeof SignUpSchema>) => {
	try {
		const response = await authApi.post('/signup', formData)
		return response.data
	} catch {
		return { error: 'Something went wrong!' }
	}
}

export const signInUserFn = async (
	credentials: z.infer<typeof SignInSchema>,
) => {
	try {
		const response = await authApi.post('/signin', credentials)

		return response.data
	} catch {
		return { error: 'Something went wrong!' }
	}
}
