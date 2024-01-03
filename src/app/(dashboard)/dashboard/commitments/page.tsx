import Image from 'next/image'

import LeasingAccordion from './_components/LeasingAccordion'
import SubAccordion from './_components/SubAccordion'

export default async function Commitments() {
	return (
		<div className="w-full flex flex-col items-center">
			<h1 className='text-3xl text-center text-blue-900 my-3'>
				User username&#39;s commitment page
			</h1>
			<div className='w-full flex justify-center flex-wrap mt-7 gap-6'>
				<div className='flex-1'>
					<h2>User&#39;s Subscriptions (TV/Streaming Services and etc.)</h2>
					<div className='h-[350px] w-[500px]'>
						<Image
							src='https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601_960_720.png'
							width={350}
							height={350}
							alt='tv image'
							className='object-contain h-full max-w-full'
						/>
					</div>
					<SubAccordion />
				</div>
				<div className='flex-1'>
					<h2>User&#39;s Leasing (car&#39;s, house&#39;s and etc.)</h2>
					<div className='h-[350px] w-[500px]'>
						<Image
							src='https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663_640.png'
							height={350}
							width={350}
							alt='cars'
							className='object-contain h-auto max-w-full'
						/>
					</div>
					<LeasingAccordion />
				</div>
			</div>
		</div>
	)
}
