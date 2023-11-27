'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'

export type Inputs = {
	username: string,
	email: string,
	password: string,
	repeatPassword: string
};

const SingUpPage = () => {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


	return <div className='flex'>
		<div className='flex-1 h-screen w-1 bg-cover bg-center hidden md:block'
				 style={{ backgroundImage: 'url(\'/login.PNG\')' }}>
		</div>
		<div className='flex-1 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Sign up
				</h2>
			</div>
			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label className='block text-sm font-medium leading-6 text-gray-900'>
							Username
						</label>
						<div className='mt-2'>
							<Input type='text'
										 className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										 {...register('username', {
											 required: true, maxLength: 12,
										 })}
							/>
						</div>
					</div>
					<div>
						<label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
							E-mail address
						</label>
						<div className='mt-2'>
							<Input type='text'
										 className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										 {...register('email', {
											 required: true, maxLength: 12,
										 })}
							/>
						</div>
					</div>
					<div>
						<div className='flex items-center justify-between'>
							<label htmlFor='password'
										 className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
						</div>
						<div className='mt-2'>
							<Input type='password'
										 className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										 {...register('password', {
											 required: true,
										 })}
							/>
						</div>

					</div>
					<div>
						<div className='flex items-center justify-between'>
							<label htmlFor='password'
										 className='block text-sm font-medium leading-6 text-gray-900'>Repeat your password</label>
						</div>
						<div className='mt-2'>
							<Input type='password'
										 className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										 {...register('repeatPassword', {
											 required: true,
										 })}
							/>
						</div>
					</div>
					<div>
						<Button type='submit' className='w-full'>
							Sign up
						</Button>
					</div>
				</form>
				<p className='mt-10 text-center text-sm text-gray-500'>
					<span>Already have an account? </span>
					<Link href='/sign-in'
								className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>Sign in</Link>
				</p>
			</div>
		</div>
	</div>
}

export default SingUpPage
