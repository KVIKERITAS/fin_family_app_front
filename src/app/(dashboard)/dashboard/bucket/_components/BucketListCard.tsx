
import React from 'react';


type BucketListCardProps = {
    title: string;
    imageUrl: string;
    description: string;
    id: number; // Added id prop for unique identifier
};

const BucketListCard: React.FC<BucketListCardProps> = ({ title, imageUrl, description, id }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transform hover:scale-105 transition duration-300">
            <img className="w-full" src={imageUrl} alt={`${title} image`} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button
                    // onClick={onClick} //
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    More
                </button>
            </div>
        </div>
    );
};

export default BucketListCard;
