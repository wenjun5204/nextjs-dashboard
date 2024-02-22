
import { fetchBlogById } from "@/app/lib/data";
import HomeSide from "../../components/home-side";
 
export default async function Layout({ params, children }: { params: { id: string }, children: React.ReactNode }) {
  const id = params.id;
  const blog = await fetchBlogById(id);
  return (
    <div className="w-full flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-1/4 h-auto flex-none z-10">
        <HomeSide blog={blog}/>
      </div>
      <div className="relative w-3/4 pt-10">{children}</div>
    </div>
  );
}