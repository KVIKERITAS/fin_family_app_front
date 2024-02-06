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
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SignInSchema } from '../../../../schemas'
import { FormError } from './FormError'
import { FormSuccess } from './FormSuccess'

export function SignInForm() {
	const router = useRouter()

	const [error, setError] = useState<string | undefined>('')
	const [success, setSuccess] = useState<string | undefined>('')
	const [isPending, startTransition] = useTransition()
	const form = useForm<z.infer<typeof SignInSchema>>({
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	function onSubmit(formData: z.infer<typeof SignInSchema>) {
		setError('')
		setSuccess('')

		startTransition(() => {})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
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
				<div className='text-sm text-end mt-2'>
					<a
						href='#'
						className='font-semibold text-indigo-600 hover:text-indigo-500'
					>
						Forgot password?
					</a>
				</div>
				<FormError message={error} />
				<FormSuccess message={success} />
				<Button type='submit' className='w-full' disabled={isPending}>
					Sign In
				</Button>
			</form>
		</Form>
	)
}
