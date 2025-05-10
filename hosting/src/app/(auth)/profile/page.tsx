'use client';

import { useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  // eslint-disable-next-line import/named
  User,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { auth } from '@/config/firebase-config';
import { Button } from '@/components/ui/button';

// Mock data สำหรับ followers/following (ในโปรเจกต์จริงควรดึงจาก backend/database)
const mockFollowers = 123;
const mockFollowing = 45;

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [verifyMsg, setVerifyMsg] = useState('');
  const router = useRouter();

  // สมมุติ bio และ displayName (ในโปรเจกต์จริงควรดึงจาก database)
  const bio =
    'รักสัตว์ทุกชนิด โดยเฉพาะแมวและสุนัข 🐶🐱 ชอบแบ่งปันเรื่องราวสัตว์เลี้ยงและประสบการณ์ดูแลสัตว์';
  const displayName = user?.displayName || 'No Name';
  const username = user?.email?.split('@')[0] || 'username';

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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setVerifyMsg('เกิดข้อผิดพลาดในการส่งอีเมลยืนยัน');
    } finally {
      setVerifying(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    router.push('/login');
  };

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
        {/* ปุ่ม Logout */}
        <Button type="button" onClick={handleLogout} className="self-end mb-2">
          <span className="text-gray-500">Logout</span>
        </Button>

        {/* รูปโปรไฟล์ */}
        <Image
          src={user.photoURL || '/logo.png'}
          alt="Profile"
          width={96}
          height={96}
          className="rounded-full mb-2"
        />

        {/* ชื่อที่แสดง */}
        <h2 className="text-xl font-bold mb-1">{displayName}</h2>

        {/* ชื่อผู้ใช้งาน (username) */}
        <div className="text-sm text-gray-500 mb-2">@{username}</div>

        {/* อีเมล */}
        <p className="text-gray-700 mb-1">{user.email}</p>

        {/* ปุ่มยืนยันอีเมล */}
        {!user.emailVerified && (
          <div className="mb-2 flex flex-col items-center">
            <span className="text-xs text-orange-600 mb-1">
              อีเมลของคุณยังไม่ได้ยืนยัน
            </span>
            <button
              className="px-4 py-1 rounded bg-blue-600 text-white text-xs hover:bg-blue-700 transition disabled:opacity-60"
              onClick={handleSendVerification}
              disabled={verifying}
            >
              {verifying ? 'กำลังส่ง...' : 'ส่งอีเมลยืนยัน'}
            </button>
            {verifyMsg && (
              <span className="text-xs text-green-600 mt-1">{verifyMsg}</span>
            )}
          </div>
        )}

        {/* Bio/About Me */}
        <div className="text-center text-gray-700 text-sm mb-4">{bio}</div>

        {/* Followers / Following */}
        <div className="flex gap-8 mb-4">
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">{mockFollowers}</span>
            <span className="text-xs text-gray-500">ผู้ติดตาม</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">{mockFollowing}</span>
            <span className="text-xs text-gray-500">กำลังติดตาม</span>
          </div>
        </div>

        {/* ปุ่ม Follow (แสดงเฉพาะถ้าเป็นโปรไฟล์คนอื่น) */}
        {/* <Button className="mb-4">ติดตาม</Button> */}

        {/* ข้อมูลเพิ่มเติม (mock) */}
        <div className="text-xs text-gray-400 mb-2">Bangkok, Thailand</div>
        <div className="flex gap-2 mb-4">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-xs"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline text-xs"
          >
            Instagram
          </a>
        </div>

        {/* Debug: User object */}
        <pre className="bg-gray-100 rounded p-2 text-xs w-full overflow-x-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}
