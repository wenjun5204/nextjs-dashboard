import { fetchComment } from '../lib/data';
import CommentCard from './components/comment-card';
export default async function LatestComment() {
  const comments = await fetchComment();
  // console.log(666, comments);
  return (
    <div className=" w-full">
      <div></div>
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
