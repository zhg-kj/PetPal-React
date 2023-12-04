import { useState } from "react";
import { Metric, TextInput, Card, Title, Button, Flex, Select, SelectItem } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { MainLayout } from "../components/MainLayout";
import { register } from "../api/account/register";

export default function Register({ user }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleRegister = async () => {
    try {
      if (password !== passwordCheck) {
        toast.error("Passwords do not match");
        return
      } else if (!username || !password || !name || !type) {
        toast.error("Please fill in all fields");
        return
      }

      const newUser = {
        username,
        password,
        name,
        is_seeker: type === "Seeker",
      }

      await register(newUser);
      navigate('/auth/login');
    } catch (error) {
      if (error.response.data.username) {
        toast.error("Failed to register: Username is taken")
        return
      }

      toast.error("Failed to register");
    }
  }

  return (
    <MainLayout user={user}>
      <Flex justifyContent='center' alignItems='center'>
        <Card>
          <Metric>Register</Metric>
          <Title className='mt-4'>Username</Title>
          <TextInput className='mt-2' onChange={(e) => setUsername(e.target.value)} />
          <Title className='mt-2'>Password</Title>
          <TextInput className='mt-2' type='password' onChange={(e) => setPassword(e.target.value)} />
          <TextInput className='mt-2' type='password' onChange={(e) => setPasswordCheck(e.target.value)} />
          <Title className='mt-2'>Name</Title>
          <TextInput className='mt-2' onChange={(e) => setName(e.target.value)} />
          <Title className='mt-2'>Type</Title>
          <Select className='mt-2' enableClear={false} value={type} defaultValue='Seeker' onValueChange={(type) => setType(type)}>
            <SelectItem value='Seeker'>Pet Seeker</SelectItem>
            <SelectItem value='Shelter'>Pet Shelter</SelectItem>
          </Select>
          <Flex className='mt-6' justifyContent='end' alignItems='center'>
            <Button onClick={() => navigate('/auth/login')} variant='light'>Login</Button>
            <Button className='ml-4' onClick={handleRegister}>Register</Button>
          </Flex>
        </Card>
      </Flex>
    </MainLayout>
  );
}