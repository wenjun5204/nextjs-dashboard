
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { BlogForm } from '../components/blog-form';

export default function Page() {
  // const [value, setValue] = useState('**Hello world!!!**');
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: '列表', href: '/blog' },
          {
            label: '新建',
            href: '/blog/create',
            active: true,
          },
        ]}
      />
      <BlogForm />
    </main>
  );
}
