import Link from 'next/link'
import { SignUpForm } from '../_components/SignUpForm'

const SingUpPage = () => {
	return (
		<div className='flex'>
			<div
				className='flex-1 h-screen w-1 bg-cover bg-center hidden md:block'
				style={{ backgroundImage: "url('/login.PNG')" }}
			></div>
			<div className='flex-1 flex h-screen flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Sign up
					</h2>
				</div>
				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<SignUpForm />
					<p className='mt-10 text-center text-sm text-gray-500'>
						<span>Already have an account? </span>
						<Link
							href='/sign-in'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default SingUpPage
