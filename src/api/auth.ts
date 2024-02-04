import axios, { AxiosError } from 'axios'
import { z } from 'zod'
import { SignInSchema, SignUpSchema } from '../../schemas'

const BASE_URL = 'http://localhost:3333/auth/'

export const authApi = axios.create({
	baseURL: BASE_URL,
})

export const signUpUserFn = async (formData: z.infer<typeof SignUpSchema>) => {
	// // FOR BACKEND
	// const validatedFields = SignUpSchema.safeParse(formData)

	// if (!validatedFields.success) {
	// 	return { error: 'Invalid fields' }
	// }

	try {
		const response = await authApi.post('/signup', formData)

		return console.log('response' + response.data)
	} catch (error) {
		if (error instanceof AxiosError) {
			console.log(error.response?.data.message)
		}
	}
}

export const signInUserFn = async (formData: z.infer<typeof SignInSchema>) => {
	// // FOR BACKEND
	// 	const validatedFields = SignInSchema.safeParse(formData)

	// if (!validatedFields.success) {
	// 	return { error: 'Invalid fields' }
	// }

	const response = await authApi.post('/signin', formData)

	return console.log(response.data)
}
