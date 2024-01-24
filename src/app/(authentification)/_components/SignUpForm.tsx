'use client'

import { signUpUserFn } from '@/api/auth'
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
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const signUpSchema = z
	.object({
		username: z.string().min(6, {
			message: 'Username must be at least 6 characters.',
		}),
		email: z.string().email({ message: 'Invalid email address' }),
		password: z
			.string()
			.min(6, { message: 'Password must be at least 6 characters' })
			.regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, {
				message: 'Password must contain at least one letter and one number',
			}),
		pwRepeat: z.string(),
	})
	.refine((data) => data.password === data.pwRepeat, {
		message: "Passwords don't match",
		path: ['pwRepeat'], // path of error
	})

export type TRegisterInput = typeof signUpSchema

export function SignUpForm() {
	const router = useRouter()
	// 1. Define your form.
	const form = useForm<z.infer<TRegisterInput>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			pwRepeat: '',
		},
	})

	const { mutate } = useMutation({
		mutationFn: (formData: z.infer<TRegisterInput>) => signUpUserFn(formData),
	})

	function onSubmit(formData: z.infer<TRegisterInput>) {
		mutate(formData)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input {...field} />
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
							<FormLabel>Email address</FormLabel>
							<FormControl>
								<Input {...field} />
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
								<Input type={"password"} {...field} />
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
								<Input type={"password"} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full'>
					Sign Up
				</Button>
			</form>
		</Form>
	)
}
