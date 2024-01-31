'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'
import {Plus} from 'lucide-react'
import {Input} from '@/components/ui/input'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {Textarea} from '@/components/ui/textarea'
import {useState} from "react";

const AddIncomeModal = () => {

    const [sum, setSum] = useState(0);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function addIncome() {
        if (sum <= 0) {
            setErrorMessage('Sum should be more than 0')
            return
        }
        if (category === '') {
            setErrorMessage('Choose category')
            return
        }
        setErrorMessage('');
        const transaction = {
            sum: sum,
            type: 'income',
            category: category,
            description: description,
        }

        console.log(transaction)

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(transaction)
        }
        try {
            const res = await fetch("http://localhost:8080/finances/create-transaction", options);
            const data = await res.json();
            console.log(data)
        } catch (err) {
            setErrorMessage('Server Error');
        }
    }

    return (
        <Dialog>
            <DialogTrigger>
                <div className='bg-green-500 p-5 rounded-full cursor-pointer'>
                    <Plus size={50}/>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='mb-2 text-center'>Add Income</DialogTitle>
                    <DialogDescription className='flex flex-col gap-4'>
                        <Input
                            type='number'
                            className='w-full text-2xl h-12'
                            placeholder='Sum'
                            value={sum}
                            onChange={(e) => setSum(Number(e.target.value))}
                        />
                        <Select onValueChange={(value) => setCategory(value)}>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder='Category' defaultValue=''/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='Salary'>
                                    Salary
                                </SelectItem>
                                <SelectItem value='Bribe'>
                                    Bribe
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <Textarea
                            placeholder='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <span className='text-center text-red-500'>{errorMessage}</span>
                        <Button className='bg-green-500 hover:bg-green-600' onClick={addIncome}>
                            Add Income
                        </Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default AddIncomeModal