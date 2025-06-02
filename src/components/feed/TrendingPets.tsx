import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

export default function TrendingPets() {
  // Mock trending pets data
  const trendingPets = [
    {
      id: '1',
      name: 'Charlie',
      breed: 'French Bulldog',
      followers: 1240,
      avatar: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '2',
      name: 'Bella',
      breed: 'Siamese Cat',
      followers: 956,
      avatar: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '3',
      name: 'Cooper',
      breed: 'Golden Retriever',
      followers: 872,
      avatar: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '4',
      name: 'Luna',
      breed: 'Maine Coon',
      followers: 735,
      avatar: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center">
          <TrendingUp className="h-4 w-4 mr-2 text-primary" />
          <CardTitle className="text-base">Trending Pets</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-4">
          {trendingPets.map((pet) => (
            <div key={pet.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={pet.avatar} alt={pet.name} />
                  <AvatarFallback>{pet.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <Link 
                    href={`/pets/${pet.id}`} 
                    className="font-medium text-sm hover:underline"
                  >
                    {pet.name}
                  </Link>
                  <p className="text-xs text-muted-foreground">{pet.breed}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Follow
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <Button variant="ghost" className="w-full text-primary justify-center text-sm">
            See more
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}