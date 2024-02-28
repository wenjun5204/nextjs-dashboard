import { Card, CardContent } from '@/components/ui/card';
// import date

export default function CommentCard({ comment }: { comment: any }) {
//   console.log(777, comment);
  const { content, blog_id, commenter, comment_time } = comment || {};
  return (
    <div>
      <Card>
        <CardContent>
          <div className="w-full justify-between">
            <span>{commenter}</span>
            <span>{21}</span>
          </div>
          <div>{content}</div>
        </CardContent>
      </Card>
    </div>
  );
}
