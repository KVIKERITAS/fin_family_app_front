'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

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

const EditSubsFormSchema = z.object({
	subscription: z
		.string()
		.min(2, { message: 'Must be 2 or more characters long' })
		.max(50),
	amount: z.number().min(1, { message: 'You cannot leave empty fields' }),
	date: z.date(),
})

export function EditSubscriptionForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof EditSubsFormSchema>>({
		resolver: zodResolver(EditSubsFormSchema),
		defaultValues: {
			subscription: '',
			amount: 0,
			date: new Date(),
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof EditSubsFormSchema>) {
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
								<Input placeholder='change the price' {...z.number} />
							</FormControl>
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
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button>Save changes</Button>
			</form>
		</Form>
	)
}
