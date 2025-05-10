'use client';

import { useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  User,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';
import { auth } from '@/config/firebase-config';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [verifyMsg, setVerifyMsg] = useState('');
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

  const handleSendVerification = async () => {
    if (!user) return;
    setVerifying(true);
    setVerifyMsg('');
    try {
      await sendEmailVerification(user);
      setVerifyMsg('Verification email sent! กรุณาตรวจสอบอีเมลของคุณ');
    } catch (err) {
      setVerifyMsg('เกิดข้อผิดพลาดในการส่งอีเมลยืนยัน');
    } finally {
      setVerifying(false);
    }
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md flex flex-col items-center">
        <Button type="button" onClick={handleLogout}>
          <span className="text-gray-500">Logout</span>
        </Button>
        <Image
          src={user.photoURL || '/logo.png'}
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
        {!user.emailVerified && (
          <div className="mb-4 flex flex-col items-center">
            <span className="text-sm text-orange-600 mb-2">
              อีเมลของคุณยังไม่ได้ยืนยัน
            </span>
            <button
              className="px-4 py-1 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 transition disabled:opacity-60"
              onClick={handleSendVerification}
              disabled={verifying}
            >
              {verifying ? 'กำลังส่ง...' : 'ส่งอีเมลยืนยัน'}
            </button>
            {verifyMsg && (
              <span className="text-xs text-green-600 mt-2">{verifyMsg}</span>
            )}
          </div>
        )}
        <pre className="bg-gray-100 rounded p-2 text-xs w-full overflow-x-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}
