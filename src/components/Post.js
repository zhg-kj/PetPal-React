import { useEffect, useState } from "react";
import { Card, Divider, Text, Flex, Button, TextInput, Title } from "@tremor/react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

import { createComment } from "../api/blog/createComment";
import { checkLike } from "../api/blog/checkLike";
import { like } from "../api/blog/like";
import { unlike } from "../api/blog/unlike";
import toast from "react-hot-toast";

export const Post = ({ user, post }) => {
  const [message, setMessage] = useState('');
  const [liked, setLiked] = useState(false);

  const created = new Date(post.created_at);
  const formattedCreated = created.toDateString();

  useEffect(() => {
    const fetchLiked = async () => {
      const liked = await checkLike(post.id);

      setLiked(liked);
    }

    if (user && user.is_seeker) {
      fetchLiked();
    }
  }, [user, post.id])

  const handleComment = async () => {
    try {
      if (!message) {
        toast.error("Comment cannot be empty");
        return
      }

      await createComment(post.id, message)

      window.location.reload();
    } catch {
      console.log("Failed to comment");
    }
  }

  const handleLike = async () => {
    try {
      await like(post.id);
      setLiked(true);
    } catch {
      console.log("Unable to like post");
    }
  }

  const handleUnlike = async () => {
    try {
      await unlike(post.id);
      setLiked(false);
    } catch {
      console.log("Unable to unlike post");
    }
  }

  return (
    <Card>
      <Text>{formattedCreated}</Text>
      <Text className='mt-2'>{post.message}</Text>
      {user && user.is_seeker ? <Button className='mt-2' variant='light' icon={HandThumbUpIcon} color={liked ? 'emerald' : 'stone'} onClick={liked ? handleUnlike : handleLike}/> : <></>}
      <Divider/>
      <div className='flex flex-col gap-2'>
        {post.comments.length > 0 ? (
          <>
            {post.comments.map((comment) => {
              const created = new Date(comment.created_at);
              const formattedCreated = created.toDateString();

              return (
                <div key={comment.id}>
                  <Title>{comment.user_name}</Title>
                  <Text>{formattedCreated}</Text>
                  <Text className='mt-2'>{comment.message}</Text>
                </div>
              )
            })}
          </>
        ) : (
          <Text>No comments yet!</Text>
        )}
      </div>
      <Divider/>
      <Flex className='mt-4'>
        <TextInput value={message} onChange={(e) => setMessage(e.target.value)} disabled={user === undefined}/>
        <Button className='ml-2' onClick={handleComment} disabled={user === undefined}>Comment</Button>
      </Flex>
    </Card>
  );
}