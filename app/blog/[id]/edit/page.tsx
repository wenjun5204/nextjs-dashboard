import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { BlogForm } from '../../components/blog-form';
import { fetchBlogById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const blog = await fetchBlogById(id);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: '列表', href: '/blog' },
          {
            label: '编辑',
            href: `/blog/${id}/edit`,
            active: true,
          },
        ]}
      />
      <BlogForm mode="edit" blog={blog} />
    </main>
  );
}
