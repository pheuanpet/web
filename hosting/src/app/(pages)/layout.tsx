import { Header } from '@/components/layouts/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <Header />
      <main className="w-full max-w-[768px] flex-1 py-4">{children}</main>
    </div>
  );
}
