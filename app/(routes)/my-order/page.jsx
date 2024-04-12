"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import moment from 'moment';
import MyOrderItem from './_components/MyOrderItem';
  
function MyOrder() {
    const router=useRouter();
    const [orderList,setOrderList]=useState([]);
    const getMyOrder = async () => {
          const orderList_ = await GlobalApi.getMyOrder(user.id, jwt);
          console.log(orderList_);
          setOrderList(orderList_);
    }


  return (
    <div>
          <h2 className='p-3 bg-primary text-xl font-bold text-center text-white'>My Order</h2>
            <div className='py-8 mx-7 md:mx-20'>
                <h2 className='text-3xl font-bold text-primary'>Order History</h2>
               <div className='mt-10'>
                <Collapsible>
                <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
                <CollapsibleContent>
                  Yes. Free to use for personal and commercial projects. No attribution
                  required.
                </CollapsibleContent>
              </Collapsible>
                
               
                </div>
            </div>
    </div>
  )
}

export default MyOrder