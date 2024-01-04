'use client'

import { signInUserFn } from '@/api/auth'
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

const signInSchema = z
    .object({
        username: z.string().min(6, {
            message: 'Username must be at least 6 characters.',
        }),
        password: z
            .string()
            .min(6, { message: 'Password must be at least 6 characters' })
    })

export type TSignInInput = typeof signInSchema

export function SignInForm() {
    const router = useRouter()
    const form = useForm<z.infer<TSignInInput>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    })

    const { mutate } = useMutation({
        mutationFn: (formData: z.infer<TSignInInput>) => signInUserFn(formData),
    })

    function onSubmit(formData: z.infer<TSignInInput>) {
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
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input {...field} />
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
                <Button type='submit' className='w-full'>
                    Sign In
                </Button>
            </form>
        </Form>
    )
}
