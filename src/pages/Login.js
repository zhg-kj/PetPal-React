import { useState } from "react";
import { Metric, TextInput, Card, Title, Button, Flex } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { MainLayout } from "../components/MainLayout";
import { login } from "../api/account/login";

export default function Login({ user }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(username, password);
      navigate('/');
      window.location.reload();
    } catch {
      toast.error('Failed to login: invalid credentials.');
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
          <TextInput className='mt-2' onChange={(e) => setPassword(e.target.value)} type='password'/>
          <Flex className='mt-6' justifyContent='end' alignItems='center'>
            <Button onClick={() => navigate('/auth/register')} variant='light'>Register</Button>
            <Button className='ml-4' onClick={handleLogin}>Login</Button>
          </Flex>
        </Card>
      </Flex>
    </MainLayout>
  );
}