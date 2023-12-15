'use client'
import { navigation } from '../../../../config/navigation'
import { NavItem } from './NavItem'

export const Sidebar = () => {
	return (
		<>
			<div className='font-medium text-xs flex flex-col mb-1'>
				{navigation.map((nav) => (
					<NavItem key={nav.title} nav={nav} />
				))}
			</div>
		</>
	)
}
