'use client'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselVercelBlog() {

  return (
    <Carousel
    //   plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className="w-full h-full"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="mt-0 h-80">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className=" pt-2 md:basis-1/3 lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
