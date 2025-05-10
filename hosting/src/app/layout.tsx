import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  icons: {
    icon: '/logo.png',
  },
  title: 'Pheuanpet',
  description:
    'Pheuanpet: แพลตฟอร์มโซเชียลมีเดียสำหรับคนรักสัตว์ทุกชนิด มาร่วมแบ่งปันรูปภาพ เรื่องราว และสร้างเครือข่ายกับเพื่อนๆ ที่มีความรักในสัตว์เหมือนกัน!',
  keywords: [
    'Pheuanpet',
    'โซเชียลมีเดียสัตว์เลี้ยง',
    'คอมมูนิตี้คนรักสัตว์',
    'รูปภาพสัตว์',
    'เรื่องเล่าสัตว์เลี้ยง',
    'สัตว์เลี้ยง',
    'หมา',
    'แมว',
    'สัตว์ Exotic',
    'สัตว์ป่า',
    'แบ่งปันสัตว์เลี้ยง',
    'โปรไฟล์สัตว์เลี้ยง',
  ],
  openGraph: {
    title: 'Pheuanpet',
    description:
      'Pheuanpet: แพลตฟอร์มโซเชียลมีเดียสำหรับคนรักสัตว์ทุกชนิด มาร่วมแบ่งปันรูปภาพ เรื่องราว และสร้างเครือข่ายกับเพื่อนๆ ที่มีความรักในสัตว์เหมือนกัน!',
    url: 'https://www.pheuanpet.com', // ใส่ URL เว็บไซต์จริงของคุณ
    siteName: 'Pheuanpet',
    images: [
      {
        url: 'https://www.pheuanpet.com/images/logo.png', // ใส่ URL โลโก้เว็บไซต์ของคุณ (ถ้ามี)
        width: 800,
        height: 600,
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  // Other metadata can be added here, such as Twitter card, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
