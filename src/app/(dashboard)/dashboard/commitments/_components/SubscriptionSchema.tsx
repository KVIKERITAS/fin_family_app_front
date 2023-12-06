'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const SubscriptionSchema = z.object({
	subscription: z
		.string()
		.min(2, { message: 'Must be 2 or more characters long' })
		.max(50),
	amount: z.number().min(1, { message: 'You cannot leave empty fields' }),
	date: z.date(),
})

export function SubscriptionForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof SubscriptionSchema>>({
		resolver: zodResolver(SubscriptionSchema),
		defaultValues: {
			subscription: '',
			amount: 0,
			date: new Date(),
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof SubscriptionSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='subscription'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Subscription</FormLabel>
							<FormControl>
								<Input placeholder='Netflix, Youtube and etc.' {...field} />
							</FormControl>
							<FormDescription>
								Enter the name of the subscription provider
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='amount'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Amount per month</FormLabel>
							<FormControl>
								<Input placeholder='enter the price' {...z.number} />
							</FormControl>
							<FormDescription>Enter the amount/cost per month</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='date'
					render={({ field }) => (
						<FormItem>
							<FormLabel>The beginning date of subscription</FormLabel>
							<FormControl>
								<Input placeholder='enter the date' {...z.date} />
							</FormControl>
							<FormDescription>Enter the beginning date</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	)
}
