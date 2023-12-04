import { useEffect, useState } from "react";
import { Card, Divider, Flex, Metric, Textarea, Title, Button } from "@tremor/react";

import { MainLayout } from "../components/MainLayout";
import { listPost } from "../api/blog/listPost";
import { createPost } from "../api/blog/createPost";
import { Post } from "../components/Post";
import toast from "react-hot-toast";

export default function Blog({ user, shelterId, shelterName }) {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await listPost(shelterId);

        posts.sort((a, b) => {
          const timeA = new Date(a.created_at);
          const timeB = new Date(b.created_at);
          
          return timeB - timeA;
        });

        setPosts(posts)
      } catch {
        toast.error("Failed to get posts");
      }
    }

    fetchPosts();
  }, [shelterId])

  const handlePost = async () => {
    try {
      if (!message) {
        toast.error("Post cannot be blank");
        return
      }

      await createPost(message);
      window.location.reload();
    } catch {
      toast.error("Failed to create post");
    }
  }

  return (
    <MainLayout user={user}>
      <Metric>{shelterName}'s Blog</Metric>
      <div className='flex flex-col gap-4 mt-6'>
        <Card>
          <Title>Create Post</Title>
          <Textarea className='mt-2' value={message} onChange={(e) => setMessage(e.target.value)} />
          <Divider/>
          <Flex justifyContent='end' alignItems='center'>
            <Button onClick={handlePost}>Post</Button>
          </Flex>
        </Card>
        {posts.map((post) => {
          return (
            <Post user={user} post={post} key={post.id}/>
          )
        })}
      </div>
    </MainLayout>
  );
}