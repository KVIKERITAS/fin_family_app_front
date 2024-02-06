'use client'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signUpUserFn } from '@/services/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SignUpSchema } from '../../../../schemas'
import { FormError } from './FormError'
import { FormSuccess } from './FormSuccess'

export function SignUpForm() {
	const [error, setError] = useState<string | undefined>('')
	const [success, setSuccess] = useState<string | undefined>('')
	const [isPending, startTransition] = useTransition()
	const router = useRouter()
	const form = useForm<z.infer<typeof SignUpSchema>>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			pwRepeat: '',
		},
	})

	function onSubmit(formData: z.infer<typeof SignUpSchema>) {
		setError('')
		setSuccess('')

		startTransition(async () => {
			const response = await signUpUserFn(formData)

			setError(response.error)
			setSuccess(response.success)
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={isPending}
									placeholder='Name'
									type='text'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={isPending}
									placeholder='email@example.com'
									type='email'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={isPending}
									placeholder='******'
									type='password'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='pwRepeat'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Repeat your password</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={isPending}
									placeholder='******'
									type='password'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormError message={error} />
				<FormSuccess message={success} />
				<Button disabled={isPending} type='submit' className='w-full'>
					Sign Up
				</Button>
			</form>
		</Form>
	)
}
