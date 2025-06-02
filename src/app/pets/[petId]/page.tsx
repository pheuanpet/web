import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import FeedPostCard from '@/components/feed/FeedPostCard';
import { mockPosts } from '@/lib/mock-data';
import { Heart, Share2, Star, Cake, Award, MapPin, Pencil } from 'lucide-react';

// Add generateStaticParams function to pre-generate routes
export async function generateStaticParams() {
  // Define the pet IDs that should be pre-rendered
  // This should match your actual pet data
  return [
    { petId: 'luna' },
    { petId: 'max' },
    { petId: 'bella' },
    { petId: 'charlie' }
  ];
}

export default function PetProfilePage({ params }: { params: { petId: string } }) {
  // Mock pet data
  const pet = {
    id: params.petId,
    name: 'Luna',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '3 years',
    bio: 'Friendly and playful golden retriever who loves outdoor adventures, tennis balls, and belly rubs. Always ready for a swim!',
    location: 'Portland, OR',
    birthday: 'April 15, 2020',
    owner: {
      id: '1',
      name: 'Sarah Johnson',
      username: 'sarahj',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    followers: 856,
    awards: ['Best Smile', 'Fetch Champion'],
    avatar: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600',
    coverImage: 'https://images.pexels.com/photos/1144410/pexels-photo-1144410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  };

  return (
    <div className="container mx-auto px-4">
      {/* Cover image */}
      <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-b-lg overflow-hidden mb-16 md:mb-20">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${pet.coverImage})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        
        {/* Profile image - positioned to overlap */}
        <div className="absolute -bottom-16 left-4 md:left-8">
          <Avatar className="h-32 w-32 border-4 border-background">
            <AvatarImage src={pet.avatar} alt={pet.name} />
            <AvatarFallback>{pet.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        
        {/* Action buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button size="sm">
            <Heart className="h-4 w-4 mr-2" />
            Follow
          </Button>
        </div>
      </div>
      
      {/* Profile info */}
      <div className="px-4 md:px-8 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          <div className="mt-2 md:mt-0">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">{pet.name}</h1>
              <Badge variant="outline" className="text-xs py-0">
                <Star className="h-3 w-3 mr-1 fill-yellow-400 stroke-yellow-400" />
                Verified Pet
              </Badge>
            </div>
            <p className="text-muted-foreground">{pet.breed} • {pet.age}</p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <div className="flex items-center mr-4">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src={pet.owner.avatar} alt={pet.owner.name} />
                <AvatarFallback>{pet.owner.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm">Owner: @{pet.owner.username}</span>
            </div>
            <Button variant="ghost" size="sm">
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>
        
        <div className="mt-4 max-w-2xl">
          <p className="mb-3">{pet.bio}</p>
          <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {pet.location}
            </div>
            <div className="flex items-center">
              <Cake className="h-4 w-4 mr-1" />
              Born {pet.birthday}
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Awards & Achievements</h3>
          <div className="flex flex-wrap gap-2">
            {pet.awards.map((award, index) => (
              <Badge key={index} variant="secondary" className="flex items-center">
                <Award className="h-3 w-3 mr-1" />
                {award}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4 mt-6">
          <div className="text-sm">
            <span className="font-medium">{pet.followers}</span>{' '}
            <span className="text-muted-foreground">Followers</span>
          </div>
        </div>
      </div>
      
      {/* Tabs for different content sections */}
      <Tabs defaultValue="posts" className="px-4 md:px-8">
        <TabsList className="mb-6">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="friends">Pet Friends</TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="space-y-6">
          {mockPosts
            .filter((_, index) => index < 3)
            .map(post => (
              <FeedPostCard key={post.id} post={{...post, author: pet.owner}} />
            ))
          }
        </TabsContent>
        
        <TabsContent value="photos">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-md">
                <img 
                  src={`https://images.pexels.com/photos/${1800000 + item * 50}/pexels-photo-${1800000 + item * 50}.jpeg?auto=compress&cs=tinysrgb&w=300`} 
                  alt={`${pet.name} photo ${item}`}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Video content placeholder</p>
            </div>
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Video content placeholder</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="friends">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <Avatar className="h-20 w-20 mb-2">
                  <AvatarImage 
                    src={`https://images.pexels.com/photos/${2200000 + item * 50}/pexels-photo-${2200000 + item * 50}.jpeg?auto=compress&cs=tinysrgb&w=300`} 
                    alt={`Pet friend ${item}`}
                  />
                  <AvatarFallback>PF</AvatarFallback>
                </Avatar>
                <h3 className="font-medium text-sm">Buddy {item}</h3>
                <p className="text-xs text-muted-foreground">Labrador • 2 years</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}