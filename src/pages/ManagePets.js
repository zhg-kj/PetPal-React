import { Metric, Subtitle, Card } from "@tremor/react";

import { MainLayout } from "../components/MainLayout";
import { PetTable } from "../components/PetTable";

export default function ManagePets({ user }) {

  return (
    <MainLayout user={user}>
      <Metric>Manage Pets</Metric>
      <Subtitle>Manage your shelter's pets.</Subtitle>
      <Card className='mt-6'>
        <PetTable user={user} />
      </Card>
    </MainLayout>
  );
}