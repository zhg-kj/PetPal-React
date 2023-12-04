import { Metric, Grid, Title, Button, Flex, Card, Subtitle, TabGroup, TabList, TabPanels, Tab, TabPanel, Text } from "@tremor/react";
import { useLocation, useNavigate } from "react-router-dom";

import { MainLayout } from "../components/MainLayout";
import { ImageCarousel } from "../components/ImageCarousel";

const states = {
  "Waitlisted": {color: "orange", title: "is preparing to leave.", instruction: "This pet has been waitlisted for adoption."},
  "Adopted": {color: "rose", title: "has found their home.", instruction: "Don't worry! There are still plenty of pets waiting for you."},
  "Available": {color: "emerald", title: "is still waiting for their new home.", instruction: "Interested in adopting? Click adopt and fill in an application!"},
};

export default function PetDetails({ user }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <MainLayout user={user}>
      <Grid numItemsMd={2} className="mt-6 gap-6">
        <div className='flex flex-col justify-center'>
          <Metric>Hi I'm</Metric>
          <Metric>{location.state.pet.name}</Metric>
          <Title className='mt-6'>Once, I roamed the streets alone, a forgotten soul in search of warmth and love. Then, a kind hand reached out, leading me to a place called a "shelter." They called me Charlie.</Title>
          <Title className='mt-3'>I'm an explorer at heart, loving the feel of grass beneath my paws and the wind in my fur. I adore belly rubs, ear scratches, and playtime with squeaky toys. But what I cherish most is companionship—a loving friend to share my days with.</Title>
          <Title className='mt-3'>As I wait for a forever family, my eyes brim with hope, longing for that special connection to mend my heart. I may have started as a stray, but now, I'm a dog eager to find my home and fill it with love.</Title>
          <Flex justifyContent='end' alignItems='center' className='mt-6 gap-6'>
            <Button variant='light' onClick={() => navigate('/shelter', {state: {shelterId: location.state.pet.shelter}})}>View Shelter</Button>
            <Button variant='primary' onClick={() => navigate('/adopt', {state: {pet: location.state.pet}})} disabled={user === undefined || location.state.pet.status !== 'Available'}>Adopt</Button>
          </Flex>
          <Card className='mt-6 flex flex-col' decoration='top' decorationColor={states[location.state.pet.status].color}>
            <div>
              <Title>{location.state.pet.name} {states[location.state.pet.status].title}</Title>
              <Subtitle>{states[location.state.pet.status].instruction}</Subtitle>
            </div>
          </Card>
        </div>
        <div className='flex flex-col justify-center'>
          <ImageCarousel images={[location.state.pet.image1, location.state.pet.image2]} />
        </div>
      </Grid>
      <Metric className='mt-6'>Details</Metric>
      <TabGroup className='mt-6'>
        <TabList>
          <Tab>Medical History</Tab>
          <Tab>Behavior</Tab>
          <Tab>Special Needs</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>{location.state.pet.medical_history}</Text>
          </TabPanel>
          <TabPanel>
            <Text>{location.state.pet.behavior}</Text>
          </TabPanel>
          <TabPanel>
            <Text>{location.state.pet.needs}</Text>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </MainLayout>
  );
}