'use client';

import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { auth } from '@/config/firebase-config';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/profile');
      }
    });
    return () => unsubscribe();
  }, [router]);
  return <>{children}</>;
}
