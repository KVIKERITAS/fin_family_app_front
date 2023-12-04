/* eslint-disable @next/next/no-img-element */
const Commitments = () => {
	return (
		<div>
			<h1 className='text-lg text-center text-blue-900'>
				User username&#39;s commitment page
			</h1>
			<div className='flex flex-wrap mt-7 gap-4'>
				<div>
					<h2>User&#39;s Subscriptions (TV/Streaming Services and etc.)</h2>
					{/* Note: it may/may not be link to open the modal for user to see their current subscription plans and info about them*/}
					<img
						src='https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601_960_720.png'
						height={450}
						width={450}
						alt='tv'
					/>
				</div>
				<div>
					<h2>User&#39;s Leasing (car&#39;s, house&#39;s and etc.)</h2>
					{/* Note: it may/may not be link to open the modal for user to see their current leasings and info about them*/}
					<img
						src='https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663_640.png'
						height={350}
						width={450}
						alt='cars'
					/>
				</div>
				<div>
					<h2>User&#39;s Debts (study, apartment and etc.)</h2>
					{/* Note: it may/may not be link to open the modal for user to see their all debts and info about it*/}
					<img
						src='https://cdn.pixabay.com/photo/2018/03/01/17/36/room-3191241_640.jpg'
						height={350}
						width={450}
						alt='apartments'
					/>
				</div>
			</div>
		</div>
	)
}
export default Commitments
