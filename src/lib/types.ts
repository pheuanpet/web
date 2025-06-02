export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  location?: string;
  joinedDate?: string;
  following?: number;
  followers?: number;
  postsCount?: number;
}

export interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: string;
  bio?: string;
  avatar: string;
  owner: User;
}

export interface Comment {
  id?: string;
  content: string;
  author: User;
  createdAt: string;
  likes?: number;
}

export interface Post {
  id: string;
  content: string;
  image?: string;
  author: User;
  pet?: Pet;
  createdAt: string;
  likes: number;
  comments: Comment[];
  isLiked?: boolean;
}