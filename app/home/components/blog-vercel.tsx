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
  console.log(666, news);
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
          const { title, post_url } = item || {};
          return (
            <CarouselItem key={index} className="basis-12 pt-2">
              <Card>
                <CardContent className="flex items-center justify-center p-2">
                  <span className="text-overflow-ellipsis line-clamp-1 w-full overflow-hidden text-base font-semibold">
                    <a
                      href={post_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {title}
                    </a>
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
