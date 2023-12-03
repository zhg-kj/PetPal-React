import { Metric, Subtitle, Card, Button } from "@tremor/react";

import { MainLayout } from "../components/MainLayout";
import { PetTable } from "../components/PetTable";
import { useNavigate } from "react-router-dom";

export default function ManagePets({ user }) {
  const navigate = useNavigate()

  return (
    <MainLayout user={user}>
      <Metric>Manage Pets</Metric>
      <Subtitle>Manage your shelter's pets.</Subtitle>
      <Button className='mt-6' onClick={() => navigate('/pet/add')}>Add Pet</Button>
      <Card className='mt-4'>
        <PetTable user={user} />
      </Card>
    </MainLayout>
  );
}