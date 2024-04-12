"use client"
import { Button } from '@/components/ui/button'
import { CircleUserRound, LayoutGrid, Search, ShoppingBag, ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { UpdateCartContext } from '../_context/UpdateCartContext'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import CartItemList from './CartItemList'
import { toast } from 'sonner'
  
function Header() {

    const [categoryList,setCategoryList]=useState([]);
    const [totalCartItem,setTotalCartItem]=useState(0)
    const {updateCart,setUpdateCart}=useContext(UpdateCartContext)
    const [cartItemList,setCartItemList]=useState([]);
    const router=useRouter();

    useEffect(()=>{
        getCartItems();
    },[updateCart])

    /**
     * Get Category List
     */
    
    /**
     * Used to get Total Cart Item
     */
    const getCartItems = async () => {
      if (user) {
          const cartItemList_ = await GlobalApi.getCartItems(user.id, jwt);
          console.log(cartItemList_);
          setTotalCartItem(cartItemList_?.length);
          setCartItemList(cartItemList_);
      } else {
          console.log('User object is null');
      }
  };
  


    const onDeleteItem=(id)=>{
            GlobalApi.deleteCartItem(id,jwt).then(resp=>{
                toast('Item removed !');
                getCartItems();
            })
    }
    const [subtotal,setSubTotal]=useState(0);

    useEffect(()=>{
        let total=0;
        cartItemList.forEach(element => {
            total=total+element.amount
        });
        setSubTotal(total.toFixed(2))
    },[cartItemList])
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Link href={'/'} className="cursor-pointer">
          <Image src="/shotty-web.svg" alt="logo" width={150} height={100} />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2
              className="hidden md:flex gap-2 items-center
            border rounded-full p-2 px-10 bg-slate-200 cursor-pointer
          "
            >
              <LayoutGrid className="h-5 w-5" /> Categoria
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />

              <Link href={'/products-category/ron'}>
              <DropdownMenuItem className="flex gap-4 items-center cursor-pointer">
                
                <Image
                  src='/rones.png'
                  unoptimized={true}
                  alt="icon"
                  width={30}
                  height={30}
                />
                <h2 className="text-lg">Ron</h2>
              </DropdownMenuItem>
              </Link>

          </DropdownMenuContent>
        </DropdownMenu>

        <div
          className="md:flex gap-3 items-center
          border rounded-full p-2 px-5
          hidden"
        >
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className=" flex gap-5  items-center">
        

        <Sheet>
        <SheetTrigger>
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBasket className="h-7 w-7" />
          <span className="bg-primary text-white px-2 rounded-full">{totalCartItem}</span>
        </h2>
        </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className='bg-primary 
              text-white font-bold text-lg p-2'>My Cart</SheetTitle>
              <SheetDescription>
                <CartItemList cartItemList={cartItemList}
                onDeleteItem={onDeleteItem}/>
                
              </SheetDescription>
            </SheetHeader>
            <SheetClose asChild>
            <div className='absolute w-[90%] bottom-6 flex flex-col'>
            <h2 className='text-lg font-bold flex justify-between'>Subtotal 
            <span>S/.{subtotal}</span></h2>
            <Button onClick={()=>router.push(jwt?'/checkout':'/sign-in')}>Checkout</Button>
            </div>
            </SheetClose>
          </SheetContent>
        </Sheet>


        <Link href={'/sign-in'}>
          <Button>Login</Button>
        </Link>
          :
          <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <CircleUserRound
          className='bg-orange-100
          p-2 rounded-full cursor-pointer
          text-primary h-11 w-11'/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <Link href={'/my-order'}> <DropdownMenuItem>My order</DropdownMenuItem>
    </Link>

    <DropdownMenuItem onClick={()=>onSignOut()}>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

      </div>
    </div>
  );
}

export default Header;
