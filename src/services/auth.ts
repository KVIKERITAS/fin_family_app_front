import axios from 'axios'
import { z } from 'zod'
import { SignInSchema, SignUpSchema } from '../../schemas'

const BASE_URL = 'http://localhost:8080/api'

export const authApi = axios.create({
	baseURL: BASE_URL,
})

export const signUpUserFn = async (formData: z.infer<typeof SignUpSchema>) => {
	const response = await authApi.post('/auth/signup', formData)

	return response.data
}

export const signInUserFn = async (formData: z.infer<typeof SignInSchema>) => {
	const response = await authApi.post('/auth/signin', formData)

	return console.log(response.data)
}
