'use client';

import { createContext } from 'react';

export const ThemeContext = createContext<any>({});

type WraperProviderProps = {
  children: React.ReactNode;
  blog: any; // 这里的any应该替换为你的blog数据的类型
};
export default function WraperProvider({
  children,
  blog,
}: WraperProviderProps) {
  return <ThemeContext.Provider value={blog}>{children}</ThemeContext.Provider>;
}
