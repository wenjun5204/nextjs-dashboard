
import { fetchBlogById } from "@/app/lib/data";
import HomeSide from "../../components/home-side";
 
export default async function Layout({ params, children }: { params: { id: string }, children: React.ReactNode }) {
  const id = params.id;
  const blog = await fetchBlogById(id);
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full h-auto flex-none md:w-80">
        <HomeSide blog={blog}/>
      </div>
      <div className=" flex-1 p-6 md:p-12">{children}</div>
    </div>
  );
}