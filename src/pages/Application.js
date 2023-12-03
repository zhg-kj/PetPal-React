import { Card, Divider, Metric, Subtitle, Button, Flex, Title, Textarea, Badge } from "@tremor/react";
import { useLocation, useNavigate } from "react-router-dom";

import { MainLayout } from "../components/MainLayout";
import Chat from "../components/Chat";
import { updateApplication } from "../api/application/updateApplication";

const colors = {
  "Pending": "orange",
  "Rejected": "rose",
  "Accepted": "emerald",
};

export default function Application({ user }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAccept = async () => {
    try {
      const application = {
        pet: location.state.application.pet,
        answer_1: location.state.application.answer_1,
        answer_2: location.state.application.answer_2,
        answer_3: location.state.application.answer_3,
        status: "Accepted"
      }

      await updateApplication(location.state.application.id, application);
      navigate('/applications');
      window.location.reload();
    } catch {

    }
  }

  const handleReject = async () => {
    try {
      const application = {
        pet: location.state.application.pet,
        answer_1: location.state.application.answer_1,
        answer_2: location.state.application.answer_2,
        answer_3: location.state.application.answer_3,
        status: "Rejected"
      }

      await updateApplication(location.state.application.id, application);
      navigate('/applications');
      window.location.reload();
    } catch {
      
    }
  }

  return (
    <MainLayout user={user}>
      <Metric>Application for {location.state.application.pet_name}</Metric>
      <Subtitle>View and manage this application.</Subtitle>
      <Badge color={colors[location.state.application.status]} size="xs">
        {location.state.application.status}
      </Badge>
      <Card className='mt-6'>
        <Title>Do you currently have any other pets? If so, please provide details (species, breed, age).</Title>
        <Textarea className='mt-2' disabled value={location.state.application.answer_1} />
        <Title className='mt-2'>What have you done to prepare for a new pet? (Research? Bought equipment?) Please specify.</Title>
        <Textarea className='mt-2' disabled value={location.state.application.answer_2} />
        <Title className='mt-2'>Have you ever surrendered a pet to a shelter or rescue organization? If yes, please explain why.</Title>
        <Textarea  className='mt-2'disabled value={location.state.application.answer_3} />
        {!user.is_seeker ? (
          <>
            <Divider/>
            <Flex justifyContent='end' alignItems='center' className='gap-2'>
              <Button size="xs" variant="secondary" color='emerald' onClick={handleAccept} disabled={location.state.application.status === "Accepted"}>
                Accept
              </Button>
              <Button size="xs" variant="secondary" color='rose' onClick={handleReject} disabled={location.state.application.status === "Rejected"}>
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
        <Chat applicationId={location.state.application.id} user={user} />
      </Card>
    </MainLayout>
  );
}