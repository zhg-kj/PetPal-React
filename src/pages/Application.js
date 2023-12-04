import { Card, Divider, Metric, Subtitle, Button, Flex, Title, Textarea, Badge } from "@tremor/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { MainLayout } from "../components/MainLayout";
import Chat from "../components/Chat";
import { updateApplication } from "../api/application/updateApplication";
import { listApplication } from "../api/application/listApplication";

const colors = {
  "Pending": "orange",
  "Rejected": "rose",
  "Accepted": "emerald",
};

export default function Application({ user }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [application, setApplication] = useState({});

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const app = await listApplication(location.state.applicationId);

        setApplication(app[0]);
      } catch {
        console.log("Unable to fetch application");
      }
    }

    fetchApplication();
  }, [location.state.applicationId])

  const handleAccept = async () => {
    try {
      const app = {
        pet: application.pet,
        answer_1: application.answer_1,
        answer_2: application.answer_2,
        answer_3: application.answer_3,
        status: "Accepted"
      }

      await updateApplication(application.id, app);
      navigate('/applications');
      window.location.reload();
    } catch {
      console.log("Unable to accept application.");
    }
  }

  const handleReject = async () => {
    try {
      const app = {
        pet: application.pet,
        answer_1: application.answer_1,
        answer_2: application.answer_2,
        answer_3: application.answer_3,
        status: "Rejected"
      }

      await updateApplication(application.id, app);
      navigate('/applications');
      window.location.reload();
    } catch {
      console.log("Unable to reject application.");
    }
  }

  return (
    <MainLayout user={user}>
      <Metric>Application for {application.pet_name}</Metric>
      <Subtitle>View and manage this application.</Subtitle>
      <Badge color={colors[application.status]} size="xs">
        {application.status}
      </Badge>
      <Card className='mt-6'>
        <Title>Do you currently have any other pets? If so, please provide details (species, breed, age).</Title>
        <Textarea className='mt-2' disabled value={application.answer_1} />
        <Title className='mt-2'>What have you done to prepare for a new pet? (Research? Bought equipment?) Please specify.</Title>
        <Textarea className='mt-2' disabled value={application.answer_2} />
        <Title className='mt-2'>Have you ever surrendered a pet to a shelter or rescue organization? If yes, please explain why.</Title>
        <Textarea  className='mt-2'disabled value={application.answer_3} />
        {!user.is_seeker ? (
          <>
            <Divider/>
            <Flex justifyContent='end' alignItems='center' className='gap-2'>
              <Button size="xs" variant="secondary" color='emerald' onClick={handleAccept} disabled={application.status === "Accepted"}>
                Accept
              </Button>
              <Button size="xs" variant="secondary" color='rose' onClick={handleReject} disabled={application.status === "Rejected"}>
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
        <Chat application={application} user={user} />
      </Card>
    </MainLayout>
  );
}