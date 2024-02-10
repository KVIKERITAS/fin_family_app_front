import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { SignInSchema } from '../schemas'
import { signInUserFn } from './services/auth'
import { getUserById } from './services/user'

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedFields = SignInSchema.safeParse(credentials)

				if (validatedFields.success) {
					const { email, password } = validatedFields.data

					const user = await signInUserFn({ email, password })

					if (user) {
						return user
					} else return null
				}
			},
		}),
	],
	session: { strategy: 'jwt' },
	secret: 'e1b6881203c7c44eb1845ba73d67ef1d',
	callbacks: {
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub
			}

			if (token.role && session.user) {
				session.user.role = token.role
			}

			return session
		},

		async jwt({ token }) {
			if (!token.sub) return token

			const existingUser = await getUserById(token.sub)

			if (!existingUser) return token

			token.role = existingUser.role

			return token
		},
	},
})
