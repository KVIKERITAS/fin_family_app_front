import React from 'react';
import { Wallet, LineChart, Warehouse, LocateFixed } from 'lucide-react';

const Finance = () => {
    return (
        <div className="min-h-screen flex flex-col mt-10 items-center  ">
            <h1 className=" text-3xl sm:text-4xl lg:text-5xl text-center font-mono">Assets Classes</h1>
            <h4 className="mt-5 text-lg sm:text-xl lg:text-2xl font-sans text-center">
                Diversifying your portfolio by investing in different types of assets can help protect you from volatility.
            </h4>
            <div className="flex flex-wrap justify-center m-5 sm:m-10">
                <div className="flex flex-col items-center mx-5 sm:mx-10 my-5">
                    <Wallet className="w-12 h-12 sm:w-20 sm:h-20" />
                    <p className="text-sm sm:text-lg my-2">Cash</p>
                </div>

                <div className="flex flex-col items-center mx-5 sm:mx-10 my-5">
                    <LineChart className="w-12 h-12 sm:w-20 sm:h-20" />
                    <p className="text-sm sm:text-lg my-2">Equities</p>
                </div>

                <div className="flex flex-col items-center mx-5 sm:mx-10 my-5">
                    <LocateFixed className="w-12 h-12 sm:w-20 sm:h-20" />
                    <div className="text-sm sm:text-lg my-2">
                        Fixed<br />Income
                    </div>
                </div>

                <div className="flex flex-col items-center mx-5 sm:mx-10 my-5">
                    <Warehouse className="w-12 h-12 sm:w-20 sm:h-20" />
                    <div className="text-sm sm:text-lg my-2">
                        Alternative<br />Investments
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Finance;
