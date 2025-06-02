import { Post } from './types';

export const mockPosts: Post[] = [
  {
    id: '1',
    content: "Luna's first day at the beach! She absolutely loved playing in the waves and digging in the sand. We'll definitely be back next weekend! 🐕🌊",
    image: 'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      username: 'sarahj',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    pet: {
      id: '1',
      name: 'Luna',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '3 years',
      avatar: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600',
      owner: {
        id: '1',
        name: 'Sarah Johnson',
        username: 'sarahj',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    },
    createdAt: '2023-08-15T14:23:45Z',
    likes: 126,
    comments: [
      {
        id: '1',
        content: "She looks so happy! What a beautiful day for the beach.",
        author: {
          id: '2',
          name: 'Michael Chen',
          username: 'mikechen',
          avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        createdAt: '2023-08-15T15:12:32Z'
      },
      {
        id: '2',
        content: "My dog would love to join for a beach playdate!",
        author: {
          id: '3',
          name: 'Emily Wilson',
          username: 'emwilson',
          avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        createdAt: '2023-08-15T16:45:10Z'
      }
    ]
  },
  {
    id: '2',
    content: "Max finally mastered his 'stay' command today! So proud of this smart boy. Anyone have tips for teaching 'roll over' next?",
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      username: 'sarahj',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    pet: {
      id: '2',
      name: 'Max',
      type: 'Dog',
      breed: 'Border Collie',
      age: '2 years',
      avatar: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600',
      owner: {
        id: '1',
        name: 'Sarah Johnson',
        username: 'sarahj',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    },
    createdAt: '2023-08-12T09:15:22Z',
    likes: 94,
    comments: [
      {
        id: '3',
        content: "Try using a treat to guide him through the motion. Be patient and break it down into small steps.",
        author: {
          id: '4',
          name: 'James Rodriguez',
          username: 'jrod',
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        createdAt: '2023-08-12T10:05:18Z'
      }
    ]
  },
  {
    id: '3',
    content: "Whiskers has claimed this new cat tree as his kingdom. It's like he thinks he's a real lion surveying his territory! 😹",
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: {
      id: '3',
      name: 'Emily Wilson',
      username: 'emwilson',
      avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    pet: {
      id: '3',
      name: 'Whiskers',
      type: 'Cat',
      breed: 'Tabby',
      age: '4 years',
      avatar: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600',
      owner: {
        id: '3',
        name: 'Emily Wilson',
        username: 'emwilson',
        avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    },
    createdAt: '2023-08-10T18:33:12Z',
    likes: 152,
    comments: [
      {
        id: '4',
        content: "My cat does the same thing! Always has to be at the highest point in the room.",
        author: {
          id: '5',
          name: 'Lisa Park',
          username: 'lpark',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        createdAt: '2023-08-10T19:14:45Z'
      },
      {
        id: '5',
        content: "What brand of cat tree is that? Looking for one for my kitten.",
        author: {
          id: '2',
          name: 'Michael Chen',
          username: 'mikechen',
          avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        createdAt: '2023-08-10T20:22:38Z'
      },
      {
        id: '6',
        content: "So cute! Whiskers is living his best life.",
        author: {
          id: '1',
          name: 'Sarah Johnson',
          username: 'sarahj',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        createdAt: '2023-08-11T07:05:12Z'
      }
    ]
  },
  {
    id: '4',
    content: "Just got back from our morning run. Buddy keeps me motivated even on the toughest days! Who else exercises with their pet?",
    image: 'https://images.pexels.com/photos/2796879/pexels-photo-2796879.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: {
      id: '4',
      name: 'James Rodriguez',
      username: 'jrod',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    pet: {
      id: '4',
      name: 'Buddy',
      type: 'Dog',
      breed: 'Labrador Retriever',
      age: '5 years',
      avatar: 'https://images.pexels.com/photos/2796879/pexels-photo-2796879.jpeg?auto=compress&cs=tinysrgb&w=600',
      owner: {
        id: '4',
        name: 'James Rodriguez',
        username: 'jrod',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    },
    createdAt: '2023-08-09T07:45:30Z',
    likes: 86,
    comments: [
      {
        id: '7',
        content: "I take my husky hiking on weekends. It's great exercise for both of us!",
        author: {
          id: '6',
          name: 'David Kim',
          username: 'dkim',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        createdAt: '2023-08-09T08:12:55Z'
      }
    ]
  }
];