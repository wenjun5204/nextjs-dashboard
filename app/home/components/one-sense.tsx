'use client'
import { useEffect } from 'react';

export default function OneSense() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.jinrishici.com/v2/browser/jinrishici.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='w-full mt-6 flex justify-center h-10 text-highlight'>
      <span id="jinrishici-sentence">正在加载今日诗词....</span>
    </div>
  );
}
