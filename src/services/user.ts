import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/user/'

export const userApi = axios.create({
	baseURL: BASE_URL,
})

export const getUserById = async (id: string) => {
	try {
		const response = await userApi.get(id)

		return response.data
	} catch {
		return { error: 'Something went wrong!' }
	}
}
