'use client'
import React, { useState } from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';

const FirePage = () => {
    // States for all the Input fields
    const [age, setAge] = useState('');
    const [retirementAge, setRetirementAge] = useState('');
    const [portfolioWorth, setPortfolioWorth] = useState('');
    const [netMonthlyIncome, setNetMonthlyIncome] = useState('');
    const [interest, setInterest] = useState('');
    const [capitalGainsTax, setCapitalGainsTax] = useState('');
    const [grossMonthlyIncome, setGrossMonthlyIncome] = useState('');
    const [monthlySavings, setMonthlySavings] = useState('');
    const [inflation, setInflation] = useState('');
    const [retirementPercentage, setRetirementPercentage] = useState(50); // Slider state


    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would handle the calculation and potentially send data to an API
    };
    return (
        <div className='container max-w-screen-sm my-8'>
            <p className='text-3xl md:text-4xl text-center mb-4'>Fire Calculator</p>
            <form className='flex flex-col gap-3'  onSubmit={handleSubmit}>
                    <label>Age<Input type='number' value={age} onChange={(e) => setAge(e.target.value)} /></label>
                    <label>Your retirement Age <Input type='number' value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} /></label>
                    <label>Portfolio worth<Input step='1000' type='number' value={portfolioWorth} onChange={(e) => setPortfolioWorth(e.target.value)} /></label>
                    <label>Gross monthly income<Input step='100' type='number' value={grossMonthlyIncome} onChange={(e) => setGrossMonthlyIncome(e.target.value)} /></label>
                    <label>Net monthly income<Input type='number' value={netMonthlyIncome} onChange={(e) => setNetMonthlyIncome(e.target.value)} /></label>
                    <label>Monthly savings<Input type='number' value={monthlySavings} onChange={(e) => setMonthlySavings(e.target.value)} /></label>
                    <label>Interest<Input type='number' step='0.01' value={interest} onChange={(e) => setInterest(e.target.value)} /></label>
                    <label>Inflation<Input type='number' step='0.01' value={inflation} onChange={(e) => setInflation(e.target.value)} /></label>
                    <label>Capital Gains Tax<Input type='number' step='0.01' value={capitalGainsTax} onChange={(e) => setCapitalGainsTax(e.target.value)} /></label>
                <label>Early retirement percentage
                    (will be gained from portfolio)
                    {/* Slider input for retirement percentage */}
                    <label className='flex flex-col my-3 '>
                        <input
                            type='range'
                            className=' h-15 w-50 p-0 focus:outline-none focus:ring-0 focus:shadow-none'
                            min='0'
                            max='100'
                            value={retirementPercentage}
                            onChange={(e) => setRetirementPercentage(e.target.value)}
                            step='1'
                        />
                        <span className='text-gray-700 mx-auto my-1'>  {retirementPercentage}%</span>
                    </label>
                </label>
                <Button type='submit'>Calculate</Button>
            </form>
        </div>
    );
};
export default FirePage;


