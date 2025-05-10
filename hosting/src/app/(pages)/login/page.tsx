import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

export default function Page() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Login Section (40%) */}
      <div
        style={{
          flex: '0 0 40%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          background: '#fff',
        }}
      >
        <div style={{ width: '100%', maxWidth: 350 }}>
          <h2 style={{ marginBottom: '2rem' }}>เข้าสู่ระบบ</h2>
          <form>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginTop: '0.25rem',
                  borderRadius: 4,
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  marginTop: '0.25rem',
                  borderRadius: 4,
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <a href='#' style={{ fontSize: 14, color: '#0070f3' }}>
                ลืมรหัสผ่าน?
              </a>
              <a href='/register' style={{ fontSize: 14, color: '#0070f3' }}>
                สมัครสมาชิก
              </a>
            </div>
            <button
              type='submit'
              style={{
                width: '100%',
                padding: '0.75rem',
                background: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
            >
              เข้าสู่ระบบ
            </button>
          </form>
          <div style={{ textAlign: 'center', margin: '1rem 0' }}>
            หรือเข้าสู่ระบบด้วย
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <Button>
              <Icon icon={'devicon:google'} />
              Google
            </Button>

            <button
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: 4,
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                justifyContent: 'center',
              }}
            >
              <img src='/facebook.svg' alt='Facebook' width={20} height={20} />
              Facebook
            </button>
            <button
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: 4,
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                justifyContent: 'center',
              }}
            >
              <img src='/apple.svg' alt='Apple' width={20} height={20} />
              Apple
            </button>
          </div>
        </div>
      </div>
      {/* Image Section (60%) */}
      <div
        style={{
          flex: '0 0 60%',
          background: "url('/login-image.jpg') center center / cover no-repeat",
        }}
      >
        {/* คุณสามารถเปลี่ยน '/login-image.jpg' เป็น path รูปที่ต้องการ */}
      </div>
    </div>
  );
}
