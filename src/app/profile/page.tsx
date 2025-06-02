import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { mockPosts } from '@/lib/mock-data';
import FeedPostCard from '@/components/feed/FeedPostCard';
import { UserPlus, Mail, MapPin, Calendar, Pencil } from 'lucide-react';

export default function ProfilePage() {
  // Mock user data
  const user = {
    id: '1',
    name: 'Sarah Johnson',
    username: 'sarahj',
    bio: 'Pet lover, dog mom to Luna & Max. Adventure seeker and amateur photographer.',
    location: 'Portland, OR',
    joinedDate: 'March 2023',
    following: 245,
    followers: 1024,
    postsCount: 86,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    coverImage: 'https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  };

  return (
    <div className="container mx-auto px-4">
      {/* Cover image */}
      <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-b-lg overflow-hidden mb-16 md:mb-20">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${user.coverImage})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        
        {/* Profile image - positioned to overlap */}
        <div className="absolute -bottom-16 left-4 md:left-8">
          <Avatar className="h-32 w-32 border-4 border-background">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        
        {/* Action buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
            <Mail className="h-4 w-4 mr-2" />
            Message
          </Button>
          <Button size="sm">
            <UserPlus className="h-4 w-4 mr-2" />
            Follow
          </Button>
        </div>
      </div>
      
      {/* Profile info */}
      <div className="px-4 md:px-8 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          <div className="mt-2 md:mt-0">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-muted-foreground">@{user.username}</p>
          </div>
          <Button variant="ghost" size="sm" className="self-start md:self-auto mt-4 md:mt-0">
            <Pencil className="h-4 w-4 mr-2" />
            Edit profile
          </Button>
        </div>
        
        <div className="mt-4 max-w-2xl">
          <p className="mb-3">{user.bio}</p>
          <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {user.location}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              Joined {user.joinedDate}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mt-6">
          <div className="text-sm">
            <span className="font-medium">{user.following}</span>{' '}
            <span className="text-muted-foreground">Following</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">{user.followers}</span>{' '}
            <span className="text-muted-foreground">Followers</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">{user.postsCount}</span>{' '}
            <span className="text-muted-foreground">Posts</span>
          </div>
        </div>
      </div>
      
      {/* Tabs for different content sections */}
      <Tabs defaultValue="posts" className="px-4 md:px-8">
        <TabsList className="mb-6">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="pets">Pets</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="space-y-6">
          {mockPosts
            .filter(post => post.author.id === user.id)
            .map(post => (
              <FeedPostCard key={post.id} post={post} />
            ))
          }
        </TabsContent>
        
        <TabsContent value="pets">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <img 
                  src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Luna the dog"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Luna</h3>
                <p className="text-muted-foreground text-sm">Golden Retriever • 3 years</p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <img 
                  src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Max the dog"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Max</h3>
                <p className="text-muted-foreground text-sm">Border Collie • 2 years</p>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="media">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-md">
                <img 
                  src={`https://images.pexels.com/photos/${1000000 + item * 50}/pexels-photo-${1000000 + item * 50}.jpeg?auto=compress&cs=tinysrgb&w=300`} 
                  alt={`Pet gallery image ${item}`}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="likes">
          <div className="space-y-6">
            {mockPosts
              .slice(0, 3)
              .map(post => (
                <FeedPostCard key={post.id} post={post} />
              ))
            }
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}