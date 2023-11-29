import { Card, Metric, Subtitle } from "@tremor/react";

import { MainLayout } from "../components/MainLayout";
import { ApplicationTable } from "../components/ApplicationTable";

export default function Applications({ user }) {

  return (
    <MainLayout user={user}>
      <Metric>Applications</Metric>
      <Subtitle>View your pet application history.</Subtitle>
      <Card className='mt-6'>
        <ApplicationTable user={user} />
      </Card>
    </MainLayout>
  );
}