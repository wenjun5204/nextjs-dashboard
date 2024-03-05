import { fetchBlogById } from '@/app/lib/data';
import HomeSide from '../../components/home-side';
import WraperProvider from '@/components/theme/wraper-provider';

export default async function Layout({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  const id = params.id;
  const blog = await fetchBlogById(id);
  return (
    <WraperProvider blog={blog}>
      <div className="flex w-full h-screen">
        <div className="z-10 w-1/4 flex-none hidden md:block">
          <HomeSide />
        </div>
        <div className="relative w-full md:w-3/4 pt-10">{children}</div>
      </div>
    </WraperProvider>
  );
}
