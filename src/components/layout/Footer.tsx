import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='border-t mt-12'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='md:col-span-1'>
            <Link href='/' className='flex items-center space-x-2'>
              <PawPrint className='h-5 w-5 text-primary' />
              <span className='font-bold text-lg'>PheuanPet</span>
            </Link>
            <p className='mt-2 text-sm text-muted-foreground'>
              Connect with fellow pet lovers and share your furry friends&apos;
              adventures.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3'>
            <div className='space-y-3'>
              <h3 className='text-sm font-medium'>Product</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    Premium
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className='space-y-3'>
              <h3 className='text-sm font-medium'>Company</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div className='space-y-3'>
              <h3 className='text-sm font-medium'>Legal</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-xs text-muted-foreground'>
            &copy; {new Date().getFullYear()} PheuanPet. All rights reserved.
          </p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Twitter
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Instagram
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Facebook
            </Link>
            <Link
              href='#'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
