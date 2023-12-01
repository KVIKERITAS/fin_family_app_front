
import React from 'react';
import BucketListCard from './_components/BucketListCard';
import {Button} from "@/components/ui/button";


const Bucket = () => {
	// Your array of items for the bucket list
	type BucketItem = {
		id: number;
		title: string;
		imageUrl: string;
		description: string;
		date: string;
	};


	// @ts-ignore
	const bucketListItems: BucketItem[] = [
		{
			id: 1,
			title: 'Waterfalls',
			imageUrl: 'https://t4.ftcdn.net/jpg/01/31/89/13/360_F_131891333_YtJeWozj269tpiWnwz4vBkCBe7h26qNU.jpg',
			description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
			date: '2025-01-01'
		},
		{
			id: 2,
			title: 'Waterfalls',
			imageUrl: 'https://t4.ftcdn.net/jpg/01/31/89/13/360_F_131891333_YtJeWozj269tpiWnwz4vBkCBe7h26qNU.jpg',
			description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
			date: '2026-01-01'
		},
		{
			id: 3,
			title: 'Waterfalls',
			imageUrl: 'https://t4.ftcdn.net/jpg/01/31/89/13/360_F_131891333_YtJeWozj269tpiWnwz4vBkCBe7h26qNU.jpg',
			description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
			date: '2027-01-01'
		},
		{
			id: 4,
			title: 'Waterfalls',
			imageUrl: 'https://t4.ftcdn.net/jpg/01/31/89/13/360_F_131891333_YtJeWozj269tpiWnwz4vBkCBe7h26qNU.jpg',
			description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
			date: '2028-01-01'
		}

	];

	return (
		<div>
			<div className='min-h-screen flex flex-col mt-10 text-center gap-x-10'>
				<h1 className='text-3xl sm:text-4xl lg:text-5xl font-mono'>
					Bucket list
				</h1>
				<h4 className='mt-2 text-lg sm:text-xl lg:text-2xl font-sans '>
					101 Things To Do Before You Die
				</h4>
				<h3 className="mt-5 text-red-400 text-3xl">
					What’s a Bucket List?
				</h3>
				<h4 className="mt-5">
					If you have never heard of the term “bucket list”,<br />
					it is a list of all the goals you want to achieve,<br />
					dreams you want to fulfill, and life experiences you wish to experience before you die.
				</h4>

				<Button className="mt-5 w-60 bg-green-500 block mx-auto">Add new one to your list</Button>


				<h1 className="mt-5 shadow-cyan-500/50 text-4xl decoration-cyan-50 bg-slate-50">
					Your list:
				</h1>
				<div className="flex flex-wrap mt-10 gap-10 justify-center">
					{bucketListItems.map(item => (
						<BucketListCard
							key={item.id}
							title={item.title}
							imageUrl={item.imageUrl}
							description={item.description}
							date={item.date}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Bucket;

