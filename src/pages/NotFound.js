import { Title } from "@tremor/react";

import { MainLayout } from "../components/MainLayout"

export const NotFound = ({ user }) => {
  return (
    <MainLayout use={user}>
      <Title>The page you are looking for does not exist...</Title>
    </MainLayout>
  );
}