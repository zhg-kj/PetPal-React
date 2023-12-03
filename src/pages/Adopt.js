import { useState } from "react";
import { Card, Divider, Flex, Metric, Subtitle, Textarea, Title, Button } from "@tremor/react";
import { useLocation, useNavigate } from "react-router-dom";

import { MainLayout } from "../components/MainLayout";
import { createApplication } from "../api/application/createApplication";

export default function Adopt({ user }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [a1, setA1] = useState('');
  const [a2, setA2] = useState('');
  const [a3, setA3] = useState('');

  const handleSubmit = async () => {
    try {
      const application = {
        pet: location.state.pet.id,
        answer_1: a1,
        answer_2: a2,
        answer_3: a3
      }

      await createApplication(application);
      navigate(-1);
    } catch {
      console.log("Couldn't submit application.");
    }
  }

  return (
    <MainLayout user={user}>
      <Metric>Adopt {location.state.pet.name}</Metric>
      <Subtitle>Fill in an application to adopt a new friend!</Subtitle>
      <Card className='mt-6'>
        <Title>Do you currently have any other pets? If so, please provide details (species, breed, age).</Title>
        <Textarea className='mt-2' onChange={(e) => setA1(e.target.value)}/>
        <Title className='mt-2'>What have you done to prepare for a new pet? (Research? Bought equipment?) Please specify.</Title>
        <Textarea className='mt-2' onChange={(e) => setA2(e.target.value)}/>
        <Title className='mt-2'>Have you ever surrendered a pet to a shelter or rescue organization? If yes, please explain why.</Title>
        <Textarea  className='mt-2'onChange={(e) => setA3(e.target.value)}/>
        <Divider/>
        <Flex justifyContent='end' alignItems='center'>
          <Button onClick={handleSubmit}>Submit</Button>
        </Flex>
      </Card>
    </MainLayout>
  );
}