import { Card, Metric, Subtitle } from "@tremor/react";

import { MainLayout } from "../components/MainLayout";
import { ApplicationTable } from "../components/ApplicationTable";

export default function Applications({ user }) {

  return (
    <MainLayout user={user}>
      <Metric>Applications</Metric>
      <Subtitle>View and manage your {user.is_seeker ? '' : "shelter's"} applications.</Subtitle>
      <Card className='mt-6'>
        <ApplicationTable user={user} />
      </Card>
    </MainLayout>
  );
}