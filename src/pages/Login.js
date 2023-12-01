import { useState } from "react";
import { Metric, TextInput, Card, Title, Button, Flex } from "@tremor/react";

import { MainLayout } from "../components/MainLayout";

export default function Login({ user }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {

    } catch {
      
    }
  }

  return (
    <MainLayout user={user}>
      <Flex justifyContent='center' alignItems='center'>
        <Card>
          <Metric>Login</Metric>
          <Title className='mt-4'>Username</Title>
          <TextInput className='mt-2' onChange={(e) => setUsername(e.target.value)} />
          <Title className='mt-2'>Password</Title>
          <TextInput className='mt-2' onChange={(e) => setPassword(e.target.value)} />
          <Button className='mt-6' onClick={handleLogin}>Login</Button>
        </Card>
      </Flex>
    </MainLayout>
  );
}