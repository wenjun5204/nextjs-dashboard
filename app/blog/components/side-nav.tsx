/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-18 17:43:49
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import PersonCard from './person-card';
export default function SideNav() {
  return (
    <div className="flex h-auto flex-col  items-center px-3 py-4 md:px-2">
      <PersonCard />
    </div>
  );
}
