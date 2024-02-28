import { fetchComment } from '../lib/data';
import CommentCard from './components/comment-card';
export default async function LatestComment() {
  const comments = await fetchComment();
  // console.log(666, comments);
  return (
    <div className="mt-6 w-full p-4 rounded-md shadow">
      <div className=" text-lg font-bold">近期评论</div>
      {(comments || []).map((it, ind) => {
        return (
          <div key={ind}>
            <CommentCard comment={it} />
          </div>
        );
      })}
    </div>
  );
}
