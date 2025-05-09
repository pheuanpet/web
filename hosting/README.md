# Pheuanpet Web

เว็บแอปพลิเคชันสำหรับโครงการ Pheuanpet พัฒนาด้วย [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) และ [Tailwind CSS](https://tailwindcss.com/)

## Features

- Next.js 14 (latest)
- TypeScript
- Tailwind CSS + Typography plugin
- Firebase integration
- ESLint & Prettier พร้อม config สำหรับ Next.js/TypeScript

## โครงสร้างโปรเจกต์

```
hosting/
├── src/                # Source code หลัก (components, pages, etc.)
├── public/             # Static files
├── package.json        # รายการ dependencies และ scripts
├── tailwind.config.js  # Tailwind CSS config
├── postcss.config.js   # PostCSS config
├── next.config.js      # Next.js config
├── tsconfig.json       # TypeScript config
├── eslint.config.mjs   # ESLint config
└── README.md           # ไฟล์นี้
```

## วิธีติดตั้งและใช้งาน

1. ติดตั้ง dependencies

   ```bash
   yarn install
   # หรือ
   npm install
   ```

2. รัน development server

   ```bash
   yarn dev
   # หรือ
   npm run dev
   ```

3. ตรวจสอบโค้ดด้วย ESLint

   ```bash
   yarn lint
   # หรือ
   npm run lint
   ```

## การ build สำหรับ production

```bash
yarn build
# หรือ
npm run build
```

## การ deploy

แนะนำให้ deploy ด้วย [Vercel](https://vercel.com/) หรือโฮสติ้งที่รองรับ Next.js

## License

MIT

---

> สอบถามหรือแจ้งปัญหา ติดต่อทีมงาน Pheuanpet
