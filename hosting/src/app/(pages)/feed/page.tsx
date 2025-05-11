import Image from 'next/image';

const mockPosts = [
  {
    id: 1,
    user: {
      name: 'Meow Lover',
      avatar: '/logo.png',
    },
    image: '/logo.png',
    content: 'วันนี้น้องเหมียวอารมณ์ดีมาก 😻',
    time: '2 ชั่วโมงที่แล้ว',
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    user: {
      name: 'Doggy Dad',
      avatar: '/logo.png',
    },
    image: '/logo.png',
    content: 'พาน้องหมาไปเดินเล่นที่สวน สนุกมาก!',
    time: '1 ชั่วโมงที่แล้ว',
    likes: 20,
    comments: 5,
  },
];

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full max-w-[768px] mx-auto py-4 gap-4">
      {mockPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow p-4 w-full  flex flex-col gap-3"
        >
          {/* User Info */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={post.user.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <div className="font-semibold">{post.user.name}</div>
              <div className="text-xs text-gray-400">{post.time}</div>
            </div>
          </div>
          {/* Post Image */}
          <div className="w-full aspect-square relative rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/logo.png"
              alt="post"
              fill
              className="object-cover"
              sizes="(max-width: 500px) 100vw, 500px"
            />
          </div>
          {/* Content */}
          <div className="text-base">{post.content}</div>
          {/* Actions */}
          <div className="flex gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <span role="img" aria-label="like">
                ❤️
              </span>
              {post.likes}
            </div>
            <div className="flex items-center gap-1">
              <span role="img" aria-label="comment">
                💬
              </span>
              {post.comments}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
