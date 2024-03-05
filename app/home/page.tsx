'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SenseDrawer from './components/sense-drawer';

export default function Page() {
  const [show, setshow] = useState(false);
  return (
    <div className='w-20px h-[3000px]'>
      {<SenseDrawer open={show} />}
      <Button onClick={() => setshow(!show)}>Click Me</Button>
    </div>
  );
}
