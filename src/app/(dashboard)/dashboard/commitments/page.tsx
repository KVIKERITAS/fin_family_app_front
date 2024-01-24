import Subscriptions from "@/app/(dashboard)/dashboard/commitments/_components/Subscriptions";
import Leasings from "@/app/(dashboard)/dashboard/commitments/_components/Leasings";

export default async function Commitments() {
	return (
			<div className='w-full flex justify-center flex-wrap mt-7 gap-6'>
				<div className='flex-1'>
					<h1 className="text-center mb-4 font-bold">User&#39;s Subscriptions (TV/Streaming Services and etc.)</h1>
					<Subscriptions />
				</div>
				<div className='flex-1'>
					<h1 className="text-center mb-4 font-bold">User&#39;s Leasing (car&#39;s, house&#39;s and etc.)</h1>
					<Leasings />
				</div>
			</div>
	)
}
