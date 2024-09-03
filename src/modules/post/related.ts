import type { Post } from '@/types/post';

export function getRelatedPosts({ posts, relatedSlugs }: { posts: Post[], relatedSlugs: string[] }) {
  return posts.filter(post => relatedSlugs.includes(post.slug)).slice(0, 3);
}