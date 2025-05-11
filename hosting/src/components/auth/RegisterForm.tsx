'use client';

import { Icon } from '@iconify/react';
import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

import { auth } from '@/config/firebase-config';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน');
      return;
    }
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        setError(err.message);
      } else {
        setError('เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ');
      }
    } finally {
      setLoading(false);
    }
  };

  const registerWithGoogle = async () => {
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: unknown) {
      if (err instanceof FirebaseError) setError(err.message);
      else setError('เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ');
    }
  };

  return (
    <div className="max-w-xs mx-auto w-full">
      <div className="flex flex-col items-center mb-8">
        <Image src="/logo.png" alt="Pheuanpet" width={80} height={80} />
        <span className="text-2xl font-bold tracking-tight text-gray-800 mt-2">
          PheuanPet
        </span>
        <span className="text-xs text-gray-500 mt-1">
          แพลตฟอร์มโซเชียลสำหรับคนรักสัตว์
        </span>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            อีเมล
          </label>
          <Input
            id="email"
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            รหัสผ่าน
          </label>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-8 text-gray-500"
            tabIndex={-1}
          >
            {showPassword ? (
              <Icon icon="mdi:eye-off" width={20} height={20} />
            ) : (
              <Icon icon="mdi:eye" width={20} height={20} />
            )}
          </button>
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium mb-1"
          >
            ยืนยันรหัสผ่าน
          </label>
          <Input
            id="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            required
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" className="w-full">
          {loading ? (
            <div className="flex items-center justify-center">
              <Icon
                icon="material-symbols:loading"
                className="animate-spin"
                width={20}
                height={20}
              />
              <span className="ml-2">กำลังสมัครสมาชิก...</span>
            </div>
          ) : (
            <span>สมัครสมาชิก</span>
          )}
        </Button>
      </form>
      <div className="text-center text-sm text-gray-500 my-4">
        หรือสมัครด้วย
      </div>
      <div className="flex flex-col gap-2">
        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center gap-2 justify-center"
          onClick={registerWithGoogle}
        >
          <Icon icon="devicon:google" width={20} height={20} />
          สมัครด้วย Google
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 justify-center"
          disabled
        >
          <Icon icon="logos:facebook" width={20} height={20} />
          สมัครด้วย Facebook
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 justify-center"
          disabled
        >
          <Icon icon="devicon:apple" width={20} height={20} />
          สมัครด้วย Apple
        </Button>
      </div>
      <div className="text-center text-xs text-gray-500 mt-6">
        มีบัญชีอยู่แล้ว?{' '}
        <Link href="/login" className="text-blue-600 hover:underline">
          เข้าสู่ระบบ
        </Link>
      </div>
    </div>
  );
}
