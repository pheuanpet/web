# Pheuanpet Web

เว็บแอปพลิเคชันสำหรับโครงการ Pheuanpet พัฒนาด้วย [Next.js](https://nextjs.org/) และ [React](https://react.dev/)

## Features

- Next.js 15 (App Router)
- TypeScript
- ใช้ UI Components จาก [shadcn/ui](https://ui.shadcn.com/)
- รองรับ Icon จาก [lucide-react](https://lucide.dev/) และ [@iconify/react](https://iconify.design/)
- จัดการ style ด้วย Tailwind Merge (ถ้ามี)
- Lint และ Format ด้วย ESLint + Prettier

## Getting Started

1. ติดตั้ง dependencies

   ```bash
   yarn install
   ```

2. รัน development server

   ```bash
   yarn dev
   ```

3. เปิด [http://localhost:3000](http://localhost:3000) ใน browser

4. แก้ไขไฟล์ใน `src/app/` หรือ `src/components/` แล้วบันทึก หน้าเว็บจะอัปเดตอัตโนมัติ

## Project Structure

```
hosting/
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # UI components
│   └── ...            # Other source files
├── public/            # Static files
├── package.json
├── tsconfig.json
└── README.md
```

## Useful Scripts

- `yarn dev` – รัน dev server
- `yarn build` – สร้าง production build
- `yarn start` – รัน production server
- `yarn lint` – ตรวจสอบคุณภาพโค้ด

## Deploy

แนะนำให้ deploy ด้วย [Vercel](https://vercel.com/) หรือโฮสติ้งที่รองรับ Next.js  
ดูวิธี deploy เพิ่มเติมที่ [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)

---

> หากมีข้อสงสัยหรือพบปัญหา ติดต่อทีมงาน Pheuanpet
