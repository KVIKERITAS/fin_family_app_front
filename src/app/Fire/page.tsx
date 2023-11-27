"use client"
import React, { useState } from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

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
    const [earlyRetirementMethod, setEarlyRetirementMethod] = useState('25-rule');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would handle the calculation and potentially send data to an API
    };

    return (
        <div className="container my-8">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>Age<Input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></label>
                    <label>Your retirement Age <Input type="number" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} /></label>
                </div>
                <div className="form-row">
                    <label>Portfolio worth<Input step="1000" type="number" value={portfolioWorth} onChange={(e) => setPortfolioWorth(e.target.value)} /></label>
                    <label>Gross monthly income<Input step="100" type="number" value={grossMonthlyIncome} onChange={(e) => setGrossMonthlyIncome(e.target.value)} /></label>
                </div>
                <div className="form-row">
                    <label>Net monthly income<Input type="number" value={netMonthlyIncome} onChange={(e) => setNetMonthlyIncome(e.target.value)} /></label>
                    <label>Monthly savings<Input type="number" value={monthlySavings} onChange={(e) => setMonthlySavings(e.target.value)} /></label>
                </div>
                <div className="form-row">
                    <label>Interest<Input type="number" step="0.01" value={interest} onChange={(e) => setInterest(e.target.value)} /></label>
                    <label>Inflation<Input type="number" step="0.01" value={inflation} onChange={(e) => setInflation(e.target.value)} /></label>
                </div>
                <div className="form-row">
                    <label>Capital Gains Tax<Input type="number" step="0.01" value={capitalGainsTax} onChange={(e) => setCapitalGainsTax(e.target.value)} /></label>
                    <label>Early retirement percentage (will be gained from portfolio)
                        <select value={earlyRetirementMethod} onChange={(e) => setEarlyRetirementMethod(e.target.value)}>
                            <option value="10%">10% </option>
                            <option value="20%">20% </option>
                            <option value="30%">30% </option>
                            <option value="40%">40% </option>
                            <option value="50%">50% </option>
                            <option value="60%">60% </option>
                            <option value="70%">70% </option>
                            <option value="80%">80% </option>
                            <option value="90%">90% </option>
                            <option value="100%">100% </option>

                            // Add other retirement method options here
                        </select>
                    </label>
                </div>
                <Button type="submit">Calculate</Button>
            </form>
        </div>
    );
};
export default FirePage;
