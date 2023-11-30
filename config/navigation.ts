import {
	Annoyed,
	CircleDollarSign,
	ClipboardCheck,
	DollarSign,
	Flame,
	GitCommitHorizontal,
	Goal,
	Layout,
} from 'lucide-react'

export const navigation = [
	{
		title: 'Dashboard',
		path: '/dashboard',
		icon: Layout,
	},
	{
		title: 'Personal Finance',
		path: '/dashboard/personal-finance',
		icon: DollarSign,
	},
	{
		title: 'Fire',
		path: '/dashboard/fire',
		icon: Flame,
	},
	{
		title: 'Commitments',
		path: '/dashboard/commitments',
		icon: GitCommitHorizontal,
	},
	{
		title: 'Bucket-list',
		path: '/dashboard/bucket',
		icon: ClipboardCheck,
	},
	{
		title: 'New-Year-Goals',
		path: '/dashboard/goals',
		icon: Goal,
	},
	{
		title: 'Portfolio',
		path: '/dashboard/portfolio',
		icon: CircleDollarSign,
	},
	{
		title: 'Profile',
		path: '/dashboard/profile',
		icon: Annoyed,
	},
]
