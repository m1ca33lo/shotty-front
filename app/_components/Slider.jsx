import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'
  
function Slider({}) {
  return (
    <Carousel>
    <CarouselContent>
             <CarouselItem>
                <Image src='/slider1.png'
                width={1000}
                height={400}
                alt='slider'
                className='w-full h-[200px] md:h-[400px] 
                object-cover rounded-2xl'
                />
             </CarouselItem>
             <CarouselItem>
                <Image src='/slider1.png'
                width={1000}
                height={400}
                alt='slider'
                className='w-full h-[200px] md:h-[400px] 
                object-cover rounded-2xl'
                />
             </CarouselItem>
             <CarouselItem>
                <Image src='/slider1.png'
                width={1000}
                height={400}
                alt='slider'
                className='w-full h-[200px] md:h-[400px] 
                object-cover rounded-2xl'
                />
             </CarouselItem>
             <CarouselItem>
                <Image src='/slider1.png'
                width={1000}
                height={400}
                alt='slider'
                className='w-full h-[200px] md:h-[400px] 
                object-cover rounded-2xl'
                />
             </CarouselItem>
     
    
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  
  )
}

export default Slider