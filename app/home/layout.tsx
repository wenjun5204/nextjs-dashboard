import AcmeLogo from './components/acme-logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-auto max-w-7xl">
      <AcmeLogo />
      <div>{children}</div>
    </div>
  );
}
