import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full max-w-[768px] flex items-center justify-end gap-2 px-4 py-3 bg-white shadow-sm sticky top-0 z-10">
      <Link
        href="/search"
        className="p-2 rounded hover:bg-gray-100 transition text-gray-700"
        aria-label="ค้นหา"
      >
        <Icon icon="lucide:search" width={24} height={24} />
      </Link>
      <Link
        href="/profile"
        className="p-2 rounded hover:bg-gray-100 transition text-gray-700"
        aria-label="Profile"
      >
        <Icon icon="lucide:user" width={24} height={24} />
      </Link>
      <button
        type="button"
        className="p-2 rounded hover:bg-gray-100 transition text-gray-700"
        aria-label="เมนู"
      >
        <Icon icon="lucide:menu" width={24} height={24} />
      </button>
    </header>
  );
};

export { Header };
