import { useState, useEffect } from "react";
import { Metric, Grid, Title, Text, Card, Textarea, NumberInput, Divider, Button, Flex, TabPanels, TabPanel, TabList, Tab, TabGroup } from "@tremor/react";
import { useLocation } from "react-router-dom";

import { MainLayout } from "../components/MainLayout";
import { ImageCarousel } from "../components/ImageCarousel";
import { getUser } from "../api/account/getUser";
import { listReview } from "../api/review/listReview";
import { createReview } from "../api/review/createReview";
import { createNotification } from "../api/notification/createNotification";
import { listPost } from "../api/blog/listPost";
import { Post } from "../components/Post";

const images = [
  "https://cdn.discordapp.com/attachments/861479282915803137/1161312110668697671/IMG_8758.jpg?ex=6537d72f&is=6525622f&hm=c0af13dd925c558fff9b24f2a7b351935fd67a53a591f56538aa1ac376c3798c&",
]

export default function ShelterDetails({ user }) {
  const location = useLocation();

  const [shelter, setShelter] = useState({});
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchShelter = async () => {
      try {
        const shelter = await getUser(location.state.shelterId);
        const reviews = await listReview(location.state.shelterId);

        setShelter(shelter);
        setReviews(reviews);
      } catch {
        console.log("Couldn't get shelter details");
      }
    }

    const fetchPosts = async () => {
      try {
        const posts = await listPost(location.state.shelterId);

        posts.sort((a, b) => {
          const timeA = new Date(a.created_at);
          const timeB = new Date(b.created_at);
          
          return timeB - timeA;
        });

        setPosts(posts)
      } catch {
        console.log("Unable to get posts")
      }
    }

    fetchShelter();
    fetchPosts();
  }, [location.state.shelterId])

  const handlePost = async () => {
    try {
      const review = {
        shelter: location.state.shelterId,
        message: message,
        rating: rating,
      }

      const newNotification = {
        user: shelter.id,
        message: `${user.name} posted a review for your shelter.`,
        model_type: "Shelter",
        model_id: shelter.id
      }

      await createReview(review);
      await createNotification(newNotification)
      window.location.reload();
    } catch {
      console.log("Couldn't post review");
    }
  }

  return (
    <MainLayout user={user}>
      <Grid numItemsMd={2} className="mt-6 gap-6">
        <div className='flex flex-col justify-center'>
          <ImageCarousel images={images} />
        </div>
        <div className='flex flex-col justify-center'>
          <Metric>We are</Metric>
          <Metric>{shelter.name}</Metric>
          <Title className='mt-6'>{shelter.bio}</Title>
        </div>
      </Grid>
      <TabGroup className='mt-6'>
        <TabList>
          <Tab>Reviews</Tab>
          <Tab>Blog</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {user && user.is_seeker ? (
              <Card className='mt-6'>
                <Title>Create a Review</Title>
                <Divider/>
                <Title>Rating</Title>
                <NumberInput className='mt-2' value={rating} onValueChange={(rating)  => setRating(rating)} min={0} max={5} />
                <Title className='mt-2'>Review</Title>
                <Textarea className='mt-2' value={message} onChange={(e) => setMessage(e.target.value)} />
                <Divider/>
                <Flex justifyContent='end' alignItems='center'>
                  <Button onClick={handlePost}>Post</Button>
                </Flex>
              </Card>
            ) : (
              <></>
            )}
            {reviews.map((review) => {
              return (
                <Card className='mt-4' key={review.id}>
                  <Title>{review.reviewer_name}</Title>
                  <Text className='mt-2'>{review.message}</Text>
                </Card>
              )
            })}
          </TabPanel>
          <TabPanel>
            <div className='flex flex-col gap-4 mt-6'>
              {posts.map((post) => {
                return (
                  <Post user={user} post={post} key={post.id}/>
                )
              })}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </MainLayout>
  );
}