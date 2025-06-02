import { Button } from '@/components/ui/button';
import FeedPostCard from '@/components/feed/FeedPostCard';
import SidebarNav from '@/components/layout/SidebarNav';
import TrendingPets from '@/components/feed/TrendingPets';
import { mockPosts } from '@/lib/mock-data';

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {/* Sidebar - Hidden on mobile */}
        <div className='hidden md:block md:col-span-1'>
          <SidebarNav />
        </div>

        {/* Main feed */}
        <div className='col-span-1 md:col-span-2'>
          <div className='mb-6 bg-card rounded-lg shadow-sm p-4'>
            <h2 className='text-lg font-semibold mb-3'>Share a moment</h2>
            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 rounded-full bg-muted flex items-center justify-center'>
                <span className='text-muted-foreground'>You</span>
              </div>
              <Button
                variant='outline'
                className='w-full justify-start text-muted-foreground h-12 px-4'
              >
                What&apos;s your pet up to?
              </Button>
            </div>
          </div>

          <div className='space-y-6'>
            {mockPosts.map((post) => (
              <FeedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right sidebar - Trending */}
        <div className='hidden lg:block lg:col-span-1'>
          <TrendingPets />
        </div>
      </div>
    </div>
  );
}
