import { TRegisterInput } from '@/app/(authentification)/_components/SignUpForm'
import { TSignInInput } from '@/app/(authentification)/_components/SignInForm'
import axios from 'axios'
import { z } from 'zod'

const BASE_URL = 'http://localhost:3333/auth/'

export const authApi = axios.create({
	baseURL: BASE_URL,
})

export const signUpUserFn = async (formData: z.infer<TRegisterInput>) => {
	const response = await authApi.post('/signup', formData)

	return console.log(response.data)
}

export const signInUserFn = async (formData: z.infer<TSignInInput>) => {
	const response = await authApi.post('/signin', formData)

	return console.log(response.data)
}