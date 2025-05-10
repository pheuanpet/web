'use client';

import { Icon } from '@iconify/react';
import { FirebaseError } from 'firebase/app';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

import { auth } from '@/config/firebase-config';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        if (err.code === 'auth/invalid-credential') {
          setError('Invalid email or password.');
        }
        if (err.code === 'auth/too-many-requests') {
          setError('Too many login attempts. Please try again later.');
        } else setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setError('');
    // setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: unknown) {
      if (err instanceof FirebaseError) setError(err.message);
      else setError('An unknown error occurred.');
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      <h2 className="flex flex-col items-center mb-8">
        <span className="mb-2">
          <Image src="/logo.png" alt="Pheuanpet" width={100} height={100} />
        </span>
        <span className="text-2xl font-bold tracking-tight text-gray-800">
          pheuan pet
        </span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2 relative">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-8 text-gray-500"
          >
            {showPassword ? (
              <Icon icon="mdi:eye-off" width={20} height={20} />
            ) : (
              <Icon icon="mdi:eye" width={20} height={20} />
            )}
          </button>
        </div>
        <div className="mb-2">
          {error && <div className="text-red-500 text-sm ">{error}</div>}
        </div>
        <div className="flex justify-between items-center mb-6">
          <Link href="#" className="text-xs text-blue-600 hover:underline">
            ลืมรหัสผ่าน?
          </Link>
          <Link
            href="/register"
            className="text-xs text-blue-600 hover:underline"
          >
            สมัครสมาชิก
          </Link>
        </div>
        <Button type="submit" className="w-full mb-4">
          {loading ? (
            <div className="flex items-center justify-center">
              <Icon
                icon="material-symbols:loading"
                className="animate-spin"
                width={20}
                height={20}
              />
              <span className="ml-2">กำลังเข้าสู่ระบบ...</span>
            </div>
          ) : (
            <span>เข้าสู่ระบบ</span>
          )}
        </Button>
      </form>
      <div className="text-center text-sm text-gray-500 my-4">
        หรือเข้าสู่ระบบด้วย
      </div>
      <div className="flex flex-col gap-2">
        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center gap-2 justify-center"
          onClick={loginWithGoogle}
        >
          <Icon icon="devicon:google" width={20} height={20} />
          Google
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 justify-center"
        >
          <Icon icon="logos:facebook" width={20} height={20} />
          Facebook
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 justify-center"
        >
          <Icon icon="devicon:apple" width={20} height={20} />
          Apple
        </Button>
      </div>
    </>
  );
}
