'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Home, 
  PawPrint, 
  Bell, 
  MessageCircle, 
  Compass, 
  Bookmark, 
  Settings, 
  Users
} from 'lucide-react';

export default function SidebarNav() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/explore', label: 'Explore', icon: Compass },
    { href: '/notifications', label: 'Notifications', icon: Bell },
    { href: '/messages', label: 'Messages', icon: MessageCircle },
    { href: '/saved', label: 'Saved', icon: Bookmark },
    { href: '/pets', label: 'My Pets', icon: PawPrint },
    { href: '/friends', label: 'Pet Friends', icon: Users },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];
  
  return (
    <div className="h-full flex flex-col">
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-1 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.href}
                variant={pathname === item.href ? 'secondary' : 'ghost'}
                className="justify-start"
                asChild
              >
                <Link href={item.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </div>
        
        <div className="mt-6 pt-6 border-t">
          <h3 className="px-4 text-sm font-medium mb-2">Your Pets</h3>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/pets/luna">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Luna" />
                  <AvatarFallback>L</AvatarFallback>
                </Avatar>
                Luna
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/pets/max">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Max" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                Max
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-primary">
              <PawPrint className="h-4 w-4 mr-2" />
              Add Pet
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}