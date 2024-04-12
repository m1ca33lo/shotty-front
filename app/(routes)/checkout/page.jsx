"use client"
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from "sonner"
import { Button } from '@/components/ui/button'
import { ArrowBigRight } from 'lucide-react'
function Checkout() {

  const [totalCartItem,setTotalCartItem]=useState(0)
  const [cartItemList,setCartItemList]=useState([]);
  const [subtotal,setSubTotal]=useState(0);

  const [username,setUsername]=useState();
  const [email,setEmail]=useState();
  const [phone,setPhone]=useState();
  const [zip,setZip]=useState();
  const [address,setAddress]=useState();

  const [totalAmount,setTotalAmount]=useState(0);


  const router=useRouter();


   /**
     * Used to get Total Cart Item
     */


useEffect(()=>{
    let total=0;
    cartItemList.forEach(element => {
        total=total+element.amount
    });
    setTotalAmount((total*0.9+15).toFixed(2));
    setSubTotal(total.toFixed(2))
},[cartItemList])

const calculateTotalAmount=()=>{
  const totalAmount=subtotal*0.9+15;
  
  return totalAmount.toFixed(2)
}


const onApprove=(data)=>{
  console.log(data);

  const payload={
    data:{
      paymentId:(data?.paymentID).toString(),
      totalOrderAmount:totalAmount,
      username:username,
      email:email,
      phone:phone,
      zip:zip,
      address:address,
      orderItemList:cartItemList,
      userId:user.id
    }
  }

  GlobalApi.createOrder(payload,jwt).then(resp=>{
    toast('Order Places Successfully!');
    cartItemList.forEach((item,index)=>{
      GlobalApi.deleteCartItem(item.id).then(resp=>{
      })
    })
    router.replace('/order-confirmation');
  })
}
  return (
    <div className=''>
    <h2 className='p-3 bg-primary text-xl font-bold text-center text-white'>Checkout</h2>
    <div className='p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8'>
        <div className='md:col-span-2 mx-20'>
            <h2 className='font-bold text-3xl'>Billing Details</h2>
            <div className='grid grid-cols-2 gap-10 mt-3'>
                <Input placeholder='Nombre' onChange={(e)=>setUsername(e.target.value)} />
                <Input placeholder='Apellido' onChange={(e)=>setUsername(e.target.value)} />
                
            </div>
            <Input className='gap-10 mt-3' placeholder='Correo' onChange={(e)=>setEmail(e.target.value)} />
            <div className='grid grid-cols-2 gap-10 mt-3'>
                <Input placeholder='Numero' onChange={(e)=>setPhone(e.target.value)} />
                <Input placeholder='Codigo Postal' onChange={(e)=>setZip(e.target.value)}/>
            </div>
            <div className=' mt-3'>
                <Input placeholder='Direccion' onChange={(e)=>setAddress(e.target.value)} />

            </div>
        </div>
        <div className='mx-10 border'>
            <h2 className='p-3 bg-gray-200 font-bold text-center'>Total Cart ({totalCartItem})</h2>
            <div className='p-4 flex flex-col gap-4'>
                <h2 className='font-bold flex justify-between'>Subtotal : <span>${subtotal}</span></h2>
                <hr></hr>
                <h2 className='flex justify-between'>Delivery : <span>$15.00</span></h2>
                <hr></hr>
                <h2 className='font-bold flex justify-between'>Total : <span>${calculateTotalAmount()}</span></h2>
                <Button >Payment <ArrowBigRight/> </Button>
               
             
            </div>
        </div>
    </div>

</div>
  )
}

export default Checkout