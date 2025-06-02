'use client';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PawPrint, Plus } from 'lucide-react';
import Link from 'next/link';

export default function PetsPage() {
  // Mock pets data
  const pets = [
    {
      id: '1',
      name: 'Luna',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '3 years',
      avatar:
        'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '2',
      name: 'Max',
      type: 'Dog',
      breed: 'Border Collie',
      age: '2 years',
      avatar:
        'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>My Pets</h1>
        <Button>
          <Plus className='h-4 w-4 mr-2' />
          Add Pet
        </Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {pets.map((pet) => (
          <Link key={pet.id} href={`/pets/${pet.id}`}>
            <Card className='hover:shadow-lg transition-shadow'>
              <div className='aspect-square relative'>
                <img
                  src={pet.avatar}
                  alt={pet.name}
                  className='object-cover w-full h-full rounded-t-lg'
                />
              </div>
              <div className='p-4'>
                <h3 className='font-semibold text-lg'>{pet.name}</h3>
                <p className='text-muted-foreground'>
                  {pet.breed} • {pet.age}
                </p>
              </div>
            </Card>
          </Link>
        ))}

        <Card className='flex items-center justify-center aspect-square hover:bg-muted/50 transition-colors cursor-pointer border-dashed'>
          <div className='text-center'>
            <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3'>
              <PawPrint className='h-6 w-6 text-primary' />
            </div>
            <h3 className='font-medium'>Add a New Pet</h3>
            <p className='text-sm text-muted-foreground mt-1'>
              Share your pet&apos;s journey
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
