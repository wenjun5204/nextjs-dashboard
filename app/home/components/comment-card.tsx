import { Card, CardHeader, CardContent } from '@/components/ui/card';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import zhCN from 'date-fns/locale/zh-CN';
import Link from 'next/link';

export default function CommentCard({ comment }: { comment: any }) {
  // console.log(777, comment);
  const { content, blog_id, commenter, comment_time } = comment || {};
  const date = new Date(comment_time);
  return (
    <div>
      <Card className=" bg-[#21282e]">
        <CardHeader className=" text-main">
          <div className="flex w-full justify-between">
            <span>{commenter}</span>
            <span>
              {formatDistanceToNow(date, { addSuffix: false, locale: zhCN })}
            </span>
          </div>
        </CardHeader>
        <Link href={`/home/${blog_id}/detail`}>
          <CardContent className="">
            <div className="line-clamp-4 bg-slate-100 rounded">{content}</div>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
}
