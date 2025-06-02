'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PawPrint, Search, BellRing, Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isLoggedIn = true; // For demo purposes
  
  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b shadow-sm' 
          : 'bg-background'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <PawPrint className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">PheuanPet</span>
            </Link>
          </div>
          
          {/* Search - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search pets, people, or posts..."
                className="w-full pl-9 bg-muted/50"
              />
            </div>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/messages">
                    <BellRing className="h-5 w-5" />
                  </Link>
                </Button>
                <ThemeToggle />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Sarah Johnson</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          @sarahj
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Sign up</Link>
                </Button>
                <ThemeToggle />
              </>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-9"
              />
            </div>
            
            {isLoggedIn ? (
              <div className="space-y-3">
                <div className="flex items-center space-x-3 px-2 py-1">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">@sarahj</p>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-1">
                  <Link 
                    href="/" 
                    className={`px-2 py-1.5 text-sm rounded-md ${
                      pathname === '/' ? 'bg-muted font-medium' : ''
                    }`}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/profile" 
                    className={`px-2 py-1.5 text-sm rounded-md ${
                      pathname === '/profile' ? 'bg-muted font-medium' : ''
                    }`}
                  >
                    Profile
                  </Link>
                  <Link 
                    href="/notifications" 
                    className={`px-2 py-1.5 text-sm rounded-md ${
                      pathname === '/notifications' ? 'bg-muted font-medium' : ''
                    }`}
                  >
                    Notifications
                  </Link>
                  <Link 
                    href="/messages" 
                    className={`px-2 py-1.5 text-sm rounded-md ${
                      pathname === '/messages' ? 'bg-muted font-medium' : ''
                    }`}
                  >
                    Messages
                  </Link>
                  <Link 
                    href="/settings" 
                    className={`px-2 py-1.5 text-sm rounded-md ${
                      pathname === '/settings' ? 'bg-muted font-medium' : ''
                    }`}
                  >
                    Settings
                  </Link>
                </nav>
                
                <div className="pt-2">
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                    Log out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/register">Create account</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}