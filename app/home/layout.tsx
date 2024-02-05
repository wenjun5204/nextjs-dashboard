
import HomeSide from "./components/home-side";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full h-auto flex-none md:w-80">
        <HomeSide />
      </div>
      <div className=" flex-1 p-6 md:p-12">{children}</div>
    </div>
  );
}