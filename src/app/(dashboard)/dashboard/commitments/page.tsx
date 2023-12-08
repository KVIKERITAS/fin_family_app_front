import Image from 'next/image'

import {Button} from '@/components/ui/button'
import {Payment, columns} from './_components/Columns'
import {DataTable} from './_components/DataTable'

import {Leasing, columnsTwo} from './_components/ColumnsTwo'

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

import {ScrollArea} from '@/components/ui/scroll-area'

import {LeasingForm} from './_components/LeasingSchema'
import {SubscriptionForm} from './_components/SubscriptionSchema'
import DeleteModal from "@/app/(dashboard)/_components/DeleteModal";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: '728ed52f',
            amount: 26,
            subscription: 'Netflix',
            date: new Date(),
        },
        {
            id: '728ed52f',
            amount: 10,
            subscription: 'Hulu',
            date: new Date(),
        },
        {
            id: '728ed52f',
            amount: 5,
            subscription: 'Youtube Premium',
            date: new Date(),
        },
        {
            id: '728ed52f',
            amount: 36,
            subscription: 'Tele2',
            date: new Date(),
        },
        {
            id: '728ed52f',
            amount: 25,
            subscription: 'Bite',
            date: new Date(),
        },
    ]
}

async function getDataTwo(): Promise<Leasing[]> {
    return [
        {
            id: '464ok85f',
            amount: 200,
            type: 'House',
            date: new Date(),
        },
        {
            id: '464ok85f',
            amount: 100,
            type: 'Car',
            date: new Date(),
        },
    ]
}

export default async function Commitments() {
    const data = await getData()
    const dataTwo = await getDataTwo()
    return (
        <div>
            <h1 className='text-lg text-center text-blue-900'>
                User username&#39;s commitment page
            </h1>
            <div className='flex justify-center flex-wrap mt-7 gap-6'>
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
                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger>(Expand for more info)</AccordionTrigger>
                            <AccordionContent>
                                <Tabs defaultValue='subscriptions' className='p-2'>
                                    <TabsList>
                                        <TabsTrigger value='subscriptions'>
                                            Your subscription plans
                                        </TabsTrigger>
                                        <TabsTrigger value='add-subscription'>
                                            Add new subscription services
                                        </TabsTrigger>
                                        <div className="bg-red-600 hover:bg-red-700 text-amber-50">
                                            <DeleteModal itemToDelete='subscription(s)'/>
                                        </div>
                                    </TabsList>
                                    <TabsContent value='subscriptions'>
                                        <ScrollArea className='h-[300px] w-[100%] rounded-md border p-4'>
                                            <DataTable columns={columns} data={data}/>
                                        </ScrollArea>
                                    </TabsContent>
                                    <TabsContent value='add-subscription'>
                                        <ScrollArea className='h-[300px] w-[100%] rounded-md border p-4'>
                                            <SubscriptionForm/>
                                        </ScrollArea>
                                    </TabsContent>
                                </Tabs>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
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

                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger>(Expand for more info)</AccordionTrigger>
                            <AccordionContent>
                                <Tabs defaultValue='leasing' className='p-2'>
                                    <TabsList>
                                        <TabsTrigger value='leasing'>
                                            Your current leasings
                                        </TabsTrigger>
                                        <TabsTrigger value='add-leasing'>
                                            Add new subscription services
                                        </TabsTrigger>
                                        <div className="bg-red-600 hover:bg-red-700 text-amber-50">
                                            <DeleteModal itemToDelete='leasing(s)'/>
                                        </div>
                                    </TabsList>
                                    <TabsContent value='leasing'>
                                        <ScrollArea className='h-[300px] w-[100%] rounded-md border p-4'>
                                            <DataTable columns={columnsTwo} data={dataTwo}/>
                                        </ScrollArea>
                                    </TabsContent>
                                    <TabsContent value='add-leasing'>
                                        <ScrollArea className='h-[300px] w-[100%] rounded-md border p-4'>
                                            <LeasingForm/>
                                        </ScrollArea>
                                    </TabsContent>
                                </Tabs>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
