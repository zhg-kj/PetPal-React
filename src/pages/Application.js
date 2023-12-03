import { Card, Divider, Metric, Subtitle, Button, Flex, Title, Textarea } from "@tremor/react";
import { useLocation } from "react-router-dom";

import { MainLayout } from "../components/MainLayout";
import Chat from "../components/Chat";

export default function Application({ user }) {
  const location = useLocation();

  const handleAccept = () => {

  }

  const handleReject = () => {
    
  }

  return (
    <MainLayout user={user}>
      <Metric>Application for {location.state.application.name}</Metric>
      <Subtitle>View and manage this application.</Subtitle>
      <Card className='mt-6'>
        <Title>Do you currently have any other pets? If so, please provide details (species, breed, age).</Title>
        <Textarea className='mt-2' disabled/>
        <Title className='mt-2'>What have you done to prepare for a new pet? (Research? Bought equipment?) Please specify.</Title>
        <Textarea className='mt-2' disabled/>
        <Title className='mt-2'>Have you ever surrendered a pet to a shelter or rescue organization? If yes, please explain why.</Title>
        <Textarea  className='mt-2'disabled/>
        {!user.is_seeker ? (
          <>
            <Divider/>
            <Flex justifyContent='end' alignItems='center'>
              <Button className='ml-2' size="xs" variant="secondary" color='emerald' onClick={handleAccept}>
                Accept
              </Button>
              <Button className='ml-2' size="xs" variant="secondary" color='rose' onClick={handleReject}>
                Reject
              </Button>
            </Flex>
          </>
        ) : (
          <></>
        )}
      </Card>
      <Metric className='mt-6'>Chat</Metric>
      <Subtitle>Your conversation with the {user.is_seeker ? 'shelter' : 'applicant'}.</Subtitle>
      <Card className='mt-6'>
        <Chat user={user} />
      </Card>
    </MainLayout>
  );
}