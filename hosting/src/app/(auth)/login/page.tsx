'use client';
import React from 'react';
import Image from 'next/image';

import { LoginForm } from '@/components/auth/LoginFrom';
export default function Page() {
  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      <div className="flex flex-col justify-center items-center w-full max-w-md px-8 py-12 bg-white shadow-md">
        <div className="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center bg-cover bg-center">
        <Image src="/logo.png" alt="Pheuanpet" width={100} height={100} />
      </div>
    </div>
  );
}
