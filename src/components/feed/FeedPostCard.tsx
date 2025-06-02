'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle, Share2, MoreHorizontal, Send } from 'lucide-react';
import { Post } from '@/lib/types';

interface FeedPostCardProps {
  post: Post;
}

export default function FeedPostCard({ post }: FeedPostCardProps) {
  const [liked, setLiked] = useState(post.isLiked || false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [isCommenting, setIsCommenting] = useState(false);
  const [comment, setComment] = useState('');
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  
  const handleComment = () => {
    setIsCommenting(!isCommenting);
  };
  
  const submitComment = () => {
    if (comment.trim()) {
      // Here you would submit the comment to your API
      console.log('Submitting comment:', comment);
      setComment('');
      setIsCommenting(false);
    }
  };

  return (
    <Card>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center">
                <Link href={`/profile/${post.author.id}`} className="font-medium hover:underline">
                  {post.author.name}
                </Link>
                {post.pet && (
                  <>
                    <span className="mx-1 text-muted-foreground">with</span>
                    <Link href={`/pets/${post.pet.id}`} className="font-medium hover:underline">
                      {post.pet.name}
                    </Link>
                  </>
                )}
              </div>
              <div className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
              </div>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="mb-3">
          <p>{post.content}</p>
        </div>
        
        {post.image && (
          <div className="rounded-md overflow-hidden mt-3">
            <img 
              src={post.image} 
              alt="Post" 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-col">
        <div className="flex items-center justify-between w-full text-muted-foreground text-sm">
          <div className="flex space-x-2">
            <span>{likeCount} likes</span>
            <span>•</span>
            <span>{post.comments.length} comments</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between w-full mt-2 pt-2 border-t">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex-1 ${liked ? 'text-red-500' : ''}`}
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-red-500' : ''}`} />
            Like
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1"
            onClick={handleComment}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Comment
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
        
        {isCommenting && (
          <div className="mt-3 pt-3 border-t w-full">
            <div className="flex space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1 flex">
                <Textarea
                  placeholder="Write a comment..."
                  className="min-h-[60px] flex-1"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      submitComment();
                    }
                  }}
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="ml-2 self-end"
                  onClick={submitComment}
                  disabled={!comment.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {post.comments.length > 0 && (
              <div className="mt-4 space-y-3">
                {post.comments.map((comment, index) => (
                  <div key={index} className="flex space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                      <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="bg-muted p-2 rounded-md">
                        <div className="font-medium text-sm">{comment.author.name}</div>
                        <p className="text-sm">{comment.content}</p>
                      </div>
                      <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                        <span>{formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}</span>
                        <button className="hover:text-foreground">Like</button>
                        <button className="hover:text-foreground">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}