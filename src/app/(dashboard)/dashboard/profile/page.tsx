'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { zodResolver } from '@hookform/resolvers/zod'
import { Settings } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SettingsSchema } from '../../../../../schemas'

const ProfilePage = () => {
	const user = useCurrentUser()

	const form = useForm<z.infer<typeof SettingsSchema>>({
		resolver: zodResolver(SettingsSchema),
		defaultValues: {
			name: user?.name || undefined,
		},
	})

	const onSubmit = (formData: z.infer<typeof SettingsSchema>) => {
		console.log(formData)
	}

	return (
		<Card>
			<CardHeader>
				<div className='flex justify-center items-center gap-3'>
					<Settings />
					<p className='text-2xl font-semibold text-center'>Profile settings</p>
				</div>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
						<div className='space-y-4'>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input {...field} placeholder='Your name' />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<Button type='submit'>Save</Button>
					</form>
				</Form>
			</CardContent>
		</Card>

		// <div className='w-full h-screen flex justify-center items-center'>
		// 	<div className='flex items-center mx-4'>
		// 		<img
		// 			src='https://i.pinimg.com/474x/36/98/6c/36986c5f14b9153e5c4247c4ce837f52.jpg'
		// 			alt='User Image'
		// 			className='w-35 h-35 rounded-full mb-4'
		// 		/>
		// 	</div>

		// 	<div className='ml-8'>
		// 		<div className='text-center'>
		// 			<label htmlFor='username' className='font-bold'>
		// 				Username:
		// 			</label>
		// 			<p id='username' className='mb-2'>
		// 				{user.username}
		// 			</p>

		// 			<label htmlFor='age' className='font-bold'>
		// 				Age:
		// 			</label>
		// 			<p id='age' className='mb-2'>
		// 				{user.age}
		// 			</p>

		// 			<label htmlFor='gender' className='font-bold'>
		// 				Gender:
		// 			</label>
		// 			<p id='gender' className='mb-4'>
		// 				{user.gender}
		// 			</p>

		// 			<Button className='mb-4 mx-5'>Update Information</Button>
		// 			<Button className='mb-4'>Change password</Button>

		// 			<div>
		// 				<Link href='/dashboard' className='text-blue-500'>
		// 					Go to Home
		// 				</Link>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	)
}

export default ProfilePage
