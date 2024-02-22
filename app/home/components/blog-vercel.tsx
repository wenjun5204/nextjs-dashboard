'use client';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useRef } from 'react';

export default function CarouselVercelBlog({ news }: { news: any }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Carousel
      // plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      orientation="vertical"
      className="h-full w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="mt-0 h-80">
        {news.map((item: any, index: number) => {
          const { title, description } = item || {};
          return (
            <CarouselItem
              key={index}
              className="pt-2 basis-12"
            >
              <Card>
                <CardContent className="flex items-center justify-center p-2">
                  <span className="text-overflow-ellipsis w-full overflow-hidden line-clamp-1 text-base font-semibold">
                    {title}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
