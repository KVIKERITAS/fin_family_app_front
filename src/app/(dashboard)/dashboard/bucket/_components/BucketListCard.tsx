//
// import React from 'react';
//
//
// type BucketListCardProps = {
//     title: string;
//     imageUrl: string;
//     description: string;
//     date: number;
//     id: number;
// };
//
// const BucketListCard: React.FC<BucketListCardProps> = ({ title, imageUrl, description, id, date }) => {
//     return (
//         <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transform hover:scale-105 transition duration-300">
//             <img className="w-full" src={imageUrl} alt={`${title} image`} />
//             <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{title}</div>
//                 <p className="text-gray-700 text-base">
//                     {description}
//                 </p>
//             </div>
//             <div className="px-6 pt-4 pb-2">
//                <div>
//                    {date}
//                </div>
//             </div>
//         </div>
//     );
// };
//
// export default BucketListCard;

import React from 'react';

type BucketListCardProps = {
    title: string;
    imageUrl: string;
    description: string;
    date: number;
    id: number;
};

const BucketListCard: React.FC<BucketListCardProps> = ({ title, imageUrl, description, date }) => {
    // Convert the timestamp to a readable date format
    const readableDate = new Date(date).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transform hover:scale-105 transition duration-300">
            <img className="w-full" src={imageUrl} alt={`${title} image`} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
                <div className="text-gray-600 text-sm mt-4">
                    Date: {readableDate}
                </div>
            </div>
        </div>
    );
};

export default BucketListCard;
