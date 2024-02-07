/**
 * Routes that are accessible to everyone. No authentication is required.
 * @type {string[]}
 */
export const publicRoutes = ['/', '/logo.svg', '/login.PNG']

/**
 * Routes that are used for authentication.
 * These routes will redirect logged in users to /dashboard.
 * @type {string[]}
 */
export const authRoutes = ['/sign-up', '/sign-in']

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * Default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard'
