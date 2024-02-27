'use client';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { LightningBoltIcon } from '@radix-ui/react-icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useRef } from 'react';

export default function CarouselBlog({ zhihu }: { zhihu: any }) {
  // console.log(6663, zhihu);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Carousel
      // plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="mr-6 mt-2 w-80"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {(zhihu || []).map((item: any, index: number) => {
          const {
            children,
            detail_text,
            target: { title, excerpt, url },
          } = item || {};
          const { thumbnail } = children[0] || {};
          return (
            <CarouselItem key={index} className="">
              <Card>
                <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className=" line-clamp-2 text-hide">{title}</div>
                  </a>
                  <div
                    className="aspect-video w-4/5"
                    // src={thumbnail || `/assets/girl${index}.png`}
                    // alt="还没看够呢"
                    // width={300}
                    // height={300}
                    style={{
                      backgroundImage: `url(${thumbnail || '/assets/girl1.png'})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="line-clamp-3 w-full text-sm text-normal">
                    {excerpt}
                  </div>
                  <div className='w-full flex-row-reverse items-center text-highlight flex'>
                    <LightningBoltIcon />
                    <span>{detail_text}</span>
                  </div>
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
