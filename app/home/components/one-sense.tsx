import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function OneSense() {
  const ss = await fetch(
    'https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token=M8Au2tRQxuXtgdTjRJOODweL9amHhNnu',
  ).then((res) => res.json());

  // console.log(666, ss);
  const {
    origin: { title, author, content, dynasty },
  } = ss?.data || {};
  return (
    <Card className=" bg-transparent mt-6 flex h-auto w-full flex-col justify-center text-main">
      <CardHeader>
        <CardTitle className="text-center text-highlight">{title}</CardTitle>

        <span className=' text-right'>{author}</span>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          {(content || []).slice(0, 4).map((it: string, ind: number) => {
            return <div className='text-left' key={ind}>{it}</div>;
          })}
        </div>
      </CardContent>
    </Card>
  );
}
