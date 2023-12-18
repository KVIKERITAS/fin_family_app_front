import { TRegisterInput } from '@/app/(authentification)/_components/SignUpForm'
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
