import { TRegisterInput } from '@/app/(authentification)/_components/SignUpForm'
import axios, { AxiosError } from 'axios'
import { TSignInInput } from '@/app/(authentification)/_components/SignInForm'
import { z } from 'zod'

const BASE_URL = 'http://localhost:3333/auth/'

export const authApi = axios.create({
	baseURL: BASE_URL,
})

export const signUpUserFn = async (formData: z.infer<TRegisterInput>) => {
	try {
		const response = await authApi.post('/signup', formData)

		return console.log('response' + response.data)
	} catch (error) {
		if (error instanceof AxiosError) {
			console.log(error.response?.data.message)
		}
		// let message: String

		// if (error instanceof Error) {
		// 	message = error.message
		// 	return console.log('1' + error.message)
		// } else if (error && typeof error === 'object' && 'message' in error) {
		// 	message = String(error.message)
		// } else if (typeof error === 'string') {
		// 	message = error
		// } else {
		// 	message = 'Something went wrong'
		// }
		// return console.log(message)
	}
}

export const signInUserFn = async (formData: z.infer<TSignInInput>) => {
	const response = await authApi.post('/signin', formData)

	return console.log(response.data)
}