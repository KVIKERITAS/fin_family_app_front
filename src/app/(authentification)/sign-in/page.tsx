'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

type TInputs = {
	username: string
	password: string
}

const SingInPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TInputs>()
	const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data)

	return (
		<div className='flex'>
			<div
				className='flex-1 h-screen w-1 bg-cover bg-center hidden md:block'
				style={{ backgroundImage: "url('/login.PNG')" }}
			></div>
			<div className='flex-1 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Sign in to your account
					</h2>
				</div>
				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label className='block text-sm font-medium leading-6 text-gray-900'>
								Username
							</label>
							<div className='mt-2'>
								<Input
									type='text'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									{...register('username', {
										required: true,
										maxLength: 12,
									})}
								/>
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Password
								</label>
							</div>
							<div className='mt-2'>
								<Input
									type='password'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									{...register('password', {
										required: true,
									})}
								/>
								<div className='text-sm text-end mt-2'>
									<a
										href='#'
										className='font-semibold text-indigo-600 hover:text-indigo-500'
									>
										Forgot password?
									</a>
								</div>
							</div>
						</div>
						<div>
							<Button type='submit' className='w-full' asChild>
								<Link href='/dashboard'>Sign in</Link>
							</Button>
						</div>
					</form>
					<p className='mt-10 text-center text-sm text-gray-500'>
						<span>Do not have an account yet? </span>
						<Link
							href='/sign-up'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default SingInPage
