'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/config/firebase-config';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace('/login');
      }
      setUser(user);
    });
    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md flex flex-col items-center">
        <Image
          src={user.photoURL || '/default-avatar.png'}
          alt="Profile"
          width={96}
          height={96}
          className="rounded-full mb-4"
        />
        <h2 className="text-xl font-bold mb-2">
          {user.displayName || 'No Name'}
        </h2>
        <p className="text-gray-700 mb-1">{user.email}</p>
        <div className="text-xs text-gray-400 mb-4">UID: {user.uid}</div>
        <pre className="bg-gray-100 rounded p-2 text-xs w-full overflow-x-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}
