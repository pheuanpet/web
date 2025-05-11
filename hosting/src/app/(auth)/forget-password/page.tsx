'use client';

import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import Link from 'next/link';

import { auth } from '@/config/firebase-config';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSent(false);
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setSent(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err: unknown) {
      setError('ไม่พบอีเมลนี้ในระบบ หรือเกิดข้อผิดพลาด');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xs flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">ลืมรหัสผ่าน</h2>
        <p className="text-gray-600 text-sm mb-4 text-center">
          กรอกอีเมลที่ใช้สมัครสมาชิก ระบบจะส่งลิงก์สำหรับรีเซ็ตรหัสผ่านไปให้คุณ
        </p>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <Input
            type="email"
            placeholder="อีเมลของคุณ"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {sent && (
            <div className="text-green-600 text-sm">
              ส่งอีเมลรีเซ็ตรหัสผ่านเรียบร้อยแล้ว กรุณาตรวจสอบอีเมลของคุณ
            </div>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'กำลังส่ง...' : 'ส่งลิงก์รีเซ็ตรหัสผ่าน'}
          </Button>
        </form>
        <Link
          href="/login"
          className="text-xs text-blue-600 hover:underline mt-6"
        >
          กลับไปหน้าเข้าสู่ระบบ
        </Link>
      </div>
    </div>
  );
}
